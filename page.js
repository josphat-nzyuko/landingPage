//Rotating testimonies
const testimonies = [
    { quote:"Your services were out of this world",author:"Hiwson Njagi"},
    { quote:"You really satisfied my requests",author:"David Kamau"},
    { quote:"Amaizing sevices,i highly recommend",author:"Josphat Nzyuko"},
    { quote:"It was nice doing business with you",author:"James Maina"}
];

let currentIndex = 0;
let intervalId;

const quoteElement = document.querySelector('#testimony-quote');
const authorElement = document.querySelector('#testimony-author');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const container = document.querySelector('#testimony-container');

//function that updates the testimonies display
function updateTestimonies(){
    quoteElement.classList.add('fade');
    setTimeout(() => {
        quoteElement.textContent = `"${testimonies[currentIndex].quote}"`;
        authorElement.textContent = testimonies[currentIndex].author;
        quoteElement.classList.remove('fade');
 },500);
}

//function that starts auto rotate 
function startRotation(){
    intervalId = setInterval(() => {
       currentIndex =(currentIndex + 1) % testimonies.length;
       updateTestimonies();
    }, 5000);
}

//function that stops the rotation 
function stopRotation(){
    clearInterval(intervalId);
}

//event listeners for manual navigation 
nextBtn.addEventListener('click', () => {
  stopRotation();
  currentIndex = (currentIndex + 1) % testimonies.length;
  updateTestimonies();
  startRotation();
}
);

prevBtn.addEventListener('click', () => {
  stopRotation();
  currentIndex = (currentIndex - 1 + testimonies.length) % testimonies.length;
  updateTestimonies();
  startRotation();
}
);

if (testimonies.length > 0) {
  updateTestimonies();
  startRotation();
} else {
  quoteElement.textContent = "No testimonials available.";
  authorElement.textContent = "";
  prevBtn.disabled = true;
  nextBtn.disabled = true;
}


//search form validation
const searchForm = document.getElementById('search-form');
const searchBtn = document.getElementById('search-btn');


function validateInput(value){
    const trimmedValue = value.trim();
    if (trimmedValue.length === 0) {
        return{ isValid: false, message:"Search query cannot be emmpty."};
    }
    if (trimmedValue.length < 3) {
        return{ isValid : false,message:"Search query must be atlease 3 characters."};

    }

}

searchForm.addEventListener('input',() =>{
    const validation = validateInput(searchForm.value);
    searchBtn.disabled = validation.isValid;

}
);


/*nextBtn.addEventListener('click', () => {
    stopRotation();
    currentIndex = (currentIndex + 1) % testimonies,length;
    updateTestimonies();
    startRotation();
}
);
prevBtn.addEventListener('click',() => {
     currentIndex = (currentIndex - 1 + testimonies.length) % testimonies,length;
     updateTestimonies();
     startRotation();
}
);*/

