import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import BasketComponent from '../pages/basket/basket.component';
import HomeComponent from '../pages/home/home.component';
import ProfileComponent from '../pages/user/profile/profile.component';
import WishlistComponent from '../pages/user/wish-list/wish-list.component';
import UserComponent from '../pages/user/user.component';
import { HeaderComponent } from '../shared/component/header/header.component';
import { PrivateRoute } from './private.routes';
import jwt_decode from "jwt-decode";
import { useContext, useEffect } from 'react';
import { rootContext } from '../provider/root.provider';

const DashboardRoutesComponent = () => {
    const { setUserInfo } = useContext(rootContext);

    const verifyToken = () => {
        const token = localStorage.getItem('TOKEN');
        console.log('VALIDATE TOKEN')
        if (!token) {
            localStorage.removeItem('TOKEN');
            setUserInfo((state) => ({ data: null, isAuthenticate: false }));
            return;
        }
        try {
            const data = jwt_decode(token);
            console.log('[DATA TOKEN]', data,data.user);
            setUserInfo((state) => ({ data: { ...data.user }, isAuthenticate: true }));
            return;
        } catch (error) {
            console.log('[ERROR]', error);
            localStorage.removeItem('TOKEN');
            setUserInfo((state) => ({ data: null, isAuthenticate: false }));
            return;
        }
    }

    useEffect(() => {
        verifyToken()
        return () => {
        };
    }, []);
    return (
        <>
            <HeaderComponent />
            <Routes>
                <Route path='' element={< HomeComponent />} />
                <Route path='basket' element={<BasketComponent />} />
                <Route path='user' element={<PrivateRoute><UserComponent /></PrivateRoute>}>
                    <Route path="profile" element={<ProfileComponent />} />
                    <Route path="wishlist" element={<WishlistComponent />} />
                    <Route path="*" element={<Navigate to="profile" />} />
                </Route>
                <Route path='/*' element={<Navigate to="" />} />
            </Routes>
        </>
    );
}

export default DashboardRoutesComponent;
