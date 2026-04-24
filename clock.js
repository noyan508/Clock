const playSound= new Audio('Wujood.mp3');

function update(){
    const hand= document.getElementById('hand');
    const minute= document.getElementById('minute');
    const hour= document.getElementById('hour');
    
    const now= new Date();
    let seconds=now.getSeconds();
    let minutes= now.getMinutes();
    let hours= now.getHours();
    
    const secondsDegrees = (seconds / 60) * 360; 
    const minutesDegrees = (minutes/60)*360+ (seconds/60)*6;
    const hoursDegrees = (hours/12)*360+ (minutes/60)*30;
    hand.style.transform=`rotate(${secondsDegrees}deg)`;
    minute.style.transform=`rotate(${minutesDegrees}deg)`;
    hour.style.transform=`rotate(${hoursDegrees}deg)`;
    
    const ampm= hours>=12 ? "PM" : "AM";
    hours = hours % 12 || 12; 
    
    hours= hours<10 ? '0' + hours:hours;
    minutes= minutes<10 ? '0' + minutes:minutes;
    
    document.getElementById('digit').innerText=`${hours} : ${minutes}`;
    document.getElementById('ampm').innerText= ` ${ampm}`;
    /*if(tyme){
        tyme.innerText= timeString;}*/
    
}

function alarm(){
    playSound.play();
}       
  setInterval(update,1000);
update();