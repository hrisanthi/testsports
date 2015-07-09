var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1SigILk7hyxCgZ7vNdeFzh3e7WVYj2YSOD_Y1aYBa7jI/pubhtml';

$(document).ready( function() {
  Tabletop.init( { key: public_spreadsheet_url,
                   callback: showInfo
                    } );
});

function showInfo(data, tabletop) {
  var source   = $(".sports-template").html();
  var source2   = $(".sports-template2").html();
  var template = Handlebars.compile(source);
  var template2 = Handlebars.compile(source2);
  console.log(data);

  $.each( tabletop.sheets("soccer1").all(), function(i, soccer) {
    var html = template(soccer);
    $("#content").append(html);
  });
  $.each( tabletop.sheets("soccer2").all(), function(i, cat) {
    var html = template2(cat);
    $("#content2").append(html);
  });
}

  $(".flip-container").flip({
  axis: 'y',
  trigger: 'click'
});
