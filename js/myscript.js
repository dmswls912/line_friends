	$(function(){
        const loading = $('.loading');

        $(window).on('load',function(){
            loading.remove()
        })
        // 54.로딩 이후에 가로 스크롤 다시 생기도록 설정
        $(window).on('pageshow',function(){
            $('html,body').css({'overflow-x':'hidden','overflow-y':'visible'});
            $('body').css('overflow','visible');
        })
        // 19.캐로셀 옵션 설정
        $('.carousel').carousel({
        	interval : 3000
        });
        // 38.animatescroll plugin 동작구문
        $('.navbar li:nth-child(1) a').click(function(){
            $('#top').animatescroll({padding:115,easing:'easeInQuad'});
        })
        $('.navbar li:nth-child(2) a').click(function(){
            $('#birth').animatescroll({padding:115,easing:'easeInQuad'});
        })
        $('.navbar li:nth-child(3) a').click(function(){
            $('#secret').animatescroll({padding:115,easing:'easeInQuad'});
        })
        $('.navbar li:nth-child(4) a').click(function(){
            $('#products').animatescroll({padding:115,easing:'easeInQuad'});
        })
        $('.navbar li:nth-child(5) a').click(function(){
            $('#cf').animatescroll({padding:115,easing:'easeInQuad'});
        })
        $('.navbar li:nth-child(6) a').click(function(){
            $('#garden').animatescroll({padding:115,easing:'easeInQuad'});
        })
        $('.navbar li:nth-child(6) a').click(function(){
            $('#contact').animatescroll({padding:115,easing:'easeInQuad'});
        })

        // 65. waypoint plugin 동작구문
        $('.wp1').waypoint(function(direction){
            if(direction==='down'){
                $('.wp1').addClass('animate__animated animate__fadeInUp');
            }
        },{
            offset:'80%'
        })
        $('.wp1').waypoint(function(direction){
            if(direction==='up'){
                $('.wp1').removeClass('animate__animated animate__fadeInUp');
            }
        },{
            offset:'60%'
        })
        //1 end 

        $('.wp2').waypoint(function(direction){
            if(direction==='down'){
                $('.wp2').addClass('animate__animated animate__fadeInDown');
            }
        },{
            offset:'70%'
        })
        $('.wp2').waypoint(function(direction){
            if(direction==='up'){
                $('.wp2').removeClass('animate__animated animate__fadeInDown');
            }
        },{
            offset:'50%'
        })
        //2 end 

        $('.wp3').waypoint(function(direction){
            if(direction==='down'){
                $('.wp3').addClass('animate__animated animate__fadeInLeft');
            }
        },{
            offset:'60%'
        })
        $('.wp3').waypoint(function(direction){
            if(direction==='up'){
                $('.wp3').removeClass('animate__animated animate__fadeInLeft');
            }
        },{
            offset:'60%'
        })
        //3 end 

        $('.wp4').waypoint(function(direction){
            if(direction==='down'){
                $('.wp4').addClass('animate__animated animate__fadeInRight');
            }
        },{
            offset:'60%'
        })
        $('.wp4').waypoint(function(direction){
            if(direction==='up'){
                $('.wp4').removeClass('animate__animated animate__fadeInRight');
            }
        },{
            offset:'50%'
        })
        //4 end 

        $('.wp5').waypoint(function(direction){
            if(direction==='down'){
                $('.wp5').addClass('animate__animated animate__fadeIn');
            }
        },{
            offset:'80%'
        })
        $('.wp5').waypoint(function(direction){
            if(direction==='up'){
                $('.wp5').removeClass('animate__animated animate__fadeIn');
            }
        },{
            offset:'50%'
        })
        //5 end 

        $('.wp6').waypoint(function(direction){
            if(direction==='down'){
                $('.wp6').addClass('animate__animated animate__fadeInUp');
            }
        },{
            offset:'80%'
        })
        $('.wp6').waypoint(function(direction){
            if(direction==='up'){
                $('.wp6').removeClass('animate__animated animate__fadeInUp');
            }
        },{
            offset:'60%'
        })
        //6 end 

        $('.wp7').waypoint(function(direction){
            if(direction==='down'){
                $('.wp7').addClass('animate__animated animate__rotateInDownLeft');
            }
        },{
            offset:'80%'
        })
        $('.wp7').waypoint(function(direction){
            if(direction==='up'){
                $('.wp7').removeClass('animate__animated animate__rotateInDownLeft');
            }
        },{
            offset:'60%'
        })
        //7 end 

        $('.wp8').waypoint(function(direction){
            if(direction==='down'){
                $('.wp8').addClass('animate__animated animate__rotateInDownRight');
            }
        },{
            offset:'80%'
        })
        $('.wp8').waypoint(function(direction){
            if(direction==='up'){
                $('.wp8').removeClass('animate__animated animate__rotateInDownRight');
            }
        },{
            offset:'50%'
        })
        //8 end 

    })