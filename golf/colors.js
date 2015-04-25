function addColors (datasets) {
  // var colors = Please.make_color({
  //   colors_returned: datasets.length
  // , full_random: true
  // })

  var colors = [ '#e6e4ad', '#334a39', '#e6c344', '#264757', '#93858c'
               , '#030402', '#3a290d', '#d2fcf6', '#234f98', '#47723a'
               , '#79271c']  // Ugh 11 elements

  for (var i = 0; i < datasets.length; i ++) {
    var base = colors[i]
    datasets[i].fillColor = 'rgba(0,0,0,0)'
    datasets[i].strokeColor = base
    datasets[i].pointColor = base
    datasets[i].pointStrokeColor = '#fff'
    datasets[i].pointHighlightFill = '#fff'
    datasets[i].pointHighlightStroke = base
  }
}
