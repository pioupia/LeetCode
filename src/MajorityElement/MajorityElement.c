int majorityElement(int* nums, int numsSize) {
    int i, k = 0;
    int min = (numsSize / 2) + 1;
    int default_number = 0;

    if (numsSize)
        default_number = nums[0];

    while (i <= min)
    {
        if (nums[i] == default_number && i)
        {
            i++;
            continue;
        }
        k = 1;
        for (int j = i + 1; j < numsSize; j++)
        {
            if (nums[j] != nums[i])
                continue;
            k++;
            nums[j] = default_number;
        }
        if (k >= min)
            return (nums[i]);
        i++;
    }
    return (0);
}