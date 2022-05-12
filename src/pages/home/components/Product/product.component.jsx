import { useContext } from 'react';
import { productProvider } from '../../providers/product.provider';
import './product.component.scss';

export const ProductComponent = ({product:{mark,model,price,valuecolor,serie,size,description,thunbd}}) => {
    const {setProductSelected} = useContext(productProvider);
    const addShoppingCart=(product)=>{
         console.log('[ADD] ',product);
         setProductSelected((state)=>product);
    }
    return (
        <>

            <div className="card">
                <div  className="card__color"></div>
                <h3 className="card__title">{mark}</h3>
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


                <button className="card__button addView">View</button>
                <button className="card__button addShop" onClick={()=>addShoppingCart({mark,model,price,valuecolor,serie,size,description,thunbd})}>
                    Add Cart
                </button>
            </div>
        </>
    );
}

