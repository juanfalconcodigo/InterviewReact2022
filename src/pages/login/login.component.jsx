import './login.component.scss';
import { useFormik } from 'formik';
import { Navigate, useLocation } from 'react-router-dom';
import { rootContext } from '../../provider/root.provider';
import { useContext, useEffect } from 'react';
import * as yup from 'yup';
import axios from 'axios';
import jwt_decode from "jwt-decode";

const loginschema = yup.object({
    email: yup.string().email('Formato inválido').required('Ingrese su correo'),
    password: yup.string().required('Ingrese contraseña')
})
const LoginComponent = () => {
    const { state } = useLocation();
    const { userInfo, setUserInfo } = useContext(rootContext);

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
            console.log('[DATA TOKEN]', data, data.user);
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

    const submitLogin = async (values) => {
        console.log('[Form values]', values);
        try {
            const response = await axios.post('http://localhost:4301/v1/api/user/platform/login', values);
            const data = response.data;
            setUserInfo((state) => ({ data: { ...data.user }, isAuthenticate: true }));
            localStorage.setItem('TOKEN', data.token);
        } catch (error) {
            console.log('[ERROR LOGIN]', error);
            localStorage.removeItem('TOKEN');
        }

    }

    const { values, handleSubmit, handleChange, handleBlur, errors, touched } = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: submitLogin,
        validationSchema: loginschema
    });

    if (userInfo.isAuthenticate) {
        return <Navigate to={state?.from || '/'} replace />;
    }

    return (
        <>
            <div className='login-container'>
                <div className='login-container__content-image'>
                    <img className='login-container__image' src="https://media.revistagq.com/photos/5f3a34b1ec450302028a99a3/3:2/w_1600%2Cc_limit/adidas-zx-4000-4d-i-want-i-can-1.jpg" alt="Adidas new trainers" />
                </div>
                <div className='login-container__form'>
                    <div>
                        <h1 style={{ textDecoration: 'underline', textAlign: 'center' }}>Login</h1>
                        <form onSubmit={handleSubmit} noValidate autoComplete='off'>
                            <div>
                                <label htmlFor="email-id" className='f-16'>Correo:</label>
                                <input type="email" name="email" onChange={handleChange} value={values.email} onBlur={handleBlur} id="email-id" placeholder='Ingrese su correo' className='d-block f-16' />
                                {(touched.email && errors.email) && <span className='is-error'>{errors.email}</span>}
                            </div>
                            <div style={{ marginTop: '10px' }}>
                                <label htmlFor="password-id" className='f-16'>Contraseña:</label>
                                <input type="password" name="password" onChange={handleChange} value={values.password} onBlur={handleBlur} id="password-id" placeholder='Ingrese su contraseña' className='d-block f-16' />
                                {(touched.password && errors.password) && <span className='is-error'>{errors.password}</span>}
                            </div>
                            <button style={{ marginTop: '10px', padding: '10px 0px', cursor: 'pointer' }} type='submit' className='d-block f-16 w-100'>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginComponent;
