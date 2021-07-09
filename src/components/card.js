import { headerAppender } from "./header"

const Card = (article) => {

const articleCard = document.createElement('div')
const headLiner = document.createElement('div')
const authorName = document.createElement('div')
const imgContainer = document.createElement('div')
const authorPhoto = document.createElement('img')
const authorInfo = document.createElement('span')

articleCard.appendChild(headLiner)
articleCard.appendChild(authorName)
authorName.appendChild(imgContainer)
imgContainer.appendChild(authorPhoto)
authorName.appendChild(authorInfo)

articleCard.classList.add('card')
headLiner.className = `headline`
authorName.classList.add(`author`)
imgContainer.classList.add(`img-container`)


headLiner.textContent = article.headline
authorName.textContent = article.authorName
authorPhoto.src = article.authorPhoto

headLiner.addEventListener(`click`, () => {
  articleCard.classList.toggle(article-open)
})


return articleCard
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
}
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
