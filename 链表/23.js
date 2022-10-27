/**
 * 23. 合并K个升序链表
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    const arr = [];
    for (let list of lists) {
        while (list) {
            arr.push(list.val);
            list = list.next;
        }
    }
    arr.sort((a, b) => a - b);
    let head = nodeList = new ListNode(0);
    arr.forEach(item => {
        const node = new ListNode(item);
        nodeList.next = node;
        nodeList = nodeList.next;
    });
    return head.next;
};



// 递归
var mergeTWo = function (l1, l2) {
    let head = new ListNode();
    let h = head;
    while (l1 && l2) {
        if (l1.val < l2.val) {
            head.next = l1;
            l1 = l1.next;
        } else {
            head.next = l2;
            l2 = l2.next;
        }
        head = head.next;
    }
    head.next = l1 ? l1 : l2;
    return h.next;
};
var mergeKLists = function (lists) {
    if (!lists.length) return null;
    if (lists.length === 1) return lists[0];
    lists.splice(0, 2, mergeTWo(lists[0], lists[1]));
    return mergeKLists(lists);
};