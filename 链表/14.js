/**
 * 141. 环形链表
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    // map 方法 时间n，空间n
    let map = new Map();
    while (head) {
        if (map.has(head)) return true;
        map.set(head, true);
        head = head.next;
    }
    return false;
};