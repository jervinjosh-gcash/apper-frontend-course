function transform(nums) {
    // let result = nums
    //     .map(num => num*num)
    //     .sort()

    let result = quicksort(nums).map(num => num*num)
    return result
}

function quicksort(array) {
    if(array.length < 2){
        return array
    } else {
        let pivot = array[0]
        let left = []
        let right = []
        for (let index = 1; index < array.length; index++) {
            if(array[index] > pivot){
                right.push(array[index])
            } else {
                left.push(array[index])
            }
        }
       return quicksort(left).concat([pivot]).concat(quicksort(right))
    }


}
  
  const nums = [4,9,5,3,8]
  const sortedSquaredNums = transform(nums)
  console.log(sortedSquaredNums) // [9,16,25,64,81]
