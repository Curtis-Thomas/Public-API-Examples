'use-strict'

document.querySelector('#btnEnvironment').addEventListener('click', function(){
    clearUI()

    let environment0  = document.createElement('button')
    let environment1  = document.createElement('button')
    let environment2  = document.createElement('button')
    let environment3  = document.createElement('button')
    let environment4  = document.createElement('button')
    let environment5  = document.createElement('button')
    let environment6  = document.createElement('button')
    let environment7  = document.createElement('button')
    let environment8  = document.createElement('button')
    let environment9  = document.createElement('button')
    let environment10  = document.createElement('button')
    let environment11  = document.createElement('button')
    let environment12  = document.createElement('button')
    let environment13  = document.createElement('button')
    let environment14  = document.createElement('button')
    let environment15  = document.createElement('button')
    let environment16  = document.createElement('button')
 
   
    
    environment0.textContent = arr[19]['list'][0]['name']
    environment0.setAttribute("id", "btnEnvironment0");
    environment0.setAttribute("class", "yellow");
    resultsContainer.append(environment0)

    // document.querySelector('#btnEnvironment0').addEventListener('click',function(){
    // function fetchAPI(){
    //     let url = ``
    //     fetch(url)
    //         .then((response) => response.json())
    //         .then((data)=> console.log(data)) 
    //         // .then((data)=> renderAPI4(data) )       
    // }
    // fetchAPI()
    // })
 
    environment1.textContent = arr[19]['list'][1]['name']
    environment1.setAttribute("id", "btnEnvironment1");
    environment1.setAttribute("class", "yellow");
    resultsContainer.append(environment1)
    
    // document.querySelector('#btnEnvironment1').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    environment2.textContent = arr[19]['list'][2]['name']
    environment2.setAttribute("id", "btnEnvironment2");
    environment2.setAttribute("class", "yellow");
    resultsContainer.append(environment2)
    
    // document.querySelector('#btnEnvironment2').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://beta3.api.climatiq.io`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    environment3.textContent = arr[19]['list'][3]['name']
    environment3.setAttribute("id", "btnEnvironment3");
    environment3.setAttribute("class", "yellow");
    resultsContainer.append(environment3)

    // document.querySelector('#btnEnvironment3').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    environment4.textContent = arr[19]['list'][4]['name']
    environment4.setAttribute("id", "btnEnvironment4");
    environment4.setAttribute("class", "yellow");
    resultsContainer.append(environment4)

    // document.querySelector('#btnEnvironment4').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    environment5.textContent = arr[19]['list'][5]['name']
    environment5.setAttribute("id", "btnEnvironment5");
    environment5.setAttribute("class", "green");
    resultsContainer.append(environment5)

    document.querySelector('#btnEnvironment5').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://api.energidataservice.dk/dataset/DeclarationProduction?start=2022-05-01&end=2022-06-01&filter={%22PriceArea%22:[%22DK1%22]}`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    environment6.textContent = arr[19]['list'][6]['name']
    environment6.setAttribute("id", "btnEnvironment6");
    environment6.setAttribute("class", "yellow");
    resultsContainer.append(environment6)

    // document.querySelector('#btnEnvironment6').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    environment7.textContent = arr[19]['list'][7]['name']
    environment7.setAttribute("id", "btnEnvironment7");
    environment7.setAttribute("class", "yellow");
    resultsContainer.append(environment7)

    // document.querySelector('#btnEnvironment7').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    environment8.textContent = arr[19]['list'][8]['name']
    environment8.setAttribute("id", "btnEnvironment8");
    environment8.setAttribute("class", "green");
    resultsContainer.append(environment8)
    
    document.querySelector('#btnEnvironment8').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://api.luchtmeetnet.nl/open_api/stations/NL01494/measurements?page=1&order=&order_direction=&formula=`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    environment9.textContent = arr[19]['list'][9]['name']
    environment9.setAttribute("id", "btnEnvironment9");
    environment9.setAttribute("class", "yellow");
    resultsContainer.append(environment9)

    // document.querySelector('#btnEnvironment9').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    environment10.textContent = arr[19]['list'][10]['name']
    environment10.setAttribute("id", "btnEnvironment10");
    environment10.setAttribute("class", "green");
    resultsContainer.append(environment10)

    document.querySelector('#btnEnvironment10').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://api.openaq.org/v2/sources?limit=100&page=1&offset=0&sort=asc&order_by=sourceName`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    environment11.textContent = arr[19]['list'][11]['name']
    environment11.setAttribute("id", "btnEnvironment11");
    environment11.setAttribute("class", "yellow");
    resultsContainer.append(environment11)

    // document.querySelector('#btnEnvironment11').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://pm25.lass-net.org/API-1.0.0/project/all/`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    environment12.textContent = arr[19]['list'][12]['name']
    environment12.setAttribute("id", "btnEnvironment12");
    environment12.setAttribute("class", "red");
    resultsContainer.append(environment12)

    // document.querySelector('#btnEnvironment12').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    environment13.textContent = arr[19]['list'][13]['name']
    environment13.setAttribute("id", "btnEnvironment13");
    environment13.setAttribute("class", "green");
    resultsContainer.append(environment13)

    document.querySelector('#btnEnvironment13').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://developer.nrel.gov/api/pvwatts/v6.json?api_key=DEMO_KEY&lat=40&lon=-105&system_capacity=4&azimuth=180&tilt=40&array_type=1&module_type=1&losses=10`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    environment14.textContent = arr[19]['list'][14]['name']
    environment14.setAttribute("id", "btnEnvironment14");
    environment14.setAttribute("class", "yellow");
    resultsContainer.append(environment14)

    // document.querySelector('#btnEnvironment14').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    environment15.textContent = arr[19]['list'][15]['name']
    environment15.setAttribute("id", "btnEnvironment15");
    environment15.setAttribute("class", "green");
    resultsContainer.append(environment15)

    document.querySelector('#btnEnvironment15').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://api.carbonintensity.org.uk/intensity`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    environment16.textContent = arr[19]['list'][16]['name']
    environment16.setAttribute("id", "btnEnvironment16");
    environment16.setAttribute("class", "yellow");
    resultsContainer.append(environment16)

    // document.querySelector('#btnEnvironment16').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://api.websitecarbon.com///api.websitecarbon.com/site?url=https%3A%2F%2Fwww.wholegraindigital.com%2F`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })



})

 