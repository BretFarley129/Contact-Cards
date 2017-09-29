$(document).ready(function(){
    console.log('hello')
    
    $('form').submit(()=>{
        event.preventDefault();
        var first = $('#firstName').val();
        var last = $('#lastName').val();
        var desc = $('#description').val();
        $('#right').append(
            `
            <div class="card">
                <div class="front btn">
                    <h1>${first} ${last} </h1><p>Click for Description!</p>
                </div>
                <div class="back btn">
                    ${desc}
                </div>
            </div>
            `   
        );
        // $(".back").hide();
    });
    $(document).on("click", ".btn", function(){
        console.log('yeah this is a button')
        $(".front").click(function(){
            $(this).hide();
            $(this).siblings().show();
        });
        $(".back").click(function(){
            $(this).hide();
            $(this).siblings().show();
        });
    });
   
});