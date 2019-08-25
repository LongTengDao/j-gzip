
declare module '.Object.assign' { export default Object.assign; }
declare module '.Object.create' { export default create;
	function create<P extends object | null, D extends TypedPropertyDescriptorMap<object> | void> (proto :P,    descriptorMap? :D) :object & ( D extends TypedPropertyDescriptorMap<infer O> ? O : object ) & ( P extends object ? { [K in keyof P] :P[K] } : object );
	type TypedPropertyDescriptorMap<O> = { [K in keyof O] :TypedPropertyDescriptor<O[K]> };
}
declare module '.Object.defineProperty' { export default Object.defineProperty; }
declare module '.Object.freeze' { export default Object.freeze; }
declare module '.Object.prototype.hasOwnProperty' { export default Object.prototype.hasOwnProperty; }
declare module '.Object.seal' { export default Object.seal; }

declare module '.Promise' { export default Promise; }

declare module '.Symbol.toStringTag?' { export default Symbol.toStringTag; }

declare module '.default' { export default Default;
	function Default<Exports extends Readonly<{ [key :string] :any, default? :Module<Exports> }>> (exports :Exports) :Module<Exports>;
	function Default<Statics extends Readonly<{ [key :string] :any, default? :ModuleFunction<Statics, Main> }>, Main extends Callable | Newable | Callable & Newable> (main :Main, statics :Statics) :ModuleFunction<Statics, Main>;
	type Module<Exports> = Readonly<Exports & { default :Module<Exports> }>;
	type ModuleFunction<Statics, Main> = Readonly<Statics & { default :ModuleFunction<Statics, Main> }> & Main;
	type Callable = (...args :any) => any;
	type Newable = { new (...args :any) :any };
}

declare module '.null' { export default NULL;
	const NULL :{
		new<ValueType> () :NULL<ValueType>,
		new () :object,
		<_ extends never, ObjectType extends object> (object :ObjectType) :ObjectType,
		<ValueType> (object :object) :NULL<ValueType>,
	};
	type NULL<ValueType> = {
		[key :string] :undefined | ValueType,
		toString? :ValueType,
		toLocaleString? :ValueType,
		valueOf? :ValueType,
		hasOwnProperty? :ValueType,
		isPrototypeOf? :ValueType,
		propertyIsEnumerable? :ValueType,
		__defineGetter__? :ValueType,
		__defineSetter__? :ValueType,
		__lookupGetter__? :ValueType,
		__lookupSetter__? :ValueType,
		__proto__? :ValueType,
		constructor? :ValueType,
	};
}
declare module '.null.prototype' { export default NULL;
	const NULL :object | null;
}
