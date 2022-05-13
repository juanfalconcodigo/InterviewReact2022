import { useContext, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { productContext } from '../../../provider/product.provider';
import { ProductItemComponent } from '../product-item/productitem.component';
import './header.component.scss';

export const HeaderComponent = () => {
    const overlayShopCart = useRef(null);
    const shopProductCartBody = useRef(null);
    const { shoppingCart } = useContext(productContext);
    const navigate = useNavigate();

    const showShopCart = () => {
        shopProductCartBody.current.classList.toggle("hiddenShopCart");
        overlayShopCart.current.classList.toggle("activeOverlay");
    }

    const hiddenShopCart = () => {
        shopProductCartBody.current.classList.toggle("hiddenShopCart");
        overlayShopCart.current.classList.remove("activeOverlay");
    }

    const changeLink = (path) => {
        navigate(path);
    }

    return (
        <>
            <header className="header">
                <div className="header__container container">
                    <div>
                        <h1 className="dflex-ai-center header__heading-title">
                            <i className="bx bx-run header__heading-title-icon"></i>
                            <span onClick={() => changeLink('/')}>Shoes</span>
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

