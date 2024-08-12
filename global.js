global.log = (...input) => {
    console.log(...input);
};

global.len = (input) => {
    return input.length;
};

global.range = (num) => {
    return Array(num).keys();
};

global.forf = (num, func , jump) => {
    if (typeof func != "function") {
        throw new Error(
            `second argoman is ${typeof func} but5 must be function`
        );
    }
    for (let i; i < num; i += jump) {
        func();
    }
};
