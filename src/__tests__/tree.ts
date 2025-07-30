export const tree: BinaryNode<number> = {
    value: 20,
    right: {
        value: 50,
        right: {
            value: 100,
            right: null,
            left: null,
        },
        left: {
            value: 30,
            right: {
                value: 45,
                right: null,
                left: null,
            },
            left: {
                value: 29,
                right: null,
                left: null,
            },
        },
    },
    left: {
        value: 10,
        right: {
            value: 15,
            right: null,
            left: null,
        },
        left: {
            value: 5,
            right: {
                value: 7,
                right: null,
                left: null,
            },
            left: null,
        },
    },
};

export const tree2: BinaryNode<number> = {
    value: 20,
    right: {
        value: 50,
        right: null,
        left: {
            value: 30,
            right: {
                value: 45,
                right: {
                    value: 49,
                    left: null,
                    right: null,
                },
                left: null,
            },
            left: {
                value: 29,
                right: null,
                left: {
                    value: 21,
                    right: null,
                    left: null,
                },
            },
        },
    },
    left: {
        value: 10,
        right: {
            value: 15,
            right: null,
            left: null,
        },
        left: {
            value: 5,
            right: {
                value: 7,
                right: null,
                left: null,
            },
            left: null,
        },
    },
};

export const singleNodeTree: BinaryNode<number> = {
    value: 42,
    left: null,
    right: null,
};

export const leftSkewedTree: BinaryNode<number> = {
    value: 10,
    left: {
        value: 5,
        left: { 
            value: 1, 
            left: {
                value: 0,
                left: null,
                right: null,
            },
            right: null 
        },
        right: null,
    },
    right: null,
};

export const rightSkewedTree: BinaryNode<number> = {
    value: 10,
    left: null,
    right: {
        value: 15,
        left: null,
        right: { 
            value: 20, 
            left: null, 
            right: {
                value: 25,
                left: null,
                right: null,
            }
        },
    },
};

export const perfectBalancedTree: BinaryNode<number> = {
    value: 8,
    left: {
        value: 4,
        left: {
            value: 2,
            left: { value: 1, left: null, right: null },
            right: { value: 3, left: null, right: null },
        },
        right: {
            value: 6,
            left: { value: 5, left: null, right: null },
            right: { value: 7, left: null, right: null },
        },
    },
    right: {
        value: 12,
        left: {
            value: 10,
            left: { value: 9, left: null, right: null },
            right: { value: 11, left: null, right: null },
        },
        right: {
            value: 14,
            left: { value: 13, left: null, right: null },
            right: { value: 15, left: null, right: null },
        },
    },
};

export const complexUnbalancedTree: BinaryNode<number> = {
    value: 50,
    left: {
        value: 25,
        left: {
            value: 10,
            left: null,
            right: {
                value: 15,
                left: { value: 12, left: null, right: null },
                right: { value: 18, left: null, right: null },
            },
        },
        right: {
            value: 35,
            left: {
                value: 30,
                left: null,
                right: { value: 32, left: null, right: null },
            },
            right: null,
        },
    },
    right: {
        value: 75,
        left: null,
        right: {
            value: 90,
            left: {
                value: 80,
                left: { value: 78, left: null, right: null },
                right: { value: 85, left: null, right: null },
            },
            right: {
                value: 95,
                left: null,
                right: { value: 100, left: null, right: null },
            },
        },
    },
};

export const duplicateValueTree: BinaryNode<number> = {
    value: 5,
    left: {
        value: 5,
        left: { value: 3, left: null, right: null },
        right: { 
            value: 5, 
            left: { value: 4, left: null, right: null },
            right: { value: 5, left: null, right: null },
        },
    },
    right: {
        value: 7,
        left: { value: 5, left: null, right: null },
        right: { 
            value: 7,
            left: { value: 6, left: null, right: null }, 
            right: { value: 8, left: null, right: null },
        },
    },
};

export const rootOnlyLeftTree: BinaryNode<number> = {
    value: 10,
    left: { 
        value: 5, 
        left: { value: 2, left: null, right: null },
        right: { value: 7, left: null, right: null },
    },
    right: null,
};

export const rootOnlyRightTree: BinaryNode<number> = {
    value: 10,
    left: null,
    right: { 
        value: 15, 
        left: { value: 12, left: null, right: null },
        right: { value: 20, left: null, right: null },
    },
};
