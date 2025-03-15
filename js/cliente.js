"use strict";
var empresa;
(function (empresa) {
    class Cliente extends empresa.Pessoa {
        constructor(codigo) {
            super();
            this.private_saldo = 0;
            this.codigo = codigo;
        }
        get codigo() {
            return this.codigo;
        }
        get saldo() {
            return this.saldo;
        }
        deposita(valor) {
            this.saldo += valor;
        }
        comprar(valorCompra) {
            if (this.saldo >= valorCompra) {
                this.saldo = this.saldo - valorCompra;
                return true;
            }
            else {
                return false;
            }
        }
    }
    empresa.Cliente = Cliente;
})(empresa || (empresa = {}));
