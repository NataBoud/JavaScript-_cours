class Idtodolist {
    static count = 0;

    constructor(text) {
        this.id = ++Idtodolist.count;
        this.text = text
    
    }
}

export default Idtodolist;