// String Compression: Implement a method to perform basic string compression using the counts of repeated characters. For example, the string aabcccccaaa would become a2blc5a3. If the "compressed" string would not become smaller than the original string, your method should return
// the original string. You can assume the string has only uppercase and lowercase letters (a - z).

let testStr = 'aabcccccaaa'

// I: 1 string
// O: original string
// C: optimized
// E: empty string, one char

function stringCompress(str) {
    let finalStr = ''
    let count = 0
    
    for(let i = 0; i < str.length; i++) {
        let currentChar = str[i]
        let nextChar = str[i+1]
        if(currentChar === nextChar) {
            count++
        } else {
            finalStr += currentChar+count
            count = 1
        }
    }
    console.log(finalStr)

    return (finalStr.length < str.length) ? finalStr : str
    
}


stringCompress(testStr)