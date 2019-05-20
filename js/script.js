// declare variables
const sec = document.querySelector('#sechand');
const min = document.querySelector('#minhand');
const hours = document.querySelector('#hourshand');

// adjust date
function setDate() {
  const now = new Date();
//get sec and adjust clock
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360)-90 ;
  sec.style.transform = `rotate(${secondsDegrees}deg)`;
//get min and adjust clock

  const mins = now.getMinutes();
  const minsDegrees =(((mins / 60) * 360) + ((seconds/60)*6)) -90;
  min.style.transform = `rotate(${minsDegrees}deg)`;
 //get hour and adjust clock

  const hour = now.getHours()%12;
  const hourDegrees = (((hour / 12) * 360) + ((mins/60)*30))-90 ;
  hours.style.transform = `rotate(${hourDegrees}deg)`;

  setInterval(setDate, 1000);
  if(hour<12){
    console.log('iff')
    document.body.style.backgroundImage="url('woman.jpg')"
    document.body.style.backgroundPosition='center'

}else{
    console.log('elsee')
    document.body.style.backgroundImage="url('londonlight  (1).jpg')";
    document.body.style.backgroundPosition='center'

  }
}


setDate();