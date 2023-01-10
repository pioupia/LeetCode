class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if (p?.val !== q?.val) return false;
    if (!p?.left && !q?.left && !p?.right && !q?.right) return true;

    return isSameTree((p?.left ?? null), (q?.left ?? null)) && isSameTree((p?.right ?? null), (q?.right ?? null));
};

export {
    isSameTree,
    TreeNode
}