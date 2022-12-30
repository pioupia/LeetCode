function findMedianSortedArrays(nums1: number[], nums2: number[], tested?: boolean): number {
    const arr = nums1.concat(nums2).sort((a,b) => b-a);
    const len = nums1.length + nums2.length;

    if (len === 0) return 0;

    const middle = Math.floor(len / 2);

    if (len % 2 === 1) return arr[middle];
    return (arr[middle - 1] + arr[middle]) / 2;
}

export default findMedianSortedArrays;