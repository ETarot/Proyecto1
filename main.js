const Cadena = (obj) => {
  let a = Object.keys(obj);
  let b = Object.values(obj);
  let c = [a, b];
  return c;
};

console.log(Cadena({ a: 1, b: 2, c: 3 }));
console.log(Cadena({ a: "Apple", b: "Microsoft", c: "Google" }));
console.log(Cadena({ key1: true, key2: false, key3: undefined }));