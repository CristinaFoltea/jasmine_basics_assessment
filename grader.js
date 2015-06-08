module.exports = {
  findTheScore (grades, n) {
    let init
    for (let i in grades) {
      n > grades[i].range[0] && n < (grades[i].range[1]) - 1 ? init = grades[i].grade :
      n === grades[i].range[1] || n === grades[i].range[1] - 1 ? init = grades[i].grade + '+' :
      init === grades[i].grade + '-'
    }return init
  },
  averageScore (grades) {
    return grades.reduce((init, elem) => init + elem, 0) / grades.length
  },
  medianScore (array) {
    return array.length % 2 !== 0 ? array[Math.floor(array.length / 2)] : (array[array.length / 2] + array[array.length / 2 - 1]) / 2
  },

  modeScore (array) {
  let max = 0
  let result = array.reduce(function (init, value) {
    if (init.hasOwnProperty(value)) {
      init[value] += 1
      if (max < init[value]) {max = init[value]}
    }else {init[value] = 1}
    return init
  }, {})
  let endArr = Object.keys(result).reverse().filter((value) => result[value] === max)
  return endArr.length > 1 ? endArr : parseInt(endArr[0], 10)
}
}
