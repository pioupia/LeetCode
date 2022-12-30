import { addTwoNumbers, getNumber, ListNode } from "./addTwoNumbers";

function arrayToListNode(arr: Array<number>): ListNode {
    const len = arr.length;
    let listNode = null;

    for (let i = len - 1; 0 <= i; i--) {
        listNode = new ListNode(arr[i], listNode);
    }

    return listNode as ListNode;
}


// Don't work when the number when the number exceeds 10²¹.
describe("addTwoNumbers", () => {
    it("first check example", () => {
        const first = arrayToListNode([2, 4, 3]);
        const sec = arrayToListNode([5, 6, 4]);

        expect(
            getNumber(addTwoNumbers(first, sec) as ListNode)
        ).toBe(807)
    });

    it("second check example", () => {
        const first = arrayToListNode([0]);
        const sec = arrayToListNode([0]);

        expect(
            getNumber(addTwoNumbers(first, sec) as ListNode)
        ).toBe(0)
    });

    it("third check example", () => {
        const first = arrayToListNode([9, 9, 9, 9, 9, 9, 9]);
        const sec = arrayToListNode([9, 9, 9, 9]);

        expect(
            getNumber(addTwoNumbers(first, sec) as ListNode)
        ).toBe(10009998)
    });
})