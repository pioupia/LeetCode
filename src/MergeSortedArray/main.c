void merge(int* nums1, int nums1Size, int m, int* nums2, int nums2Size, int n) {
    int i = 0;
    int j = 0;
    int k = 0;

    while (i < m && j < nums2Size)
    {
        if (nums2[j] < nums1[i])
        {
            memmove(nums1 + i + 1, nums1 + i, sizeof(int) * (nums1Size - i - 1));
            nums1[i] = nums2[j++];
			k++;
            m++;
        }
        i++;
    }
    while (j < nums2Size)
        nums1[i++] = nums2[j++];
}

