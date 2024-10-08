class Node {

    constructor(value){
        this.value = value ; 
        this.next = null ;
    }

}

class LinkedList {
    constructor(){
        this.head = null ;
        this.size = 0 ;
    }



    isEmpty(){
        return this.size === 0
    }

    getSize(){
        return this.size ;
    }

    prepend(value){

        let node = new Node(value)

        if(this.isEmpty()){
            this.head = node ;
        }else{
            node.next = this.head ;
            this.head = node ;
        }

        this.size++ ;
    }

    print(){
        if(this.isEmpty()){
            console.log("List is Empty...")
        }else{
            let curr = this.head ;
            let listValues = ''

            while(curr){
                listValues += `${curr.value} `;
                curr = curr.next ;
            }
            console.log(listValues.trim());
        }
    }
}

const list = new LinkedList()

console.log(list.getSize());
console.log(list.isEmpty());

list.print()

list.prepend(30)
list.prepend(25)
list.print();
list.prepend(20)
list.prepend(15)

list.print();

console.log(list.getSize());
console.log(list.isEmpty());