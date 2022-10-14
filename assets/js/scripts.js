var containerMargin = ($('.container').css('margin-left')).replace('px', '');

//slider for latest-blog-post
const blogPostSlider = new Swiper('.swiper', {

    //options
    slidesPerView : 1,
    spaceBetween : 20,
    freeMode: true,
    slidesOffsetBefore: containerMargin,
    grabCursor: true,

    breakpoints: {
        650 : {
            slidesPerView : 2
        },
        991 : {
            slidesPerView : 3
        }
    },

    navigation: {
        nextEl: '.arrows .right-arrow',
        prevEl: '.arrows .left-arrow',
      },
});

$(window).on('load resize', function() {
    
    
    if($(window).width() > 1440) {
        $('.blog-post-container').addClass('container-xxl');
        containerMargin = 0;
    }
    else {
        $('.blog-post-container').removeClass('container-xxl');
        containerMargin = ($('.container').css('margin-left')).replace('px', '');
    }
    blogPostSlider.params.slidesOffsetBefore = containerMargin;
    blogPostSlider.update();
});


//scroll animation
$(window).on('load', function() {
    var controller = new ScrollMagic.Controller();

    //navbar-scene
    var navScene = new ScrollMagic.Scene({number: 0,
        triggerElement: "#navbar",
        triggerHook: 0.2
    })
    .setClassToggle("#navbar", "animation") // trigger a TweenMax.to tween
    // .addIndicators({name: "1 (duration: 300)"}) // add indicators (requires plugin)
    .addTo(controller);

    //banner-scene
    var bannerScene = new ScrollMagic.Scene({number: 0,
        triggerElement: "#banner",
        triggerHook: 0.2
    })
    .setClassToggle("#banner", "animation") // trigger a TweenMax.to tween
    // .addIndicators({name: "2 (duration: 300)"}) // add indicators (requires plugin)
    .addTo(controller);


    //blog-post scene
    var latestBlogTween = new TimelineMax();

    var latestBlog = new ScrollMagic.Scene({
        triggerElement: ".blog-post-trigger", duration: $('#latest-blog').outerHeight(),
        triggerHook: .9
    })
    .setTween(latestBlogTween
        .set('#latest-blog', {opacity: 0, visibility: 'hidden'})
        .set('#latest-blog .h2', {top: 200})

        .add(TweenMax.to('#latest-blog', 1, {opacity: 1, visibility: 'visible'}), 'first')
        .add(TweenMax.to('#latest-blog .h2', 1, {top: 0}), 'first'))
    // .addIndicators({name: "3 (duration: 300)"}) // add indicators (requires plugin)
    .addTo(controller);

    //feature-ads scene
    var featureAdsTween = new TimelineMax();

    var featureAds = new ScrollMagic.Scene({
        triggerElement: "#feature-ads", duration: '100%',
        triggerHook: .9
    })
    .setTween(featureAdsTween
        .set('#feature-ads .image', {scale: .3})
        .set('#feature-ads .circle', {transform : 'translate3d(-50%, -60%, 0)'})
        
        .add(TweenMax.to('#feature-ads .image', 70, {scale: 1}), 'first')
        .add(TweenMax.to('#feature-ads .circle', 30, {transform : 'translate3d(0%, -60%, 0)'}), 'second'))
    // .addIndicators({name: "4 (duration: 300)"}) // add indicators (requires plugin)
    .addTo(controller);

    //our service scene
    var ourServiceSceneTween = new TimelineMax();
    var ourServiceScene = null;


    if($(window).width > 575) {
        ourServiceScene = new ScrollMagic.Scene({
            triggerElement: "#services", duration: $('#services').height(),
            triggerHook: .9
        })
    }
    else {
        ourServiceScene = new ScrollMagic.Scene({
            triggerElement: "#services", duration: '200%',
            triggerHook: 1
        })
    }

    ourServiceScene.setTween(ourServiceSceneTween
        .set('#services .wrap-one', {transform : 'translateX(-100%)', opacity: 0})
        .set('#services .wrap-two', {transform : 'translateX(100%)', opacity: 0})
        .set('#services .wrap-three', {transform : 'translateX(-100%)', opacity: 0})
        .set('#services .wrap-four', {transform : 'scale(.3)', opacity: 0})
        .set('#services .wrap-five', {transform : 'scale(.3)', opacity: 0})
        .set('#services .wrap-six', {transform : 'translateX(100%)', opacity : 0})
        .set('#services .circle', {transform : 'translate(0%, 0%)'})
        
        .add(TweenMax.to('#services .wrap-one', 60, {transform : 'translateX(0%)', opacity: 1}), 'first')
        .add(TweenMax.to('#services .wrap-two', 60, {transform : 'translateX(0%)', opacity: 1}), 'first')
        .add(TweenMax.to('#services .wrap-three', 60, {transform : 'translateX(0%)', opacity: 1}), 'first')
        .add(TweenMax.to('#services .wrap-four', 60, {transform : 'scale(1)', opacity: 1}), 'first')
        .add(TweenMax.to('#services .wrap-five', 40, {transform : 'scale(1)', opacity: 1}), 'second')
        .add(TweenMax.to('#services .wrap-six', 40, {transform : 'translateX(0%)', opacity: 1}), 'second')
        .add(TweenMax.to('#services .circle', 40, {transform : 'translate(-50%, -50%)'}), 'second'))
    // .addIndicators({name: "5 (duration: 300)"}) // add indicators (requires plugin)
    .addTo(controller);

    //resources scene
    var resourcesSceneTween = new TimelineMax();
    var resourcesScene;
    if($(window).width > 575) {

        resourcesScene = new ScrollMagic.Scene({
            triggerElement: "#resources", duration: $('#resources').outerHeight(),
            triggerHook: .8
        })
    }
    else {

        resourcesScene = new ScrollMagic.Scene({
            triggerElement: "#resources", duration: '100%',
            triggerHook: .8
        })
    }
    
    resourcesScene.setTween(resourcesSceneTween
        .set('#resources .resources-bg', {transform : 'translateX(-100%)'})
        .set('#resources .container', {opacity: 0})
        .set('#expart-chat', {opacity: 0, visibility: 'hidden'})
        
        .add(TweenMax.to('#resources .resources-bg', 1, {transform : 'translateX(0%)'}), 'first')
        .add(TweenMax.to('#resources .container', 1, {opacity: 1}), 'first')
        .add(TweenMax.staggerFromTo('#expart-chat', 1, {opacity: 0, visibility: 'hidden'}, {opacity: 1, visibility: 'visible'}, 0.15), 'first'))
    // .addIndicators({name: "6 (duration: 300)"}) // add indicators (requires plugin)
    .addTo(controller);

    //feedback scene
    var feedbackSceneTween = new TimelineMax();
    var feedbackScene;

    if($(window).width > 575) {
        feedbackScene = new ScrollMagic.Scene({
            triggerElement: "#feedback", duration: $('#feedback').outerHeight(),
            triggerHook: 1
        })
    }
    else {
        feedbackScene = new ScrollMagic.Scene({
            triggerElement: "#feedback", duration: '120%',
            triggerHook: 1
        })
    }
     
    feedbackScene.setTween(feedbackSceneTween
        .set('#feedback .h3', {transform : 'scale(.6)'})
        // .set('#feedback .animate-feedback', {transform: 'translateY(-500px)'})

        .add(TweenMax.to('#feedback .h3', 1, {transform : 'scale(1)'}), 'first')
        // .add(TweenMax.to('#feedback .animate-feedback', 1, {transform : 'translateY(0)'}), 'first')
        )
    // .addIndicators({name: "7  (duration: 300)"})
    .addTo(controller);

    //contact scene
    var contactSceneTween = new TimelineMax();
    var contactScene;
    if($(window).width() > 575) {
        contactScene = new ScrollMagic.Scene({
            triggerElement: "#contact", duration: $('#contact').outerHeight(),
            triggerHook: 1
        })
    }
    else {
        contactScene = new ScrollMagic.Scene({
            triggerElement: "#contact", duration: '100%',
            triggerHook: 1
        })
    }
    contactScene.setTween(contactSceneTween
        .set('#contact .h5, #contact p', {transform : 'translateY(-200px)', opacity: 0, visibility: 'hidden'})
        .set('#contact form', {transform : 'translateY(200px)', opacity: 0, visibility: 'hidden'})

        .add(TweenMax.to('#contact .h5, #contact p', 1, {transform : 'translateY(0)', opacity: 1, visibility: 'visible'}), 'first')
        .add(TweenMax.to('#contact form', 1, {transform : 'translateY(0)', opacity: 1, visibility: 'visible'}), 'first'))
    // .addIndicators({name: "8  (duration: 300)"})
    .addTo(controller);


    if($(window).width() < 576) {
        navScene.stop();
    }
});

//$(function() {
//    $(document).on('submit', 'form', function(event) {
//        event.preventDefault();
//
//        //ajax will be go here
//
//        $('#form-success-toast').toast('show');
//    })
//});
//