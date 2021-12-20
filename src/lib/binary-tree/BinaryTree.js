export function Node(key) {
	this.key = key;
	this.left = null;
	this.right = null;
}

export function BinaryTree() {
	this.root = null;
}

/**
 * 插入节点的方法
 * @param {any} key
 */
BinaryTree.prototype.insert = function (key) {
	const insertNode = (node, newNode) => {
		if (newNode.key < node.key) {
			if (node.left === null) {
				node.left = newNode;
			} else {
				insertNode(node.left, newNode);
			}
		} else {
			if (node.right === null) {
				node.right = newNode;
			} else {
				insertNode(node.right, newNode);
			}
		}
	};

	const newNode = new Node(key);
	if (this.root === null) {
		this.root = newNode;
	} else {
		insertNode(this.root, newNode);
	}
};

BinaryTree.prototype.get = function () {
	return this.root;
};
