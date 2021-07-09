import axios from "axios"
import { response } from "msw"

const Tabs = (topics) => {

  const mainNav = document.createElement('div')
  mainNav.classList.add(`topics`)
  topics.forEach(element => {
    const tabNav = document.createElement('div')
    tabNav.classList.add('tab')
    tabNav.textContent = element
    mainNav.appendChild(tabNav)
  })

return mainNav

}



const tabsAppender = (selector) => {
  const selectTab = document.querySelector(selector)
  axios.get(`http://localhost:5000/api/topics`,{
    params: {
      ID:12345
    }
  })
   .then(response => {
    selectTab.appendChild(Tabs(response.data.topics))
    console.log(response)
  })

  .catch(err => {
    console.log(err)
  })

.then(() => {
  // always executed
})
}


  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //


export { Tabs, tabsAppender }



  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //