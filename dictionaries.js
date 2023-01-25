'use-strict'

document.querySelector('#btnDictionaries').addEventListener('click', function(){
    clearUI()

    let dictionaries0  = document.createElement('button')
    let dictionaries1  = document.createElement('button')
    let dictionaries2  = document.createElement('button')
    let dictionaries3  = document.createElement('button')
    let dictionaries4  = document.createElement('button')
    let dictionaries5  = document.createElement('button')
    let dictionaries6  = document.createElement('button')
    let dictionaries7  = document.createElement('button')
    let dictionaries8  = document.createElement('button')
    let dictionaries9  = document.createElement('button')
    let dictionaries10  = document.createElement('button')
    let dictionaries11  = document.createElement('button')
    let dictionaries12  = document.createElement('button')
    
 
    dictionaries0.textContent = arr[15]['list'][0]['name']
    dictionaries0.setAttribute("id", "btnDictionaries0");
    dictionaries0.setAttribute("class", "green");
    resultsContainer.append(dictionaries0)

    document.querySelector('#btnDictionaries0').addEventListener('click',function(){
    function fetchAPI(){
        let url = `http://ccdb.hemiola.com/characters/radicals/85`
        fetch(url)
            .then((response) => response.json())
            .then((data)=> console.log(data)) 
            // .then((data)=> renderAPI4(data) )       
    }
    fetchAPI()
    })

    dictionaries1.textContent = arr[15]['list'][1]['name']
    dictionaries1.setAttribute("id", "btnDictionaries1");
    dictionaries1.setAttribute("class", "green");
    resultsContainer.append(dictionaries1)

    document.querySelector('#btnDictionaries1').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://api.ctext.org/getcapabilities`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    dictionaries2.textContent = arr[15]['list'][2]['name']
    dictionaries2.setAttribute("id", "btnDictionaries2");
    dictionaries2.setAttribute("class", "yellow");
    resultsContainer.append(dictionaries2)

    // document.querySelector('#btnDictionaries2').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://api.collinsdictionary.com/api/v1/dictionaries`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    dictionaries3.textContent = arr[15]['list'][3]['name']
    dictionaries3.setAttribute("id", "btnDictionaries3");
    dictionaries3.setAttribute("class", "green");
    resultsContainer.append(dictionaries3)

    document.querySelector('#btnDictionaries3').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://api.dictionaryapi.dev/api/v2/entries/en/hello`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    dictionaries4.textContent = arr[15]['list'][4]['name']
    dictionaries4.setAttribute("id", "btnDictionaries4");
    dictionaries4.setAttribute("class", "red");
    resultsContainer.append(dictionaries4)

    // document.querySelector('#btnDictionaries4').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    dictionaries5.textContent = arr[15]['list'][5]['name']
    dictionaries5.setAttribute("id", "btnDictionaries5");
    dictionaries5.setAttribute("class", "yellow");
    resultsContainer.append(dictionaries5)

    // document.querySelector('#btnDictionaries5').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://lingua-robot.p.rapidapi.com/language/v1/entries/en/`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    dictionaries6.textContent = arr[15]['list'][6]['name']
    dictionaries6.setAttribute("id", "btnDictionaries6");
    dictionaries6.setAttribute("class", "yellow");
    resultsContainer.append(dictionaries6)

    // document.querySelector('#btnDictionaries6').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    dictionaries7.textContent = arr[15]['list'][7]['name']
    dictionaries7.setAttribute("id", "btnDictionaries7");
    dictionaries7.setAttribute("class", "yellow");
    resultsContainer.append(dictionaries7)

    // document.querySelector('#btnDictionaries7').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://owlbot.info/api/v4/dictionary/owl`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    dictionaries8.textContent = arr[15]['list'][8]['name']
    dictionaries8.setAttribute("id", "btnDictionaries8");
    dictionaries8.setAttribute("class", "yellow");
    resultsContainer.append(dictionaries8)

    // document.querySelector('#btnDictionaries8').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    dictionaries9.textContent = arr[15]['list'][9]['name']
    dictionaries9.setAttribute("id", "btnDictionaries9");
    dictionaries9.setAttribute("class", "yellow");
    resultsContainer.append(dictionaries9)

    // document.querySelector('#btnDictionaries9').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://www.stands4.com/services/v2/syno.php?uid=1001&tokenid=tk324324&word=consistent&format=xml`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    dictionaries10.textContent = arr[15]['list'][10]['name']
    dictionaries10.setAttribute("id", "btnDictionaries10");
    dictionaries10.setAttribute("class", "yellow");
    resultsContainer.append(dictionaries10)

    // document.querySelector('#btnDictionaries10').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://www.mediawiki.org/wiki/Special:MyLanguage/API:Main_page`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    dictionaries11.textContent = arr[15]['list'][11]['name']
    dictionaries11.setAttribute("id", "btnDictionaries11");
    dictionaries11.setAttribute("class", "yellow");
    resultsContainer.append(dictionaries11)

    // document.querySelector('#btnDictionaries11').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    dictionaries12.textContent = arr[15]['list'][12]['name']
    dictionaries12.setAttribute("id", "btnDictionaries12");
    dictionaries12.setAttribute("class", "yellow");
    resultsContainer.append(dictionaries12)

    // document.querySelector('#btnDictionaries12').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://wordsapiv1.p.mashape.com/words/soliloquy`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    
})

    