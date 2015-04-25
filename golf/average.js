// The datasets these functions operate on are the chart.datasets, not
// origDatasets

function movingAverage (datasets) {
  for (var i = 0; i < datasets.length; i ++) {
    var sum = 0
      , count = 0
      , data = datasets[i].points
    for (var j = 0; j < data.length; j ++) {
      if (data[j].value !== null) {
        count ++
        sum += data[j].value
      }
      data[j].value = sum / count
    }
  }
}

function revertToOrig (datasets) {
  for (var i = 0; i < datasets.length; i ++) {
    var data = datasets[i].points
    for (var j = 0; j < data.length; j ++) {
      data[j].value = origDatasets[i].data[j]
    }
  }
}
