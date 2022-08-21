let movies = [
  {
    name: "falcon and the winter soldier",
    does:
      "John Walker faces consequences for his actions; Sam and Bucky return to the United States.As the Flag Smashers escalate their efforts, Sam and Bucky take action. ",
    image: "images/slidder2.jpg"
  },
  {
    name: "loki",
    does:
      "Loki was born a Frost Giant and abandoned as an infant by his father Laufey, only to be found by Odin during an invasion of the realm of the Frost Giants in Jotunheim. Odin used magic to make Loki appear Asgardian and raised him as a son alongside Odin's biological son, Thor.During his upbringing, Odin's wife Frigga taught Loki how to use magic. ",
    image: "images/slidder1.jpg"
  },
  {
    name: "wanda vision",
    does:
      "Wanda embarks on a troubling journey that forced her to revisit her daunting past for insight into her present and future.The events of 'WandaVision' finally come to a head, and the destinies of all who took park are determined. ",
    image: "images/slidder3.jpg"
  },
  {
    name: "raya and the last dragon",
    does:
      "Raya, a warrior, sets out to track down Sisu, a dragon, who transferred all her powers into a magical gem which is now scattered all over the kingdom of Kumandra, dividing its people. ",
    image: "images/slidder4.jpg"
  },
  {
    name: "luca",
    does:
      "Is Luca based on a true story?The movie follows Luca, Alberto, and Giulia's story of friendship and adventure in the Italian Riviera. Recently, Enrico Casarosa, director of Luca, revealed how his childhood inspired the movie. On Disney's official Twitter account, Enrico Casarosa shared how his story helped create Luca's story! ",
    image: "images/slidder5.jpg"
  }
];

const caraousel = document.querySelector(".caraousel");
let sliders = [];
let slideIndex = 0; //track the current slide
const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }
  let slide = document.createElement("div");
  var imgElement = document.createElement("img");
  let content = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");

  //attaching all elments
  imgElement.appendChild(document.createTextNode(""));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].does));
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(content);
  slide.appendChild(imgElement);
  caraousel.appendChild(slide);

  //setting up images
  imgElement.src = movies[slideIndex].image;
  slideIndex++;

  //setting elements classnames
  slide.className = "slider";
  content.className = "slide-content";
  h1.className = "movie-title";
  p.className = "movie-des";

  sliders.push(slide);

  if (sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
      30 * (sliders.length - 2)
    }px)`;
  }
};
for (let i = 0; i < 3; i++) {
  createSlide();
}

setInterval(() => {
  createSlide();
}, 3000);

//animations for video-card
const videocards = [...document.querySelectorAll(".video-card")];
videocards.forEach((item) => {
  item.addEventListener("mouseover", () => {
    let video = item.children[1];
    video.play();
  });
  item.addEventListener("mouseleave", () => {
    let video = item.children[1];
    video.pause();
  });
});

//card slider
let cardContainers = [...document.querySelectorAll(".card-container")];
let prebtns = [...document.querySelectorAll(".pre-btn")];
let nxtbtns = [...document.querySelectorAll(".next-btn")];

cardContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;
  nxtbtns[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth - 200;
  });
  prebtns[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth - 200;
  });
});
