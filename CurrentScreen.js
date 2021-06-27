// Name       : Sungwoo Yang
// Assignment : Make a Game
// Course     : CS099
// Spring 2021

let spaceship;

class CurrentScreen
{
    constructor()
    {
        this.main = 0;
        this.loading1 = 1;
        this.stage1 = 2;
        this.loading2 = 3;
        this.stage2 = 4;
        this.loading3 = 5;
        this.stage3 = 6;
        this.ending = 7;

        
        this.alien1 = new Alien1(); 
        this.alien2 = new Alien2();
        this.boss = new Boss();
        spaceship = new Spaceship();

        this.loading_timer = 0
        this.CurrentScreen = this.main;
    }

    update()
    {

    }

    draw()
    {
        switch( this.CurrentScreen )
        {
            case this.main:
            {
                textAlign( CENTER );
                push();
                fill( "white" );
                textSize( 80)
                text( "Game Start!", width / 2, height / 2 + 50 )
                pop();
                push();
                noFill()
                stroke( 'white' )
                pop();
                push();
                textSize( 100 );
                fill( "Yellow" );
                text( "SPACE DEFENCE", width / 2, height / 6 )
                pop();

                if( mouseIsPressed )
                {
                    const MouseX_range = mouseX >= width / 4 - 10 && mouseX <= width * 3 / 4 + 10;
                    const MouseY_range = mouseY >= height / 2 - 25 && mouseY <= height * 4 / 6;
                    if( MouseX_range && MouseY_range)
                    {
                        this.CurrentScreen = this.loading1;
                    }
                }

            }
            break;

            case this.loading1:
            {
                push();
                fill( 255 );
                textSize( 120 );
                text( "Stage 1", width / 2, height / 2 );
                pop();
                this.loading_timer += 1 / fr;

                if( this.loading_timer >= 3 )
                {
                    this.CurrentScreen = this.stage1;
                    this.loading_timer = 0;
                }
            }
            break;

            case this.stage1:
            {
                spaceship.draw();
                spaceship.update();
                this.alien1.draw();
                healthbar.draw();
                attack( spaceship.x, spaceship.y );
                
                if( healthbar.red_width <= 5 )
                {
                    this.CurrentScreen = this.loading2
                    healthbar.red_width = healthbar.width;
                }
            }
            break;

            case this.loading2:
            {
                push();
                fill( 255 );
                textSize( 120 );
                text( "Stage 2", width / 2, height / 2 );
                pop();
                this.loading_timer += 1 / fr;

                if( this.loading_timer >= 3 )
                {
                    this.CurrentScreen = this.stage2;
                    this.loading_timer = 0;
                }
            }
            break;

            case this.stage2:
            {
                spaceship.draw();
                spaceship.update();
                healthbar.draw();
                this.alien2.draw();
                this.alien2.update();
                attack( spaceship.x, spaceship.y );
                if( healthbar.red_width <= 5 )
                {
                    this.CurrentScreen = this.loading3
                    healthbar.red_width = healthbar.width;
                }
            }
            break;

            
            case this.loading3:
            {
                push();
                fill( 255 );
                textSize( 120 );
                text( "Stage 3", width / 2, height / 2 );
                pop();
                this.loading_timer += 1 / fr;

                if( this.loading_timer >= 3 )
                {
                    this.CurrentScreen = this.stage3;
                    this.loading_timer = 0;
                }
            }
            break;

            case this.stage3:
            {
                spaceship.draw();
                spaceship.update();
                healthbar.draw();
                this.boss.draw();
                this.boss.update();
                attack( spaceship.x, spaceship.y );
                if( healthbar.red_width <= 5 )
                {
                    this.CurrentScreen = this.ending
                    healthbar.red_width = healthbar.width;
                }
                
            }
            break;

            case this.ending:
            {
                push();
                fill( 255 );
                textSize( 100 );
                text( "Congratulations", width / 2, height / 2 )
                pop();
            }
            break;
        }
    }
}