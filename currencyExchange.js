'use-strict'

document.querySelector('#btnCurrencyExchange').addEventListener('click', function(){
    clearUI()

    let currencyExchange0  = document.createElement('button')
    let currencyExchange1  = document.createElement('button')
    let currencyExchange2  = document.createElement('button')
    let currencyExchange3  = document.createElement('button')
    let currencyExchange4  = document.createElement('button')
    let currencyExchange5  = document.createElement('button')
    let currencyExchange6  = document.createElement('button')
    let currencyExchange7 = document.createElement('button')
    let currencyExchange8  = document.createElement('button')
    let currencyExchange9  = document.createElement('button')
    let currencyExchange10  = document.createElement('button')
    let currencyExchange11 = document.createElement('button')
    let currencyExchange12  = document.createElement('button')
    let currencyExchange13  = document.createElement('button')
    let currencyExchange14  = document.createElement('button')
    let currencyExchange15  = document.createElement('button')
    let currencyExchange16 = document.createElement('button')
   

 
    
 
    currencyExchange0.textContent = arr[12]['list'][0]['name']
    currencyExchange0.setAttribute("id", "btnCurrencyExchange0");
    currencyExchange0.setAttribute("class", "yellow");
    resultsContainer.append(currencyExchange0)

    // document.querySelector('#btnCurrencyExchange0').addEventListener('click',function(){
    // function fetchAPI(){
    //     let url = ``
    //     fetch(url)
    //         .then((response) => response.json())
    //         .then((data)=> console.log(data)) 
    //         // .then((data)=> renderAPI4(data) )       
    // }
    // fetchAPI()
    // })

    currencyExchange1.textContent = arr[12]['list'][1]['name']
    currencyExchange1.setAttribute("id", "btnCurrencyExchange1");
    currencyExchange1.setAttribute("class", "yellow");
    resultsContainer.append(currencyExchange1)

    // document.querySelector('#btnCurrencyExchange1').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://www.amdoren.com/api/currency.php`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    currencyExchange2.textContent = arr[12]['list'][2]['name']
    currencyExchange2.setAttribute("id", "btnCurrencyExchange2");
    currencyExchange2.setAttribute("class", "yellow");
    resultsContainer.append(currencyExchange2)

    // document.querySelector('#btnCurrencyExchange2').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://data.fixer.io/api/latest`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    currencyExchange3.textContent = arr[12]['list'][3]['name']
    currencyExchange3.setAttribute("id", "btnCurrencyExchange3");
    currencyExchange3.setAttribute("class", "yellow");
    resultsContainer.append(currencyExchange3)

    // document.querySelector('#btnCurrencyExchange3').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `http://www.cbr.ru/scripts/XML_daily.asp?date_req=02/03/2002`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    currencyExchange4.textContent = arr[12]['list'][4]['name']
    currencyExchange4.setAttribute("id", "btnCurrencyExchange4");
    currencyExchange4.setAttribute("class", "green");
    resultsContainer.append(currencyExchange4)

    document.querySelector('#btnCurrencyExchange4').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    currencyExchange5.textContent = arr[12]['list'][5]['name']
    currencyExchange5.setAttribute("id", "btnCurrencyExchange5");
    currencyExchange5.setAttribute("class", "yellow");
    resultsContainer.append(currencyExchange5)

    // document.querySelector('#btnCurrencyExchange5').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://api.currencyfreaks.com/latest`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    currencyExchange6.textContent = arr[12]['list'][6]['name']
    currencyExchange6.setAttribute("id", "btnCurrencyExchange6");
    currencyExchange6.setAttribute("class", "yellow");
    resultsContainer.append(currencyExchange6)

    // document.querySelector('#btnCurrencyExchange6').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    currencyExchange7.textContent = arr[12]['list'][7]['name']
    currencyExchange7.setAttribute("id", "btnCurrencyExchange7");
    currencyExchange7.setAttribute("class", "yellow");
    resultsContainer.append(currencyExchange7)

    // document.querySelector('#btnCurrencyExchange7').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://api.currencybeacon.com/v1/latest`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    currencyExchange8.textContent = arr[12]['list'][8]['name']
    currencyExchange8.setAttribute("id", "btnCurrencyExchange8");
    currencyExchange8.setAttribute("class", "yellow");
    resultsContainer.append(currencyExchange8)

    // document.querySelector('#btnCurrencyExchange8').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://www.cnb.cz/cs/financni_trhy/devizovy_trh/kurzy_devizoveho_trhu/denni_kurz.xml`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    currencyExchange9.textContent = arr[12]['list'][9]['name']
    currencyExchange9.setAttribute("id", "btnCurrencyExchange9");
    currencyExchange9.setAttribute("class", "yellow");
    resultsContainer.append(currencyExchange9)

    // document.querySelector('#btnCurrencyExchange9').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://economia.awesomeapi.com.br/json/last/:moedas`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    currencyExchange10.textContent = arr[12]['list'][10]['name']
    currencyExchange10.setAttribute("id", "btnCurrencyExchange10");
    currencyExchange10.setAttribute("class", "yellow");
    resultsContainer.append(currencyExchange10)

    // document.querySelector('#btnCurrencyExchange10').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    currencyExchange11.textContent = arr[12]['list'][11]['name']
    currencyExchange11.setAttribute("id", "btnCurrencyExchange11");
    currencyExchange11.setAttribute("class", "green");
    resultsContainer.append(currencyExchange11)

    document.querySelector('#btnCurrencyExchange11').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://api.exchangerate.host/latest`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    currencyExchange12.textContent = arr[12]['list'][12]['name']
    currencyExchange12.setAttribute("id", "btnCurrencyExchange12");
    currencyExchange12.setAttribute("class", "yellow");
    resultsContainer.append(currencyExchange12)

    // document.querySelector('#btnCurrencyExchange12').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    currencyExchange13.textContent = arr[12]['list'][13]['name']
    currencyExchange13.setAttribute("id", "btnCurrencyExchange13");
    currencyExchange13.setAttribute("class", "yellow");
    resultsContainer.append(currencyExchange13)

    // document.querySelector('#btnCurrencyExchange13').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://www.frankfurter.app/docs/`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    currencyExchange14.textContent = arr[12]['list'][14]['name']
    currencyExchange14.setAttribute("id", "btnCurrencyExchange14");
    currencyExchange14.setAttribute("class", "green");
    resultsContainer.append(currencyExchange14)

    // document.querySelector('#btnCurrencyExchange14').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://www.freeforexapi.com/api/live?pairs=EURUSD`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    currencyExchange15.textContent = arr[12]['list'][15]['name']
    currencyExchange15.setAttribute("id", "btnCurrencyExchange15");
    currencyExchange15.setAttribute("class", "green");
    resultsContainer.append(currencyExchange15)

    document.querySelector('#btnCurrencyExchange15').addEventListener('click',function(){
        function fetchAPI(){
            let url = `http://api.nbp.pl/api/cenyzlota`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    currencyExchange16.textContent = arr[12]['list'][16]['name']
    currencyExchange16.setAttribute("id", "btnCurrencyExchange16");
    currencyExchange16.setAttribute("class", "green");
    resultsContainer.append(currencyExchange16)

    document.querySelector('#btnCurrencyExchange16').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://api.vatcomply.com/rates`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })


    

})

