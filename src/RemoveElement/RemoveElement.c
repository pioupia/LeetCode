int removeElement(int* nums, int numsSize, int val) {
    int i = 0;
    int j = numsSize - 1;

    while (i <= j)
    {
        if (nums[i] == val)
        {
            while (j >= 0 && nums[j] == val)
            {
                numsSize--;
                j--;
            }
            if (j != -1 && j > i)
            {
                nums[i] = nums[j];
                nums[j--] = val;
                --numsSize;
            }
        }
        i++;
    }
    return (numsSize);
}
