/*Javascript page*/


/*This code import the instagram feed*/
var feed = new Instafeed({
  get: 'user',
  /*user id and accesstoken were retrieved so access would be granted to used
  the feed in my porject*/
  userId: '4021027637',
  /*set the resolution to standard to they dont look blurry*/
  resolution: 'standard_resolution',
  accessToken: '4021027637.3df9e66.49f1074a36f04d43a9f901f50892c3bc',
  filter: function(image) {
    var MAX_LENGTH = 40;

    /* creates property called "short_caption" on the image object,
    using the original caption, we can then determine how long we want
     the captions to be, MAX_LENGTH is set to 40 so captions cannot be longer
     than that, ive decided I want 5 characters showing at the moment */
    if (image.caption && image.caption.text) {
      image.short_caption = image.caption.text.slice(0,5, MAX_LENGTH);
    } else {
      image.short_caption = "";
    }

    /*ensure the filter doesn't reject any images*/
    return true;
  },
  template: '<div class="col-3"><img class="w-100" src={{image}}><hr><p class="likes"><i class="fas fa-heart"></i>{{likes}}</i><br><p class="instaCaption">{{model.short_caption}}...<a href="{{link}}" target="_blank">More</a></p></div>'
});
feed.run();
