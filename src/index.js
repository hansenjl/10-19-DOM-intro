const outerNode = document.getElementById("outer-node")
const header = outerNode.getElementsByTagName("h1")[0]
// const header = outerNode.querySelector("h1")

header.innerText = "Programming Memes"

const pTag = document.querySelector("div#container p")
// const pTag = document.getElementsByTagName("p")[0]
// const pTag = document.getElementById("container").children[0]
const imageDiv = document.querySelector("div#container")

let image = document.createElement("img")

// memes.forEach((meme) => {
//     let image = document.createElement('img')
//      image.src = meme 
//     imageDiv.append(image)
//  })

 memes.forEach((meme) => {
    imageDiv.innerHTML += `<img src="${meme}">`
 })