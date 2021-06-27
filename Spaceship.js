// Name       : Sungwoo Yang
// Assignment : Make a Game
// Course     : CS099
// Spring 2021

class Spaceship
{
    constructor()
    {
        this.x = width / 2;
        this.y = height - 40;
    }

    update()
    {
        this.move();
    }

    draw()
    {
        push();
        translate( this.x, this.y );

        // fuselage
        beginShape();
        vertex( 0, -30 );
        vertex( 20, 20 );
        vertex( 10, 10 );
        vertex( 0, 20 );
        vertex( -10, 10 );
        vertex( -20, 20 );
        vertex( 0, -30 );
        endShape();

        // heart
        push();
        fill( 'red' );
        noStroke();
        rectMode( CENTER );
        square( 0, 0, 10 );
        pop();

        // gun
        push();
        fill( 'blue' );
        noStroke();
        triangle( 0, -30, 5, -18, -5, -18 );
        pop();
        pop();
    }

    move()
    {
        if( keyIsDown( UP_ARROW ) )
        {
            this.y -= 3;

            if( this.y <= 0 )
            {
                this.y += 3;
            }
        }
        if( keyIsDown( LEFT_ARROW ) )
        {
            this.x -= 3;

            if( this.x <= 0 )
            {
                this.x += 3;
            }
        }
        if( keyIsDown( RIGHT_ARROW ) )
        {
            this.x += 3;

            if( this.x >= width )
            {
                this.x -= 3;
            }
        }
        if( keyIsDown( DOWN_ARROW ) )
        {
            this.y += 3;

            if( this.y >= height )
            {
                this.y -= 3;
            }
        }
    }
}