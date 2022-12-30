function twoSum(nums: number[], target: number): number[] {
    const len = nums.length;

    for (let i = 1; i < len; i++) {
        const value = nums[i];

        // Check if we have the complementary number before it.
        for (let o = i - 1; o >= 0; o--) {
            if (target - nums[o] !== value) continue;
            return [i, o];
        }
    }
    return []
}

export default twoSum;