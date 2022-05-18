
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import DashboardRoutesComponent from './dashboard.routes';
import LoginComponent from './pages/login/login.component';
import { ProductProvider } from './provider/product.provider';
function App() {
    return (
        <>
            <ProductProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path='login' element={<LoginComponent />} />
                        <Route path='/*' element={<DashboardRoutesComponent />} />
                    </Routes>
                </BrowserRouter>
            </ProductProvider>
        </>
    );
}

export default App;