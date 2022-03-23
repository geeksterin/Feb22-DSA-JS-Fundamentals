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
 * we are given 2 sorted linked lists.
 * Merge them and the result should still be sorted.
 *
 * list1: 1 -> 3 -> 5 -> 9 -> 11
 * list2: 1 -> 2 -> 4 -> 6
 *
 * Output should be
 * 1 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 9 -> 11
 */

/**
 * - Take 2 pointers - pointing to start of both the lists
 * - Compare the elements and move smaller element to the new list
 * - Shift the head to next in the list from which we have moved
 *   the element to the new list
 *
 *   Time complexity - O(n + m) [n - size(list1) & m - size(list2)]
 *   Space complexity - O(n + m) [n - size(list1) & m - size(list2)]
 */
function mergeSortedLists(list1, list2) {
    let list1Pointer = list1.head;
    let list2Pointer = list2.head;
    let newList = new LinkedList();
    let newListPointer = newList.head;

    if (list1Pointer.data >= list2Pointer.data) {
        newListPointer = list2Pointer;
        list2Pointer = list2Pointer.next;
    } else {
        newListPointer = list1Pointer;
        list1Pointer = list1Pointer.next;
    }
    newList.head = newListPointer;

    while (list1Pointer && list2Pointer) {
        if (list1Pointer.data > list2Pointer.data) {
            newListPointer.next = list2Pointer;
            list2Pointer = list2Pointer.next;
        } else {
            newListPointer.next = list1Pointer;
            list1Pointer = list1Pointer.next;
        }
        newListPointer = newListPointer.next;
    }

    if (list1Pointer) {
        newListPointer.next = list1Pointer;
    }

    if (list2Pointer) {
        newListPointer.next = list2Pointer;
    }

    // todo: iterate to the end and fix the tail pointer
    // newList.tail = newListPointer; // this is wrong
    return newList;
}

let list1 = new LinkedList();
list1.add(1);
list1.add(3);
list1.add(5);
list1.add(9);
list1.add(11);
console.log('list1');
list1.print();

let list2 = new LinkedList();
list2.add(1);
list2.add(2);
list2.add(4);
list2.add(6);
console.log('list2');
list2.print();

let newList = mergeSortedLists(list1, list2);
console.log('new list');
newList.print();
