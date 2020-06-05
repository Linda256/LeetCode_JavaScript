/*
141 Linked List Cycle
Given a linked list, determine if it has a cycle in it.
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (!head) return false;
  let curr = head;
  while (curr) {
    if (curr.val === "checked") return true;
    curr.val = "checked";
    head = head.next;
    curr = head;
  }
  return false;
};
