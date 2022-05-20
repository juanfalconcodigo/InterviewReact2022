import { useContext } from 'react';
import { rootContext } from '../../../../provider/root.provider';
import './infoproduct.component.scss';


export const InfoproductComponent = () => {
    const { productSelected: product } = useContext(rootContext);
    return (
        <>
            <aside className="asideView">

                {product.hasOwnProperty('thunbd') && (<div className="cardView">
                    <img className="cardView__img" src={product.thunbd} />
                    <div className="cardView__group-content  text-center">
                        <h2 className="cardView__title"> {product.title}</h2>
                        <h3> {product.model} </h3>
                    </div>
                    <p className="cardView__description"> {product.description}</p>
                    <div className="dflex-ai-center-jc-btw cardView__group-content">
                        <h3> Size: {product.size} </h3>
                        <div className="cardView__color">{product.color}</div>
                    </div>
                    <p className="cardView__price">
                        ${product.price}
                    </p>
                </div>)}
                <code>
                    {JSON.stringify(product, null, 2)}
                </code>
            </aside>
        </>
    );
}
