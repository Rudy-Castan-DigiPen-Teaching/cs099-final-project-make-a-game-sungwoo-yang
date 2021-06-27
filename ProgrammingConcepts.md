# Programming Concepts

# 1. Shapes

## What is it?
Shapes can draw multiple shapes on canvas, such as circles, triangles, and squares. It can be drawn simply by specifying coordinates, length, and size.

## Why is it important?
This is a basic command to draw shapes. Most things can be visualized through this function.

## How do we use it?
If you want to draw a rectangle,

```js
rect( 10, 20, 30, 40 ) // x : 10, y : 20, width : 30, height : 40
```

# 2. Colors

## What is it?
This function allows you to color the shapes on the canvas. Color codes can be used to fill in at least numbers easily.

## Why is it important?
Without a color function, all colors are expressed in black and white. Therefore, it is difficult to express various expressions without the color function.

## How do we use it?
If you want to fill in the color,
```js
fill( 'black' ) // color : black
fill( 255, 0, 255 ) // R : 255, G : 0, B : 255
```

# 3. Variables

## What is it?
This function allows you to specify multiple values for variables according to their formulas.

## Why is it important?
By specifying one variable, you can get rid of the hassle of rewriting.

The same variables can be used again to make functions neat.

A moving object can also be created by adding a formula repeatedly to a variable.

## How do we use it?
If you want to draw circles and squares of the same size,
```js
let x = 500
var length = 300
const y = 500 // Cannot change variable

circle( x, y, length ) // x : 500, y : 500, diameter : 300
rect( x, y, length, length ) // x : 500, y : 500, width : 300, height : 300
```

# 4. Conditional Statements

## What is it?
Depending on the conditions, multiple functions can be executed.
If the conditions are met, the function is executed, and if the conditions are not met, the function is not executed.

## Why is it important?
It's a necessary function if you want to use it only under certain conditions. 

For example, press the direction key to move...

## How do we use it?
If you want to add 5 to x when you press the space bar,
```js
let x = 0

if( keyCode === 32 ) // SpaceBar keyCode : 32
{
    x += 5 // x : 5
}
```

# 5. Loops

## What is it?
It is a function that can repeat the same function over and over again.

## Why is it important?
If you want to continue adding one to any variable.
However, it would be very inconvenient to add one by one passively.

If you use the loop function, you can add one by one very simply.

## How do we use it?
If you want to draw a circle with a diameter of 30 on the canvas at distance of 50,
```js
let distance = 50
let diameter = 30
for( let row = 0; row <= height; row++ )
{
    let current_x = row * distance
    for( let column = 0; column <= width; column++ )
    {
        let current_y = column * distance
        circle( current_x, current_y, diameter )
    }
}
```

# 6. Functions

## What is it?
It is a function that combines various functions into one function.

It's very convenient because you can run many functions at once without repeated use.

## Why is it important?
As I just said, you can get rid of the hassle of repeated use.

## How do we use it?
If you want to create a function that simultaneously draws circles and squares of the same size in the same place,
```js
function CR( x, y, length )
{
    circle( x, y, length )
    rect( x, y, length )
}

CR( 30, 40, 50 ) // x : 30, y : 40, diameter or width : 50
```

# 7. Classes

## What is it?
A class can collect several functions within a class.

Function like the "function CR" I just mentioned can be arranged in a class at once.

You can specify variables directly and create functions within a class.

## Why is it important?
If you create a class that presses a button, you can solve the problem of specifying the location and size of the button and executing something at once in the class.

## How do we use it?
If you want to create a button pressing Class,
```js
class Button
{
    constructor( x, y, width, height )
    {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
    }

    draw()
    {
        rect( this.x, this.y, this.width, this.height )
    }

    push()
    {
        if( mouseIsPressed)
        {
            const MouseX_range = mouseX >= this.x && mouseX <= this.x + this.width
            const MouseY_range = mouseY >= this.y && mouseY <= this.y + this.height
            if( MouseX_range && MouseY_range )
            {
                circle( this.x, this.y, this.width * 2 )
            }
        }
    }
}

let button

function setup()
{
    button = new Button( 100, 100, 100, 100 ) // x : 100, y : 100, width : 100, height : 100
}

function draw()
{
    button.draw()
    button.push() // if you pushing button, drawing a circle - x : 100, y : 100, diameter : 200
}
```


# 8. Arrays

## What is it?
This function can add several things to a variable.
Numbers, text, etc. can be added to a variable.

## Why is it important?
This is easy to add or delete and define.
Like particle, make an particle with array, and can remove when it go over the background!

This is stored as index, so it's more easy to delete particle1, particle2, particle3 ~~~ particle 50.

## How do we use it?
If you want to make multiple bullets when you press the space bar,
```js
let bullets = [];

for( var i = 0; i < bullets.length; i++ )
{
    // bullets -> bullets.js
    bullets[ i ].draw();
    bullets[ i ].update();
}

if( keyIsDown( 32 ) )
{
    bullets.push( new Bullets( 0, 0 ) );
}
```