/**
 * Given a BST,
 * find the ceil of any input number
 *
 * ceil = number equal to or just greater than given number
 *
 */

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




function findCeil(bstNode, num) {
    if (!bstNode) {
        return null;
    }

    if (num === bstNode.data) {
        return bstNode.data;
    }

    let nextData = null;
    if (num > bstNode.data) {
        // may lie on the right side
        return findCeil(bstNode.right, num);
    }

    nextData = findCeil(bstNode.left, num);

    if (nextData?.data >= num) {
        return nextData;
    } else {
        return bstNode.data;
    }
}
