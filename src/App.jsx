
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import BasketComponent from './pages/basket/basket.component';
import HomeComponent from './pages/home/home.component';
import ProductIdComponent from './pages/product-id/product-id.component';
import UserComponent from './pages/user/user.component';
import { ProductProvider } from './provider/product.provider';
import PrivateRoute from './route/private-route';
import { HeaderComponent } from './shared/component/header/header.component';
function App() {
    return (
        <>
            <ProductProvider>
                <BrowserRouter>
                    <HeaderComponent />
                    <Routes>
                        <Route path='' element={< HomeComponent />} />
                        <Route path='basket' element={<BasketComponent />} />
                        <Route path='user/*' element={<PrivateRoute><UserComponent/></PrivateRoute>} />
                        <Route path='product'>
                            <Route path=':id' element={<ProductIdComponent/>}/>
                        </Route>
                        <Route path='/*' element={<Navigate to="" />} />
                    </Routes>
                </BrowserRouter>
            </ProductProvider>
        </>
    );
}

export default App;