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

function Tree (value) {
  this.value = value;
  this.children = [];
}

Tree.prototype.addChild = function(value) {
  return this.children.push(new Tree(value));
};
// Time complexity: O(1);

Tree.prototype.contains = function(value) {
  let result = false;

  (function search(currentNode) {
    if (currentNode.value === value) return result = true;
    currentNode.children.forEach(child => {
      search(child);
    });
  })(this)

  return result;
};
// Time complexity: O(n^2)


Tree.prototype.traverseDepthFirst = function(fn) {
  // implement me...
};
// Time complexity:


Tree.prototype.traverseBreadthFirst = function(fn) {
  // implement me...
};
// Time complexity:


// var tree = new Tree(3);
// let branch = tree.addChild(5);
// let branch2 = tree.addChild(10);
// let leaf = tree.children[0].addChild(2);
// let leaf2 = tree.children[0].addChild(3);
// let leaf3 = tree.children[1].addChild(20);
// let leaf4 = tree.children[1].addChild(30);