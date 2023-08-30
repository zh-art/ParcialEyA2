// Juan David Bohorquez Grimaldo - 2201732

// Creo un nodo con su respectivo constructor

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Implemento el linkedlist

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
  }
}

// Funcion que concatena las listas

function concatenaListasOrdenadas(lista1, lista2) {
  const resultList = new LinkedList();
  let current1 = lista1.head;
  let current2 = lista2.head;

  while (current1 && current2) {
    if (current1.value < current2.value) {
      resultList.append(current1.value);
      current1 = current1.next;
    } else {
      resultList.append(current2.value);
      current2 = current2.next;
    }
  }

  while (current1) {
    resultList.append(current1.value);
    current1 = current1.next;
  }

  while (current2) {
    resultList.append(current2.value);
    current2 = current2.next;
  }

  return resultList;
}

// Crear listas enlazadas

const lista1 = new LinkedList();
lista1.append(1);
lista1.append(3);
lista1.append(5);

const lista2 = new LinkedList();
lista2.append(2);
lista2.append(4);
lista2.append(6);

// Concatenar las listas ordenadas

const listaConcatenada = concatenaListasOrdenadas(lista1, lista2);

// Imprimir la lista concatenada

let current = listaConcatenada.head;
while (current) {
  console.log(current.value);
  current = current.next;
}
