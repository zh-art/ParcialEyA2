// Juan David Bohorquez Grimaldo - 2201732

// Clase cola

class Queue {
  constructor() {
    this.items = [];
  }

  // Metodos de la cola

  enqueue(element) {
    this.items.push(element);
  }

  // Aquí simplemente añadí un condicional de que si se desea eliminar un elemento de la cola la cual -
  // - No contiene elementos, pues retornará un mensaje por consola que avisará de que no tiene elementos.

  dequeue() {
    if (this.isEmpty()) {
      return "La cola esta vacia";
    }
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

// Funcion de invertir cola

function invertirCola(originalQueue) {
  const invertedQueue = new Queue();
  const tempStack = [];

  while (!originalQueue.isEmpty()) {
    tempStack.push(originalQueue.dequeue());
  }

  while (tempStack.length > 0) {
    invertedQueue.enqueue(tempStack.pop());
  }

  return invertedQueue;
}

// Con esto hago uso del aplicativo

const colaOriginal = new Queue();
colaOriginal.enqueue(1.5); // 1
colaOriginal.enqueue(2.7); // 2
colaOriginal.enqueue(3.5); // 3

console.log("Cola original:", colaOriginal.items);

// Cola invertida

const colaInvertida = invertirCola(colaOriginal);

// Impresion de cola invertida

console.log("Cola invertida:", colaInvertida.items);
