// Name       : Sungwoo Yang
// Assignment : Make a Game
// Course     : CS099
// Spring 2021

let bullets = [];

let timer = 0;
const fr = 60;

function attack( x, y )
{
    for( var i = 0; i < bullets.length; i++ )
    {
        bullets[ i ].draw();
        bullets[ i ].update();
    }

    if( keyIsDown( 32 ) )
    {
        if( timer == 0 )
        {
            bullets.push( new Bullets( x, y - 30 ) );
        }
    }

    if( timer < 0.3)
    {
        timer += 1 / fr;
    }
    else if( timer >= 0.3 )
    {
        timer = 0;
    }

    if( currentScreen.CurrentScreen == currentScreen.stage2 )
    {
        alien2.update();
    }
    else if( currentScreen.CurrentScreen == currentScreen.stage3 )
    {
        boss.update();
    }

    for( let i = bullets.length - 1; i >= 0; --i )
    {
        let particle = bullets[ i ];

        let alien1X_range = particle.position.x >= alien1.x - alien1.width / 2 && particle.position.x <= alien1.x + alien1.width / 2;
        let alien1Y_range = particle.position.y >= alien1.y - alien1.height / 2 && particle.position.y <= alien1.y + alien1.height / 2;
        let alien2X_range = particle.position.x >= alien2.x - alien2.width / 2 && particle.position.x <= alien2.x + alien2.width / 2;
        let alien2Y_range = particle.position.y >= alien2.y - alien2.height / 2 && particle.position.y <= alien2.y + alien2.height / 2;
        let bossX_range = particle.position.x >= boss.x - boss.width / 2 && particle.position.x <= boss.x + boss.width / 2;
        let bossY_range = particle.position.y >= boss.y - boss.height / 2 && particle.position.y <= boss.y + boss.height / 2;

        if( particle.position.x > width || particle.position.x < 0 
        || particle.position.y > height || particle.position.y < 0 )
        {
            bullets.splice( i, 1 );
        }

        if( currentScreen.CurrentScreen == currentScreen.stage1 )
        {
            if( alien1X_range && alien1Y_range )
            {
                bullets.splice( i, 1 );
                healthbar.red_width -= 30;
            }
        }
        else if( currentScreen.CurrentScreen == currentScreen.stage2 )
        {
            if( alien2X_range && alien2Y_range )
            {
                bullets.splice( i, 1 );
                healthbar.red_width -= 20;
            }
        }
        else if( currentScreen.CurrentScreen == currentScreen.stage3 )
        {
            if( bossX_range && bossY_range )
            {
                bullets.splice( i, 1 );
                healthbar.red_width -= 10;
            }
        }
    }
}