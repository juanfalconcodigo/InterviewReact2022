import { products } from '../../data/data';
import { InfoproductComponent } from './components/InfoProduct/infoproduct.component';
import { NavbarComponent } from './components/Navbar/navbar.component';
import { ProductComponent } from './components/Product/product.component';
import './home.component.scss';

const HomeComponent = () => {

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
