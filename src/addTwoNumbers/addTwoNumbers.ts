class ListNode {
    val: number
    next: ListNode | null

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function getNumber(l: ListNode): number {
    let i = 0;
    let res = 0;

    while (typeof l.val === "number") {
        res += Math.pow(10, i)*l.val;
        i++;

        if (!l.next) break;
        l = l.next;
    }

    return res;
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const result = (getNumber(l1 as ListNode) + getNumber(l2 as ListNode)).toString();
    const len = result.length;

    let list = new ListNode(parseInt(result[0]));

    for (let i = 1; i < len; i++) {
        list = new ListNode(parseInt(result[i]), list);
    }
    return list;
};

export {
    addTwoNumbers,
    getNumber,
    ListNode
}