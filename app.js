console.clear();
function active(x){
    const boxes = document.querySelectorAll('.nav-link');
        boxes.forEach(box => {
        box.style.color = '#78a7f5';
        box.style.fontWeight="100";
        });
    x.style.cssText = "color: #78a7f5 !important; font-weight: 600 !important";

};
active(document.querySelector('#s1'));

const sections = document.querySelectorAll("section");
console.log(sections);
window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    let sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop-60) {
      current = section.getAttribute("id"); }
  });

let vall= document.querySelector(`.${current}`);
if (vall !== null) {
    active(vall)
  }

};