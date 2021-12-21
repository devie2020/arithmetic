/**
 * 插入节点，原则是先遍历左子树插入，然后再右子树
 * @param {Node} node 当前节点
 * @param {Node} newNode 新的节点
 */
export function insertNode(node, newNode) {
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
}

export function removeNode(node, key) {
	if (node === null) {
		return null;
	}

	const { key: currKey, left, right } = node;
	if (key === currKey) {
		if (left === null && right === null) {
			return null;
		}

		// 没有左节点, 返回右节点
		if (left === null) {
			return right;
		}

		// 没有右节点，返货左节点
		if (right === null) {
			return left;
		}

		// 左、右节点都存在
		const rightMinestKey = getMinNode(right);
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
}

export function findNode(node, key) {
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
}

export function getMinNode(node) {
	const { left, key } = node;
	return left ? getMinNode(left) : key;
}

export function getMaxNode(node) {
	const { right, key } = node;
	return right ? getMaxNode(right) : key;
}

/**
 * 中序遍历，先遍历左子树，如果当前节点没有左子树，那么就打印当前节点，
 * 如果没有右子树，也就是叶子节点，那么返回父节点(执行栈控制)
 * @param {Node} node 当前节点
 * @param {Function} callback 回调函数，用来打印节点的值
 */
export function inOrderTraverseNode(node, callback) {
	if (node !== null) {
		const { key, left, right } = node;
		// 先遍历左子树
		left && inOrderTraverseNode(left, callback);

		// 打印当前节点
		callback(key);

		// 最后遍历右子树
		right && inOrderTraverseNode(right, callback);
	}
}

/**
 * 中序遍历，先遍历左子树，如果当前节点没有左子树，那么就打印当前节点，
 * 如果没有右子树，也就是叶子节点，那么返回父节点(执行栈控制)
 * @param {Node} node 当前节点
 * @param {Function} callback 回调函数，用来打印节点的值
 */
export function prevOrderTraverseNode(node, callback) {
	if (node !== null) {
		const { key, left, right } = node;

		// 先打印当前节点
		callback(key);

		// 然后遍历左子树
		left && prevOrderTraverseNode(left, callback);

		// 最后遍历右子树
		right && prevOrderTraverseNode(right, callback);
	}
}

/**
 * 后序遍历，先遍历左子树，然后遍历右子树
 * 如果是叶子节点，那么打印当前节点，然后返回父节点(执行栈控制)
 * @param {Node} node 当前节点
 * @param {Function} callback 回调函数，用来打印节点的值
 */
export function postOrderTraverseNode(node, callback) {
	if (node !== null) {
		const { key, left, right } = node;

		// 先遍历左子树
		left && postOrderTraverseNode(left, callback);

		// 然后遍历右子树
		right && postOrderTraverseNode(right, callback);

		// 最后打印当前节点
		callback(key);
	}
}
