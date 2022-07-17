class Typescript {
	version: string;

	constructor(version: string) {
		this.version = version;
	}

	info(name: string) {
		return `[${name}]: Typescript version is ${this.version}`;
	}
}

class Car {
	readonly model: string;
	readonly numberOfWheels: number = 4;

	constructor(theModel: string) {
		this.model = theModel; //можно перезаписать только внутри конструктора
	}
}

class Car1 {
	readonly numberOfWheels: number = 4;

	constructor(readonly model: string) {}
}

//=======
//Модификаторы полей

class Animal {
	protected voice: string = ""; // данные поля доступны в Animal и во всех классах, которые наследуются от Animal
	public color: string = "black";

	// private перемен или методы доступны только в том классе, в котором определены
	private go() {
		console.log("GO");
	}
}

class Cat extends Animal {
	public setVoice(voice: string): void {
		this.voice = voice;
	}
}

const cat = new Cat();
// cat.voice - ошибка, так как мод protected, можем работать только через ф-ю setVoice
cat.setVoice("test");
console.log(cat.color);

//================
//Абстрактные классы - нужны на этапе разработки, от них можно наследоваться, также есть абстрактыне метода

abstract class Component {
	abstract render(): void;
	abstract info(): string;
}

class AppComponent extends Component {
	render(): void {
		console.log("component on render");
	}
	info(): string {
		return "this is info";
	}
}
