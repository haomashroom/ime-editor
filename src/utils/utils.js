import Cookies from 'js-cookie'
import config from '@/config'
//通用setCookie add by dake
export const setCookie  = (key,value) => {
    Cookies.set(key, value, {expires: config.cookieExpires || 1, path: config.cookiePath||'' });
}

//通用getCookie add by dake
export const getCookie  = (key) => {
    const value = Cookies.get(key);
    if (value) return value;
    else return "";
}

export const localSave = (key, value) => {
    setCookie(key, value)
}

export const localRead = (key) => {
    return getCookie(key) || ''
}