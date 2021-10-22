<h1 align="center">Double Linked List Dot Js</h3>

<!-- ABOUT THE PROJECT -->
## About The Project

Efficient and useful implementation of the double linked list structure

## Getting Started

```bash
yarn add double-linked-list-dot-js # if you use yarn

npm install --save double-linked-list-dot-js # if you use npm
```

## Usage
```js
// Basic usage example
import DoubleLinkedList from 'double-linked-list-dot-js';

let list = new DoubleLinkedList();

let head = new Node(2);
list.setHead(head);
console.log(list);
/* DoubleLinkedList {
  head: Node { value: 2, prev: null, next: null },
  tail: Node { value: 2, prev: null, next: null }
}
} */
list.insertAtPosition(2, new Node(5));
list.insertAtPosition(3, new Node(6));
list.insertAtPosition(4, new Node(7));
list.insertAtPosition(5, new Node(9));
console.log(list);
/*
DoubleLinkedList {
  head: <ref *1> Node {
    value: 2,
    prev: null,
    next: Node { value: 5, prev: [Circular *1], next: [Node] }
  },
  tail: <ref *2> Node {
    value: 9,
    prev: Node { value: 7, prev: [Node], next: [Circular *2] },
    next: null
  }*/
console.log(list.containsValue(2)); //true
console.log(list.containsValue(5)); //true
console.log(list.containsValue(6)); //true
console.log(list.containsValue(7)); //true
console.log(list.containsValue(9)); //true
//remove node by reference
list.removeNode(head);
console.log(list);
/*DoubleLinkedList {
  head: <ref *1> Node {
    value: 5,
    prev: null,
    next: Node { value: 6, prev: [Circular *1], next: [Node] }
  },
  tail: <ref *2> Node {
    value: 9,
    prev: Node { value: 7, prev: [Node], next: [Circular *2] },
    next: null
  }
}*/
//remove node by value
list.removeNodeWithValue(7);
console.log(list);
/*DoubleLinkedList {
  head: <ref *1> Node {
    value: 5,
    prev: null,
    next: Node { value: 6, prev: [Circular *1], next: [Node] }
  },
  tail: <ref *2> Node {
    value: 9,
    prev: Node { value: 6, prev: [Node], next: [Circular *2] },
    next: null
  }
}*/
```