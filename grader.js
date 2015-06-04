module.exports={
  findTheScore: function(grades, n){
   for(var i=0, init=""; i<grades.length; i++){
      if(n > grades[i].range[0] && n < (grades[i].range[1])-1){
        init=grades[i].grade;
      }else if(n === grades[i].range[1] || n === grades[i].range[1]-1){
        init=grades[i].grade + "+";
    }else {init===grades[i].grade + "-";}
  } return init;
},
  averageScore: function(grades){
    var sum=grades.reduce(function(summ, elem){
      return summ+elem;
    }, 0);
    return sum/grades.length;
  },
  medianScore: function(array){
    var middle;
    if (array.length % 2 !== 0){
      middle=array[Math.floor(array.length/2)];
    }else{
      middle=(array[array.length/2] + array[array.length/2-1]) / 2;
    }
    return middle;
  },
  modeScore: function(array){
    for (var i=0, countMax=0, valueMax; i<array.length; i++){
      for(j=i, count=0; j<array.length; j++){
        if (array[i] === array[j]){
          count += 1;
        }
        if (count > countMax){
          countMax = count;
          valueMax = array[i];
        }
      }
    } return valueMax;
  }
}
