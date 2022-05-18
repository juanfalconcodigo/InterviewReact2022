import { NavLink, Outlet, Route, Routes } from 'react-router-dom';
import ProfileComponent from './profile/profile.component';
import WishlistComponent from './wish-list/wish-list.component';
import './user.component.scss';

const UserComponent = () => {
    return (
        <>
            <h1>User component</h1>
            <div>
                <NavLink to='profile'>Perfil</NavLink>
            </div>
            <div>
                <NavLink to='wishlist'>Lista de deseos</NavLink>
            </div>
            <Outlet/>
        </>
    );
}

export default UserComponent;
