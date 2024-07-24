class Stack{
    constructor(arr = []){
        this.arr = arr
    }

    push(element){
        if(typeof(element) == "object"){
            console.log("Found an object")
            for (let index = 0; index < element.length; index++) {
                if(typeof(element[index]) == "string"){
                    this.arr.push(element[index])
                }
                
            }
        } else if (typeof(element) == "string"){
            this.arr.push(element)
        }
    }

    check(){
        console.log(this.arr)
    }

    pop(){
        if(this.arr.length == 0){
            console.log("Stack is currently empty")
        }
        this.arr.pop()
    }
}




const stack = new Stack()
stack.push("Milk")
stack.push("Eggs")
stack.check()  // [“Milk”, “Eggs”]
stack.pop()
stack.check()  // [“Milk”]
stack.pop()
stack.check()  // []
stack.push(["Ice Cream", 10, [], "Cellphone"])
stack.check()  // ["Ice Cream", "Cellphone"]
stack.pop()
stack.check()  // [“Cellphone”]
stack.pop()
stack.check()  // []
stack.pop()    // “Stack is currently empty.”