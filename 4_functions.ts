function add(a: number, b: number): number {
	return a + b;
}

function toUpperCase(str: string): string {
	return str.trim().toUpperCase();
}

//=====================
// Перегрузка для функций
interface MyPosition {
	x: number | undefined;
	y: number | undefined;
}

interface MyPositionWithDefault extends MyPosition {
	default: string;
}

function position(): MyPosition;
function position(a: number): MyPosition | MyPositionWithDefault;
function position(a: number, b: number): MyPosition;

function position(a?: number, b?: number) {
	if (!a && !b) {
		return { x: undefined, y: undefined };
	}

	if (a && !b) {
		return { x: a, y: undefined, default: a.toString() };
	}

	return { x: a, y: b };
}

console.log("empty: ", position());
console.log("one param: ", position(42));
console.log("two params: ", position(10, 15));
