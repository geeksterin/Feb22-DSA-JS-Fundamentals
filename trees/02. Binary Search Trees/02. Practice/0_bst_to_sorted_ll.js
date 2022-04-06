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

class LinkedListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }

    display() {
        console.log('node data-', this.data);
    }
}

class LinkedList {
    constructor(data) {
        this.head = new LinkedListNode(data);
        this.tail = this.head;
        this.length = 1;
        console.log('new node added', this.length);
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
        console.log('new node added', this.length);
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
        let str = '';
        while(nextNode) {
            str += nextNode.data + ' -> ';
            nextNode = nextNode.next;
        }
        console.log(str);
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

function appendToList(bstNode, list) {
    if (!list) {
        list = new LinkedList(bstNode.data);
    } else {
        list.add(bstNode.data);
    }
    return list;
}

function buildSortedLinkedList(bstNode, list) {
    if (!bstNode) {
        return;
    }

    if (bstNode.left) {
        list = buildSortedLinkedList(bstNode.left, list);
    }
    list = appendToList(bstNode, list);

    if (bstNode.right) {
        list = buildSortedLinkedList(bstNode.right, list);
    }
    return list;
}

let sortedList = buildSortedLinkedList(root, null);
sortedList.print();


