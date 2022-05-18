import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../../data/products';
import './product-id.component.scss';

export default function ProductIdComponent() {
    const { id } = useParams();
    const [dataInfo, setDataInfo] = useState({ product: {}, loading: true });
    useEffect(() => {
        console.log('ProductIdComponent', typeof id, id);
        const newProduct = getProduct(id);
        console.log('[GETPRODUCT]',newProduct);
        setDataInfo((state) => ({ loading: false, product: { ...newProduct } }));
    }, []);

    const getProduct = (id) => {
        return products.find((e) => e.id === id);
    }
    return (
        <>
            <h2>ProductIdComponent</h2>
            {dataInfo.loading && <h3>Loading.....</h3>}
            {(!dataInfo.loading && !dataInfo.product.hasOwnProperty('model')) && <h3>Not exists product</h3>}
            {(!dataInfo.loading && dataInfo.product.hasOwnProperty('model')) && <code>
                {JSON.stringify(dataInfo.product, null, 2)}
            </code>}
        </>
    );
}
