function ucFirst(str) {
    if (str.length == 0) {
        return str;
    }
    else if (str.length > 0) {
        let finalString = str[0].toUpperCase() + str.slice(1);
        return finalString;
    } 
}