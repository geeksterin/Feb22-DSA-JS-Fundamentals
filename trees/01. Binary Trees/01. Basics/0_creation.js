/**
 * Binary Tree Node
 * - data
 * - Left
 * - Right
 // *
 // * + getLeft()
 // * + getRight()
 // * + setLeft(BTNode)
 // * + setRight(BTNode)
 */


class BinaryTreeNode {
    constructor() {
        this.data = null;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor(data) {
        this.root = new BinaryTreeNode();
        this.root.data = data;
    }

    addRight(data) {
        let newRight = new BinaryTreeNode();
        newRight.data = data;
        // todo:

    }

    addLeft(data) {
        let newLeft = new BinaryTreeNode();
        newLeft.data = data;
        // todo:
    }
}

let bt = new BinaryTree(1);
let left1 = new BinaryTreeNode();
left1.data = 1;
bt.root.left = left1;

let left11 = new BinaryTreeNode();
left11.data = 3;
left1.left = left11;

let right12 = new BinaryTreeNode();
right12.data = 4;
left1.right = right12;

let right2 = new BinaryTreeNode();
right2.data = 5;
bt.root.right = right2;

let left21 = new BinaryTreeNode();
left21.data = 6;
right2.left = left21;

let right22 = new BinaryTreeNode();
right22.data = 7;
right2.right = right22;

console.log(JSON.stringify(bt, null, '\t'));



