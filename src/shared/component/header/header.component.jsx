import { useContext, useEffect, useRef } from 'react';
import { ProductItemComponent } from '../product-item/product-item.component';
import { productContext } from '../../../provider/product.provider';
import './header.component.scss';
import { NavLink, useNavigate } from 'react-router-dom';

export const HeaderComponent = () => {
    const overlayShopCart = useRef(null);
    const shopProductCartBody = useRef(null);
    const { shoppingCart } = useContext(productContext);
    const navigate=useNavigate();

    const showShopCart = () => {
        shopProductCartBody.current.classList.toggle("hiddenShopCart");
        overlayShopCart.current.classList.toggle("activeOverlay");
    }

    const hiddenShopCart = () => {
        shopProductCartBody.current.classList.toggle("hiddenShopCart");
        overlayShopCart.current.classList.remove("activeOverlay");
    }

    const redirectRoute=(to)=>{
        navigate(to);
    }

    return (
        <>
            <header className="header">
                <div className="header__container container">
                    <div>
                        <h1 className="dflex-ai-center header__heading-title">
                            <i className="bx bx-run header__heading-title-icon"></i>
                            <span><NavLink to="/" style={{color:'black'}}>Shoes</NavLink></span>
                            {/* <span><NavLink to="/" className={({isActive})=>isActive?'is-active-route':''}>Shoes</NavLink></span> */}
                        </h1>
                    </div>
                    <div className="header__search">
                        <i className="bx bx-search-alt header__search-icon"></i>
                        <input
                            type="text"
                            className="header__search-input"
                            placeholder="Search Shoes..."
                            id="searchShoes"
                        />
                    </div>
                    <div className="header__user">
                        <i
                            className="bx bx-shopping-bag header__user-shop" onClick={showShopCart}
                        ></i>
                        <i className="bx bx-user header__user-user"></i>

                        <div ref={shopProductCartBody} className="header__shopProductCart">
                            <div className="header__shopProductCartView">
                                {/* aqui se recorre */}
                                {shoppingCart.map((e, i) => {
                                    return (
                                        <ProductItemComponent key={e.id} product={e} />
                                    )
                                })}
                                <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'25px'}}>
                                    <button className='cardCartShop__btnDelete' onClick={()=>redirectRoute('basket')}>Ver bolsa de compras</button>
                                </div>
                            </div>

                        </div>
                        <div ref={overlayShopCart} onClick={hiddenShopCart}
                            className="header__shopProductCart-overlay"
                        ></div>
                    </div>
                </div>
            </header>
        </>
    );
}

