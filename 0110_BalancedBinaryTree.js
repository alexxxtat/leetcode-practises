/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  if (
    root.left === null &&
    root.right.right !== null &&
    root.right.left !== null
  ) {
    return false;
  }
  if (
    root.right === null &&
    root.left.right !== null &&
    root.left.left !== null
  ) {
    return false;
  }
};
