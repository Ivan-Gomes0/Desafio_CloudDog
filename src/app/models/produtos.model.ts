/*export class Produtos{
    constructor(
        public id: number,
        public nome: String,
        public categoria: String,
        public preco: String,
        public descricao: String
    ) {

    }
} */
export class Produtos{
    public id: number;
    public nome: String;
    public categoria: String;
    public preco: String;
    public descricao: String;

    constructor(id:number, nome:String, categoria:String, preco:String, descricao:String) {
        this.id = id;
        this.nome = nome;
        this.categoria = categoria;
        this.preco = preco;
        this.descricao = descricao;

    }
}

export class Categoria{
    public id: number;
    public categoria: String;

    constructor(id: number, categoria:String) {
        this.id = id;
        this.categoria = categoria;
    }
}
