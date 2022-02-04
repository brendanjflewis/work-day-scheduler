// shows current date (added day of the week and removed seconds)
var today = moment().format("dddd MMMM Do YYYY, h:mma");
$("#currentDay").text(today);



$(document).ready(function() {
    // click function to store time with save button
    saveBtn = $(".saveBtn").on("click", function() {
        var time = $(this).siblings(".hour").text();
        var plan = $(this).siblings(".plan").val();
        console.log(this);

        localStorage.setItem(time, plan);
    });

    
    function timeBlockColor() {
        var currentTime = moment().hour();
        
        timeBlock = $(".time-block").each(function () {
            var hour = ($(this).attr("id"));


            if (currentTime > hour) {
                $(this).addClass("past");
            } else if (currentTime === hour) {
                $(this).addClass("present");  
            } else {
                $(this).addClass("future");
            }

            console.log(this);
        })
    };
    timeBlockColor();
})
// $(document).ready(function() {
//     var currentDate = momenent().format('MMM Do YY');
//     $("#currentDay").html(currentDate);
//     $(".saveBtn").on("click", function () {
        
//     })
// })