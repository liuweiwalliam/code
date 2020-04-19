/**
 * 测试通过
 */
class Stack{
    constructor(){
        this.data =[];
    }
    push(item){
        this.data.push(item)
    };
    pop(){
        return  this.data.pop()
    };
    peek(){
        return  this.data[this.length-1];
    }
    isEmpty(){
        return  this.data.length== 0?true:false;
    }
    clear(){
        this.data = [];
    }
    size(){
        return  this.data.length;
    }
}

export default Stack;