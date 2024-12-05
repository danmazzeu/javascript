// Setup Cookies
const expirationDate = new Date();
const name = 'Daniel';
const lastname = 'Mazzeu';
const date = '20/02/1190';

expirationDate.setFullYear(expirationDate.getFullYear() + 5); // 5 Years
document.cookie = `name=${lastname}; expires=${expirationDate.toUTCString()}; path=/`;
document.cookie = `lastname=${lastname}; expires=${expirationDate.toUTCString()}; path=/`;
document.cookie = `date=${date}; expires=${expirationDate.toUTCString()}; path=/`;

// Get Cookies
function getCookie(cname) {
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

window.onload = function() {
    const cookie = getCookie('cookiename');
  
    if (cookie) {
        alert(cookie);
    }
};
