/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// I: ListNode
// O: ListNode
// C: O(n)
// E: the linklists have different length (23 1567); only l1(return l1?)

/*
carry = 0
initiate head (ListNode(0))
currNode = head;

while val of l1 not null or l2 not null or carry  not null,
  if l1 not null
    val = val + l1.val
    l1=l1.next
  if l2 not null
    val = val + l2.val
    l2=l2.next
  val = val + carry
  carry=0;
  if (val >= 10)
        currNode.next = ListNode(val-10)
        carry = 1
  else currNode.next = ListNode(val);
  currNode = currNode.next
return head.next
*/
var addTwoNumbers = function(l1, l2) {
    let head = new ListNode(0);
    let currNode = head;
    let carry = 0;
    while (l1!== null || l2!== null || carry !=0){
        let val = 0 ;
        if (l1 != null){
            val = val + l1.val;
            l1 = l1.next;
        }
        if (l2 != null){
            val = val + l2.val;
            l2 = l2.next;
        }
        val = val + carry;
        carry = 0;
        if (val >=10) {
            currNode.next = new ListNode(val-10);
            carry=1;
        } else {
            currNode.next = new ListNode(val);
        }
        currNode = currNode.next;
    }
    return head.next;
};