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
/**
 * Let's say theres a cycle in linked list. Detect it!
 *
 * 1 -> 2 -> 3 -> 4 -> 5
 *          ^          |
 *         |           V
 *        11 <-  9 <-  6
 *
 *
 */

let list1 = new LinkedList();
list1.add(1);
list1.add(2);
list1.add(3);
list1.add(4);
list1.add(5);
list1.add(6);
list1.add(9);
list1.add(11);

list1.tail.next = list1.head.next.next;

// First approach-
/**
 * - Traverse the list and set a boolean visited in each node
 * - if we find that visited is already true for a node,
 *   then it means there's a cycle.
 *
 *   Time complexity -> O(n)
 *   Space complexity -> O(n)
 *   while(currNode) {
 *     if(!currNode.visited) {
 *         currNode.visited = true;
 *     } else {
 *         break;
 *     }
 *  }
 */


// Optimized approach
/**
 * 1 -> 2 -> 3 -> 4 -> 5
 *          ^          |
 *         |           V
 *        11 <-  9 <-  6
 *
 * - take 2 pointers, fast and slow
 * - make slow move 1 step and fast move 2 steps
 * - if there's a cycle, there will come a time when
 *         slow === fast
 */
function detectLoop(list) {
    let slowPtr = list.head;
    let fastPtr = list.head;

    while (slowPtr && fastPtr) {
        if (slowPtr === fastPtr) {
            return true;
        }
        slowPtr = slowPtr.next;
        fastPtr = fastPtr?.next?.next;
    }
    console.log('no loop');
    return false;
}

console.log('loop detected', detectLoop(list1));

let list2 = new LinkedList();
list1.add(1);
list1.add(2);
list1.add(3);
list1.add(4);
list1.add(5);
list1.add(6);
list1.add(9);
list1.add(11);

console.log('loop detected', detectLoop(list2));
