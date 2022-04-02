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

    nextInorderNode(node) { // next minimum node
        let nextNode = node;
        while (nextNode.left) {
            nextNode = nextNode.left;
        }
        return nextNode;
    }

    searchNode(data, currNode, withParent) {
        if (!currNode) {
            currNode = this.root;
        }
        let parent = null;
        while (currNode) {
            if (currNode.data === data) {
                break;
            }
            parent = currNode;
            if (currNode.data > data) {
                currNode = currNode.left;
            } else {
                currNode = currNode.right;
            }
        }
        if (currNode?.data === data) {
            return withParent ? [currNode, parent] : currNode;
        }
        return null;
    }

    delete(data) {
        return this.#deleteNode(data, this.root);
    }

    isLeafNode(node) {
        return !node.left && !node.right;
    }

    #deleteNode(data, node) {
        let [toBeDeleted, parent] = this.searchNode(data, node, true);

        if (!toBeDeleted) {
            return null;
        }

        if(this.isLeafNode(toBeDeleted)) {
            if (toBeDeleted.data >= parent.data) {
                // right is to be deleted
                parent.right = null;
            } else {
                // left is to be deleted
                parent.left = null;
            }
            return toBeDeleted;
        }
        if (!toBeDeleted.left) {
            // right is preset
            if (toBeDeleted.data >= parent.data) {
                // right is to be deleted
                parent.right = toBeDeleted.right;
            } else {
                // left is to be deleted
                parent.left = toBeDeleted.right;
            }
            return toBeDeleted;
        } else if (!toBeDeleted.right) {
            // only left is present
            if (toBeDeleted.data >= parent.data) {
                parent.right = toBeDeleted.left;
            } else {
                parent.left = toBeDeleted.left;
            }
            return toBeDeleted;
        }

        // if both left and right of node to be deleted are present
        let replacementNode = this.nextInorderNode(toBeDeleted.right);
        toBeDeleted.data = replacementNode.data;
        if (toBeDeleted.right) {
            return this.#deleteNode(replacementNode.data, toBeDeleted.right);
        }
        return toBeDeleted;
    }

    printTree() {
        console.log(JSON.stringify(this, null, '   '));
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
    8, 3, 10, 1, 6 , 14, 4, 7, 16
];
let bt = buildBst(arr);
bt.delete(3);
bt.printTree();
