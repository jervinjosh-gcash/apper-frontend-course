function isPalindrome(word) {
    let leftPtr = 0
    let rightPtr = word.length - 1

    while(leftPtr != rightPtr){
        if(word[leftPtr] == " "){
            leftPtr += 1
        }
        if(word[rightPtr] == " "){
            rightPtr -= 1
        }
        if(word[leftPtr] != word[rightPtr]){
            return false
        }
        leftPtr += 1
        rightPtr -= 1
        return true
    }
}
  
const word = 'anak nasan ka na'
if (isPalindrome(word)) {
    console.log('It is a palindrome!')
} else {
    console.log('It is not a palindrome!')
}