let navItem = $(".navItem").each(function(){
    $(this).css("color", "white");
});

$("#nav").css("background-color", "#145");

let evenList = $("li:even").each(function(){
    $(this).css("background-color", "#ccc");    
});

let oddList = $("li:odd").each(function(){
    $(this).css("background-color", "#aaa");
});

$("input").val("Jacob");