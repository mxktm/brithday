var canvas = new fabric.Canvas('mycanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
	fabric.Image.fromURL('BirthdayImage.jpg',function(Img){
        Briimg=Img;
        Briimg.scaletoWidth(700);
        briimg.scaletoHeight(510);
        briimg.set({
            top:0,left:0
        });
        canvas.add(briimg);
    });
}

function playsong(){
	myAudio.play();
}
