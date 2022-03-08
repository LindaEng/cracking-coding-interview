// Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palin­ drome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.
// EXAMPLE
// Input: Tact Coa
// Output: True (permutations: "taco cat", "atco eta", etc.)


//Using a Set
//if char exists and not space, delete : add
//if length <=1 true : false
function palinPerm(str) {
    let palinSet = new Set()

    for(let i = 0; i < str.length; i++) {
        let c = str[i].toLowerCase()
        if(!palinSet.has(c) && str[i] !== ' ') {
            palinSet.add(c)
        } else {
            if(palinSet.has(c)) {
                palinSet.delete(c)
            }
        }
        console.log(palinSet)
    }
    return palinSet.size <= 1
}


palinPerm('Tact Coa')