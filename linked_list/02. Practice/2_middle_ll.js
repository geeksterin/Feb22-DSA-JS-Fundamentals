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
 * Find the middle element of the linked list
 *
 * 1 -> 2 -> 3 -> 4 -> 5
 *
 * Output should be = 3
 */

// First approach
/**
 * - Traverse thru the list once and find the size
 * - Traverse thru the list again till size/2
 * Time complexity - O(n + n/2) = O(n)
 * Space complexity - O(1)
 */

// Second approach
/**
 * Using 2 pointers - fast and slow
 * - Take 2 pointers, fast and slow
 * - Move slow pointer 1 step and move fast pointer 2 steps at a time
 * - When fast pointer is at the end, slow pointer should be at
 *   middle
 *   Why?
 *      if fast is moving k steps, slow would move k/2
 * Time complexity - O(n/2 + n/2) = O(n)
 * Space complexity - O(1)
 */

function getMiddleElement(list) {
    let slow = list.head;
    let fast = list.head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

let list1 = new LinkedList("first node");
list1.add("second node");
list1.add("third node");
list1.add("fourth node");
list1.add("fifth node");

list1.print();

console.log('\n\n\nmiddle element', getMiddleElement(list1));


