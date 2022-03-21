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
let list1 = new LinkedList("first node");
list1.add("second node");
list1.add("third node");
list1.add("fourth node");
list1.add("fifth node");
list1.add("sixth node");

/**
 * insert at the beginning of the provided linked list
 */
function insertAtBeginning(data, list) {
    let newHead = new LinkedListNode(data);
    if (list.head !== null) {
        newHead.next = list.head;
        list.head = newHead;
    } else {
        list.head = newHead;
    }
}

insertAtBeginning("0th node", list1);
list1.print();


function insertAtNthNode(data, list, nthNode) {
    let currNode = list.head;
    while(currNode) {
        if(currNode.data === nthNode) {
            let newNode = new LinkedListNode(data);
            newNode.next = currNode.next;
            currNode.next = newNode;
            break;
        }
        currNode = currNode.next;
    }

}

insertAtNthNode("new node", list1, "fourth node");
list1.print();

// todo: delete first, delete last.
