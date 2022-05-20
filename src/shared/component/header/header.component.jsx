import { useContext, useEffect, useRef } from 'react';
import { ProductItemComponent } from '../product-item/product-item.component';
import { rootContext } from '../../../provider/root.provider';
import './header.component.scss';
import { NavLink, useNavigate } from 'react-router-dom';

export const HeaderComponent = () => {
    const overlayShopCart = useRef(null);
    const shopProductCartBody = useRef(null);
    const showUserConfig = useRef(null);
    const userOverlay = useRef(null);
    const { shoppingCart, userInfo, setUserInfo } = useContext(rootContext);
    const navigate = useNavigate();

    const showShopCart = () => {
        shopProductCartBody.current.classList.toggle("hiddenShopCart");
        overlayShopCart.current.classList.toggle("activeOverlay");
    }

    const hiddenShopCart = () => {
        shopProductCartBody.current.classList.toggle("hiddenShopCart");
        overlayShopCart.current.classList.remove("activeOverlay");
    }

    const showUser = () => {
        showUserConfig.current.classList.add("showUser");
        userOverlay.current.classList.add("userOverlay");
    };
    const hiddenShowUSer = () => {
        showUserConfig.current.classList.remove("showUser");
        userOverlay.current.classList.remove("userOverlay");
    };

    const redirectRoute = (to) => {
        navigate(to);
    }

    const logout = () => {
        setUserInfo((state) => ({ data: null, isAuthenticate: false }));
        redirectRoute('/');
    }

    return (
        <>
            <header className="header">
                <div className="header__container container">
                    <div>
                        <h1 className="dflex-ai-center header__heading-title">
                            <i className="bx bx-run header__heading-title-icon"></i>
                            <span><NavLink to="/" style={{ color: 'black' }}>Shoes</NavLink></span>
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
                        <i className="bx bx-user header__user-user" onClick={showUser}></i>
                        <div className="header__user-wrap" ref={showUserConfig}>
                            <div className="header__user-content">
                                <div className="header__user-option" onClick={() => redirectRoute('user')}>
                                    <span className="header__user-option-title">Perfil de usuario</span>
                                    <i className='bx bx-user-circle' ></i>
                                </div>
                                {(!(userInfo.isAuthenticate) && (
                                    <div className="header__user-option" onClick={() => redirectRoute('login')}>
                                        <span className="header__user-option-title">Login</span>
                                        <i className='bx bx-log-in'></i>
                                    </div>))}
                                {(userInfo.isAuthenticate) && (
                                    <div className="header__user-option" onClick={logout}>
                                        <span className="header__user-option-title">Cerrar sesión</span>
                                        <i className="bx bx-log-out header__user-option-icon"></i>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div
                            className="header__user-overlay"
                            ref={userOverlay}
                            onClick={hiddenShowUSer}
                        ></div>

                        <div ref={shopProductCartBody} className="header__shopProductCart">
                            <div className="header__shopProductCartView">
                                {/* aqui se recorre */}
                                {shoppingCart.map((e, i) => {
                                    return (
                                        <ProductItemComponent key={e.id} product={e} />
                                    )
                                })}
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '25px' }}>
                                    <button className='cardCartShop__btnDelete' onClick={() => redirectRoute('basket')}>Ver bolsa de compras</button>
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

