class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}
class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    setHead(node) {
        if(!this.head) {
            this.head = node;
            this.tail = node;
            return;
        }
        this.insertBefore(this.head, node);
    }

    setTail(node) {
        if(!this.tail) {
            this.setHead(node);
            return;
        }
        this.insertAfter(this.tail, node);
    }

    insertBefore(node, nodeToInsert) {
        nodeToInsert.prev = node.prev;
        nodeToInsert.next = node;
        if (node.prev == null) {
            this.head = nodeToInsert;
        } else {
            node.prev.next = nodeToInsert;
        }
        node.prev = nodeToInsert;
    }

    insertAfter(node, nodeToInsert) {
        nodeToInsert.prev = node;
        nodeToInsert.next = node.next;
        if (node.next == null) {
            this.tail = nodeToInsert;
        } else {
            node.next.prev = nodeToInsert;
        }
        node.next = nodeToInsert;
    }

    insertAtPosition(position, nodeToInsert) {
        if (position === 1) {
            this.setHead(nodeToInsert);
            return;
        }
        let node = this.head;
        let currentPosition = 1;
        while (node && currentPosition++ !== position) {
            node = node.next;
        }
        if (node) {
            this.insertBefore(node, nodeToInsert);
        } else {
            this.setTail(nodeToInsert);
        }
    }

    removeNodeWithValue(value) {
        let currentNode = this.head;
        while (currentNode) {
            let nodeToRemove = currentNode;
            if (currentNode.value === value) {
                this.removeNode(nodeToRemove);
            }
            currentNode = currentNode.next;
        }
    }

    removeNode(node) {
        if (node === this.head) {
            this.head = this.head.next;
        }
        if (node === this.tail) {
            this.tail = this.tail.prev;
        }
        if (node.prev) {
            node.prev.next = node.next;
        }
        if (node.next) {
            node.next.prev = node.prev;
        }
        node.prev = null;
        node.next = null;
    }

    containsValue(value) {
        let node = this.head;
        while (node) {
            if (node.value === value) {
                return true;
            }
            node = node.next;
        }
        return false;
    }
}


module.exports = {Node, DoubleLinkedList};
