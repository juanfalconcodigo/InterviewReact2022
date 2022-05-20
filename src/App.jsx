
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import DashboardRoutesComponent from './dashboard.routes';
import LoginComponent from './pages/login/login.component';
import { RootProvider } from './provider/root.provider';
function App() {
    return (
        <>
            <RootProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path='login' element={<LoginComponent />} />
                        <Route path='/*' element={<DashboardRoutesComponent />} />
                    </Routes>
                </BrowserRouter>
            </RootProvider>
        </>
    );
}

export default App;