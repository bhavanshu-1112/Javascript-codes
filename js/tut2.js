console.log("this is tut 2")
const name= "Bhavanshu"
const greet = "Good Morning"
console.log(greet + " "+ name)

let html;
html = "<h1> this is heading" +
"<p> this is para"
console.log(html)
html = html.concat(" this")
console.log(html)
console.log(html.length)
console.log(html.toLowerCase())
console.log(html.toUpperCase())


console.log(html[1])
console.log(html.indexOf("this"))
console.log(html.indexOf("f345ft4df"))
console.log(html.indexOf("s"))
console.log(html.lastIndexOf('this'))

console.log(html.endsWith("this"))
console.log(html.endsWith("This"))
console.log(html.includes(" "))
console.log(html.substring(1,7))
console.log(html.slice(-7))
console.log(html.slice(0,4))
console.log(html.split(" "))
console.log(html.split("-"))
console.log(html.split("i"))
console.log(html.replace("this","it"))

//template literals

let fr1 = "Orange"
let fr2 = "Apple"
let my=  `hello ${name} i like ${fr1} and ${fr2}`
console.log(my)

document.body.innerHTML = my;