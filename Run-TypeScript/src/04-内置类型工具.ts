// Partial<T>  该工具能够构造一个新类型, 并将实际类型参数T中的所有属性变为可选属性

interface A {
    x: number,
    y: number,
}
type T = Partial<A> // {x?: number, y?: number}

const _a: T = { x: 0 }


// Required<T> 该工具能够构造一个新类型, 并将实际类型参数T中的所有属性变为必选属性

interface B {
    name?: string,
    age?: number,
}

type Q = Required<B> // {name: string, age: number}

const _b: Q = { name: '小明', age: 18 }

// Readonly<T>  该工具能够构造一个新类型, 并将实际类型参数T中的所有属性变为只读属性

interface C {
    name: string,
    age: number,
}

type W = Readonly<C>

const _c: W = { name: '小明', age: 18 }
// _c.name = '小红'  -> 无法为“name”赋值，因为它是只读属性。