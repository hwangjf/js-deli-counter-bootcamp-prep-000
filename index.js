var katzDeli = [];

function takeANumber (katzDeliLine, person) {
  katzDeliLine.push(person)
  return "Welcome, " + person + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing (katzDeliLine) {
  for (katzDeliLine.length; katzDeliLine.length >= 0; katzDeliLine.shift()) {
    if (katzDeliLine.length === 0) {
      return "There is nobody waiting to be served!"
    } else {
      return "Currently serving " + katzDeliLine.shift() + "."
    }
  }
}

function currentLine (line) {
  if (line.length === 0) {
    return "The line is currently empty."
  } else {
    return "The line is currently : " + line[0] +
  }
}