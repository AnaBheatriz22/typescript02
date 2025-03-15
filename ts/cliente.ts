namespace empresa{
    export class Cliente extends Pessoa{
        private_codigo:number;
        private_saldo:number = 0;

        constructor(codigo:number){
            super();
            this.codigo = codigo;
        }

        get codigo(){
            return this.codigo;
        }

        get saldo(){
            return this.saldo;
        }

        public deposita (valor:number){
            this.saldo += valor;
        }

        public comprar (valorCompra:number):boolean{
            if(this.saldo >= valorCompra){
                this.saldo = this.saldo - valorCompra;
                return true;
            }else{
                return false;
            }
        }

    }
}