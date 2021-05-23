function scuberGreetingForFeet(distance){
  // Write your code here!
  if (distance <= 400){
    return 'This one is on me!'
    } else if (distance > 2000 && distance < 2500){
      return 'I will gladly take your thirty bucks.'
  } else if (distance > 2500){
    return 'No can do.'
  }
} 

function ternaryCheckCity(city){
  // Write your code here!
  if (city === "NYC"){
    return "Ok, sounds good."
  }else {
    return "No go."
  }
}
//return (city === "NYC") ? "Ok, sounds good." : "No go."   -can also do it this way
function switchOnCharmFromTip(tipString){
  // Write your code here!
  switch(tipString){
    case "generous":
      return "Thank you so much."
      case "not as generous":
        return "Thank you."
        case "thanks for everything":
          return "Bye."
  }
}