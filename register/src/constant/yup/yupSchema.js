import * as yup from 'yup';

export const RegisterSchema = yup.object().shape({
  email: yup
    .string()
    .email('Lütfen geçerli bir eposta adresi giriniz.')
    .required('Eposta alanı zorunludur.'),
  userName: yup
    .string()
    .min(5, 'Kullanıcı adı 5 karakterden az olamaz')
    .max(18, 'ŞKullanıcı adı 18  karakterden fazla olamaz')
    .required('Kullanıcı alanı zorunludur.'),
  password: yup
    .string()
    .typeError('Her karakteri kullanamazsın. Sadece @/./+/-/_ kullanabilirsin')
    .min(8, 'Şifreniz 8 karakterden az olamaz')
    .max(32, 'Şifreniz 32 karakterden fazla olamaz')
    .required('Şifre alanı zorunludur.'),
  confirmPassword: yup 
    .string()
    .oneOf([yup.ref('password')],'Şifreler uyuşmuyor')
    .required('şifre tekrar alanı zorunludur')
});