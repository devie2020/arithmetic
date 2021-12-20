import '@/views/App';
import '@/style/app.css';
import { BinaryTree } from './src/lib/binary-tree';

const nodes = [8, 3, 10, 1, 6, 14, 4, 7, 13];
const binaryTree = new BinaryTree();
nodes.forEach(node => {
	binaryTree.insert(node);
});

console.log(JSON.stringify(binaryTree.get()));

// 中序遍历二叉树 左 中 右
binaryTree.inOrderTraverse(key => {
	console.log(key);
});

// 前序遍历二叉树 中 左 右
