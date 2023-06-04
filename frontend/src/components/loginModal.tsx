import './modal.css';
import React from 'react';
import { Formik } from 'formik';


interface Props {
    isLoginOpen: boolean;
    onLoginClose: () => void;
    successfulLogin: (email: string, password: string) => void;

}



function preventClose(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.stopPropagation();
}

function LoginModal({ isLoginOpen, onLoginClose, successfulLogin}: Props) {
    if (!isLoginOpen) return null;

    return (
        <div className="modal-overlay" onClick={onLoginClose}>
            <div className="modal-content" onClick={preventClose}>
                <h2>Login</h2>
                <div>
                <Formik
       initialValues={{ email: '', password: '' }}
         validate={values => {
              const errors: {email?: string, password?: string} = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                    values.email
                    )
                ) {
                    errors.email = 'Invalid email address';
                }
                if (!values.password) {
                    errors.password = 'Required';
                }
               return errors;

            }}

       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit}>
           <input
             type="email"
             name="email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
           />
           {errors.email && touched.email && errors.email}
           <input
             type="password"
             name="password"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
           />
           {errors.password && touched.password && errors.password}
           <button type="submit" disabled={isSubmitting} onClick={() => {
                successfulLogin(values.email, values.password);
           }}>
             Submit
           </button>
         </form>
       )}
     </Formik>
                </div>
            </div>
        </div>

)
}

export default LoginModal;