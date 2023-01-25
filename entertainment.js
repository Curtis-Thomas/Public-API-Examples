'use-strict'

document.querySelector('#btnEntertainment').addEventListener('click', function(){
    clearUI()

    let entertainment0  = document.createElement('button')
    let entertainment1  = document.createElement('button')
    let entertainment2  = document.createElement('button')
    let entertainment3  = document.createElement('button')
    let entertainment4  = document.createElement('button')
    let entertainment5  = document.createElement('button')
    let entertainment6  = document.createElement('button')
    let entertainment7  = document.createElement('button')
    let entertainment8  = document.createElement('button')
    let entertainment9  = document.createElement('button')
 
   
    
 
    entertainment0.textContent = arr[18]['list'][0]['name']
    entertainment0.setAttribute("id", "btnEntertainment0");
    entertainment0.setAttribute("class", "green");
    resultsContainer.append(entertainment0)

    document.querySelector('#btnEntertainment0').addEventListener('click',function(){
    function fetchAPI(){
        let url = `https://api.chucknorris.io/jokes/random`
        fetch(url)
            .then((response) => response.json())
            .then((data)=> console.log(data)) 
            // .then((data)=> renderAPI4(data) )       
    }
    fetchAPI()
    })

    entertainment1.textContent = arr[18]['list'][1]['name']
    entertainment1.setAttribute("id", "btnEntertainment1");
    entertainment1.setAttribute("class", "green");
    resultsContainer.append(entertainment1)

     document.querySelector('#btnEntertainment1').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://corporatebs-generator.sameerkumar.website/`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    

    entertainment2.textContent = arr[18]['list'][2]['name']
    entertainment2.setAttribute("id", "btnEntertainment2");
    entertainment2.setAttribute("class", "red");
    resultsContainer.append(entertainment2)

    //  document.querySelector('#btnEntertainment2').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })


    entertainment3.textContent = arr[18]['list'][3]['name']
    entertainment3.setAttribute("id", "btnEntertainment3");
    entertainment3.setAttribute("class", "red");
    resultsContainer.append(entertainment3)

    //  document.querySelector('#btnEntertainment3').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })


    entertainment4.textContent = arr[18]['list'][4]['name']
    entertainment4.setAttribute("id", "btnEntertainment4");
    entertainment4.setAttribute("class", "green");
    resultsContainer.append(entertainment4)

     document.querySelector('#btnEntertainment4').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://api.imgflip.com/get_memes`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })


    entertainment5.textContent = arr[18]['list'][5]['name']
    entertainment5.setAttribute("id", "btnEntertainment5");
    entertainment5.setAttribute("class", "green");
    resultsContainer.append(entertainment5)

    //  document.querySelector('#btnEntertainment5').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `http://alpha-meme-maker.herokuapp.com/`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })


    entertainment6.textContent = arr[18]['list'][6]['name']
    entertainment6.setAttribute("id", "btnEntertainment6");
    entertainment6.setAttribute("class", "green");
    resultsContainer.append(entertainment6)

    //  document.querySelector('#btnEntertainment6').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://namo-memes.herokuapp.com/memes/:10`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })


    entertainment7.textContent = arr[18]['list'][7]['name']
    entertainment7.setAttribute("id", "btnEntertainment7");
    entertainment7.setAttribute("class", "green");
    resultsContainer.append(entertainment7)

     document.querySelector('#btnEntertainment7').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://uselessfacts.jsph.pl/random.json?language=en`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })


    entertainment8.textContent = arr[18]['list'][8]['name']
    entertainment8.setAttribute("id", "btnEntertainment8");
    entertainment8.setAttribute("class", "green");
    resultsContainer.append(entertainment8)

     document.querySelector('#btnEntertainment8').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://techy-api.vercel.app/api/json`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })


    entertainment9.textContent = arr[18]['list'][9]['name']
    entertainment9.setAttribute("id", "btnEntertainment9");
    entertainment9.setAttribute("class", "yellow");
    resultsContainer.append(entertainment9)

    //  document.querySelector('#btnEntertainment9').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://beanboi7.github.io/yomomma-apiv2/`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })


})

  