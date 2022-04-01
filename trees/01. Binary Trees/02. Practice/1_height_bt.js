/**
 * Find height of the given tree
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
function buildBT() {
    let bt = new BinaryTree(1);
    let left1 = new BinaryTreeNode();
    left1.data = 2;
    bt.root.left = left1;

    let right12 = new BinaryTreeNode();
    right12.data = 4;
    left1.right = right12;

    let right2 = new BinaryTreeNode();
    right2.data = 3;
    bt.root.right = right2;

    let left21 = new BinaryTreeNode();
    left21.data = 5;
    right2.left = left21;

    let right22 = new BinaryTreeNode();
    right22.data = 6;
    right2.right = right22;

    let left211 = new BinaryTreeNode();
    left211.data = 7;
    left21.left = left211;

    let right212 = new BinaryTreeNode();
    right212.data = 8;
    left21.right = right212;

    console.log(JSON.stringify(bt, null, '\t'));

    return bt;
}


function getHeight(node) {
    if (!node) {
        return 0;
    }

    return 1 + Math.max(getHeight(node.left), getHeight(node.right));
}

let bt = buildBT();
console.log('height', getHeight(bt.root));
