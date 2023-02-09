'use-strict'

document.querySelector('#btnProgramming').addEventListener('click', function(){
    clearUI()

    
    let programming0  = document.createElement('button')
    let programming1  = document.createElement('button')
    let programming2  = document.createElement('button')
    let programming3  = document.createElement('button')
    let programming4  = document.createElement('button')
 



    
    programming0.textContent = arr[37]['list'][0]['name']
    programming0.setAttribute("id", "btnProgramming0");
    programming0.setAttribute("class", "red");
    resultsContainer.append(programming0)

    // document.querySelector('#btnProgramming0').addEventListener('click',function(){
    // function fetchAPI(){
    //     let url = ``
    //     fetch(url)
    //         .then((response) => response.json())
    //         .then((data)=> console.log(data)) 
    //         // .then((data)=> renderAPI4(data) )       
    // }
    // fetchAPI()
    // })

    programming1.textContent = arr[37]['list'][1]['name']
    programming1.setAttribute("id", "btnProgramming1");
    programming1.setAttribute("class", "yellow");
    resultsContainer.append(programming1)

    // document.querySelector('#btnProgramming1').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://api.hackerearth.com/v4/partner/code-evaluation/submissions/`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    programming2.textContent = arr[37]['list'][2]['name']
    programming2.setAttribute("id", "btnProgramming2");
    programming2.setAttribute("class", "yellow");
    resultsContainer.append(programming2)

    //  document.querySelector('#btnProgramming2').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    programming3.textContent = arr[37]['list'][3]['name']
    programming3.setAttribute("id", "btnProgramming3");
    programming3.setAttribute("class", "green");
    resultsContainer.append(programming3)

     document.querySelector('#btnProgramming3').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://kontests.net/api/v1/all`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    programming4.textContent = arr[37]['list'][4]['name']
    programming4.setAttribute("id", "btnProgramming4");
    programming4.setAttribute("class", "yellow");
    resultsContainer.append(programming4)

    //  document.querySelector('#btnProgramming4').addEventListener('click',function(){
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

 