class shape {
    constructor() {
        this.color = "";
    }
    setColor(shapeColor){
        this.color = shapeColor
    }
}
class triangle extends shape {
    render() {
        return `<polygon points=""225,10 350,210 100,210" fill="${this.color}"/>`
    }
}

class circle extends shape {
    render() {
        return `<circle cx="25" cy="75" r="20" fill="${this.color}"/>`
    }
}
class square extends shape{
    render(){
        return `<rect x="10" y="10" width="30" height="30" fill="${this.color}"/>`
     }
}

module.exports={circle, triangle, square}