var BinaryTree = require("./BinaryTree");

/**
 * The driver function to create and print binary tree using preOrder
 * @param {int} depth whtat is the depth of binary tree
 */
function run(depth) {
    let binaryTree = new BinaryTree(1);

    let end = Math.pow(2, depth);
    console.log('power', end)
    for (let i = 2; i < end; i++) {
        binaryTree.addNode(i);
    }

    binaryTree.printPreOrder();
}
run(3);