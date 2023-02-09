'use-strict'

document.querySelector('#btnScienceMath').addEventListener('click', function(){
    clearUI()

    
    
    let scienceMath0  = document.createElement('button')
    let scienceMath1  = document.createElement('button')
    let scienceMath2  = document.createElement('button')
    let scienceMath3  = document.createElement('button')
    let scienceMath4  = document.createElement('button')
    let scienceMath5  = document.createElement('button')
    let scienceMath6  = document.createElement('button')
    let scienceMath7  = document.createElement('button')
    let scienceMath8  = document.createElement('button')
    let scienceMath9  = document.createElement('button')
    let scienceMath10  = document.createElement('button')
    let scienceMath11  = document.createElement('button')
    let scienceMath12  = document.createElement('button')
    let scienceMath13  = document.createElement('button')
    let scienceMath14  = document.createElement('button')
    let scienceMath15  = document.createElement('button')
    let scienceMath16  = document.createElement('button')
    let scienceMath17  = document.createElement('button')
    let scienceMath18  = document.createElement('button')
    let scienceMath19  = document.createElement('button')
    let scienceMath20  = document.createElement('button')
    let scienceMath21  = document.createElement('button')
    let scienceMath22  = document.createElement('button')
    let scienceMath23  = document.createElement('button')
    let scienceMath24  = document.createElement('button')
    let scienceMath25  = document.createElement('button')
    let scienceMath26  = document.createElement('button')
    let scienceMath27  = document.createElement('button')
    let scienceMath28  = document.createElement('button')
    let scienceMath29  = document.createElement('button')
    let scienceMath30  = document.createElement('button')
    let scienceMath31  = document.createElement('button')

 



    
    scienceMath0.textContent = arr[38]['list'][0]['name']
    scienceMath0.setAttribute("id", "btnScienceMath0");
    scienceMath0.setAttribute("class", "yellow");
    resultsContainer.append(scienceMath0)

    // document.querySelector('#btnScienceMath0').addEventListener('click',function(){
    // function fetchAPI(){
    //     let url = ``
    //     fetch(url)
    //         .then((response) => response.json())
    //         .then((data)=> console.log(data)) 
    //         // .then((data)=> renderAPI4(data) )       
    // }
    // fetchAPI()
    // })

    scienceMath1.textContent = arr[38]['list'][1]['name']
    scienceMath1.setAttribute("id", "btnScienceMath1");
    scienceMath1.setAttribute("class", "yellow");
    resultsContainer.append(scienceMath1)

    // document.querySelector('#btnScienceMath1').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `http://export.arxiv.org/api/query?search_query=all:electron+AND+all:proton`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    scienceMath2.textContent = arr[38]['list'][2]['name']
    scienceMath2.setAttribute("id", "btnScienceMath2");
    scienceMath2.setAttribute("class", "yellow");
    resultsContainer.append(scienceMath2)

    // document.querySelector('#btnScienceMath2').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    scienceMath3.textContent = arr[38]['list'][3]['name']
    scienceMath3.setAttribute("id", "btnScienceMath3");
    scienceMath3.setAttribute("class", "green");
    resultsContainer.append(scienceMath3)

    document.querySelector('#btnScienceMath3').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://api.gbif.org/v1/occurrence/search?year=1800,1899`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    scienceMath4.textContent = arr[38]['list'][4]['name']
    scienceMath4.setAttribute("id", "btnScienceMath4");
    scienceMath4.setAttribute("class", 'yellow');
    resultsContainer.append(scienceMath4)

    // document.querySelector('#btnScienceMath4').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    scienceMath5.textContent = arr[38]['list'][5]['name']
    scienceMath5.setAttribute("id", "btnScienceMath5");
    scienceMath5.setAttribute("class", "yellow");
    resultsContainer.append(scienceMath5)

    // document.querySelector('#btnScienceMath5').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://inspirehep.net/literature?sort=mostrecent&size=25&page=1&q=title api`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    scienceMath6.textContent = arr[38]['list'][6]['name']
    scienceMath6.setAttribute("id", "btnScienceMath6");
    scienceMath6.setAttribute("class", "green");
    resultsContainer.append(scienceMath6)

    document.querySelector('#btnScienceMath6').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://api.isevenapi.xyz/api/iseven/6/`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    scienceMath7.textContent = arr[38]['list'][7]['name']
    scienceMath7.setAttribute("id", "btnScienceMath7");
    scienceMath7.setAttribute("class", "green");
    resultsContainer.append(scienceMath7)

    document.querySelector('#btnScienceMath7').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://isro.vercel.app/api/spacecrafts`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    scienceMath8.textContent = arr[38]['list'][8]['name']
    scienceMath8.setAttribute("id", "btnScienceMath8");
    scienceMath8.setAttribute("class", "yellow");
    resultsContainer.append(scienceMath8)

    document.querySelector('#btnScienceMath8').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://www.itis.gov/ITISWebService/services/ITISService/searchByCommonName?srchKey=ferret-badger`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    scienceMath9.textContent = arr[38]['list'][9]['name']
    scienceMath9.setAttribute("id", "btnScienceMath9");
    scienceMath9.setAttribute("class", "green");
    resultsContainer.append(scienceMath9)

    document.querySelector('#btnScienceMath9').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://ll.thespacedevs.com/2.2.0/astronaut/`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    scienceMath10.textContent = arr[38]['list'][10]['name']
    scienceMath10.setAttribute("id", "btnScienceMath10");
    scienceMath10.setAttribute("class", "yellow");
    resultsContainer.append(scienceMath10)

    // document.querySelector('#btnScienceMath10').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://api.mpds.io/v0/download/facet`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    scienceMath11.textContent = arr[38]['list'][11]['name']
    scienceMath11.setAttribute("id", "btnScienceMath11");
    scienceMath11.setAttribute("class", "yellow");
    resultsContainer.append(scienceMath11)

    // document.querySelector('#btnScienceMath11').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `http://asterank.com/api/mpc`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    scienceMath12.textContent = arr[38]['list'][12]['name']
    scienceMath12.setAttribute("id", "btnScienceMath12");
    scienceMath12.setAttribute("class", "yellow");
    resultsContainer.append(scienceMath12)

    // document.querySelector('#btnScienceMath12').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    scienceMath13.textContent = arr[38]['list'][13]['name']
    scienceMath13.setAttribute("id", "btnScienceMath13");
    scienceMath13.setAttribute("class", "yellow");
    resultsContainer.append(scienceMath13)

    // document.querySelector('#btnScienceMath13').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    scienceMath14.textContent = arr[38]['list'][14]['name']
    scienceMath14.setAttribute("id", "btnScienceMath14");
    scienceMath14.setAttribute("class", "green");
    resultsContainer.append(scienceMath14)

    document.querySelector('#btnScienceMath14').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://newton.vercel.app/api/v2/factor/x%5E2-1`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    scienceMath15.textContent = arr[38]['list'][15]['name']
    scienceMath15.setAttribute("id", "btnScienceMath15");
    scienceMath15.setAttribute("class", "yellow");
    resultsContainer.append(scienceMath15)

    // document.querySelector('#btnScienceMath15').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://api.noctuasky.com/api/v1/locations/?page=1&page_size=10`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    scienceMath16.textContent = arr[38]['list'][16]['name']
    scienceMath16.setAttribute("id", "btnScienceMath16");
    scienceMath16.setAttribute("class", "yellow");
    resultsContainer.append(scienceMath16)

    // document.querySelector('#btnScienceMath16').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `http://numbersapi.com/42`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    scienceMath17.textContent = arr[38]['list'][17]['name']
    scienceMath17.setAttribute("id", "btnScienceMath17");
    scienceMath17.setAttribute("class", "red");
    resultsContainer.append(scienceMath17)

    // document.querySelector('#btnScienceMath17').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    scienceMath18.textContent = arr[38]['list'][18]['name']
    scienceMath18.setAttribute("id", "btnScienceMath18");
    scienceMath18.setAttribute("class", "green");
    resultsContainer.append(scienceMath18)

    document.querySelector('#btnScienceMath18').addEventListener('click',function(){
        function fetchAPI(){
            let url = `http://api.open-notify.org/astros.json`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    scienceMath19.textContent = arr[38]['list'][19]['name']
    scienceMath19.setAttribute("id", "btnScienceMath19");
    scienceMath19.setAttribute("class", "yellow");
    resultsContainer.append(scienceMath19)

    // document.querySelector('#btnScienceMath19').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    scienceMath20.textContent = arr[38]['list'][20]['name']
    scienceMath20.setAttribute("id", "btnScienceMath20");
    scienceMath20.setAttribute("class", "yellow");
    resultsContainer.append(scienceMath20)

    // document.querySelector('#btnScienceMath20').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    scienceMath21.textContent = arr[38]['list'][21]['name']
    scienceMath21.setAttribute("id", "btnScienceMath21");
    scienceMath21.setAttribute("class", "yellow");
    resultsContainer.append(scienceMath21)

    // document.querySelector('#btnScienceMath21').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    scienceMath22.textContent = arr[38]['list'][22]['name']
    scienceMath22.setAttribute("id", "btnScienceMath22");
    scienceMath22.setAttribute("class", "green");
    resultsContainer.append(scienceMath22)

    document.querySelector('#btnScienceMath22').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://share.osf.io/api/v2/`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    scienceMath23.textContent = arr[38]['list'][23]['name']
    scienceMath23.setAttribute("id", "btnScienceMath23");
    scienceMath23.setAttribute("class", "red");
    resultsContainer.append(scienceMath23)

    // document.querySelector('#btnScienceMath23').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    scienceMath24.textContent = arr[38]['list'][24]['name']
    scienceMath24.setAttribute("id", "btnScienceMath24");
    scienceMath24.setAttribute("class", "green");
    resultsContainer.append(scienceMath24)

    document.querySelector('#btnScienceMath24').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    scienceMath25.textContent = arr[38]['list'][25]['name']
    scienceMath25.setAttribute("id", "btnScienceMath25");
    scienceMath25.setAttribute("class", "yellow");
    resultsContainer.append(scienceMath25)

    // document.querySelector('#btnScienceMath25').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://api-times-adder.up.railway.app/api/v1`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })


    scienceMath26.textContent = arr[38]['list'][26]['name']
    scienceMath26.setAttribute("id", "btnScienceMath26");
    scienceMath26.setAttribute("class", "green");
    resultsContainer.append(scienceMath26)

    document.querySelector('#btnScienceMath26').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://tle.ivanstanojevic.me/api/tle`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    scienceMath27.textContent = arr[38]['list'][27]['name']
    scienceMath27.setAttribute("id", "btnScienceMath27");
    scienceMath27.setAttribute("class", "green");
    resultsContainer.append(scienceMath27)

    document.querySelector('#btnScienceMath27').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://earthquake.usgs.gov/fdsnws/event/1/application.json`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    scienceMath28.textContent = arr[38]['list'][28]['name']
    scienceMath28.setAttribute("id", "btnScienceMath28");
    scienceMath28.setAttribute("class", "yellow");
    resultsContainer.append(scienceMath28)

    // document.querySelector('#btnScienceMath28').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://waterservices.usgs.gov/nwis/iv/?format=waterml,2.0&sites=01646500&parameterCd=00060,00065&siteStatus=all`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    scienceMath29.textContent = arr[38]['list'][29]['name']
    scienceMath29.setAttribute("id", "btnScienceMath29");
    scienceMath29.setAttribute("class", "yellow");
    resultsContainer.append(scienceMath29)

    // document.querySelector('#btnScienceMath29').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `http://api.worldbank.org/V2/incomeLevel/LIC/country`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    scienceMath30.textContent = arr[38]['list'][30]['name']
    scienceMath30.setAttribute("id", "btnScienceMath30");
    scienceMath30.setAttribute("class", "red");
    resultsContainer.append(scienceMath30)

    // document.querySelector('#btnScienceMath30').addEventListener('click',function(){
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

 
