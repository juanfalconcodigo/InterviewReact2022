import './login.component.scss';
import { useFormik } from 'formik';
import { Navigate, useLocation } from 'react-router-dom';
import { rootContext } from '../../provider/root.provider';
import { useContext } from 'react';
const LoginComponent = () => {
    const { userInfo, setUserInfo } = useContext(rootContext);
    const { state } = useLocation();
    const validate = ({ email, password }) => {
        const errors = {};
        if (email.length === 0) {
            errors.email = "El correo es requerido";
        }
        if (password.length === 0) {
            errors.password = "La contraseña es requerida";
        }
        return errors;
    }

    const { values, handleSubmit, handleChange, handleBlur, errors, touched } = useFormik({

        initialValues: {
            email: '',
            password: ''
        },
        validate,
        onSubmit: (values) => {
            console.log('[Form values]', values);
            setUserInfo((state) => ({ data:{...values}, isAuthenticate: true }));
        }
    });

    if (userInfo.isAuthenticate === true) {
        return <Navigate to={state?.from || '/'} replace />
    }


    return (
        <>
            <div className='login-container'>
                <div className='login-container__image-content'>
                    <img className='login-container__image' src="https://blog.g4marketingonline.com/hs-fs/hubfs/images/Blog/Cu%C3%A1l-es-el-coste-de-una-tienda-online.png?width=1000&name=Cu%C3%A1l-es-el-coste-de-una-tienda-online.png" alt="Business background" />
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
