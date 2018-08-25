$(document).ready(function(){
    sortMenu();
    
    $(document).on("click",".menu-btn",function(){
        sortRightMenu();
    }); 
});

$(window).resize(function(){
    sortMenu();
});

/*function toggleMenu(){
    var menuContainer = $(".menuContainer");
    if(menuContainer.hasClass("menuShowing")){
        menuContainer.animate({"height": "0px"}, 200);
        menuContainer.removeClass("menuShowing");
    } else {
        var height = menuContainer.css('height', 'auto').height(); // get real height
        menuContainer.css('height','0px'); // return current state;
        menuContainer.animate({"height": height}, 200);
        menuContainer.addClass("menuShowing");
    }
}*/

function longPageBtns () {
    var width = $('.fixedBtns').width() + 40;
    $('.fixedBtns').css({"right":"-" + width + 'px'});
    $(document).on("click",".triggerOpen",function() {
        $('.fixedBtns').animate({
            right: '0%',
        }, 700);
    });

    $(document).on("click",".triggerClose",function() {
        $('.fixedBtns').animate({
            right: '-' + width,
        }, 700);
    });
}

function scrollSmooth(){
    $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event){
        if(location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname){
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

            //Prevent default if target and animation
            if(target.length){
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 800, function(){
                    var $target = $(target);
                    $target.focus();
                    if($target.is(":focus")){ //Checking if the target was focused
                        return false;
                    }else{
                        $target.attr('tabindex','-1'); //Adding tabindex for elements not focusable
                        $target.focus(); //Set focus again
                    };
                });
            }
        }
    });
}

function toggleMenu(){
    var menuContainer = $(".menuContainer");
    if(menuContainer.hasClass("menuShowing")){
        menuContainer.animate({"height": "0px"}, 450);
        menuContainer.removeClass("menuShowing");
    } else {
        var height = menuContainer.css('height', 'auto').height(); // get real height
        menuContainer.css('height','0px'); // return current state;
        menuContainer.animate({"height": height}, 450);
        menuContainer.addClass("menuShowing");
    }
}


function setBoxHeight(){
    var maxHeight = Math.max.apply(null, $(".itemHeight").map(function () {
        return $(this).height();
    }).get());
    $('.itemHeight').height(maxHeight);
}

function infoPop(){
    $(document).on("click", ".fa-info-circle, .fa-bars", function(){
        var $this = $(this);
        var position = $this.offset();
        var name = '.' + $this.data('target');
        var textLength = $(name + ' > p').text().length
        var id = $this.data('id');

        //Adjust URLS on Links
        $(name + " ul li").each(function(){
            var tagA = $(this).find(".links");
            tagA.attr("href", tagA.attr("data") + id);
            $(this).parent().attr("data", id);
        });

        //workout class based on length of text box
        if($this.data('target') != 'infoPopNav'){
            if(textLength < 50){
                $(name).addClass('oneLine');
            }else if (textLength > 49 && textLength < 94){
                $(name).addClass('twoLines');
            }else if (textLength > 93 && textLength < 153){
                $(name).addClass('threeLines');
            }else if (textLength > 152 && textLength < 212){
                $(name).addClass('fourLines');
            }else if (textLength > 211 && textLength < 230){
                $(name).addClass('fiveLines');
            }else if (textLength > 229 && textLength < 400){
                $(name).addClass('sevenLines'); /* six lines not filalised yet */
            }      
        }

        //add classes depdning on how many li's there are
        var liCount = $('.options li').length;
        switch(liCount) {
            case 1:
                $('.optionsContainer').addClass('oneItem');
                break;
            case 2:
                $('.optionsContainer').addClass('twoItems');
                break;
            case 3:
                $('.optionsContainer').addClass('threeItems');
                break;
            case 4: 
                $('.optionsContainer').addClass('fourItems');
                break;
            case 5: 
                $('.optionsContainer').addClass('fiveItems');
                break;
            case 6: 
                $('.optionsContainer').addClass('fiveItems');
                break;
            case 7: 
                $('.optionsContainer').addClass('fiveItems');
                break;
            case 8: 
                $('.optionsContainer').addClass('fiveItems');
                break;
        }
                                                                                                                                  
        if($this.hasClass('active')){
            $this.removeClass('active');
            $(name).fadeOut();
        }else {
            $(name).css({top: position.top, left: position.left, position:'absolute'});
            $this.addClass('active');
            $(name).fadeIn();

            $('main').on("click touchstart", function(event){
                  
                //console.log(event); 
                if ($(event.target).is("i, input, select, textarea")) {
                    event.preventDefault(); 
                    return;
                }
                
                $(".infoPopup").fadeOut();
                $(".fa-info-circle").removeClass('active');
                
            });
        }
    });
}

function sortRightMenu(){
    var rightAmount = "0%";
    var menuSpace = "0%";

    if($(".rightMenu").hasClass("menuOut")){
        $(".rightMenu").removeClass("menuOut");
    }else{
        if(detectCss("medium")){
            rightAmount = "25%";
        }else if(detectCss("small")){
            rightAmount = "25%";
        }else if(detectCss("mobile")){
            rightAmount = "50%";
        }else{
            rightAmount = "15%";
        }      
        $(".rightMenu").addClass("menuOut");

        /*if( $(".menu").hasClass("fixed")){
            if(detectCss("medium")){
                menuSpace = "24%";
            }else if(detectCss("small")){
                menuSpace = "24%";
            }else if(detectCss("mobile")){
                menuSpace = "55%";
            }else{
                menuSpace = "12%";
            }
        }*/
    }
    /*$(".menu").animate({
        right: menuSpace
    }, 300);*/

    $("#bodyPush").animate({
        right: rightAmount
    }, 300);
    $(".rightMenu").animate({
        width: rightAmount
    }, 300);
    return true;
}

function detectCss(size){
    if(size == "large"){
        if($(".detectcss").width() == 400){
            return true;
        }
    }else if(size == "medium"){
        if($(".detectcss").width() == 300){
            return true;
        }
    }else if(size == "small"){
        if($(".detectcss").width() == 200){
            return true;
        }
    }else if(size == "mobile"){
        if($(".detectcss").width() == 100){
            return true;
        }
    }
    return false;
}

function sortMenu(){
    var menuContainer = $("#navigation-container .subnav");
    if( $(".menu-btn").css("display") == "block" ){
        menuContainer.addClass("menuHidden");
    }
    else{
        menuContainer.removeClass("menuHidden");
        var containerWidth = $("#navigation-container .subnav").width();
        var numberOfColumns = 0;
        var listWidth = 0;
        $("#navigation-container .subnav .menu > li > a").each(function(){
            listWidth = listWidth + $(this).outerWidth() + 20; //somme give in the calculation
            numberOfColumns++;
        });
        if(numberOfColumns > 0){
            var marginWidth = ((containerWidth-listWidth)/numberOfColumns); //20 takes a bit of give
            $("#navigation-container .subnav .menu > li > a").css({"margin-left": marginWidth/2, "margin-right": marginWidth/2});
        }
    }
}

function resizeColorBox() {
    var resizeTimer;
    if (resizeTimer) clearTimeout(resizeTimer);     //timer makes it smooth
    resizeTimer = setTimeout(function() {
        if(jQuery('#cboxOverlay').is(':visible')) {
            jQuery.colorbox.load(true);
        }
    }, 300)
}

function layersliderIndex(){
    $('#layersliderIndex').layerSlider({
        width: 2560,
        height: 800,
        pauseOnHover: false,
        autoPlayVideos: false,
        skinsPath: '../js/layerslider/skins/',
        navStartStop: false,
        navPrevNext: true,
        //hoverBottomNav: true,
        showCircleTimer: false,
        //thumbnailNavigation: 'always',
		navButtons:false,
    });
}

function layerslider(){
    $('#layerslider').layerSlider({
        width: 2560,
        height: 800,
        pauseOnHover: false,
        autoPlayVideos: false,
        skinsPath: '../js/layerslider/skins/',
        navStartStop: false,
        navPrevNext: true,
        //hoverBottomNav: true,
        showCircleTimer: false,
        //thumbnailNavigation: 'always',
        navButtons:false,
    });
}

function fancyBox(width){
    if(width == 'default'){
        var width = '';
        if(detectCss("large")){
            width = "25%";
        }else if(detectCss("medium")){
            width = "50%";
        }else if(detectCss("small")){
            width = "75%";
        }else if(detectCss("mobile")){
            width = "100%";
        }
    }
    $(document).on("click", ".delete", function(){
        var deleteId = $(this).attr("data"); 
        $("#popupDeleteButton").attr("data", deleteId);
        var data = $(".popupContent").html();
        $.fancybox.open({
            content  : data,
            autoSize : false,
            width    : width,
            height   : "auto",  
            helpers : { 
                overlay: {
                    css: {'background': 'rgba(0,0,0,0.7)'}
                }
            }
        });
    });
}  

//view360('.container360', '.container360Before', '.container360After', 'imageEnhancement01A.jpg', 'imageEnhancement01B.jpg');
function view360(container, beforeContainer, afterContainer, beforeImage, afterImage, num){
    var width = $(container).width() / 2;
    var height = width + 120; // this may change
    $(beforeContainer).height(height);
    $(afterContainer).height(height);
    var viewerBefore = PhotoSphereViewer({
        container: 'before360' + num,
        panorama: '/img/360/' + beforeImage,
        navbar: false,
        default_fov: 170,
        time_anim: false,
        mousewheel: false,
        move_inertia: false
    });      
    var viewerAfter = PhotoSphereViewer({
        container: 'after360' + num,
        panorama: '/img/360/' + afterImage,
        navbar: false,
        default_fov: 170,
        mousewheel: false,
        move_inertia: false
    });     
    //START THEM TOGETHER
    viewerAfter.on('panorama-loaded', function(){
        viewerBefore.startAutorotate();
        viewerAfter.startAutorotate();
    }); 

    //WHEN ONE MOVES THE OTHER DOES
    $(document).on("mousedown", beforeContainer, function(){
        viewerAfter.stopAutorotate();
        var position = viewerBefore.getPosition();
        var long = position.longitude;
        var lat = position.latitude;
        viewerAfter.rotate(position);
    });
    $(document).on("mousemove", beforeContainer, function(){
        viewerBefore.stopAutorotate();
        var position = viewerBefore.getPosition();
        var long = position.longitude;
        var lat = position.latitude;
        viewerAfter.rotate(position);
    });     
    $(document).on("mousedown", afterContainer, function(){
        viewerBefore.stopAutorotate();
        var position = viewerAfter.getPosition();
        var long = position.longitude;
        var lat = position.latitude;
        viewerBefore.rotate(position);
    });
    $(document).on("mousemove", afterContainer, function(){
        viewerAfter.stopAutorotate();
        var position = viewerAfter.getPosition();
        var long = position.longitude;
        var lat = position.latitude;
        viewerBefore.rotate(position);
    });
}   
     
function jobGrid(){
    $("#kendoGrid").kendoGrid({
        dataSource: {
            transport: {    
                read: {
                    url: "external/job.php",
                    dataType: "json",           
                    type: "POST",       
                    cache: false,       
                    parameterMap: function (options) {
                        return kendo.stringify(options);
                    } 
                }
            },
            schema: {
                data: "rows",
                total: "total"
            },
            serverPaging: true,
            serverFiltering: true,
            pageSize: 20,
        }, 
        filterable: {
            mode: "row"
        },
        scrollable: false,
        groupable: false,
        serverPaging: true,
        mobile: true, 
        sortable: true,
        pageable: {
            refresh: true,
            pageSizes: true,
            buttonCount: 2
        }, 
        columns: [
            {
                field: "jobTitle",
                title: "Title",
                filterable: {
                    operators: {
                        string: {
                            contains: "Contains",
                            startswith: "Starts With",
                            eq: "Is Equal To"
                        }
                    }
                }
            },  
            {
                field: "jobDateSubmitted",
                title: "Job Submitted",
                filterable: false
            },
            {
                field: "totalCost",
                title: "Job Cost",
                filterable: false
            },
            {
                field: "fileGroupCount",
                title: "Progress (images completed)",
                filterable: false
            },
            {
                field: "status",
                title: "Status",
                filterable: false
            },
            {
               field: "jobAction", 
               title: "Action",
               template:"#= jobAction # #= jobAction2 #",
               filterable: false,
               encoded: false
            }
        ]  
    });
}


function transactionGrid(){
    $("#kendoGrid").kendoGrid({
        /*toolbar: ["excel"],
        excel: {
            fileName: "Transactions.xlsx",
            allPages: true
        },*/
        dataSource: {
            transport: {
                read: {
                    url: "external/transactions.php",
                    dataType: "json",
                    cache: false
                }
            },
            schema: {
                data: "rows",
                total: "total"
            },
            pageSize: 20
        }, 
        filterable: {
            mode: "row"
        },
        scrollable: false,
        groupable: false,
        serverPaging: true,
        mobile: true, 
        sortable: true,
        pageable: {
            refresh: true,
            pageSizes: true,
            buttonCount: 2
        }, 
        columns: [
            {
                field: "date",
                title: "Date",
                filterable: false
            },
            {
                field: "description",
                title: "Description",
                filterable: false
            },
            {
                field: "amount",
                title: "Amount",
                filterable: false
            },
            {
                field: "actionView", 
                title: "Action",
                template:"#= actionView #",
                filterable: false,
                encoded: false
            }
        ]  
    }); 
}


function jobGridMobile(){
    $("#kendoGrid").kendoGrid({
        dataSource: {
            transport: {
                read: {
                    url: "external/jobNew.php",
                    dataType: "json",
                    cache: false
                }
            },
            schema: {
                data: "rows",
                total: "total"
            },
            pageSize: 10
        },  
        batch: true,
        pageSize: 10,   
        //height: kendo.support.mobileOS.wp ? "24em" : 430,
        editable: "popup",
        sortable: true,
        columnMenu: true,
        pageable: true, 
        pageable: {
            refresh: true,
            pageSizes: true,
            buttonCount: 2
        }, 
        columns: [
            {
                field: "jobTitle",
                title: "Title",
                filterable: {
                    operators: {
                        string: {
                            contains: "Contains",
                            startswith: "Starts With",
                            eq: "Is Equal To"
                        }
                    }
                }
            },
            {
                field: "totalCost",
                title: "Job Cost",
                filterable: false
            },
            {
                field: "status",
                title: "Status",
                filterable: false
            },
            {
                field: "jobAction", 
                title: "Action",
                template:"#= jobAction # #= jobAction2 #",
                filterable: false,
                encoded: false
            }
        ]  
    });

}


 
function jobsPerMonth(jobsPerMonth) {
    var max = Math.max.apply(null,jobsPerMonth);  
    $("#chart").kendoChart({
        theme: "bootstrap",                    
        title: {
            text: "Jobs Per Month"
        },
        legend: {
            visible: false
        },
        seriesDefaults: {
            type: "line",
            style: "smooth"
        },
        series: [{
            data: jobsPerMonth
        }], 
        valueAxis: {
            max: max + 5,
            line: {
                visible: false
            },
            minorGridLines: {
                visible: true
            }
        },
        categoryAxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            line: {
                visible: false
            } 
        },
        tooltip: {
            visible: true,
            template: "#= value #"
        }
    });
}

function spendPerMonth(spendPerMonth){
    var max = Math.max.apply(null,spendPerMonth);

    $("#chartLine").kendoChart({     
        theme: "bootstrap", 
        title: {
            text: "Spend Per Month"
        },
        legend: {
            visible: false
        },
        seriesDefaults: {
           type: "line",
           style: "smooth"
        },
        series: [
            {
                name: "",
                data: spendPerMonth
            }
        ], 
        valueAxis: {
            max: max + 100,
            line: {
                visible: false
            },
            minorGridLines: {
                visible: true
            }
        },
        categoryAxis: {
            categories: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
            line: {
                visible: false
            } 
        },
        tooltip: {
            visible: true,
            format: "{0}%",
            template: "#$= series.name #$ #= value #"
        }
    });
}
        
function pieChart() {
    $("#pie").kendoChart({
        theme: "bootstrap",
        title: {
            position: "top",
            text: "Edits by Type"
        },
        dataSource: {
            transport: {
                read: {
                    url: "external/averageJobType.php",
                    dataType: "json",
                    cache: false
                }
            },
            schema: {
                data: "data"
            },
        }, 
        legend: {
            position: "bottom"
        },
        seriesDefaults: {
            labels: {
                visible: false,
                background: "",
                template: "#= category #: \n #= value#"
            }
        },
        series: [
            {
                type: "pie",
                field: "value",
                categoryField: "category",
                startAngle: 150
            }
        ],
        tooltip: {
            visible: true,
            template: "#= category # #= value #"
        }
    });
}
            
function resizeGrid() {
    var gridElement = $("#kendoGrid"),
        dataArea = gridElement.find(".k-grid-content"),
        gridHeight = gridElement.innerHeight(),
        otherElements = gridElement.children().not(".k-grid-content"),
        otherElementsHeight = 0;
    otherElements.each(function(){
        otherElementsHeight += $(this).outerHeight();
    });
    dataArea.height(gridHeight - otherElementsHeight);
}

function resizeWrapper() {
    $("#outerWrapper").height($('#body').innerHeight());
}

function supportsSVG() {
    return !! document.createElementNS && !! document.createElementNS('http://www.w3.org/2000/svg','svg').createSVGRect;  
}

function toggleCurrencyMenu(){
    var menu = $('.menuCurrencyContainer');
    if(menu.hasClass('hidden')){
        menu.slideDown(300);
        menu.removeClass('hidden');
    }   
    else{
        menu.slideUp(300);
        menu.addClass('hidden');
    }
}  
    
function userMenu(){
    var menu = $('.userContainer');
    if(menu.hasClass('hidden')){
        menu.slideDown(300);
        menu.removeClass('hidden');
    }   
    else{
        menu.slideUp(300);
        menu.addClass('hidden');
    }
}

function enableSelectBox(){
    $('div.selectBox').each(function(){
        $(this).children('span.selected').html($(this).children('div.selectOptions').children('span.selectOption:first').html());
        $(this).attr('value',$(this).children('div.selectOptions').children('span.selectOption:first').attr('value'));
            
        $(this).children('span.selected,span.selectArrow').click(function(){
            if($(this).parent().children('div.selectOptions').css('display') == 'none'){
                //$(this).parent().children('div.selectOptions').css('display','block');
                $("span[value='Choose Option']").remove();

                $("span.disabled").unbind("click");
                    
                $(this).parent().children('div.selectOptions').animate({
                    height: "toggle",
                    position: "absolute",
                    zIndex: 999
                }, 500, function() {   // Animation complete.
                }); 


               /* $(this).parent().children('div.selectOptions').click(function(){
                    $('selectBox').removeClass('active');
                    $('selectOptions').removeClass('active');
                });*/

                
                $(this).parent().children('div.selectOptions').addClass('active');
                $('div.selectBox').addClass('active');
            }
            else if($(this).parent().children('div.selectOptions').css('display') == 'block'){
                $(this).parent().children('div.selectOptions').animate({
                    height: "toggle",
                    position: "absolute",
                    zIndex: 999
                }, 500, function() {   // Animation complete.
                }); 

                $(this).parent().children('div.selectOptions').removeClass('active');
                $('div.selectBox').removeClass('active');
            }
            else{
                $(this).parent().children('div.selectOptions').css('display','none');
            }
        });
            
        $(this).find('span.selectOption').click(function(){
            //$(this).parent().css('display','none');

            $(this).parent().animate({
                height: "toggle",
                position: "absolute",
                zIndex: 999
            }, 500, function() {
            });
            $(this).closest('div.selectBox').removeClass("active");
            $(this).closest('div.selectBox').attr('value',$(this).attr('value'));
            $('#hiddenSizeInput').attr( "value", $(this).attr('value'));
            $(this).parent().siblings('span.selected').html($(this).html());
        });
    });             
}