void rotate(int* nums, int numsSize, int k) {
    int i = 0;
    int n = 0;

    if (k > numsSize)
		k = k % numsSize;

    while (i < k)
    {
        n = 0;

        int tmp = nums[numsSize - 1];
        while (n < numsSize)
        {
            int t_tmp = nums[n];
            nums[n] = tmp;
            tmp = t_tmp;
            n++;
        }
        i++;
    }
}