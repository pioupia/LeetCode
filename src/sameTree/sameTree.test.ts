import { isSameTree, TreeNode } from "./sameTree";

describe("sameTree function", () => {
    it("First test", () => {
        const p = new TreeNode(1, new TreeNode(2), new TreeNode(3));
        const q = new TreeNode(1, new TreeNode(2), new TreeNode(3));

        expect(isSameTree(p, q)).toBe(true);
    });

    it("Second test", () => {
        const p = new TreeNode(1, new TreeNode(2));
        const q = new TreeNode(1, null, new TreeNode(2));

        expect(isSameTree(p, q)).toBe(false);
    });

    it("Third test", () => {
        const p = new TreeNode(1, new TreeNode(2), new TreeNode(1));
        const q = new TreeNode(1, new TreeNode(1), new TreeNode(2));

        expect(isSameTree(p, q)).toBe(false);
    });
})