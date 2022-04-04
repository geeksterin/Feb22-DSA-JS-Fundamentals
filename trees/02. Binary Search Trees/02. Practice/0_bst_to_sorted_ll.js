class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    print() {
        console.log(JSON.stringify(this, null, '  '));
    }
}

let root = new Node(8);
root.left = new Node(4);
root.right = new Node(12);
root.right.left = new Node(10);
root.right.right = new Node(14);
root.left.left = new Node(2);
root.left.right = new Node(6);

root.print();
