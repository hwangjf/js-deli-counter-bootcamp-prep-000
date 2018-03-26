var katzDeli = [];

function takeANumber (katzDeliLine, person) {
  katzDeliLine.push(person)
  return "Welcome, " + person + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing (katzDeliLine) {
  if (katzDeliLine === []) {
  return ""
  } else {
    return "There is nobody waiting to be served!"
  }
}