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
      if (currentNode === null) {
        return false
      }
      if (currentNode.data === data) {
        return true
      }
      if (currentNode.data < data) {
        return checkContains(currentNode.right)
      }
      if (currentNode.data > data) {
        return checkContains(currentNode.left)
      }
    }
    return checkContains(node)
  }

  find(data) {
    let node = this.rootNode

    function checkContains(currentNode) {
      if (currentNode === null) {
        return null
      }
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


    function findMin(node) {
      while (node.left) {
        node = node.left
      }

      return node.data
    }

    function deleteNode(currentNode, data) {
      // data нужен для сравнение с currentNode.data и что бы мы понимали в какую сторону двигаться. влево или вправо
      if (!currentNode) {
        return null
      }

      if (currentNode.data > data) {
        currentNode.left = deleteNode(currentNode.left, data)
        return currentNode
      } else if (currentNode.data < data) {
        currentNode.right = deleteNode(currentNode.right, data)
        return currentNode
      } else {
        // если у узла нет дочерних элементов
        if (!currentNode.left && !currentNode.right) {
          return currentNode = null
        }

        // если у узла только 1 дочерний элемент
        if (currentNode.left && !currentNode.right) {
          return currentNode = currentNode.left
        } else if (currentNode.right && !currentNode.left) {
          return currentNode = currentNode.right
        }

        let min = findMin(node.right)
        currentNode.data = min
        currentNode.right = deleteNode(currentNode.right, min)
        return currentNode
      }
    }

    return deleteNode(node, data)
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