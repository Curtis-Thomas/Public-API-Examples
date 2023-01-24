'use-strict'

document.querySelector('#btnBooks').addEventListener('click', function(){
    clearUI()

    let books0  = document.createElement('button')
    let books1  = document.createElement('button')
    let books2  = document.createElement('button')
    let books3  = document.createElement('button')
    let books4  = document.createElement('button')
    let books5  = document.createElement('button')
    let books6  = document.createElement('button')
    let books7  = document.createElement('button')
    let books8  = document.createElement('button')
    let books9  = document.createElement('button')
    let books10 = document.createElement('button')
    let books11 = document.createElement('button')
    let books12 = document.createElement('button')
    let books13 = document.createElement('button')
    let books14 = document.createElement('button')
    let books15 = document.createElement('button')
    let books16 = document.createElement('button')
    let books17 = document.createElement('button')
    let books18 = document.createElement('button')
    let books19 = document.createElement('button')
    let books20 = document.createElement('button')
    let books21 = document.createElement('button')

 
    books0.textContent = arr[6]['list'][0]['name']
    books0.setAttribute("id", "btnBooks0");
    books0.setAttribute("class", "green");
    resultsContainer.append(books0)

    document.querySelector('#btnBooks0').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://www.abibliadigital.com.br/api/verses/nvi/sl/23`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    books1.textContent = arr[6]['list'][1]['name']
    books1.setAttribute("id", "btnBooks1");
    books1.setAttribute("class", "yellow");
    resultsContainer.append(books1)

    // document.querySelector('#btnBooks1').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    books2.textContent = arr[6]['list'][2]['name']
    books2.setAttribute("id", "btnBooks2");
    books2.setAttribute("class", "yellow");
    resultsContainer.append(books2)

    // document.querySelector('#btnBooks2').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://gita-api.vercel.app/tel/verse/1/1`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    books3.textContent = arr[6]['list'][3]['name']
    books3.setAttribute("id", "btnBooks3");
    books3.setAttribute("class", "green");
    resultsContainer.append(books3)

    // document.querySelector('#btnBooks3').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://bible-api.com/john 3:16`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    books4.textContent = arr[6]['list'][4]['name']
    books4.setAttribute("id", "btnBooks4");
    books4.setAttribute("class", "red");
    resultsContainer.append(books4)

    // document.querySelector('#btnBooks4').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    books5.textContent = arr[6]['list'][5]['name']
    books5.setAttribute("id", "btnBooks5");
    books5.setAttribute("class", "red");
    resultsContainer.append(books5)

    // document.querySelector('#btnBooks5').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://api.ganjoor.net/api/faq/cat`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    books6.textContent = arr[6]['list'][6]['name']
    books6.setAttribute("id", "btnBooks6");
    books6.setAttribute("class", "red");
    resultsContainer.append(books6)

    // document.querySelector('#btnBooks6').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://books.google.com/ebooks?id=buc0AAAAMAAJ&dq=holmes&as_brr=4&source=webstore_bookcard`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    books7.textContent = arr[6]['list'][7]['name']
    books7.setAttribute("id", "btnBooks7");
    books7.setAttribute("class", "red");
    resultsContainer.append(books7)

    // document.querySelector('#btnBooks7').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    books8.textContent = arr[6]['list'][8]['name']
    books8.setAttribute("id", "btnBooks8");
    books8.setAttribute("class", "red");
    resultsContainer.append(books8)

    // document.querySelector('#btnBooks8').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://gutendex.com/books?search=dickens%20great`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    books9.textContent = arr[6]['list'][9]['name']
    books9.setAttribute("id", "btnBooks9");
    books9.setAttribute("class", "yellow");
    resultsContainer.append(books9)

    // document.querySelector('#btnBooks9').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://openlibrary.org/isbn/9780140328721`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    books10.textContent = arr[6]['list'][10]['name']
    books10.setAttribute("id", "btnBooks10");
    books10.setAttribute("class", "red");
    resultsContainer.append(books10)

    // document.querySelector('#btnBooks10').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `http://www.penguinrandomhouse.biz/webservices/rest/resources/authors`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    books11.textContent = arr[6]['list'][11]['name']
    books11.setAttribute("id", "btnBooks11");
    books11.setAttribute("class", "yellow");
    resultsContainer.append(books11)

    // document.querySelector('#btnBooks11').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://poetrydb.org/title/Ozymandias/lines.json`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    books12.textContent = arr[6]['list'][12]['name']
    books12.setAttribute("id", "btnBooks12");
    books12.setAttribute("class", "red");
    resultsContainer.append(books12)

    // document.querySelector('#btnBooks12').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    books13.textContent = arr[6]['list'][13]['name']
    books13.setAttribute("id", "btnBooks13");
    books13.setAttribute("class", "green");
    resultsContainer.append(books13)

    document.querySelector('#btnBooks13').addEventListener('click',function(){
        function fetchAPI(){
            let url = `http://api.alquran.cloud/v1/juz/30/en.asad`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    books14.textContent = arr[6]['list'][14]['name']
    books14.setAttribute("id", "btnBooks14");
    books14.setAttribute("class", "green");
    resultsContainer.append(books14)

    document.querySelector('#btnBooks14').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions.json`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    books15.textContent = arr[6]['list'][15]['name']
    books15.setAttribute("id", "btnBooks15");
    books15.setAttribute("class", "red");
    resultsContainer.append(books15)

    // document.querySelector('#btnBooks15').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    books16.textContent = arr[6]['list'][16]['name']
    books16.setAttribute("id", "btnBooks16");
    books16.setAttribute("class", "red");
    resultsContainer.append(books16)

    // document.querySelector('#btnBooks16').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    
    books17.textContent = arr[6]['list'][17]['name']
    books17.setAttribute("id", "btnBooks17");
    books17.setAttribute("class", "yellow");
    resultsContainer.append(books17)

    // document.querySelector('#btnBooks17').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    books18.textContent = arr[6]['list'][18]['name']
    books18.setAttribute("id", "btnBooks18");
    books18.setAttribute("class", "green");
    resultsContainer.append(books18)

    document.querySelector('#btnBooks18').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://api-thirukkural.vercel.app/api?num=
            1
            `
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    books19.textContent = arr[6]['list'][19]['name']
    books19.setAttribute("id", "btnBooks19");
    books19.setAttribute("class", "red");
    resultsContainer.append(books19)

    // document.querySelector('#btnBooks19').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    books20.textContent = arr[6]['list'][20]['name']
    books20.setAttribute("id", "btnBooks20");
    books20.setAttribute("class", "green");
    resultsContainer.append(books20)

    document.querySelector('#btnBooks20').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://wizard-world-api.herokuapp.com/Houses`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    books21.textContent = arr[6]['list'][21]['name']
    books21.setAttribute("id", "btnBooks21");
    books21.setAttribute("class", "red");
    resultsContainer.append(books21)

    // document.querySelector('#btnBooks21').addEventListener('click',function(){
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

