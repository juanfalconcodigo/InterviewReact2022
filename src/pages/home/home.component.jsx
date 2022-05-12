import { HeaderComponent } from './components/Header/header.component';
import { InfoProductComponent } from './components/InfoProduct/infoproduct.component';
import { NavbarComponent } from './components/Navbar/navbar.component';
import { ProductComponent } from './components/Product/product.component';
import './home.component.scss';
import { ProductProvider } from './providers/product.provider';
const products =
  [
    {
      mark: "Jordan",
      model: "Retro 12",
      id: "1",
      size: "40",
      color: "#222",
      valuecolor: "Black",
      serie: "Boys' Grade School",
      price: 150.0,
      thunbd:
        "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/82f0238b-2f37-4907-ad06-f98d9d7cf673/air-jordan-12-playoffs-ct8013-006-release-date.jpg",
      description:
        "The Nike React Infinity Run Flyknit 2 continues to help keep you running. A refreshed Flyknit upper uses Flywire technology for support and breathability where you need it. Higher foam provides soft responsiveness and long-lasting comfort, plus a wider forefoot helps lessen the chance of stress-related injuries. It`s still one of our most tested shoes, designed to help you feel the potential when your foot hits the pavement",
    },
    {
      mark: "Jordan",
      model: "Stay Loyal",
      id: "2",
      size: "40",
      color: "#222",
      valuecolor: "Black",
      serie: "Men's",
      price: 110.0,
      thunbd:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/404dccc4-339c-448c-a235-be42fb32ad91/jordan-stay-loyal-big-kids-shoe-CtMXtw.png",
      description:
        "The Nike React Infinity Run Flyknit 2 continues to help keep you running. A refreshed Flyknit upper uses Flywire technology for support and breathability where you need it. Higher foam provides soft responsiveness and long-lasting comfort, plus a wider forefoot helps lessen the chance of stress-related injuries. It`s still one of our most tested shoes, designed to help you feel the potential when your foot hits the pavement",
    },
    {
      mark: "Jordan",
      model: "Retro 1 High OG",
      id: "3",
      size: "42",
      color: "#4B7BE5",
      valuecolor: "Blue",
      serie: "Boys' Preschool  ",
      price: 80.0,
      thunbd:
        "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/8e01e221-8c4e-4964-97aa-828474f5fe3f/air-jordan-1-elevate-low-se-womens-shoes-1W20F7.png",
      description:
        "The Nike React Infinity Run Flyknit 2 continues to help keep you running. A refreshed Flyknit upper uses Flywire technology for support and breathability where you need it. Higher foam provides soft responsiveness and long-lasting comfort, plus a wider forefoot helps lessen the chance of stress-related injuries. It`s still one of our most tested shoes, designed to help you feel the potential when your foot hits the pavement",
    },
    {
      mark: "Jordan",
      model: " 6 Retro",
      id: "4",
      size: "42",
      color: "#4B7BE5",
      valuecolor: "Blue",
      serie: "Men's  ",
      price: 120.0,
      thunbd:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/f77ca995-23c8-485c-ad3e-6dab23b33039/air-jordan-6-retro-big-kids-shoes-ZVTrzL.png",
      description:
        "The Nike React Infinity Run Flyknit 2 continues to help keep you running. A refreshed Flyknit upper uses Flywire technology for support and breathability where you need it. Higher foam provides soft responsiveness and long-lasting comfort, plus a wider forefoot helps lessen the chance of stress-related injuries. It`s still one of our most tested shoes, designed to help you feel the potential when your foot hits the pavement",
    }
  ];


const HomeComponent = () => {



  return (
    <>
      <HeaderComponent />
      <div style={{ display: 'flex' }}>
        <ProductProvider>
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
          <InfoProductComponent />

        </ProductProvider>

      </div>
    </>
  );
}

export default HomeComponent;
