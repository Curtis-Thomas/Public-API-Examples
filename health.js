'use-strict'

document.querySelector('#btnHealth').addEventListener('click', function(){
    clearUI()

    let health0  = document.createElement('button')
    let health1  = document.createElement('button')
    let health2  = document.createElement('button')
    let health3  = document.createElement('button')
    let health4  = document.createElement('button')
    let health5  = document.createElement('button')
    let health6  = document.createElement('button')
    let health7  = document.createElement('button')
    let health8  = document.createElement('button')
    let health9  = document.createElement('button')
    let health10  = document.createElement('button')
    let health11  = document.createElement('button')
    let health12  = document.createElement('button')
    let health13  = document.createElement('button')
    let health14  = document.createElement('button')
    let health15  = document.createElement('button')
    let health16  = document.createElement('button')
    let health17  = document.createElement('button')
    let health18  = document.createElement('button')
    let health19  = document.createElement('button')
    let health20  = document.createElement('button')
    let health21  = document.createElement('button')
    let health22  = document.createElement('button')
    let health23  = document.createElement('button')
    let health24  = document.createElement('button')
    let health25  = document.createElement('button')
    let health26  = document.createElement('button')
    let health27  = document.createElement('button')
    let health28  = document.createElement('button')
 




    
    health0.textContent = arr[26]['list'][0]['name']
    health0.setAttribute("id", "btnHealth0");
    health0.setAttribute("class", "yellow");
    resultsContainer.append(health0)

    // document.querySelector('#btnHealth0').addEventListener('click',function(){
    // function fetchAPI(){
    //     let url = `https://data.cms.gov​/provider-data​/api​/1​/metastore​/schemas​/dataset​/items​/23ew-n7w9`
    //     fetch(url)
    //         .then((response) => response.json())
    //         .then((data)=> console.log(data)) 
    //         // .then((data)=> renderAPI4(data) )       
    // }
    // fetchAPI()
    // })

    health1.textContent = arr[26]['list'][1]['name']
    health1.setAttribute("id", "btnHealth1");
    health1.setAttribute("class", "green");
    resultsContainer.append(health1)

    document.querySelector('#btnHealth1').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://coronavirus.m.pipedream.net/`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    health2.textContent = arr[26]['list'][2]['name']
    health2.setAttribute("id", "btnHealth2");
    health2.setAttribute("class", "green");
    resultsContainer.append(health2)

    document.querySelector('#btnHealth2').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://api.coronavirus.data.gov.uk/v1/data`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })


    health3.textContent = arr[26]['list'][3]['name']
    health3.setAttribute("id", "btnHealth3");
    health3.setAttribute("class", "green");
    resultsContainer.append(health3)

    document.querySelector('#btnHealth3').addEventListener('click',function(){
        function fetchAPI(){
            let url = ` https://api.covidtracking.com/v2/us/daily/2021-01-02.json`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })


    health4.textContent = arr[26]['list'][4]['name']
    health4.setAttribute("id", "btnHealth4");
    health4.setAttribute("class", "yellow");
    resultsContainer.append(health4)

    // document.querySelector('#btnHealth4').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://covid-api.mmediagroup.fr/v1/cases?country=France`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })


    health5.textContent = arr[26]['list'][5]['name']
    health5.setAttribute("id", "btnHealth5");
    health5.setAttribute("class", "yellow");
    resultsContainer.append(health5)

    // document.querySelector('#btnHealth5').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })


    health6.textContent = arr[26]['list'][6]['name']
    health6.setAttribute("id", "btnHealth6");
    health6.setAttribute("class", "yellow");
    resultsContainer.append(health6)

    // document.querySelector('#btnHealth6').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })


    health7.textContent = arr[26]['list'][7]['name']
    health7.setAttribute("id", "btnHealth7");
    health7.setAttribute("class", "green");
    resultsContainer.append(health7)

    document.querySelector('#btnHealth7').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://data.covid19india.org/v4/min/data.min.json`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })


    health8.textContent = arr[26]['list'][8]['name']
    health8.setAttribute("id", "btnHealth8");
    health8.setAttribute("class", "yellow");
    resultsContainer.append(health8)

    // document.querySelector('#btnHealth8').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `http://localhost/v2/country/china`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })


    health9.textContent = arr[26]['list'][9]['name']
    health9.setAttribute("id", "btnHealth9");
    health9.setAttribute("class", "yellow");
    resultsContainer.append(health9)

    // document.querySelector('#btnHealth9').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://github.com/mathdroid/covid-19-api`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })


    health10.textContent = arr[26]['list'][10]['name']
    health10.setAttribute("id", "btnHealth10");
    health10.setAttribute("class", "yellow");
    resultsContainer.append(health10)

    // document.querySelector('#btnHealth10').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://covid19-api-philippines.herokuapp.com/api/list-of/age_groups`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })


    health11.textContent = arr[26]['list'][11]['name']
    health11.setAttribute("id", "btnHealth11");
    health11.setAttribute("class", "yellow");
    resultsContainer.append(health11)

    // document.querySelector('#btnHealth11').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://api.covid19tracker.ca/summary`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })


    health12.textContent = arr[26]['list'][12]['name']
    health12.setAttribute("id", "btnHealth12");
    health12.setAttribute("class", "green");
    resultsContainer.append(health12)

    document.querySelector('#btnHealth12').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://www.hpb.health.gov.lk/api/get-current-statistical`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })


    health13.textContent = arr[26]['list'][13]['name']
    health13.setAttribute("id", "btnHealth13");
    health13.setAttribute("class", "yellow");
    resultsContainer.append(health13)

    // document.querySelector('#btnHealth13').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://data.covid19.go.id/public/api/prov.json`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })


    health14.textContent = arr[26]['list'][14]['name']
    health14.setAttribute("id", "btnHealth14");
    health14.setAttribute("class", "green");
    resultsContainer.append(health14)

    document.querySelector('#btnHealth14').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://covid-19.dataflowkit.com/v1/world `
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })


    health15.textContent = arr[26]['list'][15]['name']
    health15.setAttribute("id", "btnHealth15");
    health15.setAttribute("class", "yellow");
    resultsContainer.append(health15)

    // document.querySelector('#btnHealth15').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })


    health16.textContent = arr[26]['list'][16]['name']
    health16.setAttribute("id", "btnHealth16");
    health16.setAttribute("class", "yellow");
    resultsContainer.append(health16)

    // document.querySelector('#btnHealth16').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://www.healthcare.gov/accessibility.json`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })


    health17.textContent = arr[26]['list'][17]['name']
    health17.setAttribute("id", "btnHealth17");
    health17.setAttribute("class", "yellow");
    resultsContainer.append(health17)

    // document.querySelector('#btnHealth17').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })


    health18.textContent = arr[26]['list'][18]['name']
    health18.setAttribute("id", "btnHealth18");
    health18.setAttribute("class", "yellow");
    resultsContainer.append(health18)

    // document.querySelector('#btnHealth18').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://api.infermedica.com/v3`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })


    health19.textContent = arr[26]['list'][19]['name']
    health19.setAttribute("id", "btnHealth19");
    health19.setAttribute("class", "yellow");
    resultsContainer.append(health19)

    // document.querySelector('#btnHealth19').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })


    health20.textContent = arr[26]['list'][20]['name']
    health20.setAttribute("id", "btnHealth20");
    health20.setAttribute("class", "yellow");
    resultsContainer.append(health20)

    // document.querySelector('#btnHealth20').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })


    health21.textContent = arr[26]['list'][21]['name']
    health21.setAttribute("id", "btnHealth21");
    health21.setAttribute("class", "green");
    resultsContainer.append(health21)

    document.querySelector('#btnHealth21').addEventListener('click',function(){
        function fetchAPI(){
            let url = `http://makeup-api.herokuapp.com/api/v1/products.json`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })


    health22.textContent = arr[26]['list'][22]['name']
    health22.setAttribute("id", "btnHealth22");
    health22.setAttribute("class", "green");
    resultsContainer.append(health22)

    document.querySelector('#btnHealth22').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://myvaccination-backend.vercel.app/api/vacc/`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })


    health23.textContent = arr[26]['list'][23]['name']
    health23.setAttribute("id", "btnHealth23");
    health23.setAttribute("class", "yellow");
    resultsContainer.append(health23)

    // document.querySelector('#btnHealth23').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://npiregistry.cms.hhs.gov/api/?version=2.1`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })


    health24.textContent = arr[26]['list'][24]['name']
    health24.setAttribute("id", "btnHealth24");
    health24.setAttribute("class", "yellow");
    resultsContainer.append(health24)

    // document.querySelector('#btnHealth24').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })


    health25.textContent = arr[26]['list'][25]['name']
    health25.setAttribute("id", "btnHealth25");
    health25.setAttribute("class", "yellow");
    resultsContainer.append(health25)

    // document.querySelector('#btnHealth25').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })


    health26.textContent = arr[26]['list'][26]['name']
    health26.setAttribute("id", "btnHealth26");
    health26.setAttribute("class", "green");
    resultsContainer.append(health26)

    document.querySelector('#btnHealth26').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://disease.sh/v3/covid-19/historical/all?lastdays=all`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })


    health27.textContent = arr[26]['list'][27]['name']
    health27.setAttribute("id", "btnHealth27");
    health27.setAttribute("class", "green");
    resultsContainer.append(health27)

    document.querySelector('#btnHealth27').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://api.fda.gov/animalandveterinary/event.json?search=original_receive_date:[20040101+TO+20161107]&limit=1`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })


    health28.textContent = arr[26]['list'][28]['name']
    health28.setAttribute("id", "btnHealth28");
    health28.setAttribute("class", "red");
    resultsContainer.append(health28)

    // document.querySelector('#btnHealth28').addEventListener('click',function(){
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

    