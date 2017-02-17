function rotatex( point , center , angle ){

 var output = createVector( 0 , 0 );

 var point1 = p5.Vector.sub( point , center );
 //not Hoppe's
 output.x = point1.x*cos( angle ) - point1.y*sin( angle );

 output.y = point1.x*sin( angle ) + point1.y*cos( angle );

 output.add( center );

 return output;
 

 
}
 var px;
 var py;
 var f1;
 
 var ang;
 
function setup() {
  createCanvas( windowWidth, windowHeight );
  background( 0 , 0 , 0 );
  
  px = width*0.5;
  
  py = height*0.5;
  
  ang = 0;
  
  colorMode ( HSB );
  
}

function draw() {
  if ( mouseIsPressed ){
    ang -= 0.02;
  } else {
    ang +=0.02;
  }
  f1 = frameCount*0.02;
  
  var p0 = createVector(  px , py );
  
  var c = createVector( width*0.5 , height*0.5);
  
  var p1 = rotatex( p0 , c , ang );
  
  noStroke;
  fill( random( 0 , 360 ) , 100 , 100 );
  arc( p1.x , p1.y , 50 , 50, 0 , HALF_PI );
  

  px +=0.055;
  py +=0.055;
  
//  if ( mouseClicked ){
//    f1 *= -1;
//  }
}

function keyTyped() {
 if( key === 's' ) {
   saveCanvas( 'stole this from Collin' , 'jpg' );
   console.log("saved");
 }
}
