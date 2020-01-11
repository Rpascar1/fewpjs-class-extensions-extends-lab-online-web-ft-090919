
class Polygon {

  constructor(sides) {
    this.sides = sides
    this.count = this.sides.length
  }

  get countSides() {
    return this.count
  }

  get perimeter(){
    return this.sides.reduce((a,b)=> a+b,0)
  }


}


class Triangle extends Polygon {

    get isValid(){
    if (!Array.isArray(this.sides) || (this.count !==3)) return
    return ((this.sides[0]+ this.sides[1] > this.sides[2]) && (this.sides[0]+ this.sides[2] > this.sides[1]) && (this.sides[1]+ this.sides[2] > this.sides[0]))
    }

}


class Square extends Polygon {

  get isValid(){

  if (!Array.isArray(this.sides) || (this.count !==4)) return

  return (( this.sides[0] === this.sides[1] && this.sides[0] === this.sides[2] && this.sides[0] === this.sides[3]))

  }

  get area(){
    return (this.sides[0]**2)
  }

  }
