'use-strict'

document.querySelector('#btnPhone').addEventListener('click', function(){
    clearUI()

    let phone0  = document.createElement('button')
    let phone1  = document.createElement('button')
    let phone2  = document.createElement('button')
    let phone3  = document.createElement('button')
    let phone4  = document.createElement('button')






    
    phone0.textContent = arr[35]['list'][0]['name']
    phone0.setAttribute("id", "btnPhone0");
    phone0.setAttribute("class", "yellow");
    resultsContainer.append(phone0)

    // document.querySelector('#btnPhone0').addEventListener('click',function(){
    // function fetchAPI(){
    //     let url = ``
    //     fetch(url)
    //         .then((response) => response.json())
    //         .then((data)=> console.log(data)) 
    //         // .then((data)=> renderAPI4(data) )       
    // }
    // fetchAPI()
    // })


    phone1.textContent = arr[35]['list'][1]['name']
    phone1.setAttribute("id", "btnPhone1");
    phone1.setAttribute("class", "yellow");
    resultsContainer.append(phone1)

    // document.querySelector('#btnPhone1').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })
    


    phone2.textContent = arr[35]['list'][2]['name']
    phone2.setAttribute("id", "btnPhone2");
    phone2.setAttribute("class", "yellow");
    resultsContainer.append(phone2)

    // document.querySelector('#btnPhone2').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })


    phone3.textContent = arr[35]['list'][3]['name']
    phone3.setAttribute("id", "btnPhone3");
    phone3.setAttribute("class", "yellow");
    resultsContainer.append(phone3)

    // document.querySelector('#btnPhone3').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://api-mobilespecs.azharimm.dev/brands`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })


})

