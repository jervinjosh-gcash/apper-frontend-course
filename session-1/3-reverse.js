function reverse(word) {
    let res = ''
    for (let index = word.length - 1; index >=0; index--) {
        res += word[index]   
    }
    return res
}
   
const word = 'hello'
const reversedWord = reverse(word)
console.log(reversedWord) // 'olleh'