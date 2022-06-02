import { useEffect, useState } from 'react';
import { InfoproductComponent } from './components/InfoProduct/infoproduct.component';
import { NavbarComponent } from './components/Navbar/navbar.component';
import { ProductComponent } from './components/Product/product.component';
import './home.component.scss';
import axios from 'axios';


const HomeComponent = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
    return () => {

    };
  }, []);

  const getProducts = () => {
    axios.get('http://localhost:4301/v1/api/product').then((data) => {
      setProducts((state) => [...data.data['products']]);
    }).catch((error) => {
      console.log('[ERROR CALL API PRODUCTS]', error);
    });
  }

  return (
    <>
      <div style={{ display: 'flex' }}>
        <NavbarComponent />
        <main className="main-shop-home">
          <section className="main-shop-home__home">
            {products.map((product, i) => {
              return (
                <ProductComponent key={i} product={product} />
              )
            })}
          </section>
        </main>
        <InfoproductComponent />
      </div>
    </>
  );
}

export default HomeComponent;
