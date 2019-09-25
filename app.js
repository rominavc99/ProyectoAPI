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