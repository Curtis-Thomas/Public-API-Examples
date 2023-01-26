'use-strict'

document.querySelector('#btnFinance').addEventListener('click', function(){
    clearUI()

    let finance0  = document.createElement('button')
    let finance1  = document.createElement('button')
    let finance2  = document.createElement('button')
    let finance3  = document.createElement('button')
    let finance4  = document.createElement('button')
    let finance5  = document.createElement('button')
    let finance6  = document.createElement('button')
    let finance7  = document.createElement('button')
    let finance8  = document.createElement('button')
    let finance9  = document.createElement('button')
    let finance10  = document.createElement('button')
    let finance11  = document.createElement('button')
    let finance12  = document.createElement('button')
    let finance13  = document.createElement('button')
    let finance14  = document.createElement('button')
    let finance15  = document.createElement('button')
    let finance16  = document.createElement('button')
    let finance17  = document.createElement('button')
    let finance18  = document.createElement('button')
    let finance19  = document.createElement('button')
    let finance20  = document.createElement('button')
    let finance21  = document.createElement('button')
    let finance22  = document.createElement('button')
    let finance23  = document.createElement('button')
    let finance24  = document.createElement('button')
    let finance25  = document.createElement('button')
    let finance26  = document.createElement('button')
    let finance27  = document.createElement('button')
    let finance28  = document.createElement('button')
    let finance29  = document.createElement('button')
    let finance30  = document.createElement('button')
    let finance31  = document.createElement('button')
    let finance32  = document.createElement('button')
    let finance33  = document.createElement('button')
    let finance34  = document.createElement('button')
    let finance35  = document.createElement('button')
    let finance36  = document.createElement('button')
    let finance37  = document.createElement('button')
    let finance38  = document.createElement('button')
    let finance39  = document.createElement('button')
    let finance40  = document.createElement('button')
    let finance41  = document.createElement('button')
    let finance42  = document.createElement('button')
    let finance43  = document.createElement('button')
    let finance44  = document.createElement('button')
    
  
   
   
    
    finance0.textContent = arr[21]['list'][0]['name']
    finance0.setAttribute("id", "btnFinance0");
    finance0.setAttribute("class", "yellow");
    resultsContainer.append(finance0)

    // document.querySelector('#btnFinance').addEventListener('click',function(){
    // function fetchAPI(){
    //     let url = ``
    //     fetch(url)
    //         .then((response) => response.json())
    //         .then((data)=> console.log(data)) 
    //         // .then((data)=> renderAPI4(data) )       
    // }
    // fetchAPI()
    // })

    finance1.textContent = arr[21]['list'][1]['name']
    finance1.setAttribute("id", "btnFinance1");
    finance1.setAttribute("class", "yellow");
    resultsContainer.append(finance1)

    // document.querySelector('#btnFinance1').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `api.aletheiaapi.com/LatestTransactions?issuer=TSLA&owner=1494730`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    finance2.textContent = arr[21]['list'][2]['name']
    finance2.setAttribute("id", "btnFinance2");
    finance2.setAttribute("class", "yellow");
    resultsContainer.append(finance2)


    // document.querySelector('#btnFinance2').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://data.alpaca.markets/v2`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    finance3.textContent = arr[21]['list'][3]['name']
    finance3.setAttribute("id", "btnFinance3");
    finance3.setAttribute("class", "green");
    resultsContainer.append(finance3)


    document.querySelector('#btnFinance3').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    finance4.textContent = arr[21]['list'][4]['name']
    finance4.setAttribute("id", "btnFinance4");
    finance4.setAttribute("class", "yellow");
    resultsContainer.append(finance4)


    // document.querySelector('#btnFinance4').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    finance5.textContent = arr[21]['list'][5]['name']
    finance5.setAttribute("id", "btnFinance5");
    finance5.setAttribute("class", "yellow");
    resultsContainer.append(finance5)


    // document.querySelector('#btnFinance5').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    finance6.textContent = arr[21]['list'][6]['name']
    finance6.setAttribute("id", "btnFinance6");
    finance6.setAttribute("class", "yellow");
    resultsContainer.append(finance6)


    // document.querySelector('#btnFinance6').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    finance7.textContent = arr[21]['list'][7]['name']
    finance7.setAttribute("id", "btnFinance7");
    finance7.setAttribute("class", "yellow");
    resultsContainer.append(finance7)


    // document.querySelector('#btnFinance7').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://www.billplz.com/api/`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    finance8.textContent = arr[21]['list'][8]['name']
    finance8.setAttribute("id", "btnFinance8");
    finance8.setAttribute("class", "green");
    resultsContainer.append(finance8)


    document.querySelector('#btnFinance8').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://lookup.binlist.net/45717360`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    finance9.textContent = arr[21]['list'][9]['name']
    finance9.setAttribute("id", "btnFinance9");
    finance9.setAttribute("class", "yellow");
    resultsContainer.append(finance9)


    // document.querySelector('#btnFinance9').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    finance10.textContent = arr[21]['list'][10]['name']
    finance10.setAttribute("id", "btnFinance10");
    finance10.setAttribute("class", "yellow");
    resultsContainer.append(finance10)

    // document.querySelector('#btnFinance10').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ` https://sandbox.apihub.citi.com/gcb/api/v2/accounts/details`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    finance11.textContent = arr[21]['list'][11]['name']
    finance11.setAttribute("id", "btnFinance11");
    finance11.setAttribute("class", "yellow");
    resultsContainer.append(finance11)

    // document.querySelector('#btnFinance11').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://www.econdb.com/api/series/CPIUS/?format=csv`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    finance12.textContent = arr[21]['list'][12]['name']
    finance12.setAttribute("id", "btnFinance12");
    finance12.setAttribute("class", "yellow");
    resultsContainer.append(finance12)

    // document.querySelector('#btnFinance12').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://api.fiscaldata.treasury.gov/services/api/fiscal_service`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    finance13.textContent = arr[21]['list'][13]['name']
    finance13.setAttribute("id", "btnFinance13");
    finance13.setAttribute("class", "yellow");
    resultsContainer.append(finance13)

    // document.querySelector('#btnFinance13').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    finance14.textContent = arr[21]['list'][14]['name']
    finance14.setAttribute("id", "btnFinance14");
    finance14.setAttribute("class", "yellow");
    resultsContainer.append(finance14)

    // document.querySelector('#btnFinance14').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    finance15.textContent = arr[21]['list'][15]['name']
    finance15.setAttribute("id", "btnFinance15");
    finance15.setAttribute("class", "yellow");
    resultsContainer.append(finance15)

    // document.querySelector('#btnFinance15').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    finance16.textContent = arr[21]['list'][16]['name']
    finance16.setAttribute("id", "btnFinance16");
    finance16.setAttribute("class", "yellow");
    resultsContainer.append(finance16)

    // document.querySelector('#btnFinance16').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    finance17.textContent = arr[21]['list'][17]['name']
    finance17.setAttribute("id", "btnFinance17");
    finance17.setAttribute("class", "yellow");
    resultsContainer.append(finance17)

    // document.querySelector('#btnFinance17').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    finance18.textContent = arr[21]['list'][18]['name']
    finance18.setAttribute("id", "btnFinance18");
    finance18.setAttribute("class", "red");
    resultsContainer.append(finance18)

    // document.querySelector('#btnFinance18').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    finance19.textContent = arr[21]['list'][19]['name']
    finance19.setAttribute("id", "btnFinance19");
    finance19.setAttribute("class", "yellow");
    resultsContainer.append(finance19)

    // document.querySelector('#btnFinance19').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://cloud.iexapis.com/`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    finance20.textContent = arr[21]['list'][20]['name']
    finance20.setAttribute("id", "btnFinance20");
    finance20.setAttribute("class", "yellow");
    resultsContainer.append(finance20)

    // document.querySelector('#btnFinance20').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    finance21.textContent = arr[21]['list'][21]['name']
    finance21.setAttribute("id", "btnFinance21");
    finance21.setAttribute("class", "green");
    resultsContainer.append(finance21)

    document.querySelector('#btnFinance21').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://api.mfapi.in/mf`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    finance22.textContent = arr[21]['list'][22]['name']
    finance22.setAttribute("id", "btnFinance22");
    finance22.setAttribute("class", "yellow");
    resultsContainer.append(finance22)

    // document.querySelector('#btnFinance22').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    finance23.textContent = arr[21]['list'][23]['name']
    finance23.setAttribute("id", "btnFinance23");
    finance23.setAttribute("class", "yellow");
    resultsContainer.append(finance23)

    // document.querySelector('#btnFinance23').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    finance24.textContent = arr[21]['list'][24]['name']
    finance24.setAttribute("id", "btnFinance24");
    finance24.setAttribute("class", "yellow");
    resultsContainer.append(finance24)

    // document.querySelector('#btnFinance24').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://api.mercadopago.com`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    finance25.textContent = arr[21]['list'][25]['name']
    finance25.setAttribute("id", "btnFinance25");
    finance25.setAttribute("class", "yellow");
    resultsContainer.append(finance25)

    // document.querySelector('#btnFinance25').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    finance26.textContent = arr[21]['list'][26]['name']
    finance26.setAttribute("id", "btnFinance26");
    finance26.setAttribute("class", "yellow");
    resultsContainer.append(finance26)

    // document.querySelector('#btnFinance26').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    finance27.textContent = arr[21]['list'][27]['name']
    finance27.setAttribute("id", "btnFinance27");
    finance27.setAttribute("class", "yellow");
    resultsContainer.append(finance27)

    // document.querySelector('#btnFinance27').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    finance28.textContent = arr[21]['list'][28]['name']
    finance28.setAttribute("id", "btnFinance28");
    finance28.setAttribute("class", "yellow");
    resultsContainer.append(finance28)

    // document.querySelector('#btnFinance28').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://api.openfigi.com/v3/mapping`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    finance29.textContent = arr[21]['list'][29]['name']
    finance29.setAttribute("id", "btnFinance29");
    finance29.setAttribute("class", "yellow");
    resultsContainer.append(finance29)

    // document.querySelector('#btnFinance29').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    finance30.textContent = arr[21]['list'][30]['name']
    finance30.setAttribute("id", "btnFinance30");
    finance30.setAttribute("class", "yellow");
    resultsContainer.append(finance30)

    // document.querySelector('#btnFinance30').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    finance31.textContent = arr[21]['list'][31]['name']
    finance31.setAttribute("id", "btnFinance31");
    finance31.setAttribute("class", "yellow");
    resultsContainer.append(finance31)

    // document.querySelector('#btnFinance31').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://api.portfoliooptimizer.io/v1/portfolio/optimization/minimum-variance`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    finance32.textContent = arr[21]['list'][32]['name']
    finance32.setAttribute("id", "btnFinance32");
    finance32.setAttribute("class", "yellow");
    resultsContainer.append(finance32)

    // document.querySelector('#btnFinance32').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    finance33.textContent = arr[21]['list'][33]['name']
    finance33.setAttribute("id", "btnFinance33");
    finance33.setAttribute("class", "yellow");
    resultsContainer.append(finance33)

    // document.querySelector('#btnFinance33').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    finance34.textContent = arr[21]['list'][34]['name']
    finance34.setAttribute("id", "btnFinance34");
    finance34.setAttribute("class", "yellow");
    resultsContainer.append(finance34)

    // document.querySelector('#btnFinance34').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://data.sec.gov/submissions/CIK00000001.json`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    finance35.textContent = arr[21]['list'][35]['name']
    finance35.setAttribute("id", "btnFinance35");
    finance35.setAttribute("class", "yellow");
    resultsContainer.append(finance35)

    // document.querySelector('#btnFinance35').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    finance36.textContent = arr[21]['list'][36]['name']
    finance36.setAttribute("id", "btnFinance36");
    finance36.setAttribute("class", "yellow");
    resultsContainer.append(finance36)

    // document.querySelector('#btnFinance36').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    finance37.textContent = arr[21]['list'][37]['name']
    finance37.setAttribute("id", "btnFinance37");
    finance37.setAttribute("class", "red");
    resultsContainer.append(finance37)

    // document.querySelector('#btnFinance37').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    finance38.textContent = arr[21]['list'][38]['name']
    finance38.setAttribute("id", "btnFinance38");
    finance38.setAttribute("class", "yellow");
    resultsContainer.append(finance38)

    // document.querySelector('#btnFinance38').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    finance39.textContent = arr[21]['list'][39]['name']
    finance39.setAttribute("id", "btnFinance39");
    finance39.setAttribute("class", "yellow");
    resultsContainer.append(finance39)

    // document.querySelector('#btnFinance39').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    finance40.textContent = arr[21]['list'][40]['name']
    finance40.setAttribute("id", "btnFinance40");
    finance40.setAttribute("class", "yellow");
    resultsContainer.append(finance40)

    // document.querySelector('#btnFinance40').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    finance41.textContent = arr[21]['list'][41]['name']
    finance41.setAttribute("id", "btnFinance41");
    finance41.setAttribute("class", "yellow");
    resultsContainer.append(finance41)

    // document.querySelector('#btnFinance41').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://tradestie.com/api/v1/apps/reddit`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    finance42.textContent = arr[21]['list'][42]['name']
    finance42.setAttribute("id", "btnFinance42");
    finance42.setAttribute("class", "red");
    resultsContainer.append(finance42)

    document.querySelector('#btnFinance42').addEventListener('click',function(){
        function fetchAPI(){
            let url = ``
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    finance43.textContent = arr[21]['list'][43]['name']
    finance43.setAttribute("id", "btnFinance43");
    finance43.setAttribute("class", "red");
    resultsContainer.append(finance43)

    // document.querySelector('#btnFinance43').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    finance44.textContent = arr[21]['list'][44]['name']
    finance44.setAttribute("id", "btnFinance44");
    finance44.setAttribute("class", "yellow");
    resultsContainer.append(finance44)

    // document.querySelector('#btnFinance44').addEventListener('click',function(){
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

    