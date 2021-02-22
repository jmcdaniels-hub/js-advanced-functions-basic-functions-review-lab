function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}


function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(second = "*"){
    return function(first = 'special'){
        return `You are ${second}${first}${second}!`
    }
   
}


let Calculator = {
    add: function(a, b) {
      return a + b;
    },
  
    subtract: function(a, b) {
      return a - b;
    },
  
    multiply: function(a, b) {
      return a * b;
    },
  
    divide: function(a, b) {
      return a / b;
    }
  }

  function actionApplyer(startingPoint, array = []){
    if (startingPoint === 13) {
   const newPoint = (startingPoint * 2 + 1000) % 7;
   return newPoint;
  } else {
     return startingPoint;
  }
  }