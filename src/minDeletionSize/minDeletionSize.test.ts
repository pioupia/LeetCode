import minDeletionSize from "./minDeletionSize";

describe("minDeletionSize tests", () => {
    it("First example", () => {
        expect(
            minDeletionSize(["cba", "daf", "ghi"])
        ).toBe(
            1
        );
    });

    it("Second example", () => {
        expect(
            minDeletionSize(["a", "b"])
        ).toBe(
            0
        );
    });

    it("Third example", () => {
        expect(
            minDeletionSize(["zyx", "wvu", "tsr"])
        ).toBe(
            3
        );
    });

    it("Four example", () => {
        expect(
            minDeletionSize(["rrjk","furt","guzm"])
        ).toBe(
            2
        );
    })
});