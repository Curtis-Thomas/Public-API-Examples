'use-strict'

document.querySelector('#btnSportsFitness').addEventListener('click', function(){
    clearUI()

    
    
    let sportsFitness0  = document.createElement('button')
    let sportsFitness1  = document.createElement('button')
    let sportsFitness2  = document.createElement('button')
    let sportsFitness3  = document.createElement('button')
    let sportsFitness4  = document.createElement('button')
    let sportsFitness5  = document.createElement('button')
    let sportsFitness6  = document.createElement('button')
    let sportsFitness7  = document.createElement('button')
    let sportsFitness8  = document.createElement('button')
    let sportsFitness9  = document.createElement('button')
    let sportsFitness10  = document.createElement('button')
    let sportsFitness11  = document.createElement('button')
    let sportsFitness12  = document.createElement('button')
    let sportsFitness13  = document.createElement('button')
    let sportsFitness14  = document.createElement('button')
    let sportsFitness15  = document.createElement('button')
    let sportsFitness16  = document.createElement('button')
    let sportsFitness17  = document.createElement('button')
    let sportsFitness18  = document.createElement('button')
    let sportsFitness19  = document.createElement('button')
    let sportsFitness20  = document.createElement('button')
    let sportsFitness21  = document.createElement('button')
    let sportsFitness22  = document.createElement('button')
    let sportsFitness23  = document.createElement('button')
    let sportsFitness24  = document.createElement('button')
    let sportsFitness25  = document.createElement('button')
    let sportsFitness26  = document.createElement('button')
    let sportsFitness27  = document.createElement('button')
    let sportsFitness28  = document.createElement('button')
    let sportsFitness29  = document.createElement('button')
    let sportsFitness30  = document.createElement('button')
    let sportsFitness31  = document.createElement('button')





    
    sportsFitness0.textContent = arr[42]['list'][0]['name']
    sportsFitness0.setAttribute("id", "btnSportsFitness0");
    sportsFitness0.setAttribute("class", "yellow");
    resultsContainer.append(sportsFitness0)

    // document.querySelector('#btnSportsFitness0').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://v3.football.api-sports.io/`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    sportsFitness1.textContent = arr[42]['list'][1]['name']
    sportsFitness1.setAttribute("id", "btnSportsFitness1");
    sportsFitness1.setAttribute("class", "yellow");
    resultsContainer.append(sportsFitness1)

    // document.querySelector('#btnSportsFitness1').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    sportsFitness2.textContent = arr[42]['list'][2]['name']
    sportsFitness2.setAttribute("id", "btnSportsFitness2");
    sportsFitness2.setAttribute("class", "yellow");
    resultsContainer.append(sportsFitness2)

    // document.querySelector('#btnSportsFitness2').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })
    sportsFitness3.textContent = arr[42]['list'][3]['name']
    sportsFitness3.setAttribute("id", "btnSportsFitness3");
    sportsFitness3.setAttribute("class", "yellow");
    resultsContainer.append(sportsFitness3)

    // document.querySelector('#btnSportsFitness3').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `http://api.cfl.ca/v1/games/2015?key=T8Mv9BRDdcB7bMQUsQvHqtCGPewH5y8p`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })
    sportsFitness4.textContent = arr[42]['list'][4]['name']
    sportsFitness4.setAttribute("id", "btnSportsFitness4");
    sportsFitness4.setAttribute("class", "green");
    resultsContainer.append(sportsFitness4)

    document.querySelector('#btnSportsFitness4').addEventListener('click',function(){
        function fetchAPI(){
            let url = `http://api.citybik.es/v2/networks`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })
    sportsFitness5.textContent = arr[42]['list'][5]['name']
    sportsFitness5.setAttribute("id", "btnSportsFitness5");
    sportsFitness5.setAttribute("class", "yellow");
    resultsContainer.append(sportsFitness5)

    // document.querySelector('#btnSportsFitness5').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })
    sportsFitness6.textContent = arr[42]['list'][6]['name']
    sportsFitness6.setAttribute("id", "btnSportsFitness6");
    sportsFitness6.setAttribute("class", "yellow");
    resultsContainer.append(sportsFitness6)

    // document.querySelector('#btnSportsFitness6').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://api.collegefootballdata.com/games?year=2022&seasonType=regular`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })
    sportsFitness7.textContent = arr[42]['list'][7]['name']
    sportsFitness7.setAttribute("id", "btnSportsFitness7");
    sportsFitness7.setAttribute("class", "yellow");
    resultsContainer.append(sportsFitness7)

    // document.querySelector('#btnSportsFitness7').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })
    sportsFitness8.textContent = arr[42]['list'][8]['name']
    sportsFitness8.setAttribute("id", "btnSportsFitness8");
    sportsFitness8.setAttribute("class", "yellow");
    resultsContainer.append(sportsFitness8)

    // document.querySelector('#btnSportsFitness8').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })
    sportsFitness9.textContent = arr[42]['list'][9]['name']
    sportsFitness9.setAttribute("id", "btnSportsFitness9");
    sportsFitness9.setAttribute("class", "yellow");
    resultsContainer.append(sportsFitness9)

    // document.querySelector('#btnSportsFitness9').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })
    sportsFitness10.textContent = arr[42]['list'][10]['name']
    sportsFitness10.setAttribute("id", "btnSportsFitness10");
    sportsFitness10.setAttribute("class", "yellow");
    resultsContainer.append(sportsFitness10)

    // document.querySelector('#btnSportsFitness10').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })
    sportsFitness11.textContent = arr[42]['list'][11]['name']
    sportsFitness11.setAttribute("id", "btnSportsFitness11");
    sportsFitness11.setAttribute("class", "yellow");
    resultsContainer.append(sportsFitness11)

    // document.querySelector('#btnSportsFitness11').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://api-football-standings.azharimm.site/leagues`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })
    sportsFitness12.textContent = arr[42]['list'][12]['name']
    sportsFitness12.setAttribute("id", "btnSportsFitness12");
    sportsFitness12.setAttribute("class", "yellow");
    resultsContainer.append(sportsFitness12)

    // document.querySelector('#btnSportsFitness12').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://api.football-data.org/v4/matches`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })
    sportsFitness13.textContent = arr[42]['list'][13]['name']
    sportsFitness13.setAttribute("id", "btnSportsFitness13");
    sportsFitness13.setAttribute("class", "yellow");
    resultsContainer.append(sportsFitness13)

    // document.querySelector('#btnSportsFitness13').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })
    sportsFitness14.textContent = arr[42]['list'][14]['name']
    sportsFitness14.setAttribute("id", "btnSportsFitness14");
    sportsFitness14.setAttribute("class", "yellow");
    resultsContainer.append(sportsFitness14)

    // document.querySelector('#btnSportsFitness14').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `http://lookup-service-prod.mlb.com/json/named.search_player_all.bam`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })
    sportsFitness15.textContent = arr[42]['list'][15]['name']
    sportsFitness15.setAttribute("id", "btnSportsFitness15");
    sportsFitness15.setAttribute("class", "yellow");
    resultsContainer.append(sportsFitness15)

    // document.querySelector('#btnSportsFitness15').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })
    sportsFitness16.textContent = arr[42]['list'][16]['name']
    sportsFitness16.setAttribute("id", "btnSportsFitness16");
    sportsFitness16.setAttribute("class", "yellow");
    resultsContainer.append(sportsFitness16)

    // document.querySelector('#btnSportsFitness16').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://stats.nba.com/stats/allstarballotpredictor`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })
    sportsFitness17.textContent = arr[42]['list'][17]['name']
    sportsFitness17.setAttribute("id", "btnSportsFitness17");
    sportsFitness17.setAttribute("class", "yellow");
    resultsContainer.append(sportsFitness17)

    // document.querySelector('#btnSportsFitness17').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })
    sportsFitness18.textContent = arr[42]['list'][18]['name']
    sportsFitness18.setAttribute("id", "btnSportsFitness18");
    sportsFitness18.setAttribute("class", "yellow");
    resultsContainer.append(sportsFitness18)

    // document.querySelector('#btnSportsFitness18').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://data.oddsmagnet.com/history/2021/football/england-premier-league/leeds-united-v-brentford/win-market.json`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })
    sportsFitness19.textContent = arr[42]['list'][19]['name']
    sportsFitness19.setAttribute("id", "btnSportsFitness19");
    sportsFitness19.setAttribute("class", "yellow");
    resultsContainer.append(sportsFitness19)

    // document.querySelector('#btnSportsFitness19').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })
    sportsFitness20.textContent = arr[42]['list'][20]['name']
    sportsFitness20.setAttribute("id", "btnSportsFitness20");
    sportsFitness20.setAttribute("class", "yellow");
    resultsContainer.append(sportsFitness20)

    // document.querySelector('#btnSportsFitness20').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })
    sportsFitness21.textContent = arr[42]['list'][21]['name']
    sportsFitness21.setAttribute("id", "btnSportsFitness21");
    sportsFitness21.setAttribute("class", "yellow");
    resultsContainer.append(sportsFitness21)

    // document.querySelector('#btnSportsFitness21').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })
    sportsFitness22.textContent = arr[42]['list'][22]['name']
    sportsFitness22.setAttribute("id", "btnSportsFitness22");
    sportsFitness22.setAttribute("class", "yellow");
    resultsContainer.append(sportsFitness22)

    // document.querySelector('#btnSportsFitness22').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })
    sportsFitness23.textContent = arr[42]['list'][23]['name']
    sportsFitness23.setAttribute("id", "btnSportsFitness23");
    sportsFitness23.setAttribute("class", "yellow");
    resultsContainer.append(sportsFitness23)

    // document.querySelector('#btnSportsFitness23').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })
    sportsFitness24.textContent = arr[42]['list'][24]['name']
    sportsFitness24.setAttribute("id", "btnSportsFitness24");
    sportsFitness24.setAttribute("class", "yellow");
    resultsContainer.append(sportsFitness24)

    // document.querySelector('#btnSportsFitness24').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })
    sportsFitness25.textContent = arr[42]['list'][25]['name']
    sportsFitness25.setAttribute("id", "btnSportsFitness25");
    sportsFitness25.setAttribute("class", "yellow");
    resultsContainer.append(sportsFitness25)

    // document.querySelector('#btnSportsFitness25').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })
    sportsFitness26.textContent = arr[42]['list'][26]['name']
    sportsFitness26.setAttribute("id", "btnSportsFitness26");
    sportsFitness26.setAttribute("class", "green");
    resultsContainer.append(sportsFitness26)

    document.querySelector('#btnSportsFitness26').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://api.squiggle.com.au/?q=teams`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })
    sportsFitness27.textContent = arr[42]['list'][27]['name']
    sportsFitness27.setAttribute("id", "btnSportsFitness27");
    sportsFitness27.setAttribute("class", "yellow");
    resultsContainer.append(sportsFitness27)

    // document.querySelector('#btnSportsFitness27').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://www.strava.com/api/v3/activities/12345678987654321?include_all_efforts=`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })
    sportsFitness28.textContent = arr[42]['list'][28]['name']
    sportsFitness28.setAttribute("id", "btnSportsFitness28");
    sportsFitness28.setAttribute("class", "yellow");
    resultsContainer.append(sportsFitness28)

    // document.querySelector('#btnSportsFitness28').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })
    sportsFitness29.textContent = arr[42]['list'][29]['name']
    sportsFitness29.setAttribute("id", "btnSportsFitness29");
    sportsFitness29.setAttribute("class", "green");
    resultsContainer.append(sportsFitness29)

    document.querySelector('#btnSportsFitness29').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=Danny%20Welbeck`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })
    sportsFitness30.textContent = arr[42]['list'][30]['name']
    sportsFitness30.setAttribute("id", "btnSportsFitness30");
    sportsFitness30.setAttribute("class", "yellow");
    resultsContainer.append(sportsFitness30)

    // document.querySelector('#btnSportsFitness30').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })
    sportsFitness31.textContent = arr[42]['list'][31]['name']
    sportsFitness31.setAttribute("id", "btnSportsFitness31");
    sportsFitness31.setAttribute("class", "yellow");
    resultsContainer.append(sportsFitness31)

    // document.querySelector('#btnSportsFitness31').addEventListener('click',function(){
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

   