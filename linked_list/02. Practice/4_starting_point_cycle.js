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
 * Let's say theres a cycle in linked list. Find the starting point.
 *
 *     1  -> 3 -> 5
 *          ^     |
 *         |      V
 *        11 <-  9
 *
 *
 *        tempNode{}
 *
 * Output should be 3
 */

// First approach-
/**
 * - Traverse the list and set a boolean visited in each node
 * - if we find that visited is already true for a node,
 *   then it means there's a cycle and return the element.
 *
 *   Time complexity -> O(n)
 *   Space complexity -> O(n)
 *
 *   while(currNode) {
 *     if(!currNode.visited) {
 *         currNode.visited = true;
 *     } else {
 *         break;
 *     }
 *  }
 */

// Second approach-
/**
 * Create a temp node.
 * - traverse the list and for visited nodes,
 *    make next point to the temp node
 * - If we encounter that the next points to tempNode,
 *   that means it's the start of cycle
 *
 *   time complexity of this - O(n)
 *   space complexity - O(1)
 *
 *   Downside - we lose the original list
 */
function getStartOfCycle(list) {
    let tempNode = new LinkedListNode("TEMP NODE");
    let nextPtr = list.head;
    while(nextPtr) {
        if (nextPtr.next && nextPtr.next.data === tempNode.data) {
            return nextPtr;
        }
        let prev = nextPtr;
        nextPtr = nextPtr.next;
        prev.next = tempNode;
    }
    return null;
}

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

console.log('start of cycle', getStartOfCycle(list1));
