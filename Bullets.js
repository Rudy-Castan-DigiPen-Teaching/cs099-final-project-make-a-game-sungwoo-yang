// Name       : Sungwoo Yang
// Assignment : Make a Game
// Course     : CS099
// Spring 2021

class Bullets
{
    constructor( x, y )
    {
        this.position = new Vec2( x, y );
        this.velocity = new Vec2( 0, -5 );
    }

    update()
    {
        this.position.addTo( this.velocity );
    }

    draw()
    {
        push();
        stroke( 'yellow' );
        strokeWeight( 5 );
        point( this.position.x, this.position.y );
        pop();
    }
}