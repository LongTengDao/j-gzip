
declare module '.Object.assign' { export default Object.assign; }
declare module '.Object.create' { export default create;
	function create                                                                 (proto :null                  ) :object                                                                                           ;
	function create<                  D extends TypedPropertyDescriptorMap<object>> (proto :null, descriptorMap :D) :object & ( D extends TypedPropertyDescriptorMap<infer O> ? O : never )                           ;
	function create<P extends object                                              > (proto :P                     ) :object &                                                                 { [K in keyof P] :P[K] };
	function create<P extends object, D extends TypedPropertyDescriptorMap<object>> (proto :P,    descriptorMap :D) :object & ( D extends TypedPropertyDescriptorMap<infer O> ? O : never ) & { [K in keyof P] :P[K] };
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
	type Callable = (...args :any[]) => any;
	type Newable = { new (...args :any[]) :any };
}
