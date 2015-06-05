module.exports = {
  findTheScore: function (grades, n) {
    for (var i = 0, init = ''; i < grades.length; i++) {
      if (n > grades[i].range[0] && n < (grades[i].range[1]) - 1) {
        init = grades[i].grade
      }else if (n === grades[i].range[1] || n === grades[i].range[1] - 1) {
        init = grades[i].grade + '+'
      }else {init === grades[i].grade + '-'}
    }return init
  },
  averageScore: function (grades) {
    var sum = grades.reduce(function (summ, elem) {return summ + elem}, 0)
    return sum / grades.length
  },
  medianScore: function (array) {
    var middle
    if (array.length % 2 !== 0) {
      middle = array[Math.floor(array.length / 2)]
    }else {middle = (array[array.length / 2] + array[array.length / 2 - 1]) / 2}
    return middle
  },
modeScore: function (array) {
  var max = 0
  var result = array.reduce(function (init, value) {
    if (init.hasOwnProperty(value)) {
      init[value] += 1
      if (max < init[value]) { max = init[value]}
    }else {init[value] = 1}
    return init
  }, {})
  var endArr = Object.keys(result).filter(function (value) { return result[value] === max})
  if (endArr.length > 1) {
    return endArr
  } else {return endArr[0]}
}
}
