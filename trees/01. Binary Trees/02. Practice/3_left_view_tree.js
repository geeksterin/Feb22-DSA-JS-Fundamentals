function visit(node) {
    console.log(node.data);
}
class BinaryTreeNode {
    constructor() {
        this.data = null;
        this.left = null;
        this.right = null;
    }
}
class BinaryTree {
    constructor(data) {
        this.root = new BinaryTreeNode();
        this.root.data = data;
    }

    addRight(data) {
        let newRight = new BinaryTreeNode();
        newRight.data = data;
        // todo:

    }

    addLeft(data) {
        let newLeft = new BinaryTreeNode();
        newLeft.data = data;
        // todo:
    }
}
function buildBT() {
    let bt = new BinaryTree(1);
    let left1 = new BinaryTreeNode();
    left1.data = 2;
    bt.root.left = left1;

    let right12 = new BinaryTreeNode();
    right12.data = 4;
    left1.right = right12;

    let right2 = new BinaryTreeNode();
    right2.data = 3;
    bt.root.right = right2;

    let left21 = new BinaryTreeNode();
    left21.data = 5;
    right2.left = left21;

    let right22 = new BinaryTreeNode();
    right22.data = 6;
    right2.right = right22;

    let left211 = new BinaryTreeNode();
    left211.data = 7;
    left21.left = left211;

    let right212 = new BinaryTreeNode();
    right212.data = 8;
    left21.right = right212;

    console.log(JSON.stringify(bt, null, '\t'));

    return bt;
}
class LinkedListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }

    display() {
        console.log(this.data);
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = this.head;
        this.length = 0;
    }

    getHead() {
        return this.head;
    }

    /**
     * Time complexity = O(n)
     *      - By taking 1 extra space, we can optimize time
     *        complexity to O(1)
     * Insertion at the end of list
     * @param data
     */
    add(data) {
        if (this.head === null) {
            this.head = new LinkedListNode(data);
            this.tail = this.head;
            this.length++;
            return;
        }
        // let nextNode = this.getHead();
        // while(nextNode && nextNode.next !== null) {
        //     nextNode = nextNode.next;
        // }
        // nextNode.next = new LinkedListNode(data);
        // this.length++;
        this.tail.next = new LinkedListNode(data);
        this.tail = this.tail.next;
        this.length++;
    }

    // /**
    //  * Time complexity of O(n)
    //      - can be reduced to O(1) if we
    //        take additional variable
    //  * @returns size
    //  */
    // size() {
    //     let sizeOfList = 0;
    //     let nextNode = this.getHead();
    //     while(nextNode) {
    //         sizeOfList++;
    //         nextNode = nextNode.next;
    //     }
    //     return sizeOfList;
    // }

    /**
     *
     * @returns size
     */
    size() {
        return this.length;
    }

    /**
     * print all the elements in the list
     */
    print() {
        let nextNode = this.getHead();
        if (!nextNode) {
            console.log('LL is empty');
        }
        while(nextNode) {
            nextNode.display();
            nextNode = nextNode.next;
        }
    }

    printTail() {
        console.log('tail-', this.tail);
    }

    /**
     * Deletes the last element of the list and returns it
     */
    deleteLast() {
        let nextNode = this.getHead();
        let result;
        if(!nextNode) {
            return null;
        }
        while(nextNode
        && nextNode.next
        && nextNode.next.next) {
            nextNode = nextNode.next;
        }
        result = nextNode.next;
        nextNode.next = null;
        this.tail = nextNode;
        this.length--;
        console.log('last node deleted-', result);
        return result;
    }
}
class Queue {
    #list;

    constructor() {
        this.#list = new LinkedList();

    }

    enqueue(val) {
        this.#list.add(val);
    }

    #removeHead(list) {
        let headToBeRemoved = list.head;
        list.head = list.head.next;
        return headToBeRemoved.data;
    }

    dequeue() {
        let dequeuedEl = this.#list.head.data;
        this.#removeHead(this.#list);
        this.#list.length--;
        return dequeuedEl;
    }

    getFront() {
        return this.#list.head.data;
    }

    size() {
        return this.#list.size();
    }

    isEmpty() {
        return this.size() === 0;
    }

    clear() {
        this.#list = new LinkedList();
    }

    print() {
        console.log('front\n|\nV');
        this.#list.print();
        console.log('^\n|\nrear');
    }
}

function printLeftView(node) {
    if (!node) {
        return;
    }

    let q = new Queue();
    q.enqueue(node);

    while(!q.isEmpty()) {
        let size = q.size();
        let i = 0;
        while(i++ < size) {
            let toVisitNode = q.dequeue();

            if(i === 1) {
                visit(toVisitNode);
            }

            if (toVisitNode.left) {
                q.enqueue(toVisitNode.left);
            }

            if (toVisitNode.right) {
                q.enqueue(toVisitNode.right);
            }
        }
    }
}

let bt = buildBT();
printLeftView(bt.root);
