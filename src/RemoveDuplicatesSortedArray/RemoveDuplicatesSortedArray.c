int removeDuplicates(int* nums, int numsSize) {
    int i = 1;
	int offset = 0;

    while (i < numsSize)
    {
        if (nums[i] == nums[i - 1])
            offset++;
        else if (offset)
            nums[i - offset] = nums[i];
        i++;
    }
    return (numsSize - offset);
}

#include <stdio.h>
int main(void)
{
	int nums[] = {1,1,2};
	printf("%d\n", removeDuplicates((int *) nums, 3));
}