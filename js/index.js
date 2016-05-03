$('#title').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
  var title = $(this);
  var one = $('#one');
  var two = $('#two');
  var three = $('#three');
  var four = $('#four');
  var five = $('#five');

  setTimeout(function(){
    title.css('visibility', 'visible');
    title.addClass('fadeInDown');
  },500);

  setTimeout(function(){
    one.css('visibility', 'visible');
    one.addClass('fadeInDown');
  },2000);

  setTimeout(function(){
    two.css('visibility', 'visible');
    two.addClass('fadeInDown');
  },3000);

  setTimeout(function(){
    three.css('visibility', 'visible');
    three.addClass('fadeInDown');
  },4000);

  setTimeout(function(){
    four.css('visibility', 'visible');
    four.addClass('fadeInDown');
  },5000);

  setTimeout(function(){
    five.css('visibility', 'visible');
    five.addClass('fadeInDown');
  },6000);
});

$('#heading-one').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
  var title = $(this);

  setTimeout(function(){
    title.css('visibility', 'visible');
    title.addClass('bounceInLeft');
  },500);
});

$('#content').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
  var title = $(this);

  setTimeout(function(){
    title.css('visibility', 'visible');
    title.addClass('fadeInUp');
  },1000);
});

$('#heading-two').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
  var title = $(this);

  setTimeout(function(){
    title.css('visibility', 'visible');
    title.addClass('bounceInLeft');
  },500);
});

$('#member-one').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
  var title = $(this);

  setTimeout(function(){
    title.css('visibility', 'visible');
    title.addClass('fadeInUp');
  },1000);
});

$('#member-two').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
  var title = $(this);

  setTimeout(function(){
    title.css('visibility', 'visible');
    title.addClass('fadeInUp');
  },1000);
});

$('#member-three').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
  var title = $(this);

  setTimeout(function(){
    title.css('visibility', 'visible');
    title.addClass('fadeInUp');
  },1000);
});

$('#member-four').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
  var title = $(this);

  setTimeout(function(){
    title.css('visibility', 'visible');
    title.addClass('fadeInUp');
  },1000);
});

$('#member-five').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
  var title = $(this);

  setTimeout(function(){
    title.css('visibility', 'visible');
    title.addClass('fadeInUp');
  },1000);
});

$('#member-six').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
  var title = $(this);

  setTimeout(function(){
    title.css('visibility', 'visible');
    title.addClass('fadeInUp');
  },1000);
});

$('#member-seven').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
  var title = $(this);

  setTimeout(function(){
    title.css('visibility', 'visible');
    title.addClass('fadeInUp');
  },1000);
});

$('#heading-three').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
  var title = $(this);

  setTimeout(function(){
    title.css('visibility', 'visible');
    title.addClass('bounceInLeft');
  },500);

  setTimeout(function(){
    $('#msg').css('visibility', 'visible');
    $('#msg').addClass('bounceInUp');
  },1000);
});

$('#btn').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
  var title = $(this);

  setTimeout(function(){
    title.addClass('swing');
  },1000);
});

$('#menu-top').click(function() {
  $('.top-img').animatescroll({
    scrollSpeed:2000,easing:'easeOutCirc'});
});

$('#menu-about').click(function() {
  $('.aboutTop').animatescroll({
    scrollSpeed:2000,easing:'easeOutBack'});
});

$('#menu-member').click(function() {
  $('.memberTop').animatescroll({
    scrollSpeed:2000, easing:'easeOutBack'});
});

$('#menu-contact').click(function() {
  $('.contactTop').animatescroll({
    scrollSpeed:2000,easing:'easeOutCirc'});
});

$('#mb-menu-about').click(function(){
  $('.mb-menu').hide();
  $('.aboutTop').animatescroll({
    scrollSpeed:2000,easing:'easeOutBack'});
});

$('#mb-menu-member').click(function(){
  $('.mb-menu').hide();
  $('.memberTop').animatescroll({
    scrollSpeed:2000,easing:'easeOutBack'});
});

$('#mb-menu-contact').click(function(){
  $('.mb-menu').hide();
  $('.contactTop').animatescroll({
    scrollSpeed:2000,easing:'easeOutCirc'
  });
});

$('.menu-button').click(function(){
  $('.mb-menu').show();
});

$('.menu-close').click(function(){
  $('.mb-menu').hide();
})
