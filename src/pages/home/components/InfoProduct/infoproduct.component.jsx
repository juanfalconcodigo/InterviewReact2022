import { useContext } from 'react';
import { productProvider } from '../../providers/product.provider';
import './infoproduct.component.scss';


export const InfoProductComponent = () => {
    const {productSelected} = useContext(productProvider);
    return (
        <>
         <aside className="asideView">
                <div id="cardProduct"></div>
                <code>{JSON.stringify(productSelected,null,2)}</code>
            </aside>
        </>
    );
}
