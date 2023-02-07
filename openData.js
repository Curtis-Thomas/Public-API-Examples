'use-strict'

document.querySelector('#btnOpenData').addEventListener('click', function(){
    clearUI()

    let openData0  = document.createElement('button')
    let openData1  = document.createElement('button')
    let openData2  = document.createElement('button')
    let openData3  = document.createElement('button')
    let openData4  = document.createElement('button')
    let openData5  = document.createElement('button')
    let openData6  = document.createElement('button')
    let openData7  = document.createElement('button')
    let openData8  = document.createElement('button')
    let openData9  = document.createElement('button')
    let openData10  = document.createElement('button')
    let openData11  = document.createElement('button')
    let openData12  = document.createElement('button')
    let openData13  = document.createElement('button')
    let openData14  = document.createElement('button')
    let openData15  = document.createElement('button')
    let openData16  = document.createElement('button')
    let openData17  = document.createElement('button')
    let openData18  = document.createElement('button')
    let openData19 = document.createElement('button')
    let openData20 = document.createElement('button')
    let openData21 = document.createElement('button')
    let openData22 = document.createElement('button')
    let openData23 = document.createElement('button')
    let openData24 = document.createElement('button')
    let openData25 = document.createElement('button')
    let openData26 = document.createElement('button')
    let openData27 = document.createElement('button')
    let openData28 = document.createElement('button')
    let openData29 = document.createElement('button')
    let openData30 = document.createElement('button')
    let openData31 = document.createElement('button')
    let openData32 = document.createElement('button')
    let openData33 = document.createElement('button')
    let openData34 = document.createElement('button')


 




    
    openData0.textContent = arr[31]['list'][0]['name']
    openData0.setAttribute("id", "btnOpenData0");
    openData0.setAttribute("class", "green");
    resultsContainer.append(openData0)

    
    // document.querySelector('#btnOpenData0').addEventListener('click',function(){
    // function fetchAPI(){
    //     let url = ``
    //     fetch(url)
    //         .then((response) => response.json())
    //         .then((data)=> console.log(data)) 
    //         // .then((data)=> renderAPI4(data) )       
    // }
    // fetchAPI()
    // })

    openData1.textContent = arr[31]['list'][1]['name']
    openData1.setAttribute("id", "btnOpenData1");
    openData1.setAttribute("class", "red");
    resultsContainer.append(openData1)

    // document.querySelector('#btnOpenData1').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })
    

    openData2.textContent = arr[31]['list'][2]['name']
    openData2.setAttribute("id", "btnOpenData2");
    openData2.setAttribute("class", "green");
    resultsContainer.append(openData2)

    
    document.querySelector('#btnOpenData2').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://archive.org/metadata/principleofrelat00eins`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    openData3.textContent = arr[31]['list'][3]['name']
    openData3.setAttribute("id", "btnOpenData3");
    openData3.setAttribute("class", "yellow");
    resultsContainer.append(openData3)

    
    // document.querySelector('#btnOpenData3').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://rest.blackhistoryapi.io/fact/random`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    openData4.textContent = arr[31]['list'][4]['name']
    openData4.setAttribute("id", "btnOpenData4");
    openData4.setAttribute("class", "yellow");
    resultsContainer.append(openData4)

    
    // document.querySelector('#btnOpenData4').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    openData5.textContent = arr[31]['list'][5]['name']
    openData5.setAttribute("id", "btnOpenData5");
    openData5.setAttribute("class", "green");
    resultsContainer.append(openData5)

    
    document.querySelector('#btnOpenData5').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://callook.info/W1AW/json`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    openData6.textContent = arr[31]['list'][6]['name']
    openData6.setAttribute("id", "btnOpenData6");
    openData6.setAttribute("class", "yellow");
    resultsContainer.append(openData6)

    
    // document.querySelector('#btnOpenData6').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    openData7.textContent = arr[31]['list'][7]['name']
    openData7.setAttribute("id", "btnOpenData7");
    openData7.setAttribute("class", "yellow");
    resultsContainer.append(openData7)

    
    // document.querySelector('#btnOpenData7').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    openData8.textContent = arr[31]['list'][8]['name']
    openData8.setAttribute("id", "btnOpenData8");
    openData8.setAttribute("class", "yellow");
    resultsContainer.append(openData8)

    
    // document.querySelector('#btnOpenData8').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    openData9.textContent = arr[31]['list'][9]['name']
    openData9.setAttribute("id", "btnOpenData9");
    openData9.setAttribute("class", "green");
    resultsContainer.append(openData9)

    
    document.querySelector('#btnOpenData9').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://api-adresse.data.gouv.fr/search/?q=8+bd+du+por`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    openData10.textContent = arr[31]['list'][10]['name']
    openData10.setAttribute("id", "btnOpenData10");
    openData10.setAttribute("class", "yellow");
    resultsContainer.append(openData10)

    
    // document.querySelector('#btnOpenData10').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    openData11.textContent = arr[31]['list'][11]['name']
    openData11.setAttribute("id", "btnOpenData11");
    openData11.setAttribute("class", "yellow");
    resultsContainer.append(openData11)

    
    // document.querySelector('#btnOpenData11').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `http://mysite.com/store_center.html?page=store&task=purchase`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    openData12.textContent = arr[31]['list'][12]['name']
    openData12.setAttribute("id", "btnOpenData12");
    openData12.setAttribute("class", "yellow");
    resultsContainer.append(openData12)

    
    // document.querySelector('#btnOpenData12').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    openData13.textContent = arr[31]['list'][13]['name']
    openData13.setAttribute("id", "btnOpenData13");
    openData13.setAttribute("class", "yellow");
    resultsContainer.append(openData13)

    
    // document.querySelector('#btnOpenData13').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    openData14.textContent = arr[31]['list'][14]['name']
    openData14.setAttribute("id", "btnOpenData14");
    openData14.setAttribute("class", "yellow");
    resultsContainer.append(openData14)

    
    // document.querySelector('#btnOpenData14').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://power.lowyinstitute.org/world.json`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    openData15.textContent = arr[31]['list'][15]['name']
    openData15.setAttribute("id", "btnOpenData15");
    openData15.setAttribute("class", "green");
    resultsContainer.append(openData15)

    
    document.querySelector('#btnOpenData15').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://api.microlink.io/?url=https://github.com/microlinkhq`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    openData16.textContent = arr[31]['list'][16]['name']
    openData16.setAttribute("id", "btnOpenData16");
    openData16.setAttribute("class", "yellow");
    resultsContainer.append(openData16)

    
    // document.querySelector('#btnOpenData16').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    openData17.textContent = arr[31]['list'][17]['name']
    openData17.setAttribute("id", "btnOpenData17");
    openData17.setAttribute("class", "green");
    resultsContainer.append(openData17)

    
    document.querySelector('#btnOpenData17').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://api.nobelprize.org/2.1/laureates`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    openData18.textContent = arr[31]['list'][18]['name']
    openData18.setAttribute("id", "btnOpenData18");
    openData18.setAttribute("class", "yellow");
    resultsContainer.append(openData18)

    
    // document.querySelector('#btnOpenData18').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    openData19.textContent = arr[31]['list'][19]['name']
    openData19.setAttribute("id", "btnOpenData19");
    openData19.setAttribute("class", "green");
    resultsContainer.append(openData19)

    
    document.querySelector('#btnOpenData19').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://demo.ckan.org/api/3/action/group_list`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    openData20.textContent = arr[31]['list'][20]['name']
    openData20.setAttribute("id", "btnOpenData20");
    openData20.setAttribute("class", "yellow");
    resultsContainer.append(openData20)

    
    // document.querySelector('#btnOpenData20').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://api.opencorporates.com/companies/nl/17087985`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    openData21.textContent = arr[31]['list'][21]['name']
    openData21.setAttribute("id", "btnOpenData21");
    openData21.setAttribute("class", "yellow");
    resultsContainer.append(openData21)

    
    // document.querySelector('#btnOpenData21').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    openData22.textContent = arr[31]['list'][22]['name']
    openData22.setAttribute("id", "btnOpenData22");
    openData22.setAttribute("class", "red");
    resultsContainer.append(openData22)

    
    // document.querySelector('#btnOpenData22').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    openData23.textContent = arr[31]['list'][23]['name']
    openData23.setAttribute("id", "btnOpenData23");
    openData23.setAttribute("class", "yellow");
    resultsContainer.append(openData23)

    
    // document.querySelector('#btnOpenData23').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://ridb.recreation.gov/api/v1/activities?limit=50&offset=0`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    openData24.textContent = arr[31]['list'][24]['name']
    openData24.setAttribute("id", "btnOpenData24");
    openData24.setAttribute("class", "yellow");
    resultsContainer.append(openData24)

    
    // document.querySelector('#btnOpenData24').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    openData25.textContent = arr[31]['list'][25]['name']
    openData25.setAttribute("id", "btnOpenData25");
    openData25.setAttribute("class", "green");
    resultsContainer.append(openData25)

    
    document.querySelector('#btnOpenData25').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://data.cityofchicago.org/resource/f7f2-ggz5.json`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    openData26.textContent = arr[31]['list'][26]['name']
    openData26.setAttribute("id", "btnOpenData26");
    openData26.setAttribute("class", "green");
    resultsContainer.append(openData26)

    
    document.querySelector('#btnOpenData26').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://api.teleport.org/api/locations/37.77493,-122.41942/`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    openData27.textContent = arr[31]['list'][27]['name']
    openData27.setAttribute("id", "btnOpenData27");
    openData27.setAttribute("class", "green");
    resultsContainer.append(openData27)

    
    document.querySelector('#btnOpenData27').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://opendata.umea.se/api/v2/catalog/datasets?limit=10&offset=0&timezone=UTC`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    openData28.textContent = arr[31]['list'][28]['name']
    openData28.setAttribute("id", "btnOpenData28");
    openData28.setAttribute("class", "yellow");
    resultsContainer.append(openData28)

    
    // document.querySelector('#btnOpenData28').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    openData29.textContent = arr[31]['list'][29]['name']
    openData29.setAttribute("id", "btnOpenData29");
    openData29.setAttribute("class", "yellow");
    resultsContainer.append(openData29)

    
    // document.querySelector('#btnOpenData29').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    openData30.textContent = arr[31]['list'][30]['name']
    openData30.setAttribute("id", "btnOpenData30");
    openData30.setAttribute("class", "yellow");
    resultsContainer.append(openData30)

    
    // document.querySelector('#btnOpenData30').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://api.upcdatabase.org/currency/latest/?base=GBP`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    openData31.textContent = arr[31]['list'][31]['name']
    openData31.setAttribute("id", "btnOpenData31");
    openData31.setAttribute("class", "yellow");
    resultsContainer.append(openData31)

    
    // document.querySelector('#btnOpenData31').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `http://uoweb3.ncl.ac.uk/api/v1.1/sensors/json/`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    openData32.textContent = arr[31]['list'][32]['name']
    openData32.setAttribute("id", "btnOpenData32");
    openData32.setAttribute("class", "yellow");
    resultsContainer.append(openData32)

    
    // document.querySelector('#btnOpenData32').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    openData33.textContent = arr[31]['list'][33]['name']
    openData33.setAttribute("id", "btnOpenData33");
    openData33.setAttribute("class", "yellow");
    resultsContainer.append(openData33)

    
    // document.querySelector('#btnOpenData33').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://en.wikipedia.org/w/api.php?action=query&prop=info&titles=Earth`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    openData34.textContent = arr[31]['list'][34]['name']
    openData34.setAttribute("id", "btnOpenData34");
    openData34.setAttribute("class", "yellow");
    resultsContainer.append(openData34)

    
    // document.querySelector('#btnOpenData34').addEventListener('click',function(){
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
