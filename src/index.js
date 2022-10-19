const quoteList = document.querySelector("#quote-list")
const form = document.querySelector("#new-quote-form")

fetch("http://localhost:3000/quotes")
.then ( r => r .json())
.then (quotesAry => {

    quotesAry.forEach((quotesObj) => {
    renderQuotes (quotesObj)
    })
})

function renderQuotes(quotesObj){

    const blockQuote = document.createElement("blockquote")
    const liCard = document.createElement("li")
    const pQuote = document.createElement("p")
    const author= document.createElement("footer")
    const spaceBr = document.createElement("br")
    const btnLikes = document.createElement("button")
    const btnDelete = document.createElement("button")

    liCard.className= " quote-card"
    blockQuote.className = "blockquote"
    pQuote.className = "mb-0"
    pQuote.textContent = quotesObj.quote
    author.className = "blockquote-footer"
    author.textContent = quotesObj.author
    btnLikes.className = "btn-success"
    btnLikes.innerHTML = `Likes: `
    // numofLikes =
    // <span>${numofLikes}</span>
    btnDelete.className = "btn-danger"
    btnDelete.textContent = "Delete"

    blockQuote.append(pQuote,author,spaceBr,btnLikes,btnDelete)
    liCard.append(blockQuote)
    quoteList.append (liCard)

    btnDelete.addEventListener("click", ()=>{
           liCard.remove()
    })


}//close renderQuote


form.addEventListener ("submit", (e) =>{
    e.preventDefault()
    const newQuotesObj = {
    name : e.target.quote.value,
    author: e.target.author.value
    }

    renderQuotes(newQuotesObj)
})// close form
