const Header = (title, date, temp) => {
  const headerTop = document.createElement('div')
  const dateHead = document.createElement('span')
  const titleHead = document.createElement('h1')
  const temperature = document.createElement('span')

  headerTop.appendChild(dateHead)
  headerTop.appendChild(titleHead)
  headerTop.appendChild(temperature)

  headerTop.classList.add(`header`)
  dateHead.classList.add(`date`)
  titleHead.classList.add(`title`)
  temperature.classList.add(`temp`)

  dateHead.textContent = date
  titleHead.textContent = title
  temperature.textContent = temp

  return headerTop

  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
}

console.log(Header)

const headerAppender = (selector) => {
  const info = Header(`Pauline Times`, `June 24th 2021`, `24°​C`)
  document.querySelector(selector).append(info)
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

export { Header, headerAppender }
