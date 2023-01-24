'use-strict'


document.querySelector('#btnAnimals').addEventListener('click', function(){
    clearUI()


    let animals1 = document.createElement('button')
    animals1.textContent = arr[0]['list'][0]['name']
    animals1.setAttribute("id", "btnAnimals1");
    animals1.setAttribute("class", "red");
    
    resultsContainer.append(animals1)

    document.querySelector('#btnAnimals1').addEventListener('click',function(){
        function fetchAPI1(){
            let url = `https://api.adoptapet.com/search/pets_at_shelters?key=A34F48&v=1&output=xml&shelter_id=2342&shelter_id=17293&shelter_id=8323`
            fetch(url)
                .then((response) => response.json())
                // .then((data)=> console.log(data))      
        }
        fetchAPI1()
    })

    let animals2 = document.createElement('button')
    animals2.textContent = arr[0]['list'][1]['name']
    animals2.setAttribute("id", "btnAnimals2");
    animals2.setAttribute("class", "red");
    resultsContainer.append(animals2)

    let animals3 = document.createElement('button')
    animals3.textContent = arr[0]['list'][2]['name']
    animals3.setAttribute("id", "btnAnimals3");
    animals3.setAttribute("class", "green");
    resultsContainer.append(animals3)

    document.querySelector('#btnAnimals3').addEventListener('click',function(){
        clearUI()
        function fetchAPI3(){
            let url = `https://cat-fact.herokuapp.com/facts`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> renderAPI3(data) )      
        }
        fetchAPI3()
        function renderAPI3(fact){
            let fact1 = document.createElement('h2')
            fact1.textContent = fact[0]['text']
            resultsContainer.append(fact1)
        }
    })

    let animals4 = document.createElement('button')
    animals4.textContent = arr[0]['list'][3]['name']
    animals4.setAttribute("id", "btnAnimals4");
    animals4.setAttribute("class", "green");
    resultsContainer.append(animals4)

    document.querySelector('#btnAnimals4').addEventListener('click',function(){
        clearUI()
        let another = document.createElement('button')
        another.textContent = 'Another'
        another.setAttribute("id", "another");
        resultsContainer.append(another)


        function fetchAPI4(){
            let url = `https://cataas.com/cat?json=true`
            fetch(url)
                .then((response) => response.json())
                // .then((data)=> console.log(data))
                .then((data)=> renderAPI4(data) )          
        }
        fetchAPI4()
        function renderAPI4(picture){
           
            let pic = document.createElement('img')
            pic.setAttribute("id", "img1");
            pic.src = 'https://cataas.com'+ picture.url
            resultsContainer.append(pic)
        }
        document.querySelector('#another').addEventListener('click', function(){
            document.querySelector('#img1').remove()
            
            fetchAPI4()
            
        })
    })

    let animals5 = document.createElement('button')
    animals5.textContent = arr[0]['list'][4]['name']
    animals5.setAttribute("id", "btnAnimals5");
    animals5.setAttribute("class", "red");
    resultsContainer.append(animals5)

    let animals6 = document.createElement('button')
    animals6.textContent = arr[0]['list'][5]['name']
    animals6.setAttribute("id", "btnAnimals6");
    animals6.setAttribute("class", "green");
    resultsContainer.append(animals6)

    document.querySelector('#btnAnimals6').addEventListener('click',function(){
        clearUI()
        let another = document.createElement('button')
        another.textContent = 'Another'
        another.setAttribute("id", "another");
        resultsContainer.append(another)


        function fetchAPI5(){
            let url = `https://dogapi.dog/api/v2/facts`
            fetch(url)
                .then((response) => response.json())
                // .then((data)=> console.log(data))
                .then((data)=> renderAPI5(data) )          
        }
        fetchAPI5()
        function renderAPI5(fact){
            let fact1 = document.createElement('h2')
            fact1.textContent = fact['data']['0']['attributes']['body']
            fact1.setAttribute("id", "fact1");
            resultsContainer.append(fact1)
        }
        document.querySelector('#another').addEventListener('click', function(){
            document.querySelector('#fact1').remove()  
            fetchAPI5()       
        })
    })

    let animals7 = document.createElement('button')
    animals7.textContent = arr[0]['list'][6]['name']
    animals7.setAttribute("id", "btnAnimals7");
    animals7.setAttribute("class", "green");
    resultsContainer.append(animals7)

    document.querySelector('#btnAnimals7').addEventListener('click',function(){
        clearUI()
        let another = document.createElement('button')
        another.textContent = 'Another'
        another.setAttribute("id", "another");
        resultsContainer.append(another)


        function fetchAPI6(){
            let url = `https://dog.ceo/api/breeds/image/random`
            fetch(url)
                .then((response) => response.json())
                // .then((data)=> console.log(data))
                .then((data)=> renderAPI6(data) )          
        }
        fetchAPI6()
        function renderAPI6(picture){
           
            let pic = document.createElement('img')
            pic.setAttribute("id", "img1");
            pic.src = picture.message
            resultsContainer.append(pic)
        }
        document.querySelector('#another').addEventListener('click', function(){
            document.querySelector('#img1').remove()
            
            fetchAPI6()
            
        })
    })

    let animals8 = document.createElement('button')
    animals8.textContent = arr[0]['list'][7]['name']
    animals8.setAttribute("id", "btnAnimals8");
    animals8.setAttribute("class", "yellow");
    resultsContainer.append(animals8)

    let animals9 = document.createElement('button')
    animals9.textContent = arr[0]['list'][8]['name']
    animals9.setAttribute("id", "btnAnimals9");
    animals9.setAttribute("class", "yellow");
    resultsContainer.append(animals9)

    document.querySelector('#btnAnimals9').addEventListener('click',function(){
        clearUI()
        let another = document.createElement('button')
        another.textContent = 'Another'
        another.setAttribute("id", "another");
        resultsContainer.append(another)

        function fetchAPI8(){
            let url = `https://www.fishwatch.gov/api/species`
            fetch(url)
                .then((response) => response.json())
                // .then((data)=> console.log(data))
                .then((data)=> renderAPI8(data) )          
        }
        fetchAPI8()
        function renderAPI8(fish){
           
            let fish1 = document.createElement('h2')
            fish1.textContent = fish[0]['Scientific Name']
            fish1.setAttribute("id", "fish1");
            resultsContainer.append(fish1)
        }
    })

    let animals10 = document.createElement('button')
    animals10.textContent = arr[0]['list'][9]['name']
    animals10.setAttribute("id", "btnAnimals10");
    animals10.setAttribute("class", "red");
    resultsContainer.append(animals10)

    // function fetchAPI9(statusCode){
    //     let url = `https://http.cat/`
    //     fetch(url)
    //         .then((response) => response.json())
    //         .then((data)=> console.log(data))
    //         // .then((data)=> renderAPI6(data) )          
    // }
    // fetchAPI9()
    // function renderAPI6(picture){
       
    //     let pic = document.createElement('img')
    //     pic.setAttribute("id", "img1");
    //     pic.src = picture.message
    //     resultsContainer.append(pic)
    // }

    let animals11 = document.createElement('button')
    animals11.textContent = arr[0]['list'][10]['name']
    animals11.setAttribute("id", "btnAnimals11");
    animals11.setAttribute("class", "red");
    resultsContainer.append(animals11)
    // function fetchAPI10(code){
    //     let url = `https://http.dog/${code}.jpg`
    //     fetch(url)
    //         .then((response) => response.json())
    //         .then((data)=> console.log(data))
    //         // .then((data)=> renderAPI6(data) )          
    // }
    // fetchAPI10('100')
    // function renderAPI6(picture){
       
    //     let pic = document.createElement('img')
    //     pic.setAttribute("id", "img1");
    //     pic.src = picture.message
    //     resultsContainer.append(pic)
    // }

    let animals12 = document.createElement('button')
    animals12.textContent = arr[0]['list'][11]['name']
    animals12.setAttribute("id", "btnAnimals12");
    animals12.setAttribute("class", "red");
    resultsContainer.append(animals12)

    let animals13 = document.createElement('button')
    animals13.textContent = arr[0]['list'][12]['name']
    animals13.setAttribute("id", "btnAnimals13");
    animals13.setAttribute("class", "green");
    resultsContainer.append(animals13)

    document.querySelector('#btnAnimals13').addEventListener('click',function(){
        clearUI()
        let another = document.createElement('button')
        another.textContent = 'Another'
        another.setAttribute("id", "another");
        resultsContainer.append(another)

        function fetchAPI12(){
            let url = `https://meowfacts.herokuapp.com/`
            fetch(url)
                .then((response) => response.json())
                // .then((data)=> console.log(data))
                .then((data)=> renderAPI12(data) )          
        }
        fetchAPI12()
        function renderAPI12(fact){
           
            let fact1 = document.createElement('h2')
            
            fact1.textContent = fact['data']
            fact1.setAttribute("id", "fact1");
            resultsContainer.append(fact1)
        }

        document.querySelector('#another').addEventListener('click', function(){
            document.querySelector('#fact1').remove()
            
            fetchAPI12()
            
        })
    })

    let animals14 = document.createElement('button')
    animals14.textContent = arr[0]['list'][13]['name']
    animals14.setAttribute("id", "btnAnimals14");
    animals14.setAttribute("class", "yellow");
    resultsContainer.append(animals14)

    let animals15 = document.createElement('button')
    animals15.textContent = arr[0]['list'][14]['name']
    animals15.setAttribute("id", "btnAnimals15");
    animals15.setAttribute("class", "yellow");
    resultsContainer.append(animals15)

    let animals16 = document.createElement('button')
    animals16.textContent = arr[0]['list'][15]['name']
    animals16.setAttribute("id", "btnAnimals16");
    animals16.setAttribute("class", "yellow");
    resultsContainer.append(animals16)
    
    let animals17 = document.createElement('button')
    animals17.textContent = arr[0]['list'][16]['name']
    animals17.setAttribute("id", "btnAnimals17");
    animals17.setAttribute("class", "yellow");
    resultsContainer.append(animals17)

    let animals18 = document.createElement('button')
    animals18.textContent = arr[0]['list'][17]['name']
    animals18.setAttribute("id", "btnAnimals18");
    animals18.setAttribute("class", "yellow");
    resultsContainer.append(animals18)

    let animals19 = document.createElement('button')
    animals19.textContent = arr[0]['list'][18]['name']
    animals19.setAttribute("id", "btnAnimals19");
    animals19.setAttribute("class", "green");
    resultsContainer.append(animals19)

    document.querySelector('#btnAnimals19').addEventListener('click',function(){
        clearUI()
        let another = document.createElement('button')
        another.textContent = 'Another'
        another.setAttribute("id", "another");
        resultsContainer.append(another)

        function fetchAPI18(){
            let url = `https://random.dog/woof.json`
            fetch(url)
                .then((response) => response.json())
                // .then((data)=> console.log(data))
                .then((data)=> renderAPI18(data) )          
        }
        fetchAPI18()
        function renderAPI18(picture){
           
            let pic = document.createElement('img')
            pic.setAttribute("id", "img1");
            pic.src = picture.url
            resultsContainer.append(pic)
        }
        document.querySelector('#another').addEventListener('click', function(){
            document.querySelector('#img1').remove() 
            fetchAPI18()    
        })

    })

    let animals20 = document.createElement('button')
    animals20.textContent = arr[0]['list'][19]['name']
    animals20.setAttribute("id", "btnAnimals20");
    animals20.setAttribute("class", "red");
    resultsContainer.append(animals20)

    // document.querySelector('#btnAnimals20').addEventListener('click',function(){
    //     clearUI()
    //     let another = document.createElement('button')
    //     another.textContent = 'Another'
    //     another.setAttribute("id", "another");
    //     resultsContainer.append(another)

    //     function fetchAPI19(){
    //         let url = `https://random-d.uk/api`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data))
    //             // .then((data)=> renderAPI18(data) )          
    //     }
    //     fetchAPI19()
        // function renderAPI18(picture){
           
        //     let pic = document.createElement('img')
        //     pic.setAttribute("id", "img1");
        //     pic.src = picture.url
        //     resultsContainer.append(pic)
        // }
        // document.querySelector('#another').addEventListener('click', function(){
        //     document.querySelector('#img1').remove() 
        //     fetchAPI18()    
        // })

    // })

    let animals21 = document.createElement('button')
    animals21.textContent = arr[0]['list'][20]['name']
    animals21.setAttribute("id", "btnAnimals21");
    animals21.setAttribute("class", "green");
    resultsContainer.append(animals21)

    document.querySelector('#btnAnimals21').addEventListener('click',function(){
        clearUI()
        let another = document.createElement('button')
        another.textContent = 'Another'
        another.setAttribute("id", "another");
        resultsContainer.append(another)

        function fetchAPI20(){
            let url = `https://randomfox.ca/floof/`
            fetch(url)
                .then((response) => response.json())
                // .then((data)=> console.log(data))
                .then((data)=> renderAPI20(data) )          
        }
        fetchAPI20()
        function renderAPI20(picture){
           
            let pic = document.createElement('img')
            pic.setAttribute("id", "img1");
            pic.src = picture.image
            resultsContainer.append(pic)
        }
        document.querySelector('#another').addEventListener('click', function(){
            document.querySelector('#img1').remove() 
            fetchAPI20()    
        })

    })

    let animals22 = document.createElement('button')
    animals22.textContent = arr[0]['list'][21]['name']
    animals22.setAttribute("id", "btnAnimals22");
    animals22.setAttribute("class", "yellow");
    resultsContainer.append(animals22)

    let animals23 = document.createElement('button')
    animals23.textContent = arr[0]['list'][22]['name']
    animals23.setAttribute("id", "btnAnimals23");
    animals23.setAttribute("class", "green");
    resultsContainer.append(animals23)

    document.querySelector('#btnAnimals23').addEventListener('click',function(){
        clearUI()
        let another = document.createElement('button')
        another.textContent = 'Another'
        another.setAttribute("id", "another");
        resultsContainer.append(another)

        function fetchAPI22(){
            let url = `http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true`
            fetch(url)
                .then((response) => response.json())
                // .then((data)=> console.log(data))
                .then((data)=> renderAPI22(data) )          
        }
        fetchAPI22()
        function renderAPI22(picture){
           
            let pic = document.createElement('img')
            pic.setAttribute("id", "img1");
            pic.src = picture['0']
            resultsContainer.append(pic)
        }
        document.querySelector('#another').addEventListener('click', function(){
            document.querySelector('#img1').remove() 
            fetchAPI22()    
        })

    })

    let animals24 = document.createElement('button')
    animals24.textContent = arr[0]['list'][23]['name']
    animals24.setAttribute("id", "btnAnimals24");
    animals24.setAttribute("class", "yellow");
    resultsContainer.append(animals24)
    
    let animals25 = document.createElement('button')
    animals25.textContent = arr[0]['list'][24]['name']
    animals25.setAttribute("id", "btnAnimals25");
    animals25.setAttribute("class", "red");
    resultsContainer.append(animals25)

    // document.querySelector('#btnAnimals25').addEventListener('click',function(){
    //     clearUI()
    //     let another = document.createElement('button')
    //     another.textContent = 'Another'
    //     another.setAttribute("id", "another");
    //     resultsContainer.append(another)

    //     function fetchAPI24(){
    //         let url = ` https://www.xenocanto.org/api/2`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data))
    //             // .then((data)=> renderAPI24(data) )          
    //     }
    //     fetchAPI24()
        // function renderAPI22(picture){
           
        //     let pic = document.createElement('img')
        //     pic.setAttribute("id", "img1");
        //     pic.src = picture['0']
        //     resultsContainer.append(pic)
        // }
        // document.querySelector('#another').addEventListener('click', function(){
        //     document.querySelector('#img1').remove() 
        //     fetchAPI22()    
        // })

    // })

    let animals26 = document.createElement('button')
    animals26.textContent = arr[0]['list'][25]['name']
    animals26.setAttribute("id", "btnAnimals26");
    animals26.setAttribute("class", "red");
    resultsContainer.append(animals26)

    // document.querySelector('#btnAnimals26').addEventListener('click',function(){
    //     clearUI()
    //     let another = document.createElement('button')
    //     another.textContent = 'Another'
    //     another.setAttribute("id", "another");
    //     resultsContainer.append(another)

    //     function fetchAPI25(){
    //         let url = `https://zoo-animal-api.herokuapp.com/`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data))
    //             // .then((data)=> renderAPI24(data) )          
    //     }
    //     fetchAPI25()
    //     // function renderAPI22(picture){
           
    //     //     let pic = document.createElement('img')
    //     //     pic.setAttribute("id", "img1");
    //     //     pic.src = picture['0']
    //     //     resultsContainer.append(pic)
    //     // }
    //     // document.querySelector('#another').addEventListener('click', function(){
    //     //     document.querySelector('#img1').remove() 
    //     //     fetchAPI22()    
    //     // })

    // })



    


    
    
    
    

})


