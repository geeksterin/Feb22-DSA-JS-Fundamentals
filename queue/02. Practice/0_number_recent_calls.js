/**
 * In this problem, RecentCallCounter-
 * - Count the number of calls in last 3000 seconds.
 * - ping(time [int])
 * - return the number of calls.
 *
 * Input:
 *  a1: ["RecentCounter", "ping", "ping", "ping", "ping"]
 *   RecentCounter -> initialize the call counter
 *   ping -> call
 *  a2: [[],               [1],   [100],  [3001],  [3002]]
 *
 * Output:
 *
     *  [null, 1, 2, 3, 3]
 */

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

class RecentCallCounter {
    #q;
    #result;
    constructor() {
       this.#q = new Queue();
       this.#result = [null];
    }

    ping(currentTime) {
        let width = currentTime - 3000;
        this.#q.enqueue(currentTime);
        while(this.#q.getFront() < width) {
            this.#q.dequeue();
        }
        this.#result.push(this.#q.size());
    }

    print() {
        console.log('result:', this.#result);
    }
}

function driver(commands, times) {
    let counter = null;

    for (let i = 0; i < commands.length; i++) {
        if (commands[i] === 'RecentCounter') {
            counter = new RecentCallCounter()
        } else if (commands[i] === 'ping') {
            counter.ping(times[i]);
        }
    }

    counter.print();
}

driver(
    ["RecentCounter", "ping", "ping", "ping", "ping"],
    [[],               [1],   [100],  [3001],  [3002]]
)
