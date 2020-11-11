window.addEventListener('load', function() {
        $(function() {
            // $(".headDown-father").slideUp();
            $(".btnDown").click(function() {
                // alert('123')
                $(".headDown").slideDown();                
            })
            $(".btnUpImg").click(function() {
                // 上滑动 slideUp()
                // alert('1');
                // $(".headDown-father").slideUp();
                $(".headDown").slideUp();
            })             
        });

})