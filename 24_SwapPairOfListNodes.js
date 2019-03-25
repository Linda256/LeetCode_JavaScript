/*
Given a linked list, swap every two adjacent nodes and return its head.

You may not modify the values in the list's nodes, only nodes itself may be changed.



Example:

Given 1->2->3->4, you should return the list as 2->1->4->3.
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 //method 1 using while loop
var swapPairs = function(head) {
    let newHead=new ListNode(0);
    newHead.next=head;
    let prev=newHead;
    let curr=head;
    while(curr!==null && curr.next!==null){
        let temp=curr.next;
        prev.next=temp;
        curr.next=temp.next;
        temp.next=curr;
        prev=curr;
        curr=curr.next;
    }
    return newHead.next;
};

//method 2 using recursion
var swapPairs = function(head) {
    let newHead=new ListNode(0);
    newHead.next=head;
    let prev=newHead;
    let curr=head;
    swapNodes(newHead,prev,curr);
    return newHead.next;

};

function swapNodes(head,prev,curr){
    if(curr===null || curr.next===null) return;
    let temp=curr.next;
    prev.next=temp;
    curr.next=temp.next;
    temp.next=curr;
    swapNodes(head,curr,curr.next);
}