import { useContext, useEffect, useRef } from 'react';
import { ProductItemComponent } from '../ProductItem/productitem.component';
import { productContext } from '../Provider/product.provider';
import './header.component.scss';

export const HeaderComponent = () => {
    const overlayShopCart = useRef(null);
    const shopProductCartBody = useRef(null);
    const {shoppingCart} = useContext(productContext);

    const showShopCart = () => {
        shopProductCartBody.current.classList.toggle("hiddenShopCart");
        overlayShopCart.current.classList.toggle("activeOverlay");
    }

    const hiddenShopCart = () => {
        shopProductCartBody.current.classList.toggle("hiddenShopCart");
        overlayShopCart.current.classList.remove("activeOverlay");
    }

    return (
        <>
            <header className="header">
                <div className="header__container container">
                    <a href="#">
                        <h1 className="dflex-ai-center header__heading-title">
                            <i className="bx bx-run header__heading-title-icon"></i>
                            <span>Shoes</span>
                        </h1>
                    </a>
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
                                {shoppingCart.map((e,i)=>{
                                    return(
                                        <ProductItemComponent key={e.id} product={e}/>
                                    )
                                })}
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

