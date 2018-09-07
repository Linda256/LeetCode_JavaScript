/**
Given a linked list, remove the n-th node from the end of list and return its head.

Example:

Given linked list: 1->2->3->4->5, and n = 2.

After removing the second node from the end, the linked list becomes 1->2->3->5.
Note:

Given n will always be valid.

Follow up:

Could you do this in one pass?


 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}

C: O(n)
E: n > the length of linked list return head? move head

set currNode to head
count the length of Linked list until next ===null
start from head again,
move to length-n,
remove the node
 */
var removeNthFromEnd = function(head, n) {
    let len = 0;
    let curr = head;
    while(curr!==null){
        len++;
        curr=curr.next;
    }
    if (len < n) return head;
    if (len === n) return head.next;
    curr=head;
    let i = len - n;
    while (i>1){
        curr = curr.next;
        i--;
    }
    //let temp=curr;
    curr.next=curr.next.next
    return head;

};