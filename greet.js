const greetName = function(name) {
    var greeting = ''
    if(typeof(name) == "string") {
        if(name == name.toUpperCase()) {
            greeting = `HELLO ${name}`
        } else {
        greeting = `Hello ${name}`
        }
    } else if (name == null) {
        greeting = 'Hello there'
    } else {
        var names = name.join(" and ")
        greeting = `Hello ${names}`
    }
    return(greeting)
}