import React from 'react'

const truncateString = (str, num, repl) => {
    if(str.length > num ) {
        let subStr = str.substring(str, num);
        return subStr + (reol ? repl : "...")
    } else {
        return str;
    }
 
}

export default truncateString