$(document).ready(function(){
// this is how the comments works in the html and js

    var removeAll = $("<button style='width:300px; height:30px;margin-left:20px;border-radius:6px;border:crimson;color:white;background-color:crimson;display:block'>Clear All</button>")
    $("#btn").click(function(){
        var body = $("body");
        var inputValue = $("#inp").val();
        if(inputValue.trim()==""){
            return false;
        }
        var li = $("<li class='desing'></li>");
        var btnDel = $("<button class='remove'>Clear</button>");
        var div = $("<div></div>");
        var ul = $("<ul class='ul'></ul>")
        console.log(body);
        console.log(div);
        li.html(inputValue);
        ul.append(li , btnDel);
        $("#inp").val("");
        $("#inp").focus();
        body.append(ul,removeAll);
       
        
        inputValue.trim();
        removeAll.click(()=>{
            ul.remove();
            removeAll.remove();
        })
        btnDel.click(()=>{
            ul.remove();
        })

    })

    // $("#hide").click(()=>{
    //     $("#h1").hide();
    // })
    // $("#show").click(()=>{
    //     $("#h1").show();
    // })





})



// $("button").click(function(){
//     $("#h1").hide();
   

// })