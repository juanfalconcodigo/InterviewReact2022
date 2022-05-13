import { useContext } from 'react';
import { productContext } from '../../../../provider/product.provider';
import './product.component.scss';

export const ProductComponent = ({ product: { mark, model, price, valuecolor, serie, size, description, thunbd, id } }) => {
    const { setProduct, setShoppingCart, shoppingCart } = useContext(productContext);
    const setInfoProduct = (product) => {
        console.log('[PRODUCT]', product);
        setProduct(() => product);
    }

    const addShoppingCart = (product) => {
        console.log('[PRODUCT CART]', product);
        const isExists = shoppingCart.some((e, i) => e.id === product.id);
        if (isExists) {
            const findProductId = shoppingCart.findIndex((e) => e.id === product.id);
            const newProducts = shoppingCart;
            newProducts[findProductId].count += 1;
            newProducts[findProductId].price += product.price;
            setShoppingCart((state) => [...newProducts]);
        } else {
            setShoppingCart((state) => [...state, { ...product, count: 1 }]);
        }
    }

    return (
        <>

            <div className="card">
                <div className="card__color"></div>
                <h3 className="card__title">${mark}</h3>
                <p className="card__model card__modelx"> {model} </p>
                <img className="card__img" src={thunbd} />
                <div className="dflex-ai-center-jc-btw">
                    <p className="card__model card__price">Price: ${price} </p>
                    <p className="card__valueColor">{valuecolor} </p>
                </div>
                <div className="dflex-ai-center-jc-btw">
                    <p className="card__model card__serie"> {serie} </p>
                    <p className="card__model card__size"> {size} </p>
                </div>
                <p className="card__description"> {description} </p>


                <button className="card__button addView" onClick={() => setInfoProduct({ mark, model, price, valuecolor, serie, size, description, thunbd, id })}>View</button>
                <button className="card__button addShop" onClick={() => addShoppingCart({ mark, model, price, valuecolor, serie, size, description, thunbd, id })}>
                    Add Cart
                </button>
            </div>
        </>
    );
}

