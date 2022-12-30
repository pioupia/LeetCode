import findMedianSortedArrays from "./findMedianSortedArrays";

describe("findMedianSortedArrays tests", () => {
    it("first example", () => {
        expect(
            findMedianSortedArrays([1, 3], [2])
        ).toBe(2);
    });

    it("second example", () => {
        expect(
            findMedianSortedArrays([1, 2], [3, 4])
        ).toBe(2.5);
    });

    it("empty array", () => {
        expect(
            findMedianSortedArrays([], [1])
        ).toBe(1)
    });

    it("negative values", () => {
        expect(
            findMedianSortedArrays([0,0,0,0,0], [-1,0,0,0,0,0,1])
        ).toBe(0)
    });

    it("Sorted numbers", () => {
        expect(
            findMedianSortedArrays([1], [2, 3, 4], true)
        ).toBe(2.5)
    });

    it("Sorted numbers double size", () => {
        expect(
            findMedianSortedArrays([1, 2], [3, 4, 5, 6, 7, 8], true)
        ).toBe(4.5)
    });
});


function generateArray(n: number): number[] {
    const array = new Array(n);

    for (let i = 0; i < n; i++) {
        array.push(
            Math.floor(Math.random() * (n * 100))
        );
    }

    return array.sort((a,b) => a-b);
}

describe("findMedianSortedArrays performance", () => {
    it("first test stress", () => {
        const firstArray = generateArray(25);
        const secondArray = generateArray(15);

        const start = performance.now();
        findMedianSortedArrays(firstArray, secondArray);
        const end = performance.now();

        expect(
            end - start
        ).toBeLessThan(100);
    });

    it("second test stress", () => {
        const firstArray = generateArray(50);
        const secondArray = generateArray(25);

        const start = performance.now();
        findMedianSortedArrays(firstArray, secondArray);
        const end = performance.now();

        expect(
            end - start
        ).toBeLessThan(200);
    });

    it("end test stress", () => {
        const firstArray = generateArray(1e6);
        const secondArray = generateArray(1e6);

        const start = performance.now();
        findMedianSortedArrays(firstArray, secondArray);
        const end = performance.now();

        expect(
            end - start
        ).toBeLessThan(1000);
    });
});