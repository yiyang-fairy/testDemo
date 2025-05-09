"use strict";

/**
 * 给你一个链表的头节点 head 和一个特定值 x ，请你对链表进行分隔，使得所有 小于 x 的节点都出现在 大于或等于 x 的节点之前。

你应当 保留 两个分区中每个节点的初始相对位置。

 

示例 1：


输入：head = [1,4,3,2,5,2], x = 3
输出：[1,2,2,4,3,5]
示例 2：

输入：head = [2,1], x = 2
输出：[1,2]
 */
var partition = function partition(head, x) {
  var smaller = new ListNode();
  var p = smaller;
  var bigger = new ListNode();
  var q = bigger;
  var curr = head;

  while (curr) {
    if (curr.val < x) {
      p.next = new ListNode(curr.val);
      p = p.next;
    } else {
      q.next = new ListNode(curr.val);
      q = q.next;
    }

    curr = curr.next;
  }

  p.next.next = bigger.next;
  return smaller.next;
};