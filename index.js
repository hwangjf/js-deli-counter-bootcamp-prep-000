var katzDeli = [];

function takeANumber (katzDeliLine, person) {
 
  katzDeli.push(person)
  katzDeliLine = katzDeli
  return "Welcome, " + person + ". You are number " + katzDeli.length + " in line."
}