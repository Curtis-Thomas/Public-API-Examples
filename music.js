'use-strict'

document.querySelector('#btnMusic').addEventListener('click', function(){
    clearUI()

    let music0  = document.createElement('button')
    let music1  = document.createElement('button')
    let music2  = document.createElement('button')
    let music3  = document.createElement('button')
    let music4  = document.createElement('button')
    let music5  = document.createElement('button')
    let music6  = document.createElement('button')
    let music7  = document.createElement('button')
    let music8  = document.createElement('button')
    let music9  = document.createElement('button')
    let music10  = document.createElement('button')
    let music11  = document.createElement('button')
    let music12  = document.createElement('button')
    let music13  = document.createElement('button')
    let music14  = document.createElement('button')
    let music15  = document.createElement('button')
    let music16  = document.createElement('button')
    let music17  = document.createElement('button')
    let music18  = document.createElement('button')
    let music19  = document.createElement('button')
    let music20  = document.createElement('button')
    let music21  = document.createElement('button')
    let music22  = document.createElement('button')
    let music23  = document.createElement('button')
    let music24  = document.createElement('button')
    let music25  = document.createElement('button')
    let music26  = document.createElement('button')
    let music27  = document.createElement('button')
    let music28  = document.createElement('button')
    let music29  = document.createElement('button')
    let music30  = document.createElement('button')
    let music31  = document.createElement('button')
    let music32  = document.createElement('button')
    

 




    
    music0.textContent = arr[29]['list'][0]['name']
    music0.setAttribute("id", "btnMusic0");
    music0.setAttribute("class", "yellow");
    resultsContainer.append(music0)

    // document.querySelector('#btnMusic0').addEventListener('click',function(){
    // function fetchAPI(){
    //     let url = `https://api.7digital.com/1.2/`
    //     fetch(url)
    //         .then((response) => response.json())
    //         .then((data)=> console.log(data)) 
    //         // .then((data)=> renderAPI4(data) )       
    // }
    // fetchAPI()
    // })

    music1.textContent = arr[29]['list'][1]['name']
    music1.setAttribute("id", "btnMusic1");
    music1.setAttribute("class", "yellow");
    resultsContainer.append(music1)

    
    // document.querySelector('#btnMusic1').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    music2.textContent = arr[29]['list'][2]['name']
    music2.setAttribute("id", "btnMusic2");
    music2.setAttribute("class", "yellow");
    resultsContainer.append(music2)

     
    // document.querySelector('#btnMusic2').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://api.audiomack.com/v1/artist/glen-scott/favorites?show=music&fields=id`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    music3.textContent = arr[29]['list'][3]['name']
    music3.setAttribute("id", "btnMusic3");
    music3.setAttribute("class", "yellow");
    resultsContainer.append(music3)

     
    // document.querySelector('#btnMusic3').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    music4.textContent = arr[29]['list'][4]['name']
    music4.setAttribute("id", "btnMusic4");
    music4.setAttribute("class", "yellow");
    resultsContainer.append(music4)

     
    // document.querySelector('#btnMusic4').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    music5.textContent = arr[29]['list'][5]['name']
    music5.setAttribute("id", "btnMusic5");
    music5.setAttribute("class", "yellow");
    resultsContainer.append(music5)

     
    // document.querySelector('#btnMusic5').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    music6.textContent = arr[29]['list'][6]['name']
    music6.setAttribute("id", "btnMusic6");
    music6.setAttribute("class", "green");
    resultsContainer.append(music6)

     
    document.querySelector('#btnMusic6').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://api.discogs.com/releases/249504`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    music7.textContent = arr[29]['list'][7]['name']
    music7.setAttribute("id", "btnMusic7");
    music7.setAttribute("class", "yellow");
    resultsContainer.append(music7)

     
    // document.querySelector('#btnMusic7').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    music8.textContent = arr[29]['list'][8]['name']
    music8.setAttribute("id", "btnMusic8");
    music8.setAttribute("class", "yellow");
    resultsContainer.append(music8)

     
    // document.querySelector('#btnMusic8').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://github.com/cyberboysumanjay/GaanaAPI`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    music9.textContent = arr[29]['list'][9]['name']
    music9.setAttribute("id", "btnMusic9");
    music9.setAttribute("class", "yellow");
    resultsContainer.append(music9)

     
    // document.querySelector('#btnMusic9').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    music10.textContent = arr[29]['list'][10]['name']
    music10.setAttribute("id", "btnMusic10");
    music10.setAttribute("class", "green");
    resultsContainer.append(music10)

     
    document.querySelector('#btnMusic10').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://binaryjazz.us/wp-json/genrenator/v1/genre/`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    music11.textContent = arr[29]['list'][11]['name']
    music11.setAttribute("id", "btnMusic11");
    music11.setAttribute("class", "yellow");
    resultsContainer.append(music11)

     
    // document.querySelector('#btnMusic11').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    music12.textContent = arr[29]['list'][12]['name']
    music12.setAttribute("id", "btnMusic12");
    music12.setAttribute("class", "yellow");
    resultsContainer.append(music12)

     
    // document.querySelector('#btnMusic12').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    music13.textContent = arr[29]['list'][13]['name']
    music13.setAttribute("id", "btnMusic13");
    music13.setAttribute("class", "yellow");
    resultsContainer.append(music13)

     
    // document.querySelector('#btnMusic13').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `http://127.0.0.1:5000/song/?query=https://www.jiosaavn.com/song/khairiyat/PwAFSRNpAWw`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    music14.textContent = arr[29]['list'][14]['name']
    music14.setAttribute("id", "btnMusic14");
    music14.setAttribute("class", "yellow");
    resultsContainer.append(music14)

     
    // document.querySelector('#btnMusic14').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    music15.textContent = arr[29]['list'][15]['name']
    music15.setAttribute("id", "btnMusic15");
    music15.setAttribute("class", "yellow");
    resultsContainer.append(music15)

     
    // document.querySelector('#btnMusic15').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://api.ksoft.si/music/recommendations`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    music16.textContent = arr[29]['list'][16]['name']
    music16.setAttribute("id", "btnMusic16");
    music16.setAttribute("class", "yellow");
    resultsContainer.append(music16)

     
    // document.querySelector('#btnMusic16').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    music17.textContent = arr[29]['list'][17]['name']
    music17.setAttribute("id", "btnMusic17");
    music17.setAttribute("class", "yellow");
    resultsContainer.append(music17)

     
    // document.querySelector('#btnMusic17').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://api.lyrics.ovh/v1/Coldplay/Adventure of a Lifetime`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    music18.textContent = arr[29]['list'][18]['name']
    music18.setAttribute("id", "btnMusic18");
    music18.setAttribute("class", "green");
    resultsContainer.append(music18)

     
    document.querySelector('#btnMusic18').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://api.mixcloud.com/spartacus/party-time/`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    music19.textContent = arr[29]['list'][19]['name']
    music19.setAttribute("id", "btnMusic19");
    music19.setAttribute("class", "yellow");
    resultsContainer.append(music19)

     
    // document.querySelector('#btnMusic19').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://musicbrainz.org/ws/2/`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    music20.textContent = arr[29]['list'][20]['name']
    music20.setAttribute("id", "btnMusic20");
    music20.setAttribute("class", "yellow");
    resultsContainer.append(music20)

     
    // document.querySelector('#btnMusic20').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    music21.textContent = arr[29]['list'][21]['name']
    music21.setAttribute("id", "btnMusic21");
    music21.setAttribute("class", "yellow");
    resultsContainer.append(music21)

     
    // document.querySelector('#btnMusic21').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    music22.textContent = arr[29]['list'][22]['name']
    music22.setAttribute("id", "btnMusic22");
    music22.setAttribute("class", "yellow");
    resultsContainer.append(music22)

     
    // document.querySelector('#btnMusic22').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://openwhyd.org/hot/electro`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    music23.textContent = arr[29]['list'][23]['name']
    music23.setAttribute("id", "btnMusic23");
    music23.setAttribute("class", "yellow");
    resultsContainer.append(music23)

     
    // document.querySelector('#btnMusic23').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `http://phish.in/api/v1/shows.json?per_page=3&page=1&sort_attr=date&sort_dir=desc`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    music24.textContent = arr[29]['list'][24]['name']
    music24.setAttribute("id", "btnMusic24");
    music24.setAttribute("class", "yellow");
    resultsContainer.append(music24)

     
    // document.querySelector('#btnMusic24').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://de1.api.radio-browser.info`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    music25.textContent = arr[29]['list'][25]['name']
    music25.setAttribute("id", "btnMusic25");
    music25.setAttribute("class", "yellow");
    resultsContainer.append(music25)

     
    // document.querySelector('#btnMusic25').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    music26.textContent = arr[29]['list'][26]['name']
    music26.setAttribute("id", "btnMusic26");
    music26.setAttribute("class", "yellow");
    resultsContainer.append(music26)

     
    // document.querySelector('#btnMusic26').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    music27.textContent = arr[29]['list'][27]['name']
    music27.setAttribute("id", "btnMusic27");
    music27.setAttribute("class", "red");
    resultsContainer.append(music27)

     
    // document.querySelector('#btnMusic27').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    music28.textContent = arr[29]['list'][28]['name']
    music28.setAttribute("id", "btnMusic28");
    music28.setAttribute("class", "yellow");
    resultsContainer.append(music28)

     
    // document.querySelector('#btnMusic28').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    music29.textContent = arr[29]['list'][29]['name']
    music29.setAttribute("id", "btnMusic29");
    music29.setAttribute("class", "yellow");
    resultsContainer.append(music29)

     
    // document.querySelector('#btnMusic29').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    music30.textContent = arr[29]['list'][30]['name']
    music30.setAttribute("id", "btnMusic30");
    music30.setAttribute("class", "yellow");
    resultsContainer.append(music30)

     
    // document.querySelector('#btnMusic30').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://tastedive.com/api/similar?q=red+hot+chili+peppers%2C+pulp+fiction`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    music31.textContent = arr[29]['list'][31]['name']
    music31.setAttribute("id", "btnMusic31");
    music31.setAttribute("class", "yellow");
    resultsContainer.append(music31)

     
    // document.querySelector('#btnMusic31').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://www.theaudiodb.com/api_guide.php?s=coldplay`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    music32.textContent = arr[29]['list'][32]['name']
    music32.setAttribute("id", "btnMusic32");
    music32.setAttribute("class", "yellow");
    resultsContainer.append(music32)

     
    // document.querySelector('#btnMusic32').addEventListener('click',function(){
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
    
   