import './login.component.scss';
import { useFormik } from 'formik';
import { Navigate, useLocation } from 'react-router-dom';
import { rootContext } from '../../provider/root.provider';
import { useContext } from 'react';
import * as yup from 'yup';
const loginschema = yup.object({
    email: yup.string().email('Formato inválido').required('Ingrese su correo'),
    password: yup.string().required('Ingrese contraseña')
})
const LoginComponent = () => {
    const { state } = useLocation();
    const { userInfo, setUserInfo } = useContext(rootContext);

    const submitLogin = (values) => {
        console.log('[Form values]', values);
        setUserInfo((state) => ({ data: { ...values }, isAuthenticate: true }));
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
                <div className='login-container__image'>
                    <img src="" alt="" />
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
