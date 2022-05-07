// interface Cachorro {
//     nome: string;
//     idade: number;
//     parqueFavorito?: string;
// }

// type CachorroSomenteLeitura = {
//     +readonly [K in keyof Cachorro]-?: Cachorro[K]; // + indica que é somente leitura (não pode ser alterado) na interface
// }

// class MeuCachorro implements CachorroSomenteLeitura {
//     idade: number;
//     nome: string;
//     parqueFavorito: string;

//     constructor(nome: string, idade: number) {
//         this.nome = nome;
//         this.idade = idade;
//     }
// }

// const cao = new MeuCachorro('Bobby', 3);

// cao.idade = 8;

// console.log(cao);


//------------------------------------------------------------
// interface IUsuario {
//     id: string;
//     email: string;
//     //cargo?: 'gerente' | 'coordenador' | 'supervisor' | 'funcionario; // transfrma em um objeto opcional é não precisa criar uma segunda interface
// }

// interface IAdmin extends IUsuario {
//     cargo: 'gerente' | 'coordenador' | 'supervisor';
// }

// function redirecione(usuario: IUsuario | IAdmin) {

//     if ('cargo' in usuario) {
//         // redirecione para a área de administrador
//     }

//     // redicionar para a área de usuario
// }



//------------------------------------------------------------------
// const input = document.getElementById('input') as HTMLInputElement;

// input.addEventListener('input', (event) => {

//     const i = event.currentTarget as HTMLInputElement;
//     console.log(i.value);

// });
//--------------------------------------------------------------------

// function adicionaApendiceALista<T>(array: T[], valor: T){ // T é o tipo de dado é costuma ser o padrao
//     return array.map(() => valor)
// }

// adicionaApendiceALista(["A","B","C"], "D")


//---------------------------------------------------------------------------------------
// function soma(a: number, b: number) {
//     return a + b;
// }

//----------------------------------------------------

// // Interfaces

// interface IAnimal {
//     nome: string;
//     tipo: 'terrestre' | 'aquatico';
//     domestico: boolean;
// }

// interface IFelinos extends IAnimal {
//     visaoNoturna: boolean;
// }

// interface ICAnino extends IAnimal {
//     porte: 'pequeno' | 'medio' | 'grande';
// }

// type IDomestico = IFelinos | ICAnino;

// const animal: IDomestico = {
//     nome: 'Cachorro',
//     tipo: 'terrestre',
//     domestico: true,
//     porte: 'medio'
// }


// // Types