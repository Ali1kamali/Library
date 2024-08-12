//ساخت اکستنشن متود
//Object.defineProperty(String.prototype)

//برگشت دادن عدد اول
function IsAval(num) {
    if (num < 2) return false;

    let lim = Math.Sqrt(num);
    for (let i = 2; i <= lim; i++) {
        if (num % i == 0) return false;
    }
    return true;
}

//ب م م
//ب.م.م تمام اعداد ارایه داده شده رو برمیگردونه
function GCD(numbers) {
    //arr : int[]
    if (numbers.length == 0) {
        throw "array is empty";
    }
    const gcd = (a, b) => {
        while (b != 0) {
            let remainder = a % b;
            a = b;
            b = remainder;
        }

        return a;
    };

    let result = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        result = gcd(result, numbers[i]);
    }
    return result;
}

//ک . م . م
//این تابع ک م م  اعداد داخل یک ارایه  را بر میگرداند
function LCM(numbers) {
    if (numbers.length == 0) {
        throw "array is empty";
    }

    //بزرگ ترین عضو ار میابد
    let bigest = 0;
    for (let i = 0; i < numbers.Length; i++) {
        if (numbers[i] > bigest) bigest = numbers[i];
    }
    let lcm = bigest;
    while (true) {
        for (let i = 0; i < numbers.Length; i++) {
            if (lcm % numbers[i] == 0) {
                if (i + 1 == numbers.Length) return lcm;
                else continue;
            } else {
                lcm += bigest;
                break;
            }
        }
    }
}

//پیدا کردن یک کلید  با داسشتن مقدار ان در دیکشنری
function findKey(value, obj) {
    for (let i in obj) {
        if (obj[i] === value) return i;
    }
}

//وجود عضو تکراری در یک ابجکت
function isReapit(obj) {
    let set = new Set();
    return obj.length == set.length ? true : false;
}

//حل مشتق یک تابع
function moshtagh(formul) {
    let number, tavan, varible;
    let prantez = [];

    let jomeh = formul.split("+", "-", "*", "/").map((x) => x.trim());
    for (let i of formul) {
    }
}

//این متود ارقام یک عدد را به صورت یک ارایه برمیگرداند
function Argham(num) {
    let ret = [];

    for (let i = 0; num >= 1; num /= 10, i++) {
        let ragham = num % 10;
        ret[i] = ragham;
    }
    return ret;
}

//انیگما
function enigma(
    str,
    option = {
        type: "text",
        left: "I",
        mid: "II",
        right: "III",
        rotateR1: 0,
        rotateR2: 0,
        rotateR3: 0,
        I: "aryhbifwektvzsomdujgcqplnx",
        II: "ubxlkchdmvejarswtpfizgoqny",
        III: "gfserwkntdxauhqzjiobylvpcm",
        alphabet: "abcdefghijklmnopqrstuvwxyz",
        createText: true,
    }
) {
    //v : 2.0.0
    let plain,
        cipher = "",
        rotateR1 = option.rotateR1,
        rotateR2 = option.rotateR2,
        rotateR3 = option.rotateR3;

    const rotors = {
        I: option.I,
        II: option.II,
        III: option.III,
    };
    const alphabet = option.alphabet;

    const reflactor = (c) => {
        return alphabet[Math.abs(alphabetIndex(c) - alphabet.length)];
    };

    const alphabetIndex = (char) => {
        return alphabet.indexOf(char);
    };

    const rotation = () => {
        rotateR1++;
        rotors.I = rotors.I.slice(1) + rotors.I[0];

        if (rotateR1 >= rotors.I.length) {
            rotateR2++;
            rotateR1 = 1;
            rotors.II = rotors.II.slice(1) + rotors.II[0];

            if (rotateR2 >= rotors.II.length) {
                rotateR3++;
                rotateR2 = 1;
                rotors.III = rotors.III.slice(1) + rotors.III[0];
            }
        }
    };

    const leftRotor = (lr, c) => {
        if (lr == "ltr") {
            return rotors[option.left][alphabetIndex(c)];
        } else if (lr == "rtl") {
            return alphabet[rotors[option.left].indexOf(c)];
        }
    };
    const midRotor = (lr, c) => {
        if (lr == "ltr") {
            return rotors[option.mid][alphabetIndex(c)];
        } else if (lr == "rtl") {
            return alphabet[rotors[option.mid].indexOf(c)];
        }
    };
    const rightRotor = (lr, c) => {
        if (lr == "ltr") {
            return rotors[option.right][alphabetIndex(c)];
        } else if (lr == "rtl") {
            return alphabet[rotors[option.right].indexOf(c)];
        }
    };

    const innerEnigma = (c) => {
        let ch1 = rightRotor("ltr", midRotor("ltr", leftRotor("ltr", c)));

        let ch2 = reflactor(ch1);

        let ch3 = leftRotor("rtl", midRotor("rtl", leftRotor("rtl", ch2)));

        return ch3;
    };

    //create rotors
    try {
        if (option.type == "url") {
            plain = fs.readFileSync(str);
        } else {
            plain = str;
        }

        for (let c of plain) {
            cipher += innerEnigma(c);
            rotation();
        }

        if (option.createText) {
            fs.writeFileSync("./cipher.txt", cipher);
        }
    } catch (err) {
        log(err);
    }

    return cipher;
}

//range

function enigma(
    str,
    option = {
        type: "text",
        left: "I",
        mid: "II",
        right: "III",
        rotateR1: 0,
        rotateR2: 0,
        rotateR3: 0,
        I: "aryhbifwektvzsomdujgcqplnx",
        II: "ubxlkchdmvejarswtpfizgoqny",
        III: "gfserwkntdxauhqzjiobylvpcm",
        alphabet: "abcdefghijklmnopqrstuvwxyz",
        createText: true,
    }
) {
    //v : 2.0.1
    let plain,
        cipher = "",
        rotateR1 = option.rotateR1,
        rotateR2 = option.rotateR2,
        rotateR3 = option.rotateR3;

    const rotors = {
        I: option.I,
        II: option.II,
        III: option.III,
    };
    const alphabet = option.alphabet;

    const reflactor = (c) => {
        return alphabet[Math.abs(alphabetIndex(c) - alphabet.length)];
    };

    const alphabetIndex = (char) => {
        return alphabet.indexOf(char);
    };

    const rotation = () => {
        rotateR1++;
        rotors.I = rotors.I.slice(1) + rotors.I[0];

        if (rotateR1 >= rotors.I.length) {
            rotateR2++;
            rotateR1 = 1;
            rotors.II = rotors.II.slice(1) + rotors.II[0];

            if (rotateR2 >= rotors.II.length) {
                rotateR3++;
                rotateR2 = 1;
                rotors.III = rotors.III.slice(1) + rotors.III[0];
            }
        }
    };

    const leftRotor = (lr, c) => {
        if (lr == "ltr") {
            return rotors[option.left][alphabetIndex(c)];
        } else if (lr == "rtl") {
            return alphabet[rotors[option.left].indexOf(c)];
        }
    };
    const midRotor = (lr, c) => {
        if (lr == "ltr") {
            return rotors[option.mid][alphabetIndex(c)];
        } else if (lr == "rtl") {
            return alphabet[rotors[option.mid].indexOf(c)];
        }
    };
    const rightRotor = (lr, c) => {
        if (lr == "ltr") {
            return rotors[option.right][alphabetIndex(c)];
        } else if (lr == "rtl") {
            return alphabet[rotors[option.right].indexOf(c)];
        }
    };

    const innerEnigma = (c) => {
        let ch1 = rightRotor("ltr", midRotor("ltr", leftRotor("ltr", c)));

        let ch2 = reflactor(ch1);

        let ch3 = leftRotor("rtl", midRotor("rtl", leftRotor("rtl", ch2)));

        return ch3;
    };

    //create rotors
    try {
        if (option.type == "url") {
            plain = fs.readFileSync(str);
        } else {
            plain = str;
        }

        for (let c of plain) {
            cipher += innerEnigma(c);
            rotation();
        }

        if (option.createText) {
            fs.writeFileSync("./cipher.txt", cipher);
        }
    } catch (err) {
        log(err);
    }

    return cipher;
}

function createRooter(){
    //1.0.0
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    fs.writeFileSync("./rotor1.txt", shuffleArray(alphabet).join("") + "\n");
    fs.appendFileSync("./rotor2.txt", shuffleArray(alphabet).join("") + "\n");
    fs.appendFileSync("./rotor3.txt", shuffleArray(alphabet).join(""));
};


//رندم کردن اعضای یک ارایه
function shuffleArray(arr) {
    //1.0.1
    let newArr = Array.from(arr);

    for (let i in arr) {
        const j = Math.floor(Math.random() * arr.length);

        [newArr[i],newArr[j]]=[newArr[j],newArr[i]];
    }
    return newArr;
}

//کپی کردن یک متن در کلیپ بورد کاربر
function copyOnClipboard(str) {
    navigator.clipboard.writeText(str);
}





console.log();
