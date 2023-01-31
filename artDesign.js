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
    artDesign1.setAttribute("class", "blue");
    resultsContainer.append(artDesign1)

    document.querySelector('#btnArtDesign1').addEventListener('click',function(){
        clearUI()
        let artID = '11434'

        function fetchAPI(){
            
            let url = `https://api.artic.edu/api/v1/artworks/`+artID
            fetch(url)
                .then((response) => response.json())
                // .then((data)=> console.log(data))   
                .then((data)=> renderAPI(data) )    
        }
        fetchAPI()
        
        function renderAPI(picture){
        

            let infoBox = document.createElement('p')
            infoBox.textContent = 'Info: Art'
            infoBox.setAttribute('class','infobox')
            infoBox.setAttribute('id','infobox')
            printContainer.append(infoBox) 

            let pic0 = document.createElement('h3')
            pic0.setAttribute("id", "img0");
            pic0.textContent = picture.data.title
            printContainer.append(pic0)

            let imgID = picture.data.image_id

            let pic1 = document.createElement('img')
            pic1.setAttribute("id", "img1");
            pic1.src = 'https://www.artic.edu/iiif/2/'+ imgID+'/full/843,/0/default.jpg'
            pic1.style.width = '400px'
            printContainer.append(pic1)

            let pic2 = document.createElement('p')
            pic2.setAttribute("id", "img2");
            pic2.textContent = picture.data.artist_title
            printContainer.append(pic2)
            
        }  

        


        let btn0 = document.createElement('button')
        btn0.setAttribute("id", "artBtn0");
        btn0.setAttribute("class", "artBtn");
        btn0.textContent = '0'
        resultsContainer.append(btn0) 

        document.querySelector('#artBtn0').addEventListener('click', function(){
            clearPrint()
            artID = '11434'
            fetchAPI() 
        })

        let btn1 = document.createElement('button')
        btn1.setAttribute("id", "artBtn1");
        btn1.setAttribute("class", "artBtn");
        btn1.textContent = '1'
        resultsContainer.append(btn1) 

        document.querySelector('#artBtn1').addEventListener('click', function(){
            clearPrint()
            artID = '14556'
            fetchAPI() 
        })

        let btn2 = document.createElement('button')
        btn2.setAttribute("id", "artBtn2");
        btn2.setAttribute("class", "artBtn");
        btn2.textContent = '2'
        resultsContainer.append(btn2) 

        document.querySelector('#artBtn2').addEventListener('click', function(){
            clearPrint()
            artID = '16487'
            fetchAPI() 
        })

        let btn3 = document.createElement('button')
        btn3.setAttribute("id", "artBtn3");
        btn3.setAttribute("class", "artBtn");
        btn3.textContent = '3'
        resultsContainer.append(btn3) 

        document.querySelector('#artBtn3').addEventListener('click', function(){
            clearPrint()
            artID = '16564'
            fetchAPI() 
        })

        let btn4 = document.createElement('button')
        btn4.setAttribute("id", "artBtn4");
        btn4.setAttribute("class", "artBtn");
        btn4.textContent = '4'
        resultsContainer.append(btn4) 

        document.querySelector('#artBtn4').addEventListener('click', function(){
            clearPrint()
            artID = '18751'
            fetchAPI() 
        })

        let btn5 = document.createElement('button')
        btn5.setAttribute("id", "artBtn5");
        btn5.setAttribute("class", "artBtn");
        btn5.textContent = '5'
        resultsContainer.append(btn5) 

        document.querySelector('#artBtn5').addEventListener('click', function(){
            clearPrint()
            artID = '18754'
            fetchAPI() 
        })

        let btn6 = document.createElement('button')
        btn6.setAttribute("id", "artBtn6");
        btn6.setAttribute("class", "artBtn");
        btn6.textContent = '6'
        resultsContainer.append(btn6) 

        document.querySelector('#artBtn6').addEventListener('click', function(){
            clearPrint()
            artID = '20347'
            fetchAPI() 
        })

        let btn7 = document.createElement('button')
        btn7.setAttribute("id", "artBtn7");
        btn7.setAttribute("class", "artBtn");
        btn7.textContent = '7'
        resultsContainer.append(btn7) 

        document.querySelector('#artBtn7').addEventListener('click', function(){
            clearPrint()
            artID = '25838'
            fetchAPI() 
        })

        let btn8 = document.createElement('button')
        btn8.setAttribute("id", "artBtn8");
        btn8.setAttribute("class", "artBtn");
        btn8.textContent = '8'
        resultsContainer.append(btn8) 

        document.querySelector('#artBtn8').addEventListener('click', function(){
            clearPrint()
            artID = '23096'
            fetchAPI() 
        })

        let btn9 = document.createElement('button')
        btn9.setAttribute("id", "artBtn9");
        btn9.setAttribute("class", "artBtn");
        btn9.textContent = '9'
        resultsContainer.append(btn9) 

        document.querySelector('#artBtn9').addEventListener('click', function(){
            clearPrint()
            artID = '22242'
            fetchAPI() 
        })

        let btn10 = document.createElement('button')
        btn10.setAttribute("id", "artBtn10");
        btn10.setAttribute("class", "artBtn");
        btn10.textContent = '10'
        resultsContainer.append(btn10) 

        document.querySelector('#artBtn10').addEventListener('click', function(){
            clearPrint()
            artID = '27281'
            fetchAPI() 
        })

        let btn11 = document.createElement('button')
        btn11.setAttribute("id", "artBtn11");
        btn11.setAttribute("class", "artBtn");
        btn11.textContent = '11'
        resultsContainer.append(btn11) 

        document.querySelector('#artBtn11').addEventListener('click', function(){
            clearPrint()
            artID = '27103'
            fetchAPI() 
        })


        
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