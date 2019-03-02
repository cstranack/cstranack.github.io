window.onload = function() {
  currentYear();
};

function currentYear(){
  const date = new Date();
  const autoDate = document.querySelector('#autoDate');
  autoDate.textContent = date.getFullYear();
};

/*//navbrand - uni logo
const navBrand = document.querySelector('.navbar-brand');
navBrand.addEventListener('mouseenter', addBounce);
//eventlistener - waits for an event such as mouse enter
navBrand.addEventListener('animationend', removeBounce);
//^removes animation after it has played one time*/

const navLinks = document.querySelectorAll('.nav-link');
//put into arrays
//navLinks.forEach(navLink => navLink.addEventListener('mouseenter', addBounce));
//navLinks.forEach(navLink => navLink.addEventListener('animationend', removeBounce));
//this creates a bounce for each component of the menu bar when you hover over one

function addBounce(e){
  this.classList.add('animated', 'bounce');
}

function removeBounce(e){
  this.classList.remove('animated', 'bounce');
}






var feed = new Instafeed({
  get: 'user',
  userId: '4021027637',
  resolution: 'standard_resolution',
  accessToken: '4021027637.3df9e66.49f1074a36f04d43a9f901f50892c3bc',
  filter: function(image) {
    var MAX_LENGTH = 40;

    // here we create a property called "short_caption"
    // on the image object, using the original caption
    if (image.caption && image.caption.text) {
      image.short_caption = image.caption.text.slice(0,0, MAX_LENGTH);
    } else {
      image.short_caption = "";
    }

    // ensure the filter doesn't reject any images
    return true;
  },
  template: '<div class="col-3"><img class="w-100" src={{image}}><hr><p class="likes"><i class="fas fa-heart"></i>{{likes}}</i><br><p class="instaCaption">{{model.short_caption}}...<a href="{{link}}" target="_blank">More</a></p></div>'
});
feed.run();
