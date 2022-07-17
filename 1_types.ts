const isfetching: boolean = true;
const isLoading: boolean = false;

const int: number = 42;
const float: number = 4.2;
const num: number = 3e10;

const message: string = "Hello Typescript";

const numberArray: number[] = [1, 1, 2, 3, 5, 8];
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8]; //дженерик

const words: string[] = ["Hello", "Typescript"];

//Tuple - массив, состоящий из разных типов данных
const contact: [string, number] = ["Varya", 12364];

//Any
let variable: any = 42;
//...
variable = "New String";
variable = [];

// еслиф ы-я ничего не возвращает, то тип void
function sayMyName(name: string): void {
	console.log(name);
}

sayMyName("Варя");

//Never - когда фун-я возвращает  ошибку и никогда не заканчивает свое выполнение, либо постоянно что-то делает
function throwError(message: string): never {
	throw new Error(message);
}

function infinite(): never {
	while (true) {}
}

//Type - позволяет создавать свои собственные типы через alias
type Login = string;

const login: Login = "admin";
// const login1:Login = 2 - ошибка

type ID = string | number; //или строка или число
const id1: ID = 1234;
const id2: ID = "1234";
// const id3: ID = true - ошибка

type SomeType = string | null | undefined;
