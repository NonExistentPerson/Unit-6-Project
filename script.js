$("button").click(function(){
    var Name=$(".Name").val();
    $(".results").append("In the year 2050, " + Name);
});

$("button").click(function(){
    var Age=parseInt($(".Age").val());
    $(".results").append(" will be " + (31 + Age));
});

$("button").click(function(){
    var Championship=$(".Championship").val();
    $(".results").append(" and Cloud 9 would have won " + Championship + " championships.");
});