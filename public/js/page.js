let category = [
  'business',
  'entertainment',
  'generalhealthscience',
  'sports',
  'technology',
]

let load = document.querySelector('#load')
let newsContainer = document.querySelector('.parents-container')
let newsContainerChild = document.querySelector('.news-container')
let pageIncrease = 1
// const API_key="42ddbb70a0b4408bb9218beb697b18e7";
let pageSize = 6

async function pageNumber() {
  try {
    let urlname = `https://newsapi.org/v2/top-headlines?country=us&apiKey=42ddbb70a0b4408bb9218beb697b18e7&pageSize=${pageSize}`
    let response = await fetch(urlname)

    let responsedata = await response.json()

    if (responsedata.status != 'ok') {
      new thrown('Error Happen')
    }
    let totalResults = responsedata.totalResults
    let pageNumber = Math.floor(totalResults / pageSize)
    newsInformation(pageNumber)
  } catch (err) {
    console.log(err)
  }
}

async function newsInformation(pageNumber) {
  try {
    let totalpage = pageNumber
    let urlname = `https://newsapi.org/v2/top-headlines?country=us&apiKey=42ddbb70a0b4408bb9218beb697b18e7&page=${pageIncrease}&pageSize=${pageSize}`
    let response = await fetch(urlname)

    let responsedata = await response.json()

    let arraydata = responsedata.articles
    console.log(arraydata)
    console.log(responsedata)
    let html = ''

    if (responsedata.status != 'ok') {
      new thrown('Error Happen')
    }
    if (pageIncrease <= totalpage) {
      arraydata.map((data) => {
        let { author, title, description, url, urlToImage } = data

        let descriptionSlice =
          description == null ? '' : description.slice(0, 100) + '....'

        let titleSlice = title.slice(0, 40) + '...'
        html += `<div class="news-list">
          <div class="news-list-image">
              <figure>
                  <img src="${urlToImage}" alt="">
              </figure>
          </div>
          <div class="news-list-title">
              <h3 class="title-name">${titleSlice}</h3>
          </div>
          <div class="news-list-content">
              <p>${descriptionSlice}</p>
          </div>
          <div class="read-more">
              <a href="${url}" target="_blank">Read More</a>
          </div>
      </div>`
      })
      pageIncrease++

      newsContainerChild.insertAdjacentHTML('beforeEnd', html)
    } else {
      load.disabled = true
      alert('No  More News')
    }
  } catch (err) {
    console.log(err)
  }
}

pageNumber()

load.addEventListener('click', () => {
  pageNumber()
})
