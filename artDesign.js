'use-strict'

document.querySelector('#btnArtDesign').addEventListener('click', function(){
    clearUI()

    let artDesign0  = document.createElement('button')
    let artDesign1  = document.createElement('button')
    let artDesign2  = document.createElement('button')
    let artDesign3  = document.createElement('button')
    let artDesign4  = document.createElement('button')
    let artDesign5  = document.createElement('button')
    let artDesign6  = document.createElement('button')
    let artDesign7  = document.createElement('button')
    let artDesign8  = document.createElement('button')
    let artDesign9  = document.createElement('button')
    let artDesign10  = document.createElement('button')
    let artDesign11  = document.createElement('button')
    let artDesign12  = document.createElement('button')
    let artDesign13  = document.createElement('button')
    let artDesign14  = document.createElement('button')
    let artDesign15 = document.createElement('button')
    let artDesign16  = document.createElement('button')
    let artDesign17  = document.createElement('button')
    let artDesign18  = document.createElement('button')
    let artDesign19  = document.createElement('button')


    artDesign0.textContent = arr[3]['list'][0]['name']
    artDesign0.setAttribute("id", "btnArtDesign0");
    artDesign0.setAttribute("class", "yellow");
    resultsContainer.append(artDesign0)

    // document.querySelector('#btnArtDesign0').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://v1.api.amethyste.moe/image`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data))      
    //     }
    //     fetchAPI()
    // })

    artDesign1.textContent = arr[3]['list'][1]['name']
    artDesign1.setAttribute("id", "btnArtDesign1");
    artDesign1.setAttribute("class", "green");
    resultsContainer.append(artDesign1)

    document.querySelector('#btnArtDesign1').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://api.artic.edu/api/v1/artworks/129884`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data))   
                // .then((data)=> renderAPI4(data) )    
        }
        fetchAPI()
    })
    
    artDesign2.textContent = arr[3]['list'][2]['name']
    artDesign2.setAttribute("id", "btnArtDesign2");
    artDesign2.setAttribute("class", "green");
    resultsContainer.append(artDesign2)

    document.querySelector('#btnArtDesign2').addEventListener('click',function(){
        function fetchAPI(){
            let url = `http://colormind.io/list/`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data))   
                // .then((data)=> renderAPI4(data) )    
        }
        fetchAPI()
    })
    
    artDesign3.textContent = arr[3]['list'][3]['name']
    artDesign3.setAttribute("id", "btnArtDesign3");
    artDesign3.setAttribute("class", "red");
    resultsContainer.append(artDesign3)

    // document.querySelector('#btnArtDesign3').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `http://www.colourlovers.com/api/colors/top`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data))   
    //             // .then((data)=> renderAPI4(data) )    
    //     }
    //     fetchAPI()
    // })
    
    artDesign4.textContent = arr[3]['list'][4]['name']
    artDesign4.setAttribute("id", "btnArtDesign4");
    artDesign4.setAttribute("class", "yellow");
    resultsContainer.append(artDesign4)

    // document.querySelector('#btnArtDesign4').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://collection.cooperhewitt.org/api/methods/cooperhewitt.cafe.isOpen/explore/`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data))   
    //             // .then((data)=> renderAPI4(data) )    
    //     }
    //     fetchAPI()
    // })
    
    artDesign5.textContent = arr[3]['list'][5]['name']
    artDesign5.setAttribute("id", "btnArtDesign5");
    artDesign5.setAttribute("class", "yellow");
    resultsContainer.append(artDesign5)

    // document.querySelector('#btnArtDesign5').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `api.dribbble.com/v2/`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data))   
    //             // .then((data)=> renderAPI4(data) )    
    //     }
    //     fetchAPI()
    // })
    
    artDesign6.textContent = arr[3]['list'][6]['name']
    artDesign6.setAttribute("id", "btnArtDesign6");
    artDesign6.setAttribute("class", "yellow");
    resultsContainer.append(artDesign6)

    // document.querySelector('#btnArtDesign6').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://emojihub.yurace.pro/api/random`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data))   
    //             // .then((data)=> renderAPI4(data) )    
    //     }
    //     fetchAPI()
    // })
    
    artDesign7.textContent = arr[3]['list'][7]['name']
    artDesign7.setAttribute("id", "btnArtDesign7");
    artDesign7.setAttribute("class", "yellow");
    resultsContainer.append(artDesign7)

    // document.querySelector('#btnArtDesign').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data))   
    //             // .then((data)=> renderAPI4(data) )    
    //     }
    //     fetchAPI()
    // })
    
    artDesign8.textContent = arr[3]['list'][8]['name']
    artDesign8.setAttribute("id", "btnArtDesign8");
    artDesign8.setAttribute("class", "yellow");
    resultsContainer.append(artDesign8)

    // document.querySelector('#btnArtDesign8').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://api.harvardartmuseums.org`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data))   
    //             // .then((data)=> renderAPI4(data) )    
    //     }
    //     fetchAPI()
    // })
    
    artDesign9.textContent = arr[3]['list'][9]['name']
    artDesign9.setAttribute("id", "btnArtDesign9");
    artDesign9.setAttribute("class", "red");
    resultsContainer.append(artDesign9)

    // document.querySelector('#btnArtDesign').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data))   
    //             // .then((data)=> renderAPI4(data) )    
    //     }
    //     fetchAPI()
    // })
    
    artDesign10.textContent = arr[3]['list'][10]['name']
    artDesign10.setAttribute("id", "btnArtDesign10");
    artDesign10.setAttribute("class", "red");
    resultsContainer.append(artDesign10)

    // document.querySelector('#btnArtDesign10').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `api.iconfinder.com`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data))   
    //             // .then((data)=> renderAPI4(data) )    
    //     }
    //     fetchAPI()
    // })
    
    artDesign11.textContent = arr[3]['list'][11]['name']
    artDesign11.setAttribute("id", "btnArtDesign11");
    artDesign11.setAttribute("class", "red");
    resultsContainer.append(artDesign11)

    // document.querySelector('#btnArtDesign11').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `<img src="https://img.icons8.com/2266EE/search">`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data))   
    //             // .then((data)=> renderAPI4(data) )    
    //     }
    //     fetchAPI()
    // })
    
    artDesign12.textContent = arr[3]['list'][12]['name']
    artDesign12.setAttribute("id", "btnArtDesign12");
    artDesign12.setAttribute("class", "red");
    resultsContainer.append(artDesign12)

    // document.querySelector('#btnArtDesign').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data))   
    //             // .then((data)=> renderAPI4(data) )    
    //     }
    //     fetchAPI()
    // })
    
    artDesign13.textContent = arr[3]['list'][13]['name']
    artDesign13.setAttribute("id", "btnArtDesign13");
    artDesign13.setAttribute("class", "green");
    resultsContainer.append(artDesign13)

    document.querySelector('#btnArtDesign13').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://collectionapi.metmuseum.org/public/collection/v1/search?q=sunflowers`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data))   
                // .then((data)=> renderAPI4(data) )    
        }
        fetchAPI()
    })
    
    artDesign14.textContent = arr[3]['list'][14]['name']
    artDesign14.setAttribute("id", "btnArtDesign14");
    artDesign14.setAttribute("class", "yellow");
    resultsContainer.append(artDesign14)

    // document.querySelector('#btnArtDesign').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data))   
    //             // .then((data)=> renderAPI4(data) )    
    //     }
    //     fetchAPI()
    // })
    
    artDesign15.textContent = arr[3]['list'][15]['name']
    artDesign15.setAttribute("id", "btnArtDesign15");
    artDesign15.setAttribute("class", "green");
    resultsContainer.append(artDesign15)

    document.querySelector('#btnArtDesign15').addEventListener('click',function(){
        let r = 000
        let g = 000
        let b = 000
        let tiles = 50
        let tileSize = 7
        let borderWidth =0
        let mode = 'brightnes'
        function fetchAPI(){
            let url = `https://php-noise.com/noise.php?r=${r}&g=${g}&b=${b}&tiles=${tiles}&tileSize=${tileSize}&borderWidth=${borderWidth}&mode=${mode}&json`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data))   
                // .then((data)=> renderAPI4(data) )    
        }
        fetchAPI()
    })
    
    artDesign16.textContent = arr[3]['list'][16]['name']
    artDesign16.setAttribute("id", "btnArtDesign16");
    artDesign16.setAttribute("class", "yellow");
    resultsContainer.append(artDesign16)

    // document.querySelector('#btnArtDesign16').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://app.pixelencounter.com/api/basic/monsters/random`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data))   
    //             // .then((data)=> renderAPI4(data) )    
    //     }
    //     fetchAPI()
    // })
    
    artDesign17.textContent = arr[3]['list'][17]['name']
    artDesign17.setAttribute("id", "btnArtDesign17");
    artDesign17.setAttribute("class", "yellow");
    resultsContainer.append(artDesign17)

    // document.querySelector('#btnArtDesign').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data))   
    //             // .then((data)=> renderAPI4(data) )    
    //     }
    //     fetchAPI()
    // })
    
    artDesign18.textContent = arr[3]['list'][18]['name']
    artDesign18.setAttribute("id", "btnArtDesign18");
    artDesign18.setAttribute("class", "yellow");
    resultsContainer.append(artDesign18)

    // document.querySelector('#btnArtDesign18').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://textvis-word-cloud-v1.p.rapidapi.com/v1/textToCloud`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data))   
    //             // .then((data)=> renderAPI4(data) )    
    //     }
    //     fetchAPI()
    // })
    
    artDesign19.textContent = arr[3]['list'][19]['name']
    artDesign19.setAttribute("id", "btnArtDesign19");
    artDesign19.setAttribute("class", "red");
    resultsContainer.append(artDesign19)

    // document.querySelector('#btnArtDesign').addEventListener('click',function(){
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