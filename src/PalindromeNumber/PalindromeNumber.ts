function isPalindrome(x: number): boolean {
    const s = x.toString();
    const l = s.length;
    const l2 = Math.floor(l / 2) + 1;

    for (let i = 0; i < l2; i++) {
        if (s[i] !== s[l - 1 - i]) return false;
    }

    return true;
};

export default isPalindrome;