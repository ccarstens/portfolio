class Vector {
    constructor(p){
        this.x = 0
        this.y = 0
        this.p = p
    }



    setCo(x, y){
        this.x = x
        this.y = y
    }

    update(){
        this.x ++
        this.y++
    }

    show(){
        this.p.fill(255, 0, 0)
        this.p.rect(this.x, this.y, 50, 50)
    }
}

export default Vector