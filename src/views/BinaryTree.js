import { BinaryTree } from '@/lib/binary-tree';

const nodes = [9, 8, 3, 10, 1, 6, 14, 4, 7, 15, 13];
const binaryTree = new BinaryTree();
nodes.forEach(node => {
	binaryTree.insert(node);
});

console.log(binaryTree.root);

// 中序遍历二叉树 左 中 右
binaryTree.inOrderTraverse(key => {
	console.log(key);
});

// 前序遍历二叉树 中 左 右
// binaryTree.prevOrderTraverse(key => {
// 	console.log(key);
// });

// 前序遍历二叉树 左 右 中
// binaryTree.postOrderTraverse(key => {
// 	console.log(key);
// });

console.log('找到的节点：', binaryTree.remove(14));
