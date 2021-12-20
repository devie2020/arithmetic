import '@/views/App';
import '@/style/app.css';
import { BinaryTree } from './src/lib/binary-tree';

const nodes = [8, 3, 10, 1, 6, 14, 4, 7, 13];
const binaryTree = new BinaryTree();
nodes.forEach(node => {
	binaryTree.insert(node);
});

console.log(JSON.stringify(binaryTree.get()));
