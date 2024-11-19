class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class List {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
    }
}
(() => {
    const LinkedList = new List(4);
    console.log(LinkedList);
})()