// import { createCookies, getCookie } from '../global/cookies.js';

export function createCookies(cookies) {
    const expirationDate = new Date();
    expirationDate.setFullYear(expirationDate.getFullYear() + 5);
  
    for (const [name, value] of Object.entries(cookies)) {
        document.cookie = `${name}=${value}; expires=${expirationDate.toUTCString()}; path=/`;
    }
}
/* Usage
const cookiesToSet = {
    miniumbook_state: 'SP',
    miniumbook_city: 'São Paulo',
    miniumbook_condominium: 'Condomínio Alphaville'
};
createCookies(cookiesToSet);
*/

export function getCookies(cname) {
    let name = cname + '=';
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') { c = c.substring(1); }
        if (c.indexOf(name) == 0) { return c.substring(name.length, c.length); }
    }
    return '';
}
/* Usage 
getCookie('cookieName");
*/

export function deleteCookies(cookies) {
    const expirationDate = new Date();
    expirationDate.setFullYear(expirationDate.getFullYear() - 1);
  
    for (const name of Object.keys(cookies)) {
        document.cookie = `${name}=; expires=${expirationDate.toUTCString()}; path=/`;
    }
}
/* Usage 
const cookiesToDelete = ['miniumbook_state', 'miniumbook_city', 'miniumbook_condominium'];
deleteCookies(cookiesToDelete);
*/
