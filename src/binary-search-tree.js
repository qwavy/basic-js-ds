const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.root = null
    this.count = 0
  }

  root() {
    return this.root
  }

  add(data) {
    if(!this.root){
      this.root = new Node(data)
      return this.root
    }


    let currentNode = this.root

    function insertNewNode(node) {
      if (currentNode.data < node) {
        if (!currentNode.right) {
          return currentNode.right = new Node(data)
        } else {
          return insertNewNode(currentNode.right)
        }
      } else if (currentNode.data > node) {
        if (!currentNode.left) {
          return currentNode.left = new Node(data)
        } else {
          return insertNewNode(currentNode.left)
        }
      }
    }

    return insertNewNode(currentNode)

  }

  has(data) {
    let node = this.root

    function checkContains(currentNode) {
      if (currentNode.data === data) {
        return true
      }
      if (currentNode.data < data) {
        return checkContains(currentNode.right)
      } else if (currentNode.data > data) {
        return checkContains(currentNode.right)
      }
      return false
    }
    return checkContains(node)
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
  }

  min() {
    throw new NotImplementedError('Not implemented');
  }

  max() {
    throw new NotImplementedError('Not implemented');
  }
}

module.exports = {
  BinarySearchTree
};