import './productitem.component.scss';

export const ProductItemComponent = ({product:{ mark, model, price, valuecolor, serie, size, description, thunbd ,count}}) => {
    return (
        <>
            <div className="cardCartShop">
                <div className="cardCartShop__group-content d-flex">
                    <img className="cardCartShop__img" src={thunbd} />
                    <div className="d-flex-fd-col w-100 p-l2">
                        <div className="cardCartShop__group dflex-jc-btw ai-center">
                            <h2 className="cardCartShop__title"> {mark}</h2>
                            <h3> {model} </h3>
                        </div>
                        <div className="cardCartShop__group dflex-jc-btw ai-center">
                            <h3> Size: ${size} </h3>
                            <p className="cardCartShop__color">{valuecolor}</p>
                        </div>
                        <div>
                            <div className="cardCartShop__group dflex-jc-btw ai-center">
                                <p className="cardCartShop__price">${price}</p>
                                <p className="cardCartShop__price"> {count} </p>
                            </div>
                            <button className="cardCartShop__btnDelete" >Remove</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

