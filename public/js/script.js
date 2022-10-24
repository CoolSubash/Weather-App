let bar = document.querySelector('.bar')
let mobileNavbar = document.querySelector('.mobile-navbar')

bar.addEventListener('click', () => {
  mobileNavbar.classList.toggle('show')
})

// Search result Main

let backgroundMainTemp = document.querySelector('.display-body-main')
let btnSearch = document.querySelector('#find-search')
let todayDay = document.querySelector('.display-day-first')
let todayDate = document.querySelector('.display-date')
let placeName = document.querySelector('.place-name')
let tempValue = document.querySelector('.value-temperature')
let days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]
let months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]
let date = new Date()
let gateDate = date.getDate()
let day = days[date.getDay()]
let month = date.getMonth()

todayDay.textContent = day
todayDate.innerHTML = months[month] + ' ' + gateDate
function dataWeather() {
  let cityName = document.querySelector('#search-information')

  if (cityName.value <= 3) {
    alert('Please Enter a Valid City Name')
    cityName.value = ''
  } else {
    async function mainNews() {
      try {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&units=metric&appid=b9f3d32bb37ba2112d87af7fb1d8467e`
        let response = await fetch(url)
        if (!response.ok) {
          throw '404 ERROR PLEASE ENTER A VALID CITY NAME'
        }
        let responseData = await response.json()
        console.log(responseData)
        let { name, main, weather } = responseData
        let { temp } = main
        let [weatherdescribe] = weather
        let checkstate = weatherdescribe.main
        console.log(checkstate)

        if (checkstate == 'Clear') {
          backgroundMainTemp.style.backgroundImage = "url('clearSky.jpg')"
          backgroundMainTemp.style.backgroundSize = 'cover'
          backgroundMainTemp.style.backgroundRepeat = 'no-repeat'
          backgroundMainTemp.style.backgroundPosition = 'center'
        } else if (checkstate == 'Clouds') {
          backgroundMainTemp.style.backgroundImage = "url('cloudy.jpg')"
          backgroundMainTemp.style.backgroundSize = 'cover'
          backgroundMainTemp.style.backgroundRepeat = 'no-repeat'
        } else if (checkstate == 'Snow') {
          backgroundMainTemp.style.backgroundImage = "url('snow.jpg')"
          backgroundMainTemp.style.backgroundSize = 'cover'
          backgroundMainTemp.style.backgroundRepeat = 'no-repeat'
        } else if (checkstate == 'Rain') {
          backgroundMainTemp.style.backgroundImage = "url('raining.jpg')"
          backgroundMainTemp.style.backgroundSize = 'cover'
          backgroundMainTemp.style.backgroundRepeat = 'no-repeat'
        } else {
          backgroundMainTemp.style.background = '#9f86c0'
        }

        placeName.textContent = name
        tempValue.innerHTML = `${temp} <span>&#176;</span> C`
        cityName.value = ''
      } catch (err) {
        alert(err)
      }
    }
    mainNews()
  }
}

btnSearch.addEventListener('click', dataWeather)

document.body.addEventListener('keydown', (e) => {
  if (e.key == 'Enter') {
    dataWeather()
  }
})

// ---------------Main Weather Vomplete Search

// Dynamic Weather Genearte
const dynamicContainer = document.querySelector('.dynamic-container')
let firstPlaceName = document.querySelector('#dynamic-placename-1')
let firstTemp = document.querySelector('#dynamic-temp-1')
let firstWeather = document.querySelector('#weather-1')
let secondPlaceName = document.querySelector('#dynamic-placename-2')
let secondTemp = document.querySelector('#dynamic-temp-2')
let secondWeather = document.querySelector('#weather-2')
let thirdPlaceName = document.querySelector('#dynamic-placename-3')
let thirdTemp = document.querySelector('#dynamic-temp-3')
let thirdWeather = document.querySelector('#weather-3')

async function weatherApi() {
  const city = [
    'Aberdeen',
    'Abilene',
    'Akron',
    'Albany',
    'Albuquerque',
    'Alexandria',
    'Allentown',
    'Amarillo',
    'Anaheim',
    'Anchorage',
    'Ann Arbor',
    'Antioch',
    'Apple Valley',
    'Appleton',
    'Arlington',
    'Arvada',
    'Asheville',
    'Athens',
    'Atlanta',
    'Atlantic City',
    'Augusta',
    'Aurora',
    'Austin',
    'Bakersfield',
    'Baltimore',
    'Barnstable',
    'Baton Rouge',
    'Beaumont',
    'Bel Air',
    'Bellevue',
    'Berkeley',
    'Bethlehem',
    'Billings',
    'Birmingham',
    'Bloomington',
    'Boise',
    'Boise City',
    'Bonita Springs',
    'Boston',
  ]
  const number = Math.abs(Math.floor(Math.random() * city.length - 1))
  const cityName = city[number]
  try {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=b9f3d32bb37ba2112d87af7fb1d8467e`
    let response = await fetch(url)
    if (!response.ok) {
      throw '404 Error'
    }
    let responseData = await response.json()
    let { main, weather } = responseData
    let { temp } = main
    let [weatherdescribe] = weather
    let checkstate = weatherdescribe.main
    let weatherState =
      weatherdescribe.description.charAt(0).toUpperCase() +
      weatherdescribe.description.slice(1)
    firstPlaceName.textContent = cityName
    firstTemp.textContent = temp
    firstWeather.textContent = weatherState
    const dynamicList = document.querySelector('#dynamic-list-first')
    if (checkstate == 'Clear') {
      dynamicList.style.backgroundImage = "url('clearSky.jpg')"
      dynamicList.style.backgroundSize = 'cover'
      dynamicList.style.backgroundRepeat = 'no-repeat'
      backgroundMainTemp.style.backgroundPosition = 'center'
    } else if (checkstate == 'Clouds') {
      dynamicList.style.backgroundImage = "url('cloudy.jpg')"
      dynamicList.style.backgroundSize = 'cover'
      dynamicList.style.backgroundRepeat = 'no-repeat'
    } else if (checkstate == 'Snow') {
      dynamicList.style.backgroundImage = "url('snow.jpg')"
      dynamicList.style.backgroundSize = 'cover'
      dynamicList.style.backgroundRepeat = 'no-repeat'
    } else if (checkstate == 'Rain') {
      dynamicList.style.backgroundImage = "url('raining.jpg')"
      dynamicList.style.backgroundSize = 'cover'
      dynamicList.style.backgroundRepeat = 'no-repeat'
    } else {
      backgroundMainTemp.style.background = '#9f86c0'
    }
  } catch (err) {
    console.log(err)
  }
}

weatherApi()

async function SecondweatherApi() {
  const city = [
    'Boulder',
    'Bradenton',
    'Bremerton',
    'Bridgeport',
    'Brighton',
    'Brownsville',
    'Bryan',
    'Buffalo',
    'Burbank',
    'Burlington',
    'Cambridge',
    'Canton',
    'Cape Coral',
    'Carrollton',
    'Cary',
    'Cathedral City',
    'Cedar Rapids',
    'Champaign',
    'Chandler',
    'Charleston',
    'Charlotte',
    'Chattanooga',
    'Chesapeake',
    'Chicago',
    'Chula Vista',
    'Cincinnati',
    'Clarke County',
    'Clarksville',
    'Clearwater',
    'Cleveland',
    'College Station',
    'Colorado Springs',
    'Columbia',
    'Columbus',
    'Concord',
    'Coral Springs',
    'Corona',
    'Corpus Christi',
    'Costa Mesa',
    'Dallas',
    'Daly City',

    'Danbury',
    'Davenport',
    'Davidson County',
    'Dayton',
    'Daytona Beach',
    'Deltona',
    'Denton',
    'Denver',
    'Des Moines',
    'Detroit',
    'Downey',
    'Duluth',
    'Durham',
    'El Monte',
    'El Paso',
    'Elizabeth',
    'Elk Grove',
    'Elkhart',
    'Erie',
    'Escondido',
    'Eugene',

    'Evansville',
    'Fairfield',
    'Fargo',
    'Fayetteville',
    'Fitchburg',
    'Flint',
    'Fontana',
    'Fort Collins',
    'Fort Lauderdale',
    'Fort Smith',
    'Fort Walton Beach',
    'Fort Wayne',
    'Fort Worth',
    'Frederick',
    'Fremont',
    'Fresno',
    'Fullerton',
    'Gainesville',
    'Garden Grove',
    'Garland',
    'Gastonia',
    'Gilbert',
    'Glendale',
    'Grand Prairie',
    'Grand Rapids',
    'Grayslake',
    'Green Bay',
    'GreenBay',
    'Greensboro',
    'Greenville',
    'Gulfport-Biloxi',
    'Hagerstown',
    'Hampton',
    'Harlingen',
    'Harrisburg',
    'Hartford',
    'Havre de Grace',
    'Hayward',
    'Hemet',
    'Henderson',
    'Hesperia',
    'Hialeah',
    'Hickory',
    'High Point',
    'Hollywood',
    'Honolulu',
    'Houma',
    'Houston',
    'Howell',
    'Huntington',
    'Huntington Beach',
    'Huntsville',
    'Independence',
    'Indianapolis',
    'Inglewood',
    'Irvine',
    'Irving',
    'Jackson',
    'Jacksonville',
    'Jefferson',
    'Jersey City',
    'Johnson City',
    'Joliet',
    'Kailua',
    'Kalamazoo',
    'Kaneohe',
    'Kansas City',
    'Kennewick',
    'Kenosha',
    'Killeen',
    'Kissimmee',
    'Knoxville',
    'Lacey',
    'Lafayette',
    'Lake Charles',
    'Lakeland',
    'Lakewood',
    'Lancaster',
    'Lansing',
    'Laredo',
    'Las Cruces',
    'Las Vegas',
    'Layton',
    'Leominster',
    'Lewisville',
    'Lexington',
    'Lincoln',
    'Little Rock',
    'Long Beach',
    'Lorain',
    'Los Angeles',
    'Louisville',
    'Lowell',
    'Lubbock',
    'Macon',
    'Madison',
    'Manchester',
    'Marina',
    'Marysville',
    'McAllen',
    'McHenry',
    'Medford',
    'Melbourne',
    'Memphis',
    'Merced',
    'Mesa',
    'Mesquite',
    'Miami',
    'Milwaukee',
    'Minneapolis',
    'Miramar',
    'Mission Viejo',
    'Mobile',
    'Modesto',
    'Monroe',
    'Monterey',
    'Montgomery',
    'Moreno Valley',
    'Murfreesboro',
    'Murrieta',
    'Muskegon',
    'Myrtle Beach',
  ]

  const number = Math.abs(Math.floor(Math.random() * city.length - 1))
  const cityName = city[number]
  try {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=b9f3d32bb37ba2112d87af7fb1d8467e`
    let response = await fetch(url)
    if (!response.ok) {
      throw '404 Error'
    }
    let responseData = await response.json()

    let { main, weather } = responseData
    let { temp } = main
    let [weatherdescribe] = weather
    let checkstate = weatherdescribe.main
    let weatherState =
      weatherdescribe.description.charAt(0).toUpperCase() +
      weatherdescribe.description.slice(1)
    secondPlaceName.textContent = cityName
    secondTemp.textContent = temp
    secondWeather.textContent = weatherState

    const dynamicList = document.querySelector('#dynamic-list-second')

    if (checkstate == 'Clear') {
      dynamicList.style.backgroundImage = "url('clearSky.jpg')"
      dynamicList.style.backgroundSize = 'cover'
      dynamicList.style.backgroundRepeat = 'no-repeat'
      backgroundMainTemp.style.backgroundPosition = 'center'
    } else if (checkstate == 'Clouds') {
      dynamicList.style.backgroundSize = 'cover'
      dynamicList.style.backgroundRepeat = 'no-repeat'
      dynamicList.style.backgroundImage = "url('cloudy.jpg')"
    } else if (checkstate == 'Snow') {
      dynamicList.style.backgroundImage = "url('snow.jpg')"
      dynamicList.style.backgroundSize = 'cover'
      dynamicList.style.backgroundRepeat = 'no-repeat'
    } else if (checkstate == 'Rain') {
      dynamicList.style.backgroundImage = "url('raining.jpg')"
      dynamicList.style.backgroundSize = 'cover'
      dynamicList.style.backgroundRepeat = 'no-repeat'
      backgroundMainTemp.style.backgroundPosition = 'center'
    } else {
      backgroundMainTemp.style.background = '#9f86c0'
    }
  } catch (err) {
    console.log(err)
  }
}

SecondweatherApi()

async function ThirdweatherApi() {
  const city = [
    ,
    'Naperville',
    'Naples',
    'Nashua',
    'Nashville',
    'New Bedford',
    'New Haven',
    'New London',
    'New Orleans',
    'New York',
    'New York City',
    'Newark',
    'Newburgh',
    'Newport News',
    'Norfolk',
    'Normal',
    'Norman',
    'North Charleston',
    'North Las Vegas',
    'North Port',
    'Norwalk',
    'Norwich',
    'Oakland',
    'Ocala',
    'Oceanside',
    'Odessa',
    'Ogden',
    'Oklahoma City',
    'Olathe',
    'Olympia',
    'Omaha',
    'Ontario',
    'Orange',
    'Orem',
    'Orlando',
    'Overland Park',
    'Oxnard',
    'Palm Bay',
    'Palm Springs',
    'Palmdale',
    'Panama City',
    'Pasadena',
    'Paterson',
    'Pembroke Pines',
    'Pensacola',
    'Peoria',
    'Philadelphia',
    'Phoenix',
    'Pittsburgh',
    'Plano',
    'Pomona',
    'Pompano Beach',
    'Port Arthur',
    'Port Orange',
    'Port Saint Lucie',
    'Port St. Lucie',
    'Portland',
    'Portsmouth',
    'Poughkeepsie',
    'Providence',
    'Provo',
    'Pueblo',
    'Punta Gorda',
    'Racine',
    'Raleigh',
    'Rancho Cucamonga',
    'Reading',
    'Redding',
    'Reno',
    'Richland',
    'Richmond',
    'Richmond County',
    'Riverside',
    'Roanoke',
    'Rochester',
    'Rockford',
    'Roseville',
    'Round Lake Beach',
    'Sacramento',
    'Saginaw',
    'Saint Louis',
    'Saint Paul',
    'Saint Petersburg',
    'Salem',
    'Salinas',
    'Salt Lake City',
    'San Antonio',
    'San Bernardino',
    'San Buenaventura',
    'San Diego',
    'San Francisco',
    'San Jose',
    'Santa Ana',
    'Santa Barbara',
    'Santa Clara',
    'Santa Clarita',
    'Santa Cruz',
    'Santa Maria',
    'Santa Rosa',
    'Sarasota',
    'Savannah',
    'Scottsdale',
    'Scranton',
    'Seaside',
    'Seattle',
    'Sebastian',
    'Shreveport',
    'Simi Valley',
    'Sioux City',
    'Sioux Falls',
    'South Bend',
    'South Lyon',
    'Spartanburg',
    'Spokane',
    'Springdale',
    'Springfield',
    'St. Louis',
    'St. Paul',
    'St. Petersburg',
    'Stamford',
    'Sterling Heights',
    'Stockton',
    'Sunnyvale',
    'Syracuse',
    'Tacoma',
    'Tallahassee',
    'Tampa',
    'Temecula',
    'Tempe',
    'Thornton',
    'Thousand Oaks',
    'Toledo',
    'Topeka',
    'Torrance',
    'Trenton',
    'Tucson',
    'Tulsa',
    'Tuscaloosa',
    'Tyler',
    'Utica',
    'Vallejo',
    'Vancouver',
    'Vero Beach',
    'Victorville',
    'Virginia Beach',
    'Visalia',
    'Waco',
    'Warren',
    'Washington',
    'Waterbury',
    'Waterloo',
    'West Covina',
    'West Valley City',
    'Westminster',
    'Wichita',
    'Wilmington',
    'Winston',
    'Winter Haven',
    'Worcester',
    'Yakima',
    'Yonkers',
    'York',
    'Youngstown',
    ,
    'orangeburg',
    'london',
    'kathmandu',
    'mumbai',
    'chennai',
  ]
  const number = Math.abs(Math.floor(Math.random() * city.length - 1))
  const cityName = city[number]
  try {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=b9f3d32bb37ba2112d87af7fb1d8467e`
    let response = await fetch(url)
    if (!response.ok) {
      throw '404 Error'
    }
    let responseData = await response.json()

    let { main, weather } = responseData
    let { temp } = main
    let [weatherdescribe] = weather
    let checkstate = weatherdescribe.main
    let weatherState =
      weatherdescribe.description.charAt(0).toUpperCase() +
      weatherdescribe.description.slice(1)
    thirdPlaceName.textContent = cityName
    thirdTemp.textContent = temp
    thirdWeather.textContent = weatherState

    const dynamicList = document.querySelector('#dynamic-list-third')

    if (checkstate == 'Clear') {
      dynamicList.style.backgroundImage = "url('clearSky.jpg')"
      dynamicList.style.backgroundSize = 'cover'
      dynamicList.style.backgroundRepeat = 'no-repeat'
      backgroundMainTemp.style.backgroundPosition = 'center'
    } else if (checkstate == 'Clouds') {
      dynamicList.style.backgroundImage = "url('cloudy.jpg')"
      dynamicList.style.backgroundSize = 'cover'
      dynamicList.style.backgroundRepeat = 'no-repeat'
    } else if (checkstate == 'Snow') {
      dynamicList.style.backgroundImage = "url('snow.jpg')"
      dynamicList.style.backgroundSize = 'cover'
      dynamicList.style.backgroundRepeat = 'no-repeat'
    } else if (checkstate == 'Rain') {
      dynamicList.style.backgroundImage = "url('raining.jpg')"
      dynamicList.style.backgroundSize = 'cover'
      dynamicList.style.backgroundRepeat = 'no-repeat'
    } else {
      backgroundMainTemp.style.background = '#9f86c0'
    }
  } catch (err) {
    console.log(err)
  }
}

ThirdweatherApi()

// ThirdweatherApi();
// setInterval(()=>{
//     SecondweatherApi();
// },15000);
// setInterval(()=>{
//     SecondweatherApi()
// },20000);

// setInterval(()=>{
//     ThirdweatherApi();
// },10000)

// For Weather API
