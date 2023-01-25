'use-strict'

document.querySelector('#btnEvents').addEventListener('click', function(){
    clearUI()

    let events0  = document.createElement('button')
    let events1  = document.createElement('button')
    let events2  = document.createElement('button')

 

    
    events0.textContent = arr[20]['list'][0]['name']
    events0.setAttribute("id", "btnEvents0");
    events0.setAttribute("class", "yellow");
    resultsContainer.append(events0)

    // document.querySelector('#btnEvents0').addEventListener('click',function(){
    // function fetchAPI(){
    //     let url = `https://www.eventbriteapi.com/v3`
    //     fetch(url)
    //         .then((response) => response.json())
    //         .then((data)=> console.log(data)) 
    //         // .then((data)=> renderAPI4(data) )       
    // }
    // fetchAPI()
    // })

    events1.textContent = arr[20]['list'][1]['name']
    events1.setAttribute("id", "btnEvents1");
    events1.setAttribute("class", "yellow");
    resultsContainer.append(events1)

    // document.querySelector('#btnEvents1').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    events2.textContent = arr[20]['list'][2]['name']
    events2.setAttribute("id", "btnEvents2");
    events2.setAttribute("class", "yellow");
    resultsContainer.append(events2)

    // document.querySelector('#btnEvents2').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://app.ticketmaster.com/discovery/v1/events.json?apikey=4dsfsf94tyghf85jdhshwge334`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

})

    