// Juan David Bohorquez Grimaldo - 2201732

// Clase pila

class Stack {
  constructor() {
    this.items = [];
  }

  // Metodos pila

  push(element) {
    this.items.push(element);
  }

  // Aquí hago algo similar con respecto al caso del ejercicio de colas.

  pop() {
    if (this.isEmpty()) {
      return "La pila esta vacia";
    }
    return this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  peek() {
    if (this.isEmpty()) {
      return "La pila esta vacia";
    }
    return this.items[this.items.length - 1];
  }
}

// Funcion para invertir la pila

function invertirPila(originalStack) {
  const invertedStack = new Stack();
  const tempStack = new Stack();

  while (!originalStack.isEmpty()) {
    tempStack.push(originalStack.pop());
  }

  while (!tempStack.isEmpty()) {
    invertedStack.push(tempStack.pop());
  }

  return invertedStack;
}

// Con esto hago uso del aplicativo para ver si funciona

const pilaOriginal = new Stack();
pilaOriginal.push(1.5); //1
pilaOriginal.push(2.7); //2
pilaOriginal.push(3.0); //3 

console.log("Pila original:", pilaOriginal.items);

// Pila invertida

const pilaInvertida = invertirPila(pilaOriginal);

// Impresion de la pila invertida

console.log("Pila invertida:", pilaInvertida.items);
