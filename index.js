var katzDeli = [];

function takeANumber (katzDeliLine, person) {

  katzDeliLine.push(person)
  return "Welcome, " + person + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing ( ) {
  if (katzDeliLine === []) {
  return 
  } else {
    return "the line is empty"
  }
}