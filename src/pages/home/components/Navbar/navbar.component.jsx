import './navbar.component.scss'

export const NavbarComponent = () => {
    return (
      <>
        <nav className="navigationShop">
                <div className="navigationShop__dropItems">
                    <button className="navigationShop__dropButton">
                        Marca
                        <i
                            className="bx bx-chevron-down navigationShop__dropButton-arrow"
                        ></i>
                    </button>
                    <div className="navigationShop__dropItems-body" id="listMark">
                        <div className="navigationShop__dropItems-body-item dflex-ai-center">
                            <input
                                type="radio"
                                className="navigationShop__dropItems-checkbox"
                                id="converse"
                                value="Converse"
                            />
                            <label
                                htmlFor="converse"
                                className="navigationShop__dropItems-checkbox-name"
                            >Converse
                            </label>
                        </div>
                        <div className="navigationShop__dropItems-body-item dflex-ai-center">
                            <input
                                type="radio"
                                className="navigationShop__dropItems-checkbox"
                                id="nike"
                                value="Nike"
                            />
                            <label
                                htmlFor="nike"
                                className="navigationShop__dropItems-checkbox-name"
                            >Nike
                            </label>
                        </div>
                        <div className="navigationShop__dropItems-body-item dflex-ai-center">
                            <input
                                type="radio"
                                className="navigationShop__dropItems-checkbox"
                                id="jordan"
                                value="Jordan"
                            />
                            <label
                                htmlFor="jordan"
                                className="navigationShop__dropItems-checkbox-name"
                            >Jordan</label
                            >
                        </div>
                    </div>
                </div>
                <div className="navigationShop__dropItems">
                    <button className="navigationShop__dropButton">
                        Talla
                        <i
                            className="bx bx-chevron-down navigationShop__dropButton-arrow"
                        ></i>
                    </button>
                    <div className="navigationShop__dropItems-body">
                        <div className="navigationShop__dropItems-body-item dflex-ai-center">
                            <input
                                type="radio"
                                className="navigationShop__dropItems-checkbox"
                                id="size36"
                                value="36"
                            />
                            <label
                                htmlFor="size36"
                                className="navigationShop__dropItems-checkbox-name"
                            >Size 36</label
                            >
                        </div>
                        <div className="navigationShop__dropItems-body-item dflex-ai-center">
                            <input
                                type="radio"
                                className="navigationShop__dropItems-checkbox"
                                id="size38"
                                value="38"
                            />
                            <label
                                htmlFor="size38"
                                className="navigationShop__dropItems-checkbox-name"
                            >Size 38</label
                            >
                        </div>
                        <div className="navigationShop__dropItems-body-item dflex-ai-center">
                            <input
                                type="radio"
                                className="navigationShop__dropItems-checkbox"
                                id="size40"
                                value="40"
                            />
                            <label
                                htmlFor="size40"
                                className="navigationShop__dropItems-checkbox-name"
                            >Size 40</label
                            >
                        </div>
                        <div className="navigationShop__dropItems-body-item dflex-ai-center">
                            <input
                                type="radio"
                                className="navigationShop__dropItems-checkbox"
                                id="size41"
                                value="41"
                            />
                            <label
                                htmlFor="size41"
                                className="navigationShop__dropItems-checkbox-name"
                            >Size 41</label
                            >
                        </div>
                        <div className="navigationShop__dropItems-body-item dflex-ai-center">
                            <input
                                type="radio"
                                className="navigationShop__dropItems-checkbox"
                                id="size42"
                                value="42"
                            />
                            <label
                                htmlFor="size42"
                                className="navigationShop__dropItems-checkbox-name"
                            >Size 42</label
                            >
                        </div>
                    </div>
                </div>
                <div className="navigationShop__dropItems">
                    <button className="navigationShop__dropButton">
                        Color
                        <i
                            className="bx bx-chevron-down navigationShop__dropButton-arrow"
                        ></i>
                    </button>
                    <div className="navigationShop__dropItems-body">
                        <input
                            className="navigationShop__colors navigationShop__colors--white"
                            type="radio"
                            id="white"
                            value="White"
                        />

                        <input
                            className="navigationShop__colors navigationShop__colors--black"
                            type="radio"
                            id="black"
                            value="Black"
                        />
                        <input
                            className="navigationShop__colors navigationShop__colors--blue"
                            type="radio"
                            id="blue"
                            value="Blue"
                        />
                    </div>
                </div>
                <div className="navigationShop__dropItems">
                    <button className="navigationShop__dropButtonClean" id="cleanResults">
                        Clean
                        <i className="bx bx-trash navigationShop__dropButtonClean-icon"></i>
                    </button>
                </div>
            </nav></>
    );
}
