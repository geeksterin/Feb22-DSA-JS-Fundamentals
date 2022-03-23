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
 * Reverse the linked list
 *
 * 1 -> 2 -> 3 -> 4
 *
 * 4 -> 3 -> 2 -> 1
 */

// 1st solution - Naive approach
/**
 * -Take an array
 * - store all the elements of the linked list in order
 * - create a new linked list by iterating on the array in reverse
 *   order
 *
 * Time complexity - O(n)
 * Space Complexity - O(n)
 */

// TODO:

// 2nd solution - space optimisation
/**
 * - Take 3 pointers - prev, current and next
 * - Make current point to prev and move current to next and repeat
 *
 * Time complexity - O(n)
 * Space Complexity - O(1)
 */

function reverseList(list) {
    console.log('reversing the list');
    let prev = null;
    let curr = list.head;
    let next = null;

    list.tail = list.head;

    while(curr) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    list.head = prev;
}

let list1 = new LinkedList("first node");
list1.add("second node");
list1.add("third node");
list1.add("fourth node");
list1.add("fifth node");
list1.add("sixth node");

list1.print();

reverseList(list1);

list1.print();
