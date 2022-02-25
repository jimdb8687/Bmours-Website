$(function() {

    //Wait for Pinegrow to wake-up
    $("body").one("pinegrow-ready", function(e, pinegrow) {

        //Create new Pinegrow framework object
        var f = new PgFramework("UserLib", "UserLib");

        //This will prevent activating multiple versions of this framework being loaded
        f.type = "UserLib";
        f.allow_single_type = true;
        f.user_lib = true

        var comp_comp1 = new PgComponentType('comp1', 'aspen-footer');
        comp_comp1.code = '<div class="bloc none py-2 bgc-platinum l-bloc" data-pg-name="Footer" data-pg-collapsed>    <div class="container ">        <div class="row none align-items-center justify-content-center">            <div class="col-sm-4 col-md-4">                <a href="aspen/contact.html" class="a-btn a-block footer-link d-block text-md-center text-sm-center text-center">Contact</a>            </div>            <div class="col-sm-4 col-md-4">                <a href="aspen/index.html" class="a-btn a-block footer-link d-block text-md-center text-sm-center text-center">Guidebooks</a>            </div>            <div class="col-sm-4 col-md-4">                <a href="aspen/contact.html" class="a-btn a-block footer-link d-block text-md-center text-sm-center text-center">Guess Feedback</a>            </div>        </div>    </div></div>';
        comp_comp1.parent_selector = null;
        f.addComponentType(comp_comp1);
        
        var comp_comp2 = new PgComponentType('comp2', '2 Col Video');
        comp_comp2.code = '<div class="bloc l-bloc" id="bloc-8" data-pg-name="General Info">    <div class="container bloc-lg" data-pg-collapsed>        <div class="row">            <div class="col-md-6" data-pg-name="Videos 1">                <div class="embed-responsive embed-responsive-16by9">                    <iframe width="1476" height="1304" src="https://www.youtube.com/embed/02_Jhg7OG7o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                </div>            </div>            <div class="col-md-6" data-pg-name="Video 2">                <div class="embed-responsive embed-responsive-16by9">                    <iframe class="embed-responsive-item lazyload" src="img/lazyload-ph.png" data-src="https://player.vimeo.com/video/163403597" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>                </div>            </div>        </div>    </div></div>';
        comp_comp2.parent_selector = null;
        f.addComponentType(comp_comp2);
        
        var comp_comp3 = new PgComponentType('comp3', 'aspen-navbar');
        comp_comp3.code = '<div class="bloc full-width-bloc bgc-teal-blue d-bloc " id="aspen-guidebook-title" data-pg-name="Navbar">    <div class="container " data-pg-collapsed>        <div class="row">            <div class="col-lg-2 col-md-2 col-sm-2 col">                <div class="row">                    <div class="col">                        <a class="navbar-brand link-style d-block ml-lg-4" href="aspen/index.html">                            <img src="img/mountains-4.png" alt="logo"/>                        </a>                    </div>                </div>            </div>            <div class="col-lg-10 col-md-10 col-sm-10 col">                <nav class="navbar row navbar-light navbar-expand-md px-lg-5" role="navigation">                    <button id="nav-toggle" type="button" class="ui-navbar-toggler navbar-toggler border-0 p-0 ml-auto mr-md-0 menu-icon-rounded-uneven-b-list" data-toggle="collapse" data-target=".navbar-1" aria-expanded="false" aria-label="Toggle navigation">                        <span class="navbar-toggler-icon"></span>                    </button>                    <div class="collapse navbar-collapse navbar-1 special-dropdown-nav  sidebar-nav">                        <ul class="site-navigation nav navbar-nav none ml-auto">                            <li class="nav-item">                                <a href="aspen/index.html" class="nav-link a-btn ltc-light-gray ltc-5648">Guidebooks</a>                            </li>                            <li class="nav-item">                                <a href="aspen/contact.html" class="nav-link  ltc-light-gray ltc-5648">Contact</a>                            </li>                            <li class="nav-item">                                <a href="aspen/contact.html" class="nav-link a-btn ltc-light-gray ltc-5648">Feedback</a>                            </li>                        </ul>                    </div>                </nav>            </div>        </div>    </div></div>';
        comp_comp3.parent_selector = null;
        f.addComponentType(comp_comp3);
        
        var comp_comp4 = new PgComponentType('comp4', 'Pill Tabs');
        comp_comp4.code = '<ul class="nav mb-3 nav-justified nav-pills" id="pills-tab" role="tablist" data-pg-name="Pills" data-pg-collapsed>\
    <li class="nav-item" data-pg-name="General Info">\
        <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Guide</a>\
    </li>\
    <li class="nav-item" data-pg-name="Videos">\
        <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Videos</a>\
    </li>\
</ul>';
        comp_comp4.parent_selector = null;
        f.addComponentType(comp_comp4);
        
        var comp_comp5 = new PgComponentType('comp5', 'Pill Pages');
        comp_comp5.code = '<div class="tab-content" id="pills-tabContent" data-pg-name="Pill Pages" data-pg-collapsed>\
    <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" data-pg-name="Basic Info">\
        <div class="bgc-charcoal d-bloc bloc" id="bloc-9" data-pg-name="Key Points">\
            <div class="container" data-pg-collapsed>\
                <div class="row" data-pg-name="Info and Docs" id="washer-dryer-info">\
                    <div class="col-sm-8">\
                        <h5 class="pt-2">Important Info:</h5>\
                        <div>\
                            <ul>\
                                <li>Washer/Dryer can \
                                    <b>only</b> use powder detergent\
                                </li>\
                                <li>Can only handle light loads</li>\
                                <ul>\
                                    <li>For heavier clothing use basement units</li>\
                                    <li>Entry Code for laundry room:\
                                        <b>21*333333</b>\
                                    </li>\
                                    <li>Laundry takes $3 total in quarters - can get quarters from front desk</li>\
                                </ul>\
                            </ul>\
                        </div>\
                    </div>\
                    <div class="col-sm-4 align-self-center offset-lg-0" data-pg-collapsed>\
                        <div class="row align-items-center justify-content-right">\
                            <div class="row align-items-center">\
                                <div class="align-self-center col">\
                                    <h5 class="text-lg-center mx-auto">Document Links:</h5>\
                                    <ul class="list-unstyled">\
                                        <li>\
                                            <a href="downloads/Dispatcher.pdf" class="a-btn a-block d-block text-md-center text-sm-center text-center ltc-blue-ryb text-lg-center" target="">User Manual</a>\
                                        </li>\
                                        <li>\
</li>\
                                        <li>\
</li>\
                                    </ul>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                </div>\
            </div>\
        </div>\
    </div>\
    <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" data-pg-name="Docs" data-pg-collapsed>\
        <div class="bloc full-width-bloc bgc-charcoal d-bloc" id="washer-dryer-videos" data-pg-name="Videos">\
            <div class="container bloc-sm">\
                <div class="row border border-dark" data-pg-name="Tutorial Videos">\
                    <div class="col">\
                        <h3 class="mg-md text-center mg-sm-xs btn-resize-mode h3-style"> <u>Video Tutorials</u><br> </h3>\
                    </div>\
                </div>\
                <div class="row voffset align-items-center" data-pg-name="Videos">\
                    <div class="col-lg-4 col-12 col-md-6 align-self-lg-start align-self-lg-stretch" data-pg-name="Loading">\
                        <h4 class="mg-md text-center">\
					1. Loading &amp; Cycle Selection </h4>\
                        <p class="d-sm-block d-none">\
					This video explains how to load the washer as well as the steps to to use just the washer, just the dryer or both.&nbsp;<br> </p>\
                        <div class="embed-responsive embed-responsive-16by9 mb-1">\
                            <iframe class="embed-responsive-item lazyload" src="img/lazyload-ph.png" data-src="https://www.youtube.com/embed/y0qY5sGELWk" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen>\
</iframe>\
                        </div>\
                    </div>\
                    <div class="col-lg-4 offset-md-0 col-12 col-md-6 align-self-lg-start align-self-lg-stretch" data-pg-name="Detergent">\
                        <h4 class="mg-md text-center">\
					2. Detergent &amp; Fabric Softener<br> </h4>\
                        <p class="d-sm-block d-none">\
					This video explains the compartments within the detergent dispenser drawer. Also tips on using using the Clean Washer cycle to keep your Haier combo clean and fresh. <br> </p>\
                        <div class="embed-responsive embed-responsive-16by9 mt-auto">\
                            <iframe class="embed-responsive-item lazyload" src="img/lazyload-ph.png" data-src="https://www.youtube.com/embed/R1blEsLQgY0?list=PLQVdi8XoKa_pREa8D4CUrpZ81s74WFexu" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen>\
</iframe>\
                        </div>\
                    </div>\
                    <div class="col-lg-4 offset-lg-0 offset-md-0 col-12 col-md-6 align-self-lg-stretch" data-pg-name="Cleaning">\
                        <h4 class="mg-md text-center">\
					3. Cleaning the Button Trap </h4>\
                        <p class="d-sm-block d-none">\
					Watch this video to learn how to clean the button trap or debris filter on your combination washer/dryer from Haier.<br> </p>\
                        <div class="embed-responsive embed-responsive-16by9 d-flex">\
                            <iframe class="embed-responsive-item lazyload" src="img/lazyload-ph.png" data-src="https://www.youtube.com/embed/D2jYHVzu0Sg?list=PLQVdi8XoKa_pREa8D4CUrpZ81s74WFexu" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen>\
</iframe>\
                        </div>\
                    </div>\
                </div>\
            </div>\
        </div>\
    </div>\
</div>';
        comp_comp5.parent_selector = null;
        f.addComponentType(comp_comp5);
        
        //Tell Pinegrow about the framework
        pinegrow.addFramework(f);
            
        var section = new PgFrameworkLibSection("UserLib_lib", "Components");
        //Pass components in array
        section.setComponentTypes([comp_comp1, comp_comp2, comp_comp3, comp_comp4, comp_comp5]);

        f.addLibSection(section);
   });
});