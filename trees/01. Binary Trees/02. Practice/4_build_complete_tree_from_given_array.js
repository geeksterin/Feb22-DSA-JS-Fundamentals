/**
 *
 *Given a array of numbers, build a COMPLETE tree using the array
 * [1,2,3,4,5,6,7,8,9]
 * root = arr[0] = 0th node - depth 0
 * root.left = arr[1] = 1st node - 2 * d + 1 => 2 * 0 + 1 = 1
 * root.right = arr[2] = 1st node - 2 * d + 2 => 2 * 0 + 2 = 2
 */
class BinaryTreeNode {
    constructor() {
        this.data = null;
        this.left = null;
        this.right = null;
    }
}
class BinaryTree {
    constructor() {
        this.root = null;
    }
}

function traverseAndAdd(node, d, arr) {
    let l = arr.length;
    if (d < l) {
        node = new BinaryTreeNode();
        node.data = arr[d];
        node.left = traverseAndAdd(node.left, 2 * d + 1, arr);
        node.right = traverseAndAdd(node.right, 2 * d + 2, arr);
    }
    return node;
}


function buildBt(arr) {
    let bt = new BinaryTree();
    bt.root = traverseAndAdd(bt.root, 0, arr);
    return bt;
}

let arr = [1,2,3,4,5,6,7,8,9]
let bt = buildBt(arr);
console.log(
    'Built tree', JSON.stringify(bt, null, '\t')
);

function visit(node) {
    console.log(node.data);
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
function levelOrderTraversal(node) {
    if (!node) {
        return;
    }

    let q = new Queue();
    q.enqueue(node);

    while(!q.isEmpty()) {
        let toVisitNode = q.dequeue();
        visit(toVisitNode);
        if (toVisitNode.left) {
            q.enqueue(toVisitNode.left);
        }
        if (toVisitNode.right) {
            q.enqueue(toVisitNode.right);
        }
    }
}
console.log('level-order:')
levelOrderTraversal(bt.root);
