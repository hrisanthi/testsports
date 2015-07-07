console.log("dataload.js loaded");


var players = new Array();
var schoolArray = new Array();
var positionArray = new Array();
var yearArray = new Array();
var infoArray = new Array();


$(document).ready(function(){
  console.log("doc loaded");

  $.ajax({
               type: "GET",
               url: "data.xml",
               dataType: "xml",
               success: function(xml){
                   console.log("success");
                   loadData(xml);
               },
               error: function(){
                   console.log("error loading");
               }
});


function loadData(xml){
    //parse the xml into variabls
    console.log("Success, loadData() called")


    $(xml).find('player').each(function(){
               //console.log("once for every person");
               var $player = $(this);
               var image = $player.find('image').text();
               console.log(image);

               var playerimgHTML ='';
               playerimgHTML += '<img class="image" alt="" src="' + image + '" /></div></li>';

               $(".img-list").append($(playerimgHTML));
});
$('.flip-container').bind('touchstart touchend', function(e) {
        e.preventDefault();
    });


$(xml).find('player').each(function(){
           //console.log("once for every person");
           var $player = $(this);
           var name = $player.attr("name");
           players.push($player.attr("name"));
           var school = $player.find('school').text();
           schoolArray.push($player.find('school').text());
           var position = $player.find('position').text();
           positionArray.push($player.find('position').text());
           var year = $player.find('year').text();
           yearArray.push($player.find('year').text());
           var info = $player.find('info').text();
           infoArray.push($player.find('info').text());
           console.log(name);

               var playerHTML = '';
               playerHTML += '<h4>' + name + '</h4>';
               playerHTML += '<p><strong>SCHOOL: </strong>' + school + '</p>';
               playerHTML += '<p><strong>POSITION: </strong>' + position + '</p>';
               playerHTML += '<p><strong>YEAR: </strong>' + year + '</p>';
               playerHTML += '<p> ' + info + '</p>';


               $(".back").append($(playerHTML));

             });




  };


});
