'use-strict'

document.querySelector('#btnNews').addEventListener('click', function(){
    clearUI()

    let news0  = document.createElement('button')
    let news1  = document.createElement('button')
    let news2  = document.createElement('button')
    let news3  = document.createElement('button')
    let news4  = document.createElement('button')
    let news5  = document.createElement('button')
    let news6  = document.createElement('button')
    let news7  = document.createElement('button')
    let news8  = document.createElement('button')
    let news9  = document.createElement('button')
    let news10  = document.createElement('button')
    let news11  = document.createElement('button')
    let news12  = document.createElement('button')
    let news13  = document.createElement('button')
    let news14  = document.createElement('button')
    let news15  = document.createElement('button')
    let news16  = document.createElement('button')
    let news17  = document.createElement('button')
    let news18  = document.createElement('button')


 




    
    news0.textContent = arr[30]['list'][0]['name']
    news0.setAttribute("id", "btnNews0");
    news0.setAttribute("class", "yellow");
    resultsContainer.append(news0)

    // document.querySelector('#btnNews0').addEventListener('click',function(){
    // function fetchAPI(){
    //     let url = ``
    //     fetch(url)
    //         .then((response) => response.json())
    //         .then((data)=> console.log(data)) 
    //         // .then((data)=> renderAPI4(data) )       
    // }
    // fetchAPI()
    // })

    news1.textContent = arr[30]['list'][1]['name']
    news1.setAttribute("id", "btnNews1");
    news1.setAttribute("class", "yellow");
    resultsContainer.append(news1)

    // document.querySelector('#btnNews1').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })
    

    news2.textContent = arr[30]['list'][2]['name']
    news2.setAttribute("id", "btnNews2");
    news2.setAttribute("class", "yellow");
    resultsContainer.append(news2)

    // document.querySelector('#btnNews2').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://chroniclingamerica.loc.gov/suggest/titles/?q=manh&callback=suggest`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    news3.textContent = arr[30]['list'][3]['name']
    news3.setAttribute("id", "btnNews3");
    news3.setAttribute("class", "yellow");
    resultsContainer.append(news3)

    // document.querySelector('#btnNews3').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    news4.textContent = arr[30]['list'][4]['name']
    news4.setAttribute("id", "btnNews4");
    news4.setAttribute("class", "yellow");
    resultsContainer.append(news4)

    // document.querySelector('#btnNews4').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://api.feedbin.com/v2/subscriptions.json`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    news5.textContent = arr[30]['list'][5]['name']
    news5.setAttribute("id", "btnNews5");
    news5.setAttribute("class", "yellow");
    resultsContainer.append(news5)

    // document.querySelector('#btnNews5').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    news6.textContent = arr[30]['list'][6]['name']
    news6.setAttribute("id", "btnNews6");
    news6.setAttribute("class", "red");
    resultsContainer.append(news6)

    // document.querySelector('#btnNews6').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    news7.textContent = arr[30]['list'][7]['name']
    news7.setAttribute("id", "btnNews7");
    news7.setAttribute("class", "green");
    resultsContainer.append(news7)

    document.querySelector('#btnNews7').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://inshorts.deta.dev/news?category=science`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    news8.textContent = arr[30]['list'][8]['name']
    news8.setAttribute("id", "btnNews8");
    news8.setAttribute("class", "yellow");
    resultsContainer.append(news8)

    // document.querySelector('#btnNews8').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    news9.textContent = arr[30]['list'][9]['name']
    news9.setAttribute("id", "btnNews9");
    news9.setAttribute("class", "yellow");
    resultsContainer.append(news9)

    // document.querySelector('#btnNews9').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    news10.textContent = arr[30]['list'][10]['name']
    news10.setAttribute("id", "btnNews10");
    news10.setAttribute("class", "yellow");
    resultsContainer.append(news10)

    // document.querySelector('#btnNews10').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    news11.textContent = arr[30]['list'][11]['name']
    news11.setAttribute("id", "btnNews11");
    news11.setAttribute("class", "yellow");
    resultsContainer.append(news11)

    // document.querySelector('#btnNews11').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://newsdata.io/api/1/news?apikey=YOUR_API_KEY`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    news12.textContent = arr[30]['list'][12]['name']
    news12.setAttribute("id", "btnNews12");
    news12.setAttribute("class", "yellow");
    resultsContainer.append(news12)

    // document.querySelector('#btnNews12').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    news13.textContent = arr[30]['list'][13]['name']
    news13.setAttribute("id", "btnNews13");
    news13.setAttribute("class", "yellow");
    resultsContainer.append(news13)

    // document.querySelector('#btnNews13').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    news14.textContent = arr[30]['list'][14]['name']
    news14.setAttribute("id", "btnNews14");
    news14.setAttribute("class", "green");
    resultsContainer.append(news14)

    document.querySelector('#btnNews14').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://api.spaceflightnewsapi.net/v3/blogs`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    news15.textContent = arr[30]['list'][15]['name']
    news15.setAttribute("id", "btnNews15");
    news15.setAttribute("class", "yellow");
    resultsContainer.append(news15)

    // document.querySelector('#btnNews15').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    news16.textContent = arr[30]['list'][16]['name']
    news16.setAttribute("id", "btnNews16");
    news16.setAttribute("class", "yellow");
    resultsContainer.append(news16)

    // document.querySelector('#btnNews16').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    news17.textContent = arr[30]['list'][17]['name']
    news17.setAttribute("id", "btnNews17");
    news17.setAttribute("class", "yellow");
    resultsContainer.append(news17)

    // document.querySelector('#btnNews17').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    news18.textContent = arr[30]['list'][18]['name']
    news18.setAttribute("id", "btnNews18");
    news18.setAttribute("class", "yellow");
    resultsContainer.append(news18)

    // document.querySelector('#btnNews18').addEventListener('click',function(){
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

  