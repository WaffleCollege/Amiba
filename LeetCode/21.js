/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

var mergeTwoLists = function(list1, list2) {
    if (list1 === null || list2 === null) {
        return list1 === null ? list2 : list1;
    }

    let array = [];
    const init = array;

    while (list1 !== null && list2 !== null) {
        if (list1.val > list2.val) {
            array.next = list2;
            list2 = list2.next;
        } else {
            array.next = list1;
            list1 = list1.next;//ポインタの移動
        }
            array = array.next;
            console.log(array);
    }
    if (list1 === null || list2 === null) {
        array.next = list1 === null ? list2 : list1;
    }
        return init.next;
};
