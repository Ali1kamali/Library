//این تابع یک عدد میگیره و یک واحد پولی رو بهش اضافه میکنه
Number.prototype.toCurrency = () => {
    return "$" + this.toFixed(2);
};

//این تابع طول عدد رو برمیگردونه
Number.prototype.len = () => {
    return String(this).length;
};
