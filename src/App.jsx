
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import BasketComponent from './pages/basket/basket.component';
import HomeComponent from './pages/home/home.component';
import { ProductProvider } from './provider/product.provider';
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
                        <Route path='/*' element={<Navigate to="" />} />
                    </Routes>
                </BrowserRouter>
            </ProductProvider>
        </>
    );
}

export default App;