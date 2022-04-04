/**
 * We are given a binary tree
 * We have to print it in tree structure inside a 2d matrix.
 * Where,
 *  if tree height = h,
 *      rows(r) = m = h + 1
 *      cols(c) = n = 2^(h+1) - 1
 *
 *  Steps:
 *  - Place the root node at middle of first row
 *  - For any node placed at mat(r,c), then child should be placed at
 *      - left child: mat[r+1][c-2^(height-r-1)]
 *      - right child: mat[r+1][c+2^(height-r-1)]
 *
 */

class BTNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    height(node) {
        if (!node || (!node.left && !node.right)) {
            return 0;
        }
        return 1 + Math.max(this.height(node.left), this.height(node.right));
    }

    printMat(mat) {
        for (let i = 0; i < mat.length; i++) {
            console.log(mat[i].join(' '));
        }
    }

    // nothing but inorder traversal
    fillMat(mat, node, r, c, h) {
        if (!node) {
            return;
        }
        if (node.left) {
            this.fillMat(mat, node.left,
                r+1, c-Math.pow(2, (h-r-1)), h);
        }
        if (node) {
            mat[r][c] = node.data;
        }
        if (node.right) {
            this.fillMat(mat, node.right,
                r+1, c+Math.pow(2, (h-r-1)), h);
        }
    }

    print() {
        let h = this.height(this);
        let rows = h + 1;
        let cols = Math.pow(2, h + 1) - 1;

        let res = [];
        // fill the result matrix with empty elements _
        for (let i = 0; i < rows; i++) {
            res[i] = Array(cols).fill(" ");
        }
        // this.printMat(res);
        res[0][Math.floor(cols/2)] = this.data;
        this.printMat(res);
        console.log('-----------------------------')
        this.fillMat(res, this, 0, Math.floor(cols/2), h);
        this.printMat(res);
    }
}

let root = new BTNode(1);
root.left = new BTNode(2);
root.right = new BTNode(3);
root.left.left = new BTNode(4);
root.left.right = new BTNode(5);
root.right.left = new BTNode(6);
root.right.right = new BTNode(7);

root.left.left.left = new BTNode(8);
root.left.left.right = new BTNode(9);

console.log(root.height(root));
root.print();



