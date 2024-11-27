export class Validator {
    constructor() {
        this.regexNomeCompleto = /^[A-Z][a-z]+\s[A-Z][a-z]+$/;
        this.regexNumeros = /^-?\d+$/;
        this.regexDecimais = /^-?\d+(\.\d+)?$/;
        this.regexCPF = /^[0-9]{11}$/;
        this.regexCNPJ = /^[0-9]{14}$/;
        this.regexRG = /^\d{9,12}$/;
        this.regexSenha = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        this.regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.regexData = /^\d{2}\/\d{2}\/\d{4}$/;
        this.regexHora = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
        this.regexVazio = /^\s*\S+\s*$/;
    }
  
    validarNomeCompleto(nomeCompleto) {
        return this.regexNomeCompleto.test(nomeCompleto);
    }

    validarNumero(numero) {
        numero = numero.replace(/[^\dA-Z]/g, '');
        return this.regexNumeros.test(numero);
    }

    validarVazio(decimais) {
        return this.regexDecimais.test(decimais);
    }

    validarCPF(cpf) {
        cpf = cpf.replace(/[^\dA-Z]/g, '');
        return this.regexCPF.test(cpf);
    }

    validarCPF(cnpj) {
        cnpj = cnpj.replace(/[^\dA-Z]/g, '');
        return this.regexCNPJ.test(cnpj);
    }
  
    validarRG(rg) {
        rg = rg.replace(/[^\dA-Z]/g, '');
        return this.regexRG.test(rg);
    }

    validarSenha(senha) {
        return this.regexSenha.test(senha);
    }
  
    validarEmail(email) {
        return this.regexEmail.test(email);
    }
  
    validarData(data) {
        return this.regexData.test(data);
    }
  
    validarHora(hora) {
        return this.regexHora.test(hora);
    }

    validarVazio(valor) {
        return this.regexVazio.test(valor);
    }
}

/* HTML
    <script defer src="validator.js" type="module"></script>
*/

/*  JAVASCRIPT
    import { Validator } from './validator.js';

    const field = document.getElementById('field');
    const btn = document.getElementById('btn');

    btn.addEventListener('click', () => {
        const value = field.value;
        const validator = new Validator();

        if (validator.validarNumero(value)) {
            alert('ok');
        } else {
            alert('error');
        }
    });
*/