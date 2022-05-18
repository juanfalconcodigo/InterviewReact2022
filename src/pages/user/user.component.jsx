import { Navigate, Route, Routes,NavLink } from 'react-router-dom';
import { InfoComponent } from './info/info.component';
import { WishListComponent } from './wish-list/wish-list.component';
import './user.component.scss';


export default function UserComponent() {
    return (
        <>
            <h2>UserComponent</h2>
            <h3><NavLink to="info">Ir a Info</NavLink></h3>
            <h3><NavLink to="wishlist">Ir a lista de deseos</NavLink></h3>
            <Routes>
                <Route path='info' element={<InfoComponent/>}/>
                <Route path='wishlist' element={<WishListComponent/>}/>
                <Route path='/*' element={<Navigate replace to="info"/>}/>
            </Routes>
        </>
    );
}