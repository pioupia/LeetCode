int removeDuplicates(int* nums, int numsSize) {
    int i = 0;

    while (i < numsSize)
    {
		int k = 1;
		while (i + k < numsSize && nums[i] == nums[i + k])
			++k;
        if (k > 2)
		{
			print_array(nums);
            memmove(nums + i + 2, nums + i + k, (numsSize - i - k) * sizeof(int));
			numsSize -= k - 2;
			print_array(nums);
		}
        i++;
    }
    return (numsSize);
}
