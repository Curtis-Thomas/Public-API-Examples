'use-strict'

document.querySelector('#btnBlockchain').addEventListener('click', function(){
    clearUI()

    let blockchain0  = document.createElement('button')
    let blockchain1  = document.createElement('button')
    let blockchain2  = document.createElement('button')
    let blockchain3  = document.createElement('button')
    let blockchain4  = document.createElement('button')
    let blockchain5  = document.createElement('button')
    let blockchain6  = document.createElement('button')
    let blockchain7  = document.createElement('button')
    let blockchain8  = document.createElement('button')
    let blockchain9  = document.createElement('button')
    let blockchain10 = document.createElement('button')
    



    blockchain0.textContent = arr[5]['list'][0]['name']
    blockchain0.setAttribute("id", "btnBlockchain0");
    blockchain0.setAttribute("class", "red");
    resultsContainer.append(blockchain0)

    // document.querySelector('#btnBlockchain0').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    blockchain1.textContent = arr[5]['list'][1]['name']
    blockchain1.setAttribute("id", "btnBlockchain1");
    blockchain1.setAttribute("class", "green");
    resultsContainer.append(blockchain1)

    document.querySelector('#btnBlockchain1').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH&tsyms=USD`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    blockchain2.textContent = arr[5]['list'][2]['name']
    blockchain2.setAttribute("id", "btnBlockchain2");
    blockchain2.setAttribute("class", "red");
    resultsContainer.append(blockchain2)
    
    // document.querySelector('#btnBlockchain2').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    blockchain3.textContent = arr[5]['list'][3]['name']
    blockchain3.setAttribute("id", "btnBlockchain3");
    blockchain3.setAttribute("class", "red");
    resultsContainer.append(blockchain3)

    // document.querySelector('#btnBlockchain3').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://api.covalenthq.com/v1/`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    blockchain4.textContent = arr[5]['list'][4]['name']
    blockchain4.setAttribute("id", "btnBlockchain4");
    blockchain4.setAttribute("class", "red");
    resultsContainer.append(blockchain4)
    
    // document.querySelector('#btnBlockchain4').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    blockchain5.textContent = arr[5]['list'][5]['name']
    blockchain5.setAttribute("id", "btnBlockchain5");
    blockchain5.setAttribute("class", "red");
    resultsContainer.append(blockchain5)

    // document.querySelector('#btnBlockchain5').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    blockchain6.textContent = arr[5]['list'][6]['name']
    blockchain6.setAttribute("id", "btnBlockchain6");
    blockchain6.setAttribute("class", "red");
    resultsContainer.append(blockchain6)

    // document.querySelector('#btnBlockchain6').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    blockchain7.textContent = arr[5]['list'][7]['name']
    blockchain7.setAttribute("id", "btnBlockchain7");
    blockchain7.setAttribute("class", "red");
    resultsContainer.append(blockchain7)

    // document.querySelector('#btnBlockchain7').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    blockchain8.textContent = arr[5]['list'][8]['name']
    blockchain8.setAttribute("id", "btnBlockchain8");
    blockchain8.setAttribute("class", "yellow");
    resultsContainer.append(blockchain8)

    // document.querySelector('#btnBlockchain8').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://gateway.thegraph.com/api/[api-key]/subgraphs/id/FDD65maya4xVfPnCjSgDRBz6UBWKAcmGtgY6BmUueJCg`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    blockchain9.textContent = arr[5]['list'][9]['name']
    blockchain9.setAttribute("id", "btnBlockchain9");
    blockchain9.setAttribute("class", "red");
    resultsContainer.append(blockchain9)

    // document.querySelector('#btnBlockchain9').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://s3.amazonaws.com/data-production-walltime-info/production/dynamic/walltime-info.json?now=1528962473468.679.0000000000873`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    blockchain10.textContent = arr[5]['list'][10]['name']
    blockchain10.setAttribute("id", "btnBlockchain10");
    blockchain10.setAttribute("class", "red");
    resultsContainer.append(blockchain10)

    // document.querySelector('#btnBlockchain10').addEventListener('click',function(){
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

