'use-strict'

document.querySelector('#btnOpenSource').addEventListener('click', function(){
    clearUI()

    let openSource0  = document.createElement('button')
    let openSource1  = document.createElement('button')
    let openSource2  = document.createElement('button')
    let openSource3  = document.createElement('button')
    let openSource4  = document.createElement('button')
    let openSource5  = document.createElement('button')
    let openSource6  = document.createElement('button')
    let openSource7  = document.createElement('button')
    let openSource8  = document.createElement('button')




    
    openSource0.textContent = arr[32]['list'][0]['name']
    openSource0.setAttribute("id", "btnOpenSource0");
    openSource0.setAttribute("class", "yellow");
    resultsContainer.append(openSource0)

    // document.querySelector('#btnOpenSource0').addEventListener('click',function(){
    // function fetchAPI(){
    //     let url = ``
    //     fetch(url)
    //         .then((response) => response.json())
    //         .then((data)=> console.log(data)) 
    //         // .then((data)=> renderAPI4(data) )       
    // }
    // fetchAPI()
    // })

    openSource1.textContent = arr[32]['list'][1]['name']
    openSource1.setAttribute("id", "btnOpenSource1");
    openSource1.setAttribute("class", "yellow");
    resultsContainer.append(openSource1)

    // document.querySelector('#btnOpenSource1').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    openSource2.textContent = arr[32]['list'][2]['name']
    openSource2.setAttribute("id", "btnOpenSource2");
    openSource2.setAttribute("class", "green");
    resultsContainer.append(openSource2)

    document.querySelector('#btnOpenSource2').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://api.datamuse.com/words?ml=ringing+in+the+ears`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    openSource3.textContent = arr[32]['list'][3]['name']
    openSource3.setAttribute("id", "btnOpenSource3");
    openSource3.setAttribute("class", "green");
    resultsContainer.append(openSource3)

    document.querySelector('#btnOpenSource3').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://www.drupal.org/api-d7/node.json?type=casestudy`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    openSource4.textContent = arr[32]['list'][4]['name']
    openSource4.setAttribute("id", "btnOpenSource4");
    openSource4.setAttribute("class", "yellow");
    resultsContainer.append(openSource4)

    // document.querySelector('#btnOpenSource4').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://evilinsult.com/generate_insult.php?lang=en&type=json`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    openSource5.textContent = arr[32]['list'][5]['name']
    openSource5.setAttribute("id", "btnOpenSource5");
    openSource5.setAttribute("class", "yellow");
    resultsContainer.append(openSource5)

    document.querySelector('#btnOpenSource5').addEventListener('click',function(){
        function fetchAPI(){
            let url = ``
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    openSource6.textContent = arr[32]['list'][6]['name']
    openSource6.setAttribute("id", "btnOpenSource6");
    openSource6.setAttribute("class", "yellow");
    resultsContainer.append(openSource6)

    // document.querySelector('#btnOpenSource6').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://github-readme-stats.vercel.app/api?username=anuraghazra`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    openSource7.textContent = arr[32]['list'][7]['name']
    openSource7.setAttribute("id", "btnOpenSource7");
    openSource7.setAttribute("class", "yellow");
    resultsContainer.append(openSource7)

    // document.querySelector('#btnOpenSource7').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    openSource8.textContent = arr[32]['list'][8]['name']
    openSource8.setAttribute("id", "btnOpenSource8");
    openSource8.setAttribute("class", "yellow");
    resultsContainer.append(openSource8)

    // document.querySelector('#btnOpenSource8').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://img.shields.io/testspace/pass-ratio/swellaby/swellaby:testspace-sample/main`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

})

    
   