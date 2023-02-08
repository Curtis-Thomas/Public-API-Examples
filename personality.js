'use-strict'

document.querySelector('#btnPersonality').addEventListener('click', function(){
    clearUI()

    let personality0  = document.createElement('button')
    let personality1  = document.createElement('button')
    let personality2  = document.createElement('button')
    let personality3  = document.createElement('button')
    let personality4  = document.createElement('button')
    let personality5  = document.createElement('button')
    let personality6  = document.createElement('button')
    let personality7  = document.createElement('button')
    let personality8  = document.createElement('button')
    let personality9  = document.createElement('button')
    let personality10  = document.createElement('button')
    let personality11  = document.createElement('button')
    let personality12  = document.createElement('button')
    let personality13  = document.createElement('button')
    let personality14  = document.createElement('button')
    let personality15  = document.createElement('button')
    let personality16  = document.createElement('button')
    let personality17  = document.createElement('button')
    let personality18  = document.createElement('button')
    let personality19  = document.createElement('button')
    let personality20  = document.createElement('button')
    let personality21  = document.createElement('button')
    let personality22  = document.createElement('button')






    
    personality0.textContent = arr[34]['list'][0]['name']
    personality0.setAttribute("id", "btnPersonality0");
    personality0.setAttribute("class", "green");
    resultsContainer.append(personality0)

    document.querySelector('#btnPersonality0').addEventListener('click',function(){
    function fetchAPI(){
        let url = `	https://api.adviceslip.com/advice`
        fetch(url)
            .then((response) => response.json())
            .then((data)=> console.log(data)) 
            // .then((data)=> renderAPI4(data) )       
    }
    fetchAPI()
    })


    personality1.textContent = arr[34]['list'][1]['name']
    personality1.setAttribute("id", "btnPersonality1");
    personality1.setAttribute("class", "green");
    resultsContainer.append(personality1)

    
    document.querySelector('#btnPersonality1').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://biriyani.anoram.com/get`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })
    


    personality2.textContent = arr[34]['list'][2]['name']
    personality2.setAttribute("id", "btnPersonality2");
    personality2.setAttribute("class", "yellow");
    resultsContainer.append(personality2)

    //     document.querySelector('#btnPersonality2').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })
    


    personality3.textContent = arr[34]['list'][3]['name']
    personality3.setAttribute("id", "btnPersonality3");
    personality3.setAttribute("class", "yellow");
    resultsContainer.append(personality3)

    //     document.querySelector('#btnPersonality3').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })
    


    personality4.textContent = arr[34]['list'][4]['name']
    personality4.setAttribute("id", "btnPersonality4");
    personality4.setAttribute("class", "yellow");
    resultsContainer.append(personality4)

    //     document.querySelector('#btnPersonality4').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://favqs.com/api/qotd`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })
    


    personality5.textContent = arr[34]['list'][5]['name']
    personality5.setAttribute("id", "btnPersonality5");
    personality5.setAttribute("class", "red");
    resultsContainer.append(personality5)

    //     document.querySelector('#btnPersonality5').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })
    


    personality6.textContent = arr[34]['list'][6]['name']
    personality6.setAttribute("id", "btnPersonality6");
    personality6.setAttribute("class", "yellow");
    resultsContainer.append(personality6)

    //     document.querySelector('#btnPersonality6').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `http://api.forismatic.com/api/1.0/`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })
    


    personality7.textContent = arr[34]['list'][7]['name']
    personality7.setAttribute("id", "btnPersonality7");
    personality7.setAttribute("class", "yellow");
    resultsContainer.append(personality7)

    //     document.querySelector('#btnPersonality7').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://icanhazdadjoke.com/`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })
    


    personality8.textContent = arr[34]['list'][8]['name']
    personality8.setAttribute("id", "btnPersonality8");
    personality8.setAttribute("class", "green");
    resultsContainer.append(personality8)

        document.querySelector('#btnPersonality8').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://api.goprogram.ai/inspiration`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })
    


    personality9.textContent = arr[34]['list'][9]['name']
    personality9.setAttribute("id", "btnPersonality9");
    personality9.setAttribute("class", "green");
    resultsContainer.append(personality9)

        document.querySelector('#btnPersonality9').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://api.kanye.rest`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })
    

    personality10.textContent = arr[34]['list'][10]['name']
    personality10.setAttribute("id", "btnPersonality10");
    personality10.setAttribute("class", "red");
    resultsContainer.append(personality10)

    //     document.querySelector('#btnPersonality10').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })
    

    personality11.textContent = arr[34]['list'][11]['name']
    personality11.setAttribute("id", "btnPersonality11");
    personality11.setAttribute("class", "yellow");
    resultsContainer.append(personality11)

    //     document.querySelector('#btnPersonality11').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://api.medium.com/v1`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })
    


    personality12.textContent = arr[34]['list'][12]['name']
    personality12.setAttribute("id", "btnPersonality12");
    personality12.setAttribute("class", "yellow");
    resultsContainer.append(personality12)

    //     document.querySelector('#btnPersonality12').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `programming-quotes-api.herokuapp.com/quotes/random`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })
    


    personality13.textContent = arr[34]['list'][13]['name']
    personality13.setAttribute("id", "btnPersonality13");
    personality13.setAttribute("class", "green");
    resultsContainer.append(personality13)

        document.querySelector('#btnPersonality13').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://api.quotable.io/random`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })
    


    personality14.textContent = arr[34]['list'][14]['name']
    personality14.setAttribute("id", "btnPersonality14");
    personality14.setAttribute("class", "yellow");
    resultsContainer.append(personality14)

    //     document.querySelector('#btnPersonality14').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://quote-garden.herokuapp.com/api/v3/quotes`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })
    


    personality15.textContent = arr[34]['list'][15]['name']
    personality15.setAttribute("id", "btnPersonality15");
    personality15.setAttribute("class", "green");
    resultsContainer.append(personality15)

        document.querySelector('#btnPersonality15').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://www.jcquotes.com/api/quotes/random`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })
    


    personality16.textContent = arr[34]['list'][16]['name']
    personality16.setAttribute("id", "btnPersonality16");
    personality16.setAttribute("class", "green");
    resultsContainer.append(personality16)

        document.querySelector('#btnPersonality16').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })
    


    personality17.textContent = arr[34]['list'][17]['name']
    personality17.setAttribute("id", "btnPersonality17");
    personality17.setAttribute("class", "green");
    resultsContainer.append(personality17)

        document.querySelector('#btnPersonality17').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://api.themotivate365.com/stoic-quote`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })
    


    personality18.textContent = arr[34]['list'][18]['name']
    personality18.setAttribute("id", "btnPersonality18");
    personality18.setAttribute("class", "yellow");
    resultsContainer.append(personality18)

    //     document.querySelector('#btnPersonality18').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })
    


    personality19.textContent = arr[34]['list'][19]['name']
    personality19.setAttribute("id", "btnPersonality19");
    personality19.setAttribute("class", "yellow");
    resultsContainer.append(personality19)

    //     document.querySelector('#btnPersonality19').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })
    

    personality20.textContent = arr[34]['list'][20]['name']
    personality20.setAttribute("id", "btnPersonality20");
    personality20.setAttribute("class", "yellow");
    resultsContainer.append(personality20)

    //     document.querySelector('#btnPersonality20').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://www.udemy.com/instructor-api/v1/`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })
    


    personality21.textContent = arr[34]['list'][21]['name']
    personality21.setAttribute("id", "btnPersonality21");
    personality21.setAttribute("class", "yellow");
    resultsContainer.append(personality21)

    //     document.querySelector('#btnPersonality21').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://vadivelu.anoram.com/gif/200`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })
    


    personality22.textContent = arr[34]['list'][22]['name']
    personality22.setAttribute("id", "btnPersonality22");
    personality22.setAttribute("class", "yellow");
    resultsContainer.append(personality22)

    //     document.querySelector('#btnPersonality22').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://zenquotes.io/api/random`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })
    


})

