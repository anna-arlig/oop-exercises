class Shape{
    constructor(){
        this.position = new Point(0, 0)
 }

}

class Point{
    constructor(x, y){
        this.x = 0
        this.y = 0
    }
}

class Circle extends Shape{
    constructor(width, height){
        super(width, height)
    }

    area(){
        Math.pow(this.width/2, 2) * Math.PI()
    }
}

class Rectangle extends Shape{
  constructor(width, height){
        super(width, height)
    }



}

class Triangle extends Shape{
    constructor(width, height){
        super(width, height)
    }

}