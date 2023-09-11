function convert_to_raindrop_sound(number) {
    const rain = []
  
    if (number % 3 === 0) {
      rain.push('Pling')
    }
  
    if (number % 5 === 0) {
      rain.push('Plang')
    }
    if (number % 7 === 0) {
      rain.push('Plong')
    }
    if (rain.length === 0) {
      return number
    }
    return rain.join('')
  }
  console.log(convert_to_raindrop_sound(25))
  console.log(convert_to_raindrop_sound(30))