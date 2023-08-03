function factorial(n) {
    if(n == 0) {
        return 1;
    }
    if(n < 0 ) {
        return undefined;
    }
    for(let i = n; --i;) {
        n *= i;
    }
    return n;
}