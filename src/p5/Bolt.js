class Bolt{
    constructor(p, x, y, width, height){
        this.p = p
        this.location = p.createVector(x, y)
        this.origin = this.location.copy()
        this.velocity = p.createVector(0, 0)
        this.acceleration = p.createVector(0, 0)

        this.width = width
        this.height = height
        this.color = this.p.color(0, 123, 255)
        // this.color = this.p.color(255, 255, 240)
    }
    display(){

        this.move()
        this.p.push()
        this.p.translate((this.width / -2) + this.location.x, (this.height / -2) + this.location.y)
        this.p.noStroke()
        this.p.fill(this.color)
        this.p.triangle(0, 0, 0, this.height, this.width, this.height / 2)
        this.p.pop()
    }
    distanceFromOrigin(){
        return this.origin.copy().sub(this.location).x
    }
    bowStringStrength(){
        return this.p.createVector(0.015 * this.distanceFromOrigin(), 0)
    }
    applyForce(force){
        this.acceleration.add(force)
    }
    move(){
        this.velocity.add(this.acceleration)
        this.location.add(this.velocity)
        this.acceleration.mult(0)
    }

    hitsInstableRectangle(rect){
        const outerRight = this.location.x + this.width / 2
        const rectLeft = rect.location.x - rect.width / 2
        return outerRight >= rectLeft
    }
}

export default Bolt