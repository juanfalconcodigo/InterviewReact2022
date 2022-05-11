import './header.component.scss';

export const HeaderComponent = () => {
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
                            className="bx bx-shopping-bag header__user-shop"
                            id="openShopCart"
                        ></i>
                        <i className="bx bx-user header__user-user"></i>

                        <div className="header__shopProductCart">
                            <div className="header__shopProductCartView" id="addShop">
                            </div>
                        </div>
                        <div
                            className="header__shopProductCart-overlay"
                            id="closeViewCart"
                        ></div>
                    </div>
                </div>
            </header>
       </>
    );
}

