interface Rect {
	readonly id: string;
	color?: string; // ? - необязательное поле
	size: {
		width: number;
		height: number;
	};
}

const rect1: Rect = {
	id: "1234",
	size: {
		width: 20,
		height: 30,
	},
	color: "#ccc",
};

const rect2: Rect = {
	id: "12345",
	size: {
		width: 10,
		height: 5,
	},
};

rect2.color = "black";

const rect3 = {} as Rect;
const rect4 = <Rect>{};

// Наследование интерфейсов

interface RectWithArea extends Rect {
	getArea: () => number; //после стрелки указывается тип, который вернет функция
}

const rect5: RectWithArea = {
	id: "123",
	size: {
		width: 20,
		height: 20,
	},
	getArea(): number {
		return this.size.width * this.size.height;
	},
};

//==================

interface IClock {
	time: Date;
	setTime(date: Date): void;
}

class Clock implements IClock {
	time: Date = new Date();
	setTime(date: Date): void {
		this.time = date;
	}
}
