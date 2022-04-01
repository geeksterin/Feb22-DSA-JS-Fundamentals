/**
 * To build a Binary Search Tree
 * - Let arr[0] = root
 * - if arr[i] < root, root.left = arr[i];
 * - if arr[i] >= root, root.right = arr[i]
 */
class BinaryTreeNode {
    constructor() {
        this.data = null;
        this.left = null;
        this.right = null;
    }
}
class BinaryTree {
    constructor() {
        this.root = null;
    }

    add(node, data) {
        if (!node) {
            node = new BinaryTreeNode();
            node.data = data;
            return node;
        }
        if (node) {
            if (data >= node.data) {
                node.right  = this.add(node.right, data);
            } else if (data < node.data) {
                node.left = this.add(node.left, data);
            }
        }
        return node;
    }

    nextInorderNode(node) {
        let nextNode = node;
        while (nextNode.left) {
            nextNode = nextNode.left;
        }
        return nextNode;
    }

    searchNode(data) {
        let currNode = this.root;
        while (currNode) {
            if (currNode.data === data) {
                break;
            }
            if (currNode.data > data) {
                currNode = currNode.left;
            } else {
                currNode = currNode.right;
            }
        }
        if (currNode.data === data) {
            return currNode;
        }
        return null;
    }

    deleteNode(data) {
        let toBeDeleted = this.searchNode(data);
        let replacementNode = this.nextInorderNode(toBeDeleted);
        toBeDeleted.data = replacementNode.data;
        if (toBeDeleted.right) {
            this.deleteNode(replacementNode.data);
        }
    }
}

function buildBst(arr) {
    let bt = new BinaryTree();
    bt.root = bt.add(bt.root, arr[0]);
    for (let i = 1; i < arr.length; i++) {
        bt.add(bt.root, arr[i]);
    }
    return bt;
}

let arr = [
    5, 7, 4, 9, 3, 2, 1, 8, 6
];
let bt = buildBst(arr);
console.log(JSON.stringify(bt, null, '\t'));

