import { useContext } from 'react';
import { rootContext } from '../../../../provider/root.provider';
import './product.component.scss';

export const ProductComponent = ({ product: { brand, model, price, serie, size, description, photo, idProduct } }) => {
    const { setProduct, setShoppingCart, shoppingCart } = useContext(rootContext);
    const setInfoProduct = (product) => {
        console.log('[PRODUCT]', product);
        setProduct(() => product);
    }

    const addShoppingCart = (product) => {
        console.log('[PRODUCT CART]', product);
        const isExists = shoppingCart.some((e, i) => e.idProduct === product.idProduct);
        if (isExists) {
            const findProductId = shoppingCart.findIndex((e) => e.idProduct === product.idProduct);
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
                <h3 className="card__title">{brand}</h3>
                <p className="card__model card__modelx"> {model} </p>
                <img className="card__img" src={photo} />
                <div className="dflex-ai-center-jc-btw">
                    <p className="card__model card__price">Price: S/ {price} un </p>
                </div>
                <div className="dflex-ai-center-jc-btw">
                    <p className="card__model card__serie"> {serie} </p>
                    <p className="card__model card__size"> {size} </p>
                </div>
                <p className="card__description"> {description} </p>


                <button className="card__button addView" onClick={() => setInfoProduct({ brand, model, price, serie, size, description, photo, idProduct })}>View</button>
                <button className="card__button addShop" onClick={() => addShoppingCart({ brand, model, price, serie, size, description, photo, idProduct })}>
                    Add Cart
                </button>
            </div>
        </>
    );
}

