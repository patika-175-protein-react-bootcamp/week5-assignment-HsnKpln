import React from 'react'
import CrescentIcon from '../constant/svg/CrescentIcon'
import '../styles/registerPage.css'
import {Formik} from 'formik';
import { RegisterSchema } from '../constant/yup/yupSchema';
import SunIcon from '../constant/svg/SunIcon';

function RegisterPage(props) {
  console.log("register",props)
  return (
    <div className={props.darkMode ? 'darkRegister' : 'register'}>
      <div className='crescent'
      onClick={()=>props.toggleDarkMode()}
      >
        {props.darkMode ? <SunIcon/> : <CrescentIcon width={24} height={28} />}
      </div>
      <div className='registerContainer'>
      <div className='registerTitle'>Kayıt</div>
      <div className='subline'></div>
      <div className='formContainer'>
        <Formik
         initialValues={{
          fistName : "",
          surname :"",
          email:"",
          userName: "",
          password: "",
          confirmPassword: "",
          checkBox:[],
         }}
         onSubmit={auth =>{
          console.log(auth);
          alert("Kayıt başarıyla eklenmiştir.")
        }}
         validationSchema={RegisterSchema}
        >
          {
            ({values,handleChange,handleSubmit,handleBlur,errors,touched}) =>
            <form onSubmit={handleSubmit}>
          <div className='nameSurname divInput'>
            <div className='nameblock'>
            <label>İSİM</label>
            <input type="text" name='fistName' placeholder='İsmini gir'
             value={values.firtName}
             onChange={handleChange}
             onBlur={handleBlur} 
             />
            { errors.fistName && touched.fistName && <span>{errors.fistName}</span>}
            </div>
            <div  className='surnameblock'>
            <label>SOYİSİM</label>
            <input type="text" name='surname' placeholder='Soyismini gir' value={values.surname} onChange={handleChange} onBlur={handleBlur}  />
            { errors.surname && touched.surname &&  <span>{errors.surname}</span>}
            </div>
          </div>
          <div className='email divInput'>
            <label className='required requiredStar'>EMAİL </label>
            <input type="text" name='email' placeholder='Emailini gir' value={values.email} onChange={handleChange} onBlur={handleBlur} />
            { errors.email && touched.email &&  <span>{errors.email}</span>}
          </div>
          <div className='userName divInput'>
            <label className='requiredStar'>KULLANICI ADI</label>
            <input type="text" name='userName' placeholder='Kullanıcı adını gir' value={values.userName} onChange={handleChange} onBlur={handleBlur} />
            { errors.userName && touched.userName &&  <span>{errors.userName}</span>}
          </div>
          <div className='password divInput'>
            <label className='requiredStar'>ŞİFRE</label>
            <input type="password" name='password' placeholder='Şifreni gir' value={values.password} onChange={handleChange} onBlur={handleBlur} />
            { errors.password && touched.password &&  <span>{errors.password}</span>}
          </div>
          <div className='confirmPassword divInput'>
            <label className='requiredStar'>ŞİFRE TEKRARI</label>
            <input type="password" name='confirmPassword' placeholder='Şifreni tekrar gir' 
            value={values.confirmPassword} 
            onChange={handleChange}
            onBlur={handleBlur} 
            />
            { errors.confirmPassword && touched.confirmPassword &&  <span>{errors.confirmPassword}</span>}
          </div>
          <div className='checkBoxContainer'>
            <input type='checkBox' name='checkBox' className='checkBoxx'/>
            <p className='contract'>Sözleşmeyi kabul ediyorum</p>
          </div>
          <button className={props.darkMode ? 'darkRegisterBtn' : 'registerBtn'} type='submit'>KAYIT OL</button>
        </form>
          }
        </Formik>
        
      </div>
      </div>
    </div>
  )
}

export default RegisterPage