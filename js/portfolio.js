const ul = document.querySelector("ul");
window.addEventListener("scroll", function () {
  ul.classList.toggle("show", window.scrollY > 0);
});

let LightMode = document.getElementById("light-mode");
LightMode.onclick = () => {
  document.querySelector("body").classList.toggle("lightMode");
};

let data = [
  {
    title: "Web Developer",
    content:
      "I'm a web developer with experience in creating dynamic and responsive websites using HTML, CSS, and JavaScript. I have knowledge of the latest web standards and technologies, such as HTML5, CSS3.",
  },
  {
    title: "Web Designer",
    content:
      "I'm a professional web designer with a passion for creating innovative, responsive, I have a keen eye for aesthetics and a deep understanding of how to create visually appealing sites that meet the needs of users.",
  },
  {
    title: "UX/UI",
    content:
      "I'm a dedicated UX/UI designer with a passion for creating intuitive and engaging digital experiences. I believe in the power of user-centered design and always strive to put the needs of the user at the forefront of my design process.",
  },
];
const cardList = document.getElementById("service-list");
let card = "";

data.map(function (s) {
  return (card += `
    <article class="relative w-72 rounded-2xl">
        <h2 class="bg-gradient-to-r from-blue-700  to-red-600 bg-clip-text text-transparent text-2xl font-semibold">${s.title}</h2>
        <p class="text-lg py-4">${s.content}</p>
        <button class="py-1 px-6 left-20 bg-gradient-to-r from-blue-700  to-red-600 text-white border-2 border-solid duration-500  rounded-full text-md">CONTACT</button>
    </article>
    `);
});
cardList.innerHTML = card;
console.log(scrollY)
// slide
