var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1SigILk7hyxCgZ7vNdeFzh3e7WVYj2YSOD_Y1aYBa7jI/pubhtml';

$(document).ready( function() {
  Tabletop.init( { key: public_spreadsheet_url,
                   callback: showInfo
                    } );
});

function showInfo(data, tabletop) {
  var source   = $("#sports-template").html();
  var template = Handlebars.compile(source);
  console.log(data);

  $.each( tabletop.sheets("soccer").all(), function(i, cat) {
    var html = template(cat);
    $("#content").append(html);
  });
}
