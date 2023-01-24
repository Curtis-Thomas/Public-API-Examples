'use-strict'


document.querySelector('#btnAnime').addEventListener('click', function(){
    clearUI()
   let anime0  = document.createElement('button')
   let anime1  = document.createElement('button')
   let anime2  = document.createElement('button')
   let anime3  = document.createElement('button')
   let anime4  = document.createElement('button')
   let anime5  = document.createElement('button')
   let anime6  = document.createElement('button')
   let anime7  = document.createElement('button')
   let anime8  = document.createElement('button')
   let anime9  = document.createElement('button')
   let anime10  = document.createElement('button')
   let anime11  = document.createElement('button')
   let anime12  = document.createElement('button')
   let anime13  = document.createElement('button')
   let anime14  = document.createElement('button')
   let anime15  = document.createElement('button')
   let anime16  = document.createElement('button')
   let anime17  = document.createElement('button')
   let anime18  = document.createElement('button')


  
        
    anime0.textContent = arr[1]['list'][0]['name']
    anime0.setAttribute("id", "btnAnime0");
    anime0.setAttribute("class", "yellow");
    resultsContainer.append(anime0)

    document.querySelector('#btnAnime0').addEventListener('click',function(){
        function fetchAPI(){
            let url = `http://api.anidb.net:9001/httpapi?request=anime`
            fetch(url)
                // .then((response) => response.json())
                .then((data)=> console.log(data))      
        }
        fetchAPI()
    })

    anime1.textContent = arr[1]['list'][1]['name']
    anime1.setAttribute("id", "btnAnime1");
    anime1.setAttribute("class", "yellow");
    resultsContainer.append(anime1)

    document.querySelector('#btnAnime1').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://graphql.anilist.co`
            fetch(url)
                // .then((response) => response.json())
                .then((data)=> console.log(data))      
        }
        fetchAPI()
    })

    anime2.textContent = arr[1]['list'][2]['name']
    anime2.setAttribute("id", "btnAnime2");
    anime2.setAttribute("class", "yellow");
    resultsContainer.append(anime2)

    document.querySelector('#btnAnime2').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://graphql.anilist.co`
            fetch(url)
                // .then((response) => response.json())
                .then((data)=> console.log(data))      
        }
        fetchAPI()
    })

    anime3.textContent = arr[1]['list'][3]['name']
    anime3.setAttribute("id", "btnAnime3");
    anime3.setAttribute("class", "yellow");
    resultsContainer.append(anime3)

    document.querySelector('#btnAnime3').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://animechan.vercel.app/api/random`
            fetch(url)
                // .then((response) => response.json())
                .then((data)=> console.log(data))      
        }
        fetchAPI()
    })

    anime4.textContent = arr[1]['list'][4]['name']
    anime4.setAttribute("id", "btnAnime4");
    anime4.setAttribute("class", "red");
    resultsContainer.append(anime4)

    // document.querySelector('#btnAnime4').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://anime-facts-rest-api.herokuapp.com/api/v1`
    //         fetch(url)
    //             // .then((response) => response.json())
    //             .then((data)=> console.log(data))      
    //     }
    //     fetchAPI()
    // })

    anime5.textContent = arr[1]['list'][5]['name']
    anime5.setAttribute("id", "btnAnime5");
    anime5.setAttribute("class", "yellow");
    resultsContainer.append(anime5)

    document.querySelector('#btnAnime5').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://cdn.animenewsnetwork.com/encyclopedia/api.xml?anime=1`
            fetch(url)
                // .then((response) => response.json())
                .then((data)=> console.log(data))      
        }
        fetchAPI()
    })

    anime6.textContent = arr[1]['list'][6]['name']
    anime6.setAttribute("id", "btnAnime6");
    anime6.setAttribute("class", "yellow");
    resultsContainer.append(anime6)

    document.querySelector('#btnAnime6').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://api.catboys.com/dice`
            fetch(url)
                // .then((response) => response.json())
                .then((data)=> console.log(data))      
        }
        fetchAPI()
    })

    anime7.textContent = arr[1]['list'][7]['name']
    anime7.setAttribute("id", "btnAnime7");
    anime7.setAttribute("class", "yellow");
    resultsContainer.append(anime7)

    document.querySelector('#btnAnime7').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://testbooru.donmai.us`
            fetch(url)
                // .then((response) => response.json())
                .then((data)=> console.log(data))      
        }
        fetchAPI()
    })

    anime8.textContent = arr[1]['list'][8]['name']
    anime8.setAttribute("id", "btnAnime8");
    anime8.setAttribute("class", "yellow");
    resultsContainer.append(anime8)

    document.querySelector('#btnAnime8').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://api.jikan.moe/v4/recommendations/anime`
            fetch(url)
                // .then((response) => response.json())
                .then((data)=> console.log(data))      
        }
        fetchAPI()
    })

    anime9.textContent = arr[1]['list'][9]['name']
    anime9.setAttribute("id", "btnAnime9");
    anime9.setAttribute("class", "yellow");
    resultsContainer.append(anime9)

    document.querySelector('#btnAnime9').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://kitsu.io/api/oauth`
            fetch(url)
                // .then((response) => response.json())
                .then((data)=> console.log(data))      
        }
        fetchAPI()
    })

    anime10.textContent = arr[1]['list'][10]['name']
    anime10.setAttribute("id", "btnAnime10");
    anime10.setAttribute("class", "red");
    resultsContainer.append(anime10)


    anime11.textContent = arr[1]['list'][11]['name']
    anime11.setAttribute("id", "btnAnime11");
    anime11.setAttribute("class", "yellow");
    resultsContainer.append(anime11)

    document.querySelector('#btnAnime11').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://mangapi3.p.rapidapi.com/api/translate`
            fetch(url)
                // .then((response) => response.json())
                .then((data)=> console.log(data))      
        }
        fetchAPI()
    })

    anime12.textContent = arr[1]['list'][12]['name']
    anime12.setAttribute("id", "btnAnime12");
    anime12.setAttribute("class", "red");
    resultsContainer.append(anime12)

    // document.querySelector('#btnAnime12').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://api.myanimelist.net/v2`
    //         fetch(url)
    //             // .then((response) => response.json())
    //             .then((data)=> console.log(data))      
    //     }
    //     fetchAPI()
    // })

    anime13.textContent = arr[1]['list'][13]['name']
    anime13.setAttribute("id", "btnAnime13");
    anime13.setAttribute("class", "yellow");
    resultsContainer.append(anime13)

    document.querySelector('#btnAnime13').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://nekos.best/api/v2/neko`
            fetch(url)
                // .then((response) => response.json())
                .then((data)=> console.log(data))      
        }
        fetchAPI()
    })

    anime14.textContent = arr[1]['list'][14]['name']
    anime14.setAttribute("id", "btnAnime14");
    anime14.setAttribute("class", "yellow");
    resultsContainer.append(anime14)

    document.querySelector('#btnAnime14').addEventListener('click',function(){
        function fetchAPI(){
            let url = ``
            fetch(url)
                // .then((response) => response.json())
                .then((data)=> console.log(data))      
        }
        fetchAPI()
    })

    anime15.textContent = arr[1]['list'][15]['name']
    anime15.setAttribute("id", "btnAnime15");
    anime15.setAttribute("class", "red");
    resultsContainer.append(anime15)

    // document.querySelector('#btnAnime15').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             // .then((response) => response.json())
    //             .then((data)=> console.log(data))      
    //     }
    //     fetchAPI()
    // })

    anime16.textContent = arr[1]['list'][16]['name']
    anime16.setAttribute("id", "btnAnime16");
    anime16.setAttribute("class", "yellow");
    resultsContainer.append(anime16)

    
    document.querySelector('#btnAnime16').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://api.trace.moe/search?url=https://images.plurk.com/32B15UXxymfSMwKGTObY5e.jpg`
            fetch(url)
                // .then((response) => response.json())
                .then((data)=> console.log(data))      
        }
        fetchAPI()
    })

    

    anime17.textContent = arr[1]['list'][17]['name']
    anime17.setAttribute("id", "btnAnime17");
    anime17.setAttribute("class", "yellow");
    resultsContainer.append(anime17)

    
    document.querySelector('#btnAnime17').addEventListener('click',function(){
        function fetchAPI(){
            let url = ``
            fetch(url)
                // .then((response) => response.json())
                .then((data)=> console.log(data))      
        }
        fetchAPI()
    })

    anime18.textContent = arr[1]['list'][18]['name']
    anime18.setAttribute("id", "btnAnime18");
    anime18.setAttribute("class", "red");
    resultsContainer.append(anime18)
  
    
    document.querySelector('#btnAnime18').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://i.waifu.pics/Tj6Wzwo.png`
            fetch(url)
                // .then((response) => response.json())
                .then((data)=> console.log(data))      
        }
        fetchAPI()
    })


   





  

    // document.querySelector('#btnAnime0').addEventListener('click',function(){
    //     function fetchAPI1(){
    //         let url = `https://api.adoptapet.com/search/pets_at_shelters?key=A34F48&v=1&output=xml&shelter_id=2342&shelter_id=17293&shelter_id=8323`
    //         fetch(url)
    //             .then((response) => response.json())
    //             // .then((data)=> console.log(data))      
    //     }
    //     fetchAPI1()
    // })
})