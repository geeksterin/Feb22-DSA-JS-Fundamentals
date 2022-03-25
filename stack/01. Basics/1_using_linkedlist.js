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

class Stack {
    #list;

    constructor() {
        this.#list = new LinkedList();
    }

    #insertAtBeginning(data, list) {
        let newHead = new LinkedListNode(data);
        if (list.head !== null) {
            newHead.next = list.head;
            list.head = newHead;
        } else {
            list.head = newHead;
        }
        list.length++;
    }

    push(value) {
        this.#insertAtBeginning(value, this.#list);
    }

    /**
     * Lets us look at the top element of the stack
     */
    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.#list.head.data;
    }

    #removeFromBeginning(list) {
        let headToBeRemoved = list.head;
        list.head = list.head.next;
        return headToBeRemoved.data;
    }

    pop() {
        return this.#removeFromBeginning(this.#list);
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
        console.log('top')
        this.#list.print();
    }
}

let stack = new Stack();
console.log('is stack empty', stack.isEmpty(), stack.size());
console.log('top', stack.peek());
stack.push(1);
stack.push(2);
console.log('top', stack.peek());
console.log('popped element', stack.pop());
console.log('top', stack.peek());
stack.push(10);
stack.push(4);

stack.print();

console.log('top', stack.peek());
console.log('is stack empty', stack.isEmpty());
stack.push(14);

console.log('top', stack.peek());
stack.clear()
console.log('is stack empty', stack.isEmpty());
