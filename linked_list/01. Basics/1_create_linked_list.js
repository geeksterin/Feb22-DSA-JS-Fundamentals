// create a linked list
/**
 * data -> data
 * location -> next
 */
class LinkedListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }

    display() {
        console.log('node data-', this.data);
    }
}

// head
// tail
class LinkedList {
    constructor(data) {
        this.head = new LinkedListNode(data);
        this.length = 1;
        console.log('new node added', this.length);
    }

    getHead() {
        return this.head;
    }

    /**
     * Insertion at the end of list
     * @param data
     */
    add(data) {
        if (this.head === null) {
            this.head = new LinkedListNode(data);
        }
        let nextNode = this.getHead();
        while(nextNode && nextNode.next !== null) {
            nextNode = nextNode.next;
        }
        nextNode.next = new LinkedListNode(data);
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
        while(nextNode) {
            nextNode.display();
            nextNode = nextNode.next;
        }
    }

    printHierarchy() {
        // TODO:
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
        this.length--;
        return result;
    }
}


let list1 = new LinkedList("first node");
list1.print();
list1.add("second node");
list1.print();
list1.add("third node");
list1.add("fourth node");
console.log('size so far', list1.size());
list1.add("fifth node");
list1.add("sixth node");
list1.print();
console.log('size so far', list1.size());
let deletedNode = list1.deleteLast()
list1.print();
console.log('size so far', list1.size());
console.log('deleted node', deletedNode);








// traversal

// search

// insertion at beginning

// insertion at end

// insertion at given node

// deletion

