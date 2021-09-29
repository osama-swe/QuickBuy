var images = [new Image(), new Image(), new Image(), new Image(), new Image()];

images[0].src = "1.jpg";


images[1].src = "2.jpg";


images[2].src = "3.jpg";


images[3].src = "4.jpg";


images[4].src = "5.jpg";

var currentindex = 0;
function next(){
    if(currentindex < 4) currentindex++;
    else currentindex = 0;
    document.getElementById("slider").src = `${images[`${currentindex}`].src}`;
}

setInterval(next, 3000);


document.getElementById("next").onclick = next;

document.getElementById("previous").onclick = function(){
    if(currentindex > 0) currentindex--;
    else currentindex = 4;
    document.getElementById("slider").src = `${images[`${currentindex}`].src}`;
}