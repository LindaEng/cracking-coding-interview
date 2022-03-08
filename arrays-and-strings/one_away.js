// One Away: There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away.
// EXAMPLE
// pale, ple -> true pales, pale -> true pale, bale -> true pale, bake -> false

function oneAway(str1, str2) {
    let strSet = new Set()
    for(let i = 0; i < str1.length; i++) {
        let c = str1[i]
        if(!strSet.has(c)) {
            strSet.add(c)
        }
    }
    for(let i = 0; i < str2.length; i++) {
        let c2 = str2[i]
        if(strSet.has(c2)){
            strSet.delete(c2)
        }
    }
    console.log(strSet.size <= 1)
}

oneAway('pale', 'ple')