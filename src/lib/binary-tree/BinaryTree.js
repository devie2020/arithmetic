/**
 * 节点的构造函数
 * @param {any} key 元素
 */
export function Node(key) {
	this.key = key;
	this.left = null;
	this.right = null;
}

/**
 * 二叉树的构造函数
 */
export function BinaryTree() {
	this.root = null;
}

/**
 * 获取二叉树
 * @returns Tree
 */
BinaryTree.prototype.get = function () {
	return this.root;
};

/**
 * 获取最小值
 */
BinaryTree.prototype.min = function (targetNode) {
	const getMinNode = node => {
		const { left, key } = node;
		return left ? getMinNode(left) : key;
	};

	return getMinNode(targetNode || this.root);
};

/**
 * 获取最大值
 */
BinaryTree.prototype.max = function (targetNode) {
	const getMaxNode = node => {
		const { right, key } = node;
		return right ? getMaxNode(right) : key;
	};

	return getMaxNode(targetNode || this.root);
};

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

BinaryTree.prototype.find = function (key) {
	if (this.root === null) {
		return null;
	}

	const findNode = (node, key) => {
		const { key: currKey, left, right } = node;
		// 当前节点的key等于传入的key，直接返回当前节点
		if (key === currKey) return node;

		// 如果传入节点小于当前节点，继续遍历当前节点的左子树
		// 否则继续遍历当前节点的右子树
		if (key < currKey) {
			return left ? findNode(left, key) : null;
		} else {
			return right ? findNode(right, key) : null;
		}
	};

	return findNode(this.root, key);
};

/**
 * 删除节点后返回树
 * @param {any} key
 * @returns root
 */
BinaryTree.prototype.remove = function (key) {
	const removeNode = (node, key) => {
		if (node === null) {
			return null;
		}

		const { key: currKey, left, right } = node;
		if (key === currKey) {
			if (left === null && right === null) {
				return null;
			}

			// 没有左子节点, 返回右子节点
			if (left === null) {
				return right;
			}

			// 没有右子节点，返货左子节点
			if (right === null) {
				return left;
			}

			// 左、右节点都存在
			const rightMinestKey = this.min(right);
			node.key = rightMinestKey;
			node.right = removeNode(right, rightMinestKey);
			return node;
		}

		if (key < currKey) {
			node.left = removeNode(left, key);
			return node;
		}

		if (currKey < key) {
			node.right = removeNode(right, key);
			return node;
		}
	};

	this.root = removeNode(this.root, key);
	return this.root;
};

/**
 * 中序遍历
 * @param {Function} callback 回调函数
 */
BinaryTree.prototype.inOrderTraverse = function (callback) {
	const inOrderTraverseNode = (node, callback) => {
		if (node !== null) {
			// 访问当前节点的左子树
			if (node.left) {
				inOrderTraverseNode(node.left, callback);
			}
			callback(node.key);

			// 访问当前节点的右子树
			if (node.right) {
				inOrderTraverseNode(node.right, callback);
			}
		}
	};

	inOrderTraverseNode(this.root, callback);
};

/**
 * 前序遍历，先遍历左，然后遍历当前节点，最后遍历右，然后返回父节点
 * @param {Function} callback 回调函数
 */
BinaryTree.prototype.prevOrderTraverse = function (callback) {
	const prevOrderTraverseNode = (node, callback) => {
		if (node !== null) {
			// 立即打印当前节点的值
			callback(node.key);

			// 访问当前节点的左子树
			if (node.left) {
				prevOrderTraverseNode(node.left, callback);
			}

			// 访问当前节点的右子树
			if (node.right) {
				prevOrderTraverseNode(node.right, callback);
			}
		}
	};

	prevOrderTraverseNode(this.root, callback);
};
/**
 * 前序遍历，先打印当前节点的值，然后遍历左，最后遍历右边，然后返回父节点
 * @param {Function} callback 回调函数
 */
BinaryTree.prototype.prevOrderTraverse = function (callback) {
	const prevOrderTraverseNode = (node, callback) => {
		if (node !== null) {
			// 立即打印当前节点的值
			callback(node.key);

			// 访问当前节点的左子树
			if (node.left) {
				prevOrderTraverseNode(node.left, callback);
			}

			// 访问当前节点的右子树
			if (node.right) {
				prevOrderTraverseNode(node.right, callback);
			}
		}
	};

	prevOrderTraverseNode(this.root, callback);
};

/**
 * 后序遍历, 先遍历左，然后遍历右，左右都遍历完毕后，打印当前节点的值，然后返回父节点
 * @param {Function} callback 回调函数
 */
BinaryTree.prototype.postOrderTraverse = function (callback) {
	const postOrderTraverseNode = (node, callback) => {
		if (node !== null) {
			// 访问当前节点的左子树
			if (node.left) {
				postOrderTraverseNode(node.left, callback);
			}

			// 访问当前节点的右子树
			if (node.right) {
				postOrderTraverseNode(node.right, callback);
			}

			// 立即打印当前节点的值
			callback(node.key);
		}
	};

	postOrderTraverseNode(this.root, callback);
};
