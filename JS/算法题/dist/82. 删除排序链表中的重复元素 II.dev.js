"use strict";

/**
 * 给定一个已排序的链表的头 head ， 删除原始链表中所有重复数字的节点，只留下不同的数字 。返回 已排序的链表 。

 

示例 1：


输入：head = [1,2,3,3,4,4,5]
输出：[1,2,5]
示例 2：


输入：head = [1,1,1,2,3]
输出：[2,3]
 */
var deleteDuplicates = function deleteDuplicates(head) {
  if (!head || !head.next) {
    return head;
  }

  var dummy = new ListNode(0);
  dummy.next = head;
  var prev = dummy;
  var curr = dummy.next;

  while (curr && curr.next) {
    if (curr.val == curr.next.val) {
      while (curr.next && curr.val === curr.next.val) {
        curr = curr.next;
      }

      prev.next = curr.next;
      curr = curr.next;
    } else {
      prev = curr;
      curr = curr.next;
    }
  }

  return dummy.next;
};