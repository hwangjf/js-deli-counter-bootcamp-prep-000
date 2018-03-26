var katzDeli = [];

function takeANumber (katzDeliLine, person) {

  katzDeli.push(person)
  katzDeli.push(katzDeliLine)
  return "Welcome, " + person + ". You are number " + katzDeli.length + " in line."
}