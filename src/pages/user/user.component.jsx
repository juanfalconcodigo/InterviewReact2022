import { NavLink, Outlet } from 'react-router-dom';
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
            <div>
                <NavLink to='/login'>Login</NavLink>
            </div>
            <Outlet/>
        </>
    );
}

export default UserComponent;
