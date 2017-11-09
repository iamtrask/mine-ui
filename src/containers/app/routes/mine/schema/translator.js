const translator = input => {
  if (input) {
    // Camel-case to spaces
    let result = input.replace(/([A-Z])/g, ' $1')

    // Capitalize each word
    result = result.replace(/\w\S*/g, txt => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    })

    return result
  }

  return input
}

export default translator
