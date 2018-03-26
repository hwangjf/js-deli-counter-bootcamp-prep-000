var katzDeli = [];

function takeANumber (katzDeliLine, person) {
  katzDeli.push(person)
  return "Welcome, " + person + ". You are number " + katzDeli.length + " in line."
}