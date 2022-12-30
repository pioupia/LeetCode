function canJump(nums: number[]): boolean {
    let value = nums[0];
    const len = nums.length;


    for (let i = 0; i < len - 1; i++) {
        value = (value - 1) < nums[i] ? nums[i] : value - 1;

        if (value === 0) return false;
    }

    return true;
}

export default canJump;