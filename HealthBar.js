// Name       : Sungwoo Yang
// Assignment : Make a Game
// Course     : CS099
// Spring 2021

class HealthBar
{
    constructor()
    {
        this.x = 50;
        this.y = 20;
        this.width = width - 100;
        this.height = height / 12;
        this.red_width = width - 100;
        this.red_height = height / 12
    }

    update()
    {

    }

    draw()
    {
        push();
        fill( 'gray' );
        stroke( 'white' );
        rect( this.x, this.y, this.width, this.height );
        pop();
        push();
        fill( 'red' )
        noStroke();
        rect( this.x, this.y, this.red_width, this.red_height );
        pop();
    }

}