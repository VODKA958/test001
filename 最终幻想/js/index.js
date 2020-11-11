window.addEventListener('load', function() {
    $(function() {
        
        // 2. 事件切换 hover  如果只写一个函数，那么鼠标经过和鼠标离开都会触发这个函数
        
        // 鼠标在mid停留滑出菜单
        $(".mid").hover(function() {
            // alert('1')
            $(".headDown").stop().slideToggle(500);
        });
        // 在菜单停留保持滑出状态
        $(".headDown").hover(function() {
            // alert('1')
            $(".headDown").stop().slideToggle(500);
        });
    })
    
    // let documentElement = document.documentElement;
    // let height = documentElement.clientHeight;
    // let width = documentElement.clientWidth;

    // // document.getElementsByClassName('.videoBox').style.height = height ;
    
    // document.getElementsByClassName('videoBox')[0].style.width = width+"px" ;
    // console.log(width);
})