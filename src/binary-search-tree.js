const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.rootNode = null
    this.count = 0
  }

  root() {
    return this.rootNode
  }

  add(data) {
    if (!this.rootNode) {
      this.rootNode = new Node(data)
      return this.rootNode
    }


    let currentNode = this.rootNode

    function insertNewNode(node) {
      if (node.data < data) {
        if (!node.right) {
          return node.right = new Node(data)
        } else {
          return insertNewNode(node.right)
        }
      } else if (node.data > data) {
        if (!node.left) {
          return node.left = new Node(data)
        } else {
          return insertNewNode(node.left)
        }
      }
    }

    return insertNewNode(currentNode)

  }

  has(data) {
    let node = this.rootNode

    function checkContains(currentNode) {
      if (currentNode.data === data) {
        return true
      }
      if (currentNode.data < data) {
        return checkContains(currentNode.right)
      }
      if (currentNode.data > data) {
        return checkContains(currentNode.left)
      }
      return false
    }
    return checkContains(node)
  }

  find(data) {
    let node = this.rootNode

    function checkContains(currentNode) {
      if (currentNode.data === data) {
        return currentNode
      }
      if (currentNode.data < data) {
        return checkContains(currentNode.right)
      }
      if (currentNode.data > data) {
        return checkContains(currentNode.left)
      }
      return null
    }
    return checkContains(node)
  }

  remove(data) {
    let node = this.rootNode


    function findMax(node){
      while (node.right) {
        node = node.right
      }
  
      return node.data
    }

    function findDeleteNode(currentNode) {
      if (currentNode.data === data) {
        return deleteNode(currentNode)
      }

      if (!currentNode) {
        return null
      }

      if (currentNode.data > data) {
        return findDeleteNode(currentNode.left)
      } else if (currentNode.data < data) {
        return findDeleteNode(currentNode.right)
      }
    }

    function deleteNode(node) {
      if (!node.left && !node.right) {
        return node = null
      }

      if (node.left && !node.right) {
        return node = node.left
      } else if (node.right && !node.left) {
        return node = node.right
      }

      node.data = findMax(node.left)
      findMax(node.left).null
    }



    return findDeleteNode(node)
  }

  min() {
    let node = this.rootNode
    while (node.left) {
      node = node.left
    }

    return node.data
  }

  max() {
    let node = this.rootNode
    while (node.right) {
      node = node.right
    }

    return node.data
  }
}

module.exports = {
  BinarySearchTree
};