// DOM elements
const picborder = document.getElementById("imgborder");


// event handlers
function textcolor(c){
    document.getElementById("textToChange").style.color = c;
}

function togglepic(){
    console.log('FIRING')
    const titan = document.getElementById("img1");
    if (titan.style.visibility === 'hidden') 
    {
        titan.style.visibility = 'visible'
    }
    else 
    {
        titan.style.visibility = 'hidden'
    }
}


// add mouse events
picborder.onmouseenter = togglepic;
picborder.onmouseleave = togglepic;