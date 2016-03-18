$(function(){
    $('#fullpage').fullpage({
        sectionsColor:['none','#84BCAD','#EE7700','none','none'],
        controlArrows:true,
        verticalCentered:true,
        anchors:['first','second','third','fourth','last'],
        scrollingSpeed:800,
        autoScrolling:true,
        scrollBar:false,
        navigation:true,
        navigationPosition:'left',
        slidesNavigation:true,
        loopHorizontal:true,
        afterLoad:function(link,index){
            if(index==1){return}
            move('.section:nth-child('+index+') .grid .mobile-one-half .graphic-content')
            .set('opacity',1)
            .set('visibility','visible')
            .x(0)
            .end();
            move('.section:nth-child('+index+') .grid .mobile-one-half .text-content')
            .set('opacity',1)
            .set('visibility','visible')
            .x(0)
            .end();
        },
        onLeave:function(index,toindex){
            if(index==1){return}
            move('.section:nth-child('+index+') .grid .mobile-one-half .graphic-content')
            .set('opacity',0)
            .set('visibility','hidden')
            .x(-200)
            .end();
            move('.section:nth-child('+index+') .grid .mobile-one-half .text-content')
            .set('opacity',0)
            .set('visibility','hidden')
            .x(200)
            .end();
        },
        afterSlideLoad:function(se,findex,index){
            if(se=='first' || se == 'fourth' || se == 'last'){return;}
            var el = $('.section:nth-child('+findex+') .grid .mobile-one-half .graphic-content').get(index);
            var els = $('.section:nth-child('+findex+') .grid .mobile-one-half .text-content').get(index);
                move(el)
                .set('opacity',1)
                .set('visibility','visible')
                .x(0)
                .end();
                move(els)
                .set('opacity',1)
                .set('visibility','visible')
                .x(0)
                .end();
        },
        onSlideLeave:function(se,findex,index){
            if(se=='first' || se == 'fourth' || se == 'last'){return;}
            var el = $('.section:nth-child('+findex+') .grid .mobile-one-half .graphic-content').get(index);
            var els = $('.section:nth-child('+findex+') .grid .mobile-one-half .text-content').get(index);
            move(el)
            .set('opacity',0)
            .set('visibility','hidden')
            .x(-200)
            .end();
            move(els)
            .set('opacity',0)
            .set('visibility','hidden')
            .x(200)
            .end();
        }
    });
})