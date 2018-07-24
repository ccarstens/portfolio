import Mover from './Mover'

class InstableRect{
    constructor(p, x, y, width, height){
        this.p = p
        this.location = p.createVector(x, y)
        this.width = width
        this.height = height

        this.particles = []

        this.particleCount = 150

        this.broken = false

        this.color = p.color(0, 123, 255)

        this.deadParticles = 0

        this.explosionFinished = false
        // this.color = p.color(255, 255, 240)
    }

    display(){
        if(!this.broken){
            this.displayRect()
        }else{
            this.displayParticles()
        }
    }

    createParticles(){
        this.particles = []
        for(let i = 0; i < this.particleCount; i++){
            let particle = new Mover(this.p, this.p.random(0, this.width), this.p.random(0, this.height))
            particle.size = this.p.random(1, 7)
            particle.mass = this.p.map(particle.size, 6, 1, 1.5, 3)
            // particle.mass = this.p.random(0.5, 3)
            // particle.color = this.p.color(255, 255, 0)
            particle.fixedDirection = this.p.createVector(this.p.random(-1, 1), this.p.random(-1, 1))
            particle.velocity = particle.fixedDirection.copy().mult(40)
            this.particles.push(particle)
        }
    }
    displayRect(){
        this.p.push()
        this.p.translate(this.location.x, this.location.y)
        this.p.rectMode(this.p.CENTER)
        this.p.noStroke()
        this.p.fill(this.color)
        this.p.rect(0, 0, this.width, this.height)
        this.p.pop()
    }
    breakIntoParticles(){
        this.broken = true
        this.createParticles()
    }
    displayParticles(){
        this.p.push()
        this.p.translate(this.location.x - this.width / 2, this.location.y - this.height / 2)

        this.killSlowParticles()


        if(this.deadParticles === this.particleCount){
            this.explosionFinished = true
        }

        this.particles.forEach(particle => {
            let friction = particle.velocity.copy().mult(-0.03).mult(particle.mass)
            particle.applyForce(friction)
            particle.displayForAudioActivation()
        })
        this.p.pop()
    }
    killSlowParticles(){
        if(this.p.frameCount % 30 === 0){
            this.particles.forEach(particle => {
                const mag = particle.velocity.copy().mag()
                if(mag < 1){
                    if(!particle.dead){
                        particle.kill()
                        this.deadParticles++
                    }
                }
            })
        }
    }
}
export default InstableRect