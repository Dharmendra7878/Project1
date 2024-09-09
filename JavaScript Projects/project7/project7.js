const endDate ="9 september 2024 11:07:00 am";

document.getElementById("end-date").innerText=endDate;

const inputs=document.querySelectorAll("input");


function clock()
{
    const end=new Date(endDate);
    const now=new Date();
    const diff=(end-now)/1000;
const p=document.createElement('p');
    if(diff<0)
        
        p.classList.add('button');
        p.innerHTML = `<h2 id="newGame">Start new Game</h2>`; 
        return;
    

    //convert into days;

    inputs[0].value=Math.floor(diff/3600/24);
    inputs[1].value=Math.floor((diff/3600)%24);
    inputs[2].value=Math.floor((diff/60)%60);
    inputs[3].value=Math.floor((diff)%60);
    
}

setInterval(() => {
    clock();
}, 1000);