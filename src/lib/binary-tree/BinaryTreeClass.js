import {
	insertNode,
	removeNode,
	findNode,
	getMaxNode,
	getMinNode,
	inOrderTraverseNode,
	prevOrderTraverseNode,
	postOrderTraverseNode,
} from './utils';

/**节点的构造函数 */
export class Node {
	key = null;
	left = null;
	right = null;
	constructor(key) {
		this.key = key;
	}
}

export class BinaryTree {
	root = null;
	constructor() {}

	// 获取二叉树
	get root() {
		return this.root;
	}

	// 获取最小值
	min(targetNode) {
		return getMinNode(targetNode || this.root);
	}

	// 获取最大值
	max(targetNode) {
		return getMaxNode(targetNode || this.root);
	}

	/**
	 * 插入节点
	 * @param {any} key 元素
	 */
	insert(key) {
		const newNode = new Node(key);
		if (this.root === null) {
			this.root = newNode;
		} else {
			insertNode(this.root, newNode);
		}
	}

	/**
	 * 查找指定key的节点
	 * @param {any}} key
	 * @returns
	 */
	find(key) {
		if (this.root === null) {
			return null;
		}
		return findNode(this.root, key);
	}

	/**
	 * 删除节点后返回树
	 * @param {any} key
	 * @returns root
	 */
	remove(key) {
		this.root = removeNode(this.root, key);
		return this.root;
	}

	/**
	 * 中序遍历，打印出一个有序的节点值
	 * @param {Function} callback 打印节点值的回调函数
	 */
	inOrderTraverse(callback) {
		inOrderTraverseNode(this.root, callback);
	}

	/**
	 * 前序遍历，先打印当前节点的值，然后再先后遍历左右子树
	 * @param {Function} callback 打印节点值的回调函数
	 */
	prevOrderTraverse(callback) {
		prevOrderTraverseNode(this.root, callback);
	}

	/**
	 * 后序遍历，首先按照左右子树顺序进行遍历，完后打印当前节点
	 * @param {Function} callback 打印节点值的回调函数
	 */
	postOrderTraverse(callback) {
		postOrderTraverseNode(this.root, callback);
	}
}
