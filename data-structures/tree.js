/*
TREES

Abstract data type

General Tree:
A tree has a root node.
The root node has 0 or more children.
Each child node has 0 or more children.
(each node in the tree can be seen as a subtree)

Constraints:
A child has only one parent and the root node has no parent.
Note: A tree is a special type of graph. A tree is a graph without cycles.

*** Operations:

tree.addChild(value)
=> child node (new tree)
add child to tree/subtree and return child node (which should be a tree instance)

tree.contains(value)
=> true/false
Return true if value is in tree, false if not

tree.traverseDepthFirst(callback)
=> undefined
Invoke the callback for every node in a depth-first order

tree.traverseBreadthFirst(callback)
=> undefined
Invoke the callback for every node in a breadth-first order

*** Additional Exercises:
Given treeA and treeB, check if treeB is a subtree of treeA (meaning that there exists a node n in treeA such that the subtree of n is identical to treeB).

Given a dictionary, create a prefix tree (commonly known as a trie)
https://en.wikipedia.org/wiki/Trie

*/


function Node(value) {
  // this.value = value;
  // this.children = [];
}

Tree.prototype.addChild = function(value) {
  // recurse through the tree
    // if currentNode.value === value
      // currentNode.children.push(new Node(value));
  // return `node not found`;
};
// Time complexity:


Tree.prototype.contains = function(value) {
  let found;

  (function search(currentNode) {
    if (currentNode.value === value) {
      found = value;
      return  `Node ${value} found`;
    }
    if (currentNode.children === 0) return;
    currentNode.children.forEach(child => {
      search(child);
    })
  })(this.root);

  return found !== undefined ? `Node ${value} found` : `not found`;
};


Tree.prototype.traverseDepthFirst = function(fn) {

  (function search(currentNode) {
    console.log(currentNode.value)
    if (currentNode.children === 0) return;
    currentNode.value = fn[currentNode.value];
    currentNode.children.forEach(child => {
      search(child);
    })
  })(this.root);

};
// Time complexity:


Tree.prototype.traverseBreadthFirst = function(fn) {
  // implement me...
};
// Time complexity:

