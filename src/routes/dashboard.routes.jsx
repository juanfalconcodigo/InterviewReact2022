import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import BasketComponent from '../pages/basket/basket.component';
import HomeComponent from '../pages/home/home.component';
import ProfileComponent from '../pages/user/profile/profile.component';
import WishlistComponent from '../pages/user/wish-list/wish-list.component';
import UserComponent from '../pages/user/user.component';
import { HeaderComponent } from '../shared/component/header/header.component';
import { PrivateRoute } from './private.routes';

const DashboardRoutesComponent = () => {
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