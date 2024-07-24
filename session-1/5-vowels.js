function convertToVowels(word) {
    let vowelSet = new Set(["a","e","i","o","u"])
    let res = ""
    for (let idx = 0; idx < word.length; idx++) {
        if(vowelSet.has(word[idx])){
            res += word[idx]
        }
        
    }
    return res
}

const word = 'thisissomeword'
const wordWithOnlyVowels = convertToVowels(word)
console.log(wordWithOnlyVowels) // iioeo