export class Validator {
    constructor() {
        this.fullNameRegex = /^[A-Z][a-z]+\s[A-Z][a-z]+$/;
        this.numberRegex = /^-?\d+$/;
        this.decimalRegex = /^-?\d+(\.\d+)?$/;
        this.cpfRegex = /^[0-9]{11}$/;
        this.cnpjRegex = /^[0-9]{14}$/;
        this.rgRegex = /^\d{9,12}$/;
        this.passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        this.emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
        this.timeRegex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
        this.emptyRegex = /^\s*\S+\s*$/;
    }

    validateFullName(fullName) {
        return this.fullNameRegex.test(fullName);
    }

    validateNumber(number) {
        number = number.replace(/[^\dA-Z]/g, '');
        return this.numberRegex.test(number);
    }

    validateDecimal(decimal) {
        return this.decimalRegex.test(decimal);
    }

    validateCPF(cpf) {
        cpf = cpf.replace(/[^\dA-Z]/g, '');
        return this.cpfRegex.test(cpf);
    }

    validateCNPJ(cnpj) {
        cnpj = cnpj.replace(/[^\dA-Z]/g, '');
        return this.cnpjRegex.test(cnpj);
    }

    validateRG(rg) {
        rg = rg.replace(/[^\dA-Z]/g, '');
        return this.rgRegex.test(rg);
    }

    validatePassword(password) {
        return this.passwordRegex.test(password);
    }

    validateEmail(email) {
        return this.emailRegex.test(email);
    }

    validateDate(date) {
        return this.dateRegex.test(date);
    }

    validateTime(time) {
        return this.timeRegex.test(time);
    }

    validateNotEmpty(value) {
        return this.emptyRegex.test(value);
    }
}

/* HTML
<script defer src="validator.js" type="module"></script>
*/

/* JAVASCRIPT
import { Validator } from './validator.js';

const field = document.getElementById('field');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    const value = field.value;
    const validator = new Validator();

    if (validator.validateNumber(value)) {
        alert('ok');
    } else {
        alert('error');
    }
});
*/
