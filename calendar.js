'use-strict'

document.querySelector('#btnCalendar').addEventListener('click', function(){
    clearUI()

    let calendar0  = document.createElement('button')
    let calendar1  = document.createElement('button')
    let calendar2  = document.createElement('button')
    let calendar3  = document.createElement('button')
    let calendar4  = document.createElement('button')
    let calendar5  = document.createElement('button')
    let calendar6  = document.createElement('button')
    let calendar7  = document.createElement('button')
    let calendar8  = document.createElement('button')
    let calendar9  = document.createElement('button')
    let calendar10 = document.createElement('button')
    let calendar11 = document.createElement('button')
    let calendar12 = document.createElement('button')
    let calendar13 = document.createElement('button')
    let calendar14 = document.createElement('button')
    
        
 
    calendar0.textContent = arr[8]['list'][0]['name']
    calendar0.setAttribute("id", "btnCalendar0");
    calendar0.setAttribute("class", "yellow");
    resultsContainer.append(calendar0)

    // document.querySelector('#btnCalendar0').addEventListener('click',function(){
    // function fetchAPI(){
    //     let url = ``
    //     fetch(url)
    //         .then((response) => response.json())
    //         .then((data)=> console.log(data)) 
    //         // .then((data)=> renderAPI4(data) )       
    // }
    // fetchAPI()
    // })

    calendar1.textContent = arr[8]['list'][1]['name']
    calendar1.setAttribute("id", "btnCalendar1");
    calendar1.setAttribute("class", "yellow");
    resultsContainer.append(calendar1)

    // document.querySelector('#btnCalendar1').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    calendar2.textContent = arr[8]['list'][2]['name']
    calendar2.setAttribute("id", "btnCalendar2");
    calendar2.setAttribute("class", "yellow");
    resultsContainer.append(calendar2)

    // document.querySelector('#btnCalendar2').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    calendar3.textContent = arr[8]['list'][3]['name']
    calendar3.setAttribute("id", "btnCalendar3");
    calendar3.setAttribute("class", "green");
    resultsContainer.append(calendar3)

    document.querySelector('#btnCalendar3').addEventListener('click',function(){
        function fetchAPI(){
            let url = `http://calapi.inadiutorium.cz/api/v0/en/calendars/default/today`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    calendar4.textContent = arr[8]['list'][4]['name']
    calendar4.setAttribute("id", "btnCalendar4");
    calendar4.setAttribute("class", "yellow");
    resultsContainer.append(calendar4)

    // document.querySelector('#btnCalendar4').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://svatky.adresa.info/formát`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    calendar5.textContent = arr[8]['list'][5]['name']
    calendar5.setAttribute("id", "btnCalendar5");
    calendar5.setAttribute("class", "yellow");
    resultsContainer.append(calendar5)

    // document.querySelector('#btnCalendar5').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://api.getfestivo.com/v2/holidays`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    calendar6.textContent = arr[8]['list'][6]['name']
    calendar6.setAttribute("id", "btnCalendar6");
    calendar6.setAttribute("class", "yellow");
    resultsContainer.append(calendar6)

    // document.querySelector('#btnCalendar6').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://www.googleapis.com/calendar/v3/calendars/02154546`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    calendar7.textContent = arr[8]['list'][7]['name']
    calendar7.setAttribute("id", "btnCalendar7");
    calendar7.setAttribute("class", "yellow");
    resultsContainer.append(calendar7)

    // document.querySelector('#btnCalendar7').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://www.hebcal.com/etc/hdate-he.js`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    calendar8.textContent = arr[8]['list'][8]['name']
    calendar8.setAttribute("id", "btnCalendar8");
    calendar8.setAttribute("class", "yellow");
    resultsContainer.append(calendar8)

    // document.querySelector('#btnCalendar8').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    calendar9.textContent = arr[8]['list'][9]['name']
    calendar9.setAttribute("id", "btnCalendar9");
    calendar9.setAttribute("class", "yellow");
    resultsContainer.append(calendar9)

    // document.querySelector('#btnCalendar9').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://www.lectserve.com/html/evening_prayer/2023-01-24`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    calendar10.textContent = arr[8]['list'][10]['name']
    calendar10.setAttribute("id", "btnCalendar10");
    calendar10.setAttribute("class", "green");
    resultsContainer.append(calendar10)

    document.querySelector('#btnCalendar10').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://date.nager.at/api/v3/publicholidays/2023/AT`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    calendar11.textContent = arr[8]['list'][11]['name']
    calendar11.setAttribute("id", "btnCalendar11");
    calendar11.setAttribute("class", "green");
    resultsContainer.append(calendar11)

    document.querySelector('#btnCalendar11').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://nameday.abalin.net/api/V1/today`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    calendar12.textContent = arr[8]['list'][12]['name']
    calendar12.setAttribute("id", "btnCalendar12");
    calendar12.setAttribute("class", "red");
    resultsContainer.append(calendar12)

    // document.querySelector('#btnCalendar12').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://t.me/isdayoff`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    calendar13.textContent = arr[8]['list'][13]['name']
    calendar13.setAttribute("id", "btnCalendar13");
    calendar13.setAttribute("class", "yellow");
    resultsContainer.append(calendar13)

    // document.querySelector('#btnCalendar13').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://my_host/calendar/day/2018-06-09/`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    calendar14.textContent = arr[8]['list'][14]['name']
    calendar14.setAttribute("id", "btnCalendar14");
    calendar14.setAttribute("class", "green");
    resultsContainer.append(calendar14)

    document.querySelector('#btnCalendar14').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://www.gov.uk/bank-holidays.json`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

 

    



})

