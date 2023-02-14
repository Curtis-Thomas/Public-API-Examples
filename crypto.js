'use-strict'

document.querySelector('#btnCrypto').addEventListener('click', function(){
    clearUI()

    let crypto0  = document.createElement('button')
    let crypto1  = document.createElement('button')
    let crypto2  = document.createElement('button')
    let crypto3  = document.createElement('button')
    let crypto4  = document.createElement('button')
    let crypto5  = document.createElement('button')
    let crypto6  = document.createElement('button')
    let crypto7 = document.createElement('button')
    let crypto8  = document.createElement('button')
    let crypto9  = document.createElement('button')
    let crypto10  = document.createElement('button')
    let crypto11 = document.createElement('button')
    let crypto12  = document.createElement('button')
    let crypto13  = document.createElement('button')
    let crypto14  = document.createElement('button')
    let crypto15  = document.createElement('button')
    let crypto16 = document.createElement('button')
    let crypto17  = document.createElement('button')
    let crypto18  = document.createElement('button')
    let crypto19 = document.createElement('button')
    let crypto20 = document.createElement('button')
    let crypto21 = document.createElement('button')
    let crypto22 = document.createElement('button')
    let crypto23 = document.createElement('button')
    let crypto24 = document.createElement('button')
    let crypto25 = document.createElement('button')
    let crypto26 = document.createElement('button')
    let crypto27 = document.createElement('button')
    let crypto28 = document.createElement('button')
    let crypto29 = document.createElement('button')
    let crypto30 = document.createElement('button')
    let crypto31 = document.createElement('button')
    let crypto32 = document.createElement('button')
    let crypto33 = document.createElement('button')
    let crypto34 = document.createElement('button')
    let crypto35 = document.createElement('button')
    let crypto36 = document.createElement('button')
    let crypto37 = document.createElement('button')
    let crypto38 = document.createElement('button')
    let crypto39 = document.createElement('button')
    let crypto40 = document.createElement('button')
    let crypto41 = document.createElement('button')
    let crypto42 = document.createElement('button')
    let crypto43 = document.createElement('button')
    let crypto44 = document.createElement('button')
    let crypto45 = document.createElement('button')
    let crypto46 = document.createElement('button')
    let crypto47 = document.createElement('button')
    let crypto48 = document.createElement('button')
    let crypto49 = document.createElement('button')
    let crypto50 = document.createElement('button')
    let crypto51 = document.createElement('button')
    let crypto52 = document.createElement('button')
    let crypto53 = document.createElement('button')
    let crypto54 = document.createElement('button')
    let crypto55 = document.createElement('button')
    let crypto56 = document.createElement('button')
    let crypto57 = document.createElement('button')
    let crypto58 = document.createElement('button')
    let crypto59 = document.createElement('button')
    let crypto60 = document.createElement('button')
    let crypto61 = document.createElement('button')
    let crypto62 = document.createElement('button')
    let crypto63 = document.createElement('button')
 
    
 
    crypto0.textContent = arr[11]['list'][0]['name']
    crypto0.setAttribute("id", "btnCrypto0");
    crypto0.setAttribute("class", "green");
    resultsContainer.append(crypto0)

    document.querySelector('#btnCrypto0').addEventListener('click',function(){
    function fetchAPI(){
        let url = `https://api.0x.org/`
        fetch(url)
            .then((response) => response.json())
            .then((data)=> console.log(data)) 
            // .then((data)=> renderAPI4(data) )       
    }
    fetchAPI()
    })

    crypto1.textContent = arr[11]['list'][1]['name']
    crypto1.setAttribute("id", "btnCrypto1");
    crypto1.setAttribute("class", "green");
    resultsContainer.append(crypto1)

    document.querySelector('#btnCrypto1').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://api.1inch.io/v5.0/1/healthcheck`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    crypto2.textContent = arr[11]['list'][2]['name']
    crypto2.setAttribute("id", "btnCrypto2");
    crypto2.setAttribute("class", "yellow");
    resultsContainer.append(crypto2)

    // document.querySelector('#btnCrypto2').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    crypto3.textContent = arr[11]['list'][3]['name']
    crypto3.setAttribute("id", "btnCrypto3");
    crypto3.setAttribute("class", "yellow");
    resultsContainer.append(crypto3)

    // document.querySelector('#btnCrypto3').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    crypto4.textContent = arr[11]['list'][4]['name']
    crypto4.setAttribute("id", "btnCrypto4");
    crypto4.setAttribute("class", "yellow");
    resultsContainer.append(crypto4)

    // document.querySelector('#btnCrypto4').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    crypto5.textContent = arr[11]['list'][5]['name']
    crypto5.setAttribute("id", "btnCrypto5");
    crypto5.setAttribute("class", "yellow");
    resultsContainer.append(crypto5)

    // document.querySelector('#btnCrypto5').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    crypto6.textContent = arr[11]['list'][6]['name']
    crypto6.setAttribute("id", "btnCrypto6");
    crypto6.setAttribute("class", "yellow");
    resultsContainer.append(crypto6)

    // document.querySelector('#btnCrypto6').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `wss://apiv2.bitcoinaverage.com/websocket/v3`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    crypto7.textContent = arr[11]['list'][7]['name']
    crypto7.setAttribute("id", "btnCrypto7");
    crypto7.setAttribute("class", "yellow");
    resultsContainer.append(crypto7)

    // document.querySelector('#btnCrypto7').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https//exchange.bitcoin/api/trades`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    crypto8.textContent = arr[11]['list'][8]['name']
    crypto8.setAttribute("id", "btnCrypto8");
    crypto8.setAttribute("class", "yellow");
    resultsContainer.append(crypto8)

    // document.querySelector('#btnCrypto8').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://api-pub.bitfinex.com/v2/`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    crypto9.textContent = arr[11]['list'][9]['name']
    crypto9.setAttribute("id", "btnCrypto9");
    crypto9.setAttribute("class", "yellow");
    resultsContainer.append(crypto9)

    // document.querySelector('#btnCrypto9').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    crypto10.textContent = arr[11]['list'][10]['name']
    crypto10.setAttribute("id", "btnCrypto10");
    crypto10.setAttribute("class", "yellow");
    resultsContainer.append(crypto10)

    // document.querySelector('#btnCrypto10').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://api.bittrex.com/v3`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    crypto11.textContent = arr[11]['list'][11]['name']
    crypto11.setAttribute("id", "btnCrypto11");
    crypto11.setAttribute("class", "yellow");
    resultsContainer.append(crypto11)

    // document.querySelector('#btnCrypto').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    crypto12.textContent = arr[11]['list'][12]['name']
    crypto12.setAttribute("id", "btnCrypto12");
    crypto12.setAttribute("class", "yellow");
    resultsContainer.append(crypto12)

    // document.querySelector('#btnCrypto').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    crypto13.textContent = arr[11]['list'][13]['name']
    crypto13.setAttribute("id", "btnCrypto13");
    crypto13.setAttribute("class", "yellow");
    resultsContainer.append(crypto13)

    // document.querySelector('#btnCrypto').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    crypto14.textContent = arr[11]['list'][14]['name']
    crypto14.setAttribute("id", "btnCrypto14");
    crypto14.setAttribute("class", "yellow");
    resultsContainer.append(crypto14)

    // document.querySelector('#btnCrypto').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    crypto15.textContent = arr[11]['list'][15]['name']
    crypto15.setAttribute("id", "btnCrypto15");
    crypto15.setAttribute("class", "yellow");
    resultsContainer.append(crypto15)

    // document.querySelector('#btnCrypto').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    crypto16.textContent = arr[11]['list'][16]['name']
    crypto16.setAttribute("id", "btnCrypto16");
    crypto16.setAttribute("class", "yellow");
    resultsContainer.append(crypto16)

    // document.querySelector('#btnCrypto').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    crypto17.textContent = arr[11]['list'][17]['name']
    crypto17.setAttribute("id", "btnCrypto17");
    crypto17.setAttribute("class", "yellow");
    resultsContainer.append(crypto17)

    // document.querySelector('#btnCrypto17').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://rest.coinapi.io/v1/exchangerate/BTC/USD`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })


    crypto18.textContent = arr[11]['list'][18]['name']
    crypto18.setAttribute("id", "btnCrypto18");
    crypto18.setAttribute("class", "yellow");
    resultsContainer.append(crypto18)

    // document.querySelector('#btnCrypto18').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `mainnet.ethereum.coinbasecloud.net`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    crypto19.textContent = arr[11]['list'][19]['name']
    crypto19.setAttribute("id", "btnCrypto19");
    crypto19.setAttribute("class", "yellow");
    resultsContainer.append(crypto19)

    // document.querySelector('#btnCrypto19').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    crypto20.textContent = arr[11]['list'][20]['name']
    crypto20.setAttribute("id", "btnCrypto20");
    crypto20.setAttribute("class", "yellow");
    resultsContainer.append(crypto20)

    // document.querySelector('#btnCrypto20').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    crypto21.textContent = arr[11]['list'][21]['name']
    crypto21.setAttribute("id", "btnCrypto21");
    crypto21.setAttribute("class", "yellow");
    resultsContainer.append(crypto21)

    // document.querySelector('#btnCrypto').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    crypto22.textContent = arr[11]['list'][22]['name']
    crypto22.setAttribute("id", "btnCrypto22");
    crypto22.setAttribute("class", "red");
    resultsContainer.append(crypto22)

    // document.querySelector('#btnCrypto').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    crypto23.textContent = arr[11]['list'][23]['name']
    crypto23.setAttribute("id", "btnCrypto23");
    crypto23.setAttribute("class", "green");
    resultsContainer.append(crypto23)

    document.querySelector('#btnCrypto23').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://api.coingecko.com/api/v3/ping`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    crypto24.textContent = arr[11]['list'][24]['name']
    crypto24.setAttribute("id", "btnCrypto24");
    crypto24.setAttribute("class", "yellow");
    resultsContainer.append(crypto24)

    // document.querySelector('#btnCrypto').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    crypto25.textContent = arr[11]['list'][25]['name']
    crypto25.setAttribute("id", "btnCrypto25");
    crypto25.setAttribute("class", "yellow");
    resultsContainer.append(crypto25)

    // document.querySelector('#btnCrypto').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    crypto26.textContent = arr[11]['list'][26]['name']
    crypto26.setAttribute("id", "btnCrypto26");
    crypto26.setAttribute("class", "green");
    resultsContainer.append(crypto26)

    document.querySelector('#btnCrypto26').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://api.coinlore.net/api/global/`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    crypto27.textContent = arr[11]['list'][27]['name']
    crypto27.setAttribute("id", "btnCrypto27");
    crypto27.setAttribute("class", "yellow");
    resultsContainer.append(crypto27)

    // document.querySelector('#btnCrypto').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    crypto28.textContent = arr[11]['list'][28]['name']
    crypto28.setAttribute("id", "btnCrypto28");
    crypto28.setAttribute("class", "yellow");
    resultsContainer.append(crypto28)

    // document.querySelector('#btnCrypto28').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://api-pro.coinpaprika.com/v1/key/info`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    crypto29.textContent = arr[11]['list'][29]['name']
    crypto29.setAttribute("id", "btnCrypto29");
    crypto29.setAttribute("class", "yellow");
    resultsContainer.append(crypto29)

    // document.querySelector('#btnCrypto29').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://api.coinranking.com/v2`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    crypto30.textContent = arr[11]['list'][30]['name']
    crypto30.setAttribute("id", "btnCrypto30");
    crypto30.setAttribute("class", "yellow");
    resultsContainer.append(crypto30)

    // document.querySelector('#btnCrypto').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    crypto31.textContent = arr[11]['list'][31]['name']
    crypto31.setAttribute("id", "btnCrypto31");
    crypto31.setAttribute("class", "green");
    resultsContainer.append(crypto31)

    document.querySelector('#btnCrypto31').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://api.coinstats.app/public/v1/coins?skip=0&limit=5&currency=EUR`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    crypto32.textContent = arr[11]['list'][32]['name']
    crypto32.setAttribute("id", "btnCrypto32");
    crypto32.setAttribute("class", "yellow");
    resultsContainer.append(crypto32)

    // document.querySelector('#btnCrypto32').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://api.cryptapi.io/${ticker}/create/?${query}`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    crypto33.textContent = arr[11]['list'][33]['name']
    crypto33.setAttribute("id", "btnCrypto33");
    crypto33.setAttribute("class", "yellow");
    resultsContainer.append(crypto33)

    // document.querySelector('#btnCrypto33').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://cryptingup.com/api/`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    crypto34.textContent = arr[11]['list'][34]['name']
    crypto34.setAttribute("id", "btnCrypto34");
    crypto34.setAttribute("class", "yellow");
    resultsContainer.append(crypto34)

    // document.querySelector('#btnCrypto').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    crypto35.textContent = arr[11]['list'][35]['name']
    crypto35.setAttribute("id", "btnCrypto35");
    crypto35.setAttribute("class", "yellow");
    resultsContainer.append(crypto35)

    // document.querySelector('#btnCrypto').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    crypto36.textContent = arr[11]['list'][36]['name']
    crypto36.setAttribute("id", "btnCrypto36");
    crypto36.setAttribute("class", "yellow");
    resultsContainer.append(crypto36)

    // document.querySelector('#btnCrypto36').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://api.cryptonator.com/api/ticker/btc-usd`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    crypto37.textContent = arr[11]['list'][37]['name']
    crypto37.setAttribute("id", "btnCrypto37");
    crypto37.setAttribute("class", "yellow");
    resultsContainer.append(crypto37)

    // document.querySelector('#btnCrypto').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    crypto38.textContent = arr[11]['list'][38]['name']
    crypto38.setAttribute("id", "btnCrypto38");
    crypto38.setAttribute("class", "green");
    resultsContainer.append(crypto38)

    document.querySelector('#btnCrypto38').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://api.ethplorer.io/getTokenInfo/0xf3db5fa2c66b7af3eb0c0b782510816cbe4813b8?apiKey=freekey`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    crypto39.textContent = arr[11]['list'][39]['name']
    crypto39.setAttribute("id", "btnCrypto39");
    crypto39.setAttribute("class", "yellow");
    resultsContainer.append(crypto39)

    // document.querySelector('#btnCrypto39').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://api.exmo.com/v1.1/trades`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    crypto40.textContent = arr[11]['list'][40]['name']
    crypto40.setAttribute("id", "btnCrypto40");
    crypto40.setAttribute("class", "red");
    resultsContainer.append(crypto40)

    // document.querySelector('#btnCrypto').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    crypto41.textContent = arr[11]['list'][41]['name']
    crypto41.setAttribute("id", "btnCrypto41");
    crypto41.setAttribute("class", "yellow");
    resultsContainer.append(crypto41)

    // document.querySelector('#btnCrypto').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    crypto42.textContent = arr[11]['list'][42]['name']
    crypto42.setAttribute("id", "btnCrypto42");
    crypto42.setAttribute("class", "yellow");
    resultsContainer.append(crypto42)

    // document.querySelector('#btnCrypto42').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://api.sandbox.gemini.com`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    crypto43.textContent = arr[11]['list'][43]['name']
    crypto43.setAttribute("id", "btnCrypto43");
    crypto43.setAttribute("class", "red");
    resultsContainer.append(crypto43)

    // document.querySelector('#btnCrypto').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    crypto44.textContent = arr[11]['list'][44]['name']
    crypto44.setAttribute("id", "btnCrypto44");
    crypto44.setAttribute("class", "yellow");
    resultsContainer.append(crypto44)

    // document.querySelector('#btnCrypto').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    crypto45.textContent = arr[11]['list'][45]['name']
    crypto45.setAttribute("id", "btnCrypto45");
    crypto45.setAttribute("class", "yellow");
    resultsContainer.append(crypto45)

    // document.querySelector('#btnCrypto').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    crypto46.textContent = arr[11]['list'][46]['name']
    crypto46.setAttribute("id", "btnCrypto46");
    crypto46.setAttribute("class", "green");
    resultsContainer.append(crypto46)
    
    document.querySelector('#btnCrypto46').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://indodax.com/api/pairs`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    crypto47.textContent = arr[11]['list'][47]['name']
    crypto47.setAttribute("id", "btnCrypto47");
    crypto47.setAttribute("class", "yellow");
    resultsContainer.append(crypto47)

    // document.querySelector('#btnCrypto').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    crypto48.textContent = arr[11]['list'][48]['name']
    crypto48.setAttribute("id", "btnCrypto48");
    crypto48.setAttribute("class", "green");
    resultsContainer.append(crypto48)

    document.querySelector('#btnCrypto48').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://api.kraken.com/0/public/AssetPairs?pair=XXBTZUSD,XETHXXBT`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    crypto49.textContent = arr[11]['list'][49]['name']
    crypto49.setAttribute("id", "btnCrypto49");
    crypto49.setAttribute("class", "yellow");
    resultsContainer.append(crypto49)

    // document.querySelector('#btnCrypto').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    crypto50.textContent = arr[11]['list'][50]['name']
    crypto50.setAttribute("id", "btnCrypto50");
    crypto50.setAttribute("class", "yellow");
    resultsContainer.append(crypto50)

    // document.querySelector('#btnCrypto50').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://localbitcoins.com/api/notifications/`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    crypto51.textContent = arr[11]['list'][51]['name']
    crypto51.setAttribute("id", "btnCrypto51");
    crypto51.setAttribute("class", "green");
    resultsContainer.append(crypto51)

    document.querySelector('#btnCrypto51').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://mempool.space/api/v1/difficulty-adjustment`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    crypto52.textContent = arr[11]['list'][52]['name']
    crypto52.setAttribute("id", "btnCrypto52");
    crypto52.setAttribute("class", "green");
    resultsContainer.append(crypto52)

    document.querySelector('#btnCrypto52').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://www.mercadobitcoin.net/api/BTC/ticker/`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    crypto53.textContent = arr[11]['list'][53]['name']
    crypto53.setAttribute("id", "btnCrypto53");
    crypto53.setAttribute("class", "green");
    resultsContainer.append(crypto53)

    document.querySelector('#btnCrypto53').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://data.messari.io/api/v1/assets`
            fetch(url)
                .then((response) => response.json())
                // .then((data)=> console.log(data)) 
                .then((data)=> renderAPI(data) )       
        }
        fetchAPI()

        function renderAPI(data){

            console.log(data);

            clearUI()

            const btnStart = document.createElement('button')
            btnStart.setAttribute('id', 'btnStart')
            btnStart.textContent = 'START'
            resultsContainer.append(btnStart)

            const btnHome = document.createElement('button')
            btnHome.setAttribute('id', 'btnHomeMessari')
            btnHome.textContent = 'Home'
            navContainer.append(btnHome)

            document.querySelector('#btnHomeMessari').addEventListener('click', function(){
                clearUI()
                
                

                for(let i = 0; i < Object.keys(arrCrypto.data).length; i++ ){

                    let btnMain = document.createElement('button')
                    btnMain.setAttribute('class', 'btnMain')   
                    btnMain.textContent = arrCrypto.data[i]['slug']
                    btnMain.setAttribute('id',`btnMain${i}`)
                    resultsContainer.append(btnMain) 
                }

                for(let i = 0; i < Object.keys(arrCrypto.data).length; i++ ){
                    document.querySelector(`#btnMain${i}`).addEventListener('click', function(){
                    clearUI()
                    console.log(arrCrypto.data[i].slug);
                    
            
                    const printName = document.createElement('h3')
                    printName.textContent = 'Name: ' +   `${arrCrypto.data[i].slug}`
                    resultsContainer.append(printName)
            
                    const printSymbol = document.createElement('p')
                    printSymbol.textContent = 'Symbol: ' +   `${arrCrypto.data[i].symbol}`
                    resultsContainer.append(printSymbol)
            
                    const printCategory = document.createElement('p')
                    printCategory.textContent = 'Category: ' +   `${arrCrypto.data[i].profile.category}`
                    resultsContainer.append(printCategory)
            
                    const printOverview = document.createElement('p')
                    printOverview.textContent = 'Overview: ' +   `${arrCrypto.data[i].profile.overview}`
                    resultsContainer.append(printOverview)
            
            
                    })
                }


            })


           

            document.querySelector('#btnStart').addEventListener('click', function(){
                document.querySelector('#btnStart').style.display = 'none'
                arrCrypto = data
               

                for(let i = 0; i < Object.keys(arrCrypto.data).length; i++ ){

                    console.log(i);

                    let btnMain = document.createElement('button')
                    btnMain.setAttribute('class', 'btnMainMessari')   
                    btnMain.textContent = arrCrypto.data[i]['slug']
                    btnMain.setAttribute('id',`btnMain${i}Messari`)
                    resultsContainer.append(btnMain) 
                }

                for(let i = 0; i < Object.keys(arrCrypto.data).length; i++ ){
                    document.querySelector(`#btnMain${i}Messari`).addEventListener('click', function(){
                    clearUI()
                    console.log(arrCrypto.data[i].slug);
                    
            
                    const printName = document.createElement('h3')
                    printName.textContent = 'Name: ' +   `${arrCrypto.data[i].slug}`
                    resultsContainer.append(printName)
            
                    const printSymbol = document.createElement('p')
                    printSymbol.textContent = 'Symbol: ' +   `${arrCrypto.data[i].symbol}`
                    resultsContainer.append(printSymbol)
            
                    const printCategory = document.createElement('p')
                    printCategory.textContent = 'Category: ' +   `${arrCrypto.data[i].profile.category}`
                    resultsContainer.append(printCategory)
            
                    const printOverview = document.createElement('p')
                    printOverview.textContent = 'Overview: ' +   `${arrCrypto.data[i].profile.overview}`
                    resultsContainer.append(printOverview)
            
            
                    })
                }


            })

           

        }
    })

    crypto54.textContent = arr[11]['list'][54]['name']
    crypto54.setAttribute("id", "btnCrypto54");
    crypto54.setAttribute("class", "green");
    resultsContainer.append(crypto54)

    document.querySelector('#btnCrypto54').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://data.messari.io/api/v1/assets?fields=id,slug,symbol,metrics/market_data/price_usd`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    

    crypto55.textContent = arr[11]['list'][55]['name']
    crypto55.setAttribute("id", "btnCrypto55");
    crypto55.setAttribute("class", "yellow");
    resultsContainer.append(crypto55)

    // document.querySelector('#btnCrypto').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    crypto56.textContent = arr[11]['list'][56]['name']
    crypto56.setAttribute("id", "btnCrypto56");
    crypto56.setAttribute("class", "yellow");
    resultsContainer.append(crypto56)

    // document.querySelector('#btnCrypto').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    crypto57.textContent = arr[11]['list'][57]['name']
    crypto57.setAttribute("id", "btnCrypto57");
    crypto57.setAttribute("class", "yellow");
    resultsContainer.append(crypto57)

    // document.querySelector('#btnCrypto').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    crypto58.textContent = arr[11]['list'][58]['name']
    crypto58.setAttribute("id", "btnCrypto58");
    crypto58.setAttribute("class", "yellow");
    resultsContainer.append(crypto58)

    // document.querySelector('#btnCrypto').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    crypto59.textContent = arr[11]['list'][59]['name']
    crypto59.setAttribute("id", "btnCrypto59");
    crypto59.setAttribute("class", "yellow");
    resultsContainer.append(crypto59)

    // document.querySelector('#btnCrypto59').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ` http://localhost:8899`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    crypto60.textContent = arr[11]['list'][60]['name']
    crypto60.setAttribute("id", "btnCrypto60");
    crypto60.setAttribute("class", "yellow");
    resultsContainer.append(crypto60)

    // document.querySelector('#btnCrypto').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    crypto61.textContent = arr[11]['list'][61]['name']
    crypto61.setAttribute("id", "btnCrypto61");
    crypto61.setAttribute("class", "yellow");
    resultsContainer.append(crypto61)

    document.querySelector('#btnCrypto').addEventListener('click',function(){
        function fetchAPI(){
            let url = ``
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    crypto62.textContent = arr[11]['list'][62]['name']
    crypto62.setAttribute("id", "btnCrypto62");
    crypto62.setAttribute("class", "yellow");
    resultsContainer.append(crypto62)

    // document.querySelector('#btnCrypto62').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://www.worldcoinindex.com/apiservice/ticker?key={key}&label=ethbtc-ltcbtc&fiat=btc`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    crypto63.textContent = arr[11]['list'][63]['name']
    crypto63.setAttribute("id", "btnCrypto63");
    crypto63.setAttribute("class", "yellow");
    resultsContainer.append(crypto63)

    // document.querySelector('#btnCrypto').addEventListener('click',function(){
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

  