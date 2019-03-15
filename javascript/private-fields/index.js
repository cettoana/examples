class Example {
  x = 0;

  #y = 1;

  increaseY() {
    this.#y = this.#y + 1;
  }

  getY() {
    return this.#y;
  }
}

const example = new Example();

console.log(example);
// Example { x: 0 }

console.log(Object.getOwnPropertyNames(example));
// [ 'x' ]

console.log(Reflect.ownKeys(example));
// [ 'x' ]

console.log(example.getY());
// 1

example.increaseY();
console.log(example.getY());
// 2
