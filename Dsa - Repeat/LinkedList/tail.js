class Node{
    constructor(value){
        this.value = value ;
        this.next = null ;
    }
}


class LinkedList{
    constructor(){
        this.head = null ;
        this.tail = null ;
        this.size = 0 ;
    }


    getSize(){
        return this.size;
    }

    isEmpty(){
        return this.size === 0 ;
    }


    prepend(value){

        let node = new Node(value)

        if(this.isEmpty()){
            this.head = node ;
            this.tail = node ;
        }
        else{

            node.next = this.head ;
            this.head = node ;
        }

        this.size++ ;
    }


    print(){

        if(this.isEmpty()){
            console.log("empty");
        }else{

            let curr = this.head ;

            let listValues ;

            while(curr){

                listValues += `${curr.value} ` ;
                curr = curr.next ;
            }

            console.log(listValues);
        }
    }


    append(value){

        let node = new Node(value)

        if(this.isEmpty()){
            this.head = node ;
            this.tail = node ;
        }else{ 

            let curr = this.head ;

           
            
        }
    }
}