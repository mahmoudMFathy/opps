$(document).ready(function(){
    $(".dropdown-toggle").click(function () {
        $(".dropdown-menu").show()
    });

    

    $('.serchbut').click(function(){
        $(this).siblings('select').open('open');
    });

})
