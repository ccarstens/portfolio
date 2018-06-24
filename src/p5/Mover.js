class Mover{
    constructor(p, x, y){
        this.size = 2
        this.accelerationAmount = 1.2
        this.velocity = p.createVector(0, 0)
        this.acceleration = p.createVector(0, 0)
        this.direction = p.createVector(0, 0)
        this.location = p.createVector(x, y)
        this.speedLimit = 18

        this.p = p
    }

    updateTowards(vector){
        this.direction = vector.copy().sub(this.location)
        this.direction.normalize()
        this.acceleration = this.direction.copy().mult(this.accelerationAmount)
        this.velocity.add(this.acceleration)
        this.velocity.limit(this.speedLimit)

        this.location.add(this.velocity)
        // console.log(this.location)
    }

    show(){
        this.p.noStroke()
        this.p.fill(255, 0, 0)
        this.p.ellipse(this.location.x, this.location.y, this.size, this.size)
    }

    setLocation(x, y){
        this.location.x = x
        this.location.y = y
    }
}

export default Mover