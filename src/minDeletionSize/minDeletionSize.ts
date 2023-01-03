function minDeletionSize(strs: string[]): number {
    const strLen = strs[0].length;
    const len = strs.length;

    let toDelete = 0;

    for (let i = 0; i < strLen; i++) {
        let last = strs[0][i];

        for (let j = 1; j < len; j++) {
            const v = strs[j][i];

            if (v < last) {
                toDelete++;
                break;
            }

            last = v;
        }
    }

    return toDelete;
};

export default minDeletionSize;