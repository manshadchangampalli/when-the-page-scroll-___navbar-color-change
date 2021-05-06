$(document).ready(function(){
    $(window).scroll(function(){
        // here you can give any digit depends on the scrolling rate

        if(this.scrollY>150){
            // here i want to change color or some style of navbar so
            //  i give the navbar class
            // and sticky is the new class
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    })
})