import i18n  from 'i18next';
import languagedetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n.use(languagedetector).use(initReactI18next).init({
    lng: 'en',
    resources: {
        en: {
            translation: {
                'login': 'Login',
                'login-btn': 'Login',
                'forgot-password': 'Forgot your password ?',
                'email': 'Email Address',
                'password': 'Password',
                'hindi': 'हिंदी',
                'english': 'English'
            }
        }, 
        hi: {
            translation: {
                'login': 'लॉग इन',
                'login-btn': 'लॉग इन करें',
                'forgot-password': 'पासवर्ड भूल गए ?',
                'email': 'ईमेल',
                'password': 'पासवर्ड',
                'hindi': 'हिंदी',
                'english': 'English'
            }
        }
    }
})