'use-strict'

document.querySelector('#btnPatent').addEventListener('click', function(){
    clearUI()

    let patent0  = document.createElement('button')
    let patent1  = document.createElement('button')
    let patent2  = document.createElement('button')
    let patent3  = document.createElement('button')





    
    patent0.textContent = arr[33]['list'][0]['name']
    patent0.setAttribute("id", "btnPatent0");
    patent0.setAttribute("class", "yellow");
    resultsContainer.append(patent0)

    // document.querySelector('#btnPatent0').addEventListener('click',function(){
    // function fetchAPI(){
    //     let url = ``
    //     fetch(url)
    //         .then((response) => response.json())
    //         .then((data)=> console.log(data)) 
    //         // .then((data)=> renderAPI4(data) )       
    // }
    // fetchAPI()
    // })


    patent1.textContent = arr[33]['list'][1]['name']
    patent1.setAttribute("id", "btnPatent1");
    patent1.setAttribute("class", "yellow");
    resultsContainer.append(patent1)

    // document.querySelector('#btnPatent1').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })
    

    patent2.textContent = arr[33]['list'][2]['name']
    patent2.setAttribute("id", "btnPatent2");
    patent2.setAttribute("class", "yellow");
    resultsContainer.append(patent2)
    
    // document.querySelector('#btnPatent2').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    patent3.textContent = arr[33]['list'][3]['name']
    patent3.setAttribute("id", "btnPatent3");
    patent3.setAttribute("class", "yellow");
    resultsContainer.append(patent3)

    // document.querySelector('#btnPatent3').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

})

 