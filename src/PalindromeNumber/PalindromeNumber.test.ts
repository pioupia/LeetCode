import PalindromeNumber from "./PalindromeNumber";

describe('Palindrome number tests', function () {
    it("First exemple", () => {
       const start = performance.now();
       const res = PalindromeNumber(121);
       const end = performance.now();

       expect(res).toBe(true);
       expect(end - start).toBeLessThan(300);
    });

    it("Second exemple", () => {
        const start = performance.now();
        const res = PalindromeNumber(-121);
        const end = performance.now();

        expect(res).toBe(false);
        expect(end - start).toBeLessThan(300);
    });

    it("Third exemple", () => {
        const start = performance.now();
        const res = PalindromeNumber(10);
        const end = performance.now();

        expect(res).toBe(false);
        expect(end - start).toBeLessThan(300);
    });
});