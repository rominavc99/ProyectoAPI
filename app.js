const picturee = document.getElementById('pictureday');
const titlee = document.getElementById('title');
const datee = document.getElementById('date');
const explanationn = document.getElementById('explanation');




const nasapicoftheday = 'https://api.nasa.gov/planetary/apod?api_key=gCOMJfwxfeHXLW0gL2x052y1A5QBMBRKUIUITODj';

let getpicoftheday = async ()=> {
    const respose = await fetch(`${nasapicoftheday}`);
    const pic = await respose.json(); 
    console.log(pic);

    const {title , date, explanation} = pic;
    const imgpic = pic.hdurl;
 
    
    
    picturee.src = imgpic;
    titlee.innerText = `${title}`;
    datee.innerText = `${date}`;
    explanationn.innerText = `${explanation}`;


    
};
getpicoftheday();
const buttons = document.querySelectorAll('button'); //agarra todos los elementos que sean button

const playnote = event=> //recibe un parametro llamado event

{
    const button = event.target; //recibe parametro en la funcion
    const note = button.dataset.note; 
    const audioId = `audio${note}`;
    
    const audio= document.getElementById(`audio`);
    console.log(audio);
    audio.play();
}

buttons.forEach
(
    button=> button.addEventListener('click', playnote)
);

const keyNoteDown = event =>
{
    const key= event.key;
    console.log(key);
    const button= document.querySelector(`button[data-key="${key}"]`)
    if (button) button.click();
} 
const animateButton = function(e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');
    
    e.target.classList.add('animate');
    setTimeout(function(){
      e.target.classList.remove('animate');
    },700);
  };
  
  const bubblyButtons = document.getElementsByClassName("bubbly-button");
  
  for (const i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
  }

document.addEventListener('keydown', keyNoteDown);