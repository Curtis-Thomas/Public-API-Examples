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
        

        function printBibleOptions(){
            let url = ''
            
            
            clearUI()
            document.querySelector('#main').style.color = 'white'
           
            let bible0 = document.createElement('h3')
            bible0.textContent = 'Books'
            resultsContainer.append(bible0)

            let bible1 = document.createElement('button')
            bible1.textContent = 'Get Books'
            bible1.setAttribute('id', 'btnGetBooks')
            resultsContainer.append(bible1)

            document.querySelector('#btnGetBooks').addEventListener('click', function(){
                url = 'https://www.abibliadigital.com.br/api/books'
                function fetchAPI(){
             
                    fetch(url)
                        .then((response) => response.json())
                        // .then((data)=> console.log(data)) 
                        .then((data)=> renderAPI(data) )       
                }
                fetchAPI()
                function renderAPI(data){

                    console.log(data);

                  
                    

                    for(let i = 0; i < data.length; i++ ){
                        console.log(`${i}  - ${data.length}`);

                        let bibleBooks = document.createElement('p')
                        bibleBooks.textContent = data[i]['name']
                        bibleBooks.setAttribute('class','bibleBooks')
                        resultsContainer.append(bibleBooks)

                        console.log(data[i]['name']);
                        i++
                        console.log(`${i}  - ${data.length}`);
                    }

                    

                   
                    // let pic = document.createElement('img')
                    // pic.setAttribute("id", "img1");
                    // pic.style.height = '400px'
                    // pic.src = 'https://cataas.com'+ picture.url
                    // resultsContainer.append(pic)
                }
                
            })

            let bible2 = document.createElement('button')
            bible2.textContent = 'Get Book'
            resultsContainer.append(bible2)

            let bible3 = document.createElement('h3')
            bible3.textContent = 'Verses'
            resultsContainer.append(bible3)

            let bible4 = document.createElement('p')
            bible4.textContent = 'Get Chapter'
            resultsContainer.append(bible4)

            let bible5 = document.createElement('p')
            bible5.textContent = 'Get Verse'
            resultsContainer.append(bible5)

            let bible6 = document.createElement('p')
            bible6.textContent = 'Get Random Verse'
            resultsContainer.append(bible6)

            let bible7 = document.createElement('p')
            bible7.textContent = 'Get Random Verse Book'
            resultsContainer.append(bible7)

            let bible8 = document.createElement('p')
            bible8.textContent = 'Search by Word'
            resultsContainer.append(bible8)

            let bible9 = document.createElement('h3')
            bible9.textContent = 'Versions'
            resultsContainer.append(bible9)

            let bible10 = document.createElement('p')
            bible10.textContent = 'Get Versions'
            resultsContainer.append(bible10)


        }
        printBibleOptions()
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
                // .then((data)=> console.log(data)) 
                .then((data)=> renderAPI(data) )       
        }
        fetchAPI()

        function renderAPI(arr){
            console.log(arr);
            clearUI()


          

           

            const housesNavBar = document.createElement('div')
            housesNavBar.setAttribute('class', 'housesNavBar')
            housesNavBar.setAttribute('id', 'housesNavBar')
            navContainer.append(housesNavBar)

            const housesNavBarHome = document.createElement('button')
            housesNavBarHome.setAttribute('id', 'housesNavBarHome')
            housesNavBarHome.textContent = 'Home'
            housesNavBar.append(housesNavBarHome)

            document.querySelector('#housesNavBarHome').addEventListener('click', function(){
                clearNav()
                fetchAPI()
            })



            const gryffindorBtnMain = document.createElement('button')
            gryffindorBtnMain.setAttribute('id', 'gryffindorBtnMain')
            gryffindorBtnMain.setAttribute('class', 'gryffindorBtnMain' )
            gryffindorBtnMain.textContent = arr[0]['name']
            resultsContainer.append(gryffindorBtnMain)

            const printGryffindor =  function(){
                clearUI()

                const gryffindorAnimal = document.createElement('h3')
                gryffindorAnimal.textContent = arr[0]['animal']
                gryffindorAnimal.setAttribute('class', 'housesH2')
                resultsContainer.append(gryffindorAnimal)

                const gryffindorCommonRoom = document.createElement('h3')
                gryffindorCommonRoom.textContent = arr[0]['commonRoom']
                gryffindorCommonRoom.setAttribute('class', 'housesH2')
                resultsContainer.append(gryffindorCommonRoom)

                const gryffindorElement = document.createElement('h3')
                gryffindorElement.setAttribute('class', 'housesH2')
                gryffindorElement.textContent = arr[0]['element']
                resultsContainer.append(gryffindorElement)

                const gryffindorFounder = document.createElement('h3')
                gryffindorFounder.setAttribute('class', 'housesH2')
                gryffindorFounder.textContent = arr[0]['founder']
                resultsContainer.append(gryffindorFounder)

                const gryffindorGhost = document.createElement('h3')
                gryffindorGhost.setAttribute('class', 'housesH2')
                gryffindorGhost.textContent = arr[0]['ghost']
                resultsContainer.append(gryffindorGhost)

                const gryffindorHeads = document.createElement('button')
                gryffindorHeads.setAttribute('class', 'housesH2')
                gryffindorHeads.setAttribute('id', 'gryffindorHeads')
                gryffindorHeads.textContent = 'Heads'
                resultsContainer.append(gryffindorHeads)

                const printGryffindorHeads = function(){
                    clearUI()
                    const gryffindorHead1 = document.createElement('h3')
                    gryffindorHead1.textContent = arr[0]['heads'][0]['firstName'] + arr[0]['heads'][0]['lastName']
                    resultsContainer.append(gryffindorHead1)

                    const gryffindorHead2 = document.createElement('h3')
                    gryffindorHead2.textContent = arr[0]['heads'][1]['firstName'] + arr[0]['heads'][1]['lastName']
                    resultsContainer.append(gryffindorHead2)

                }
                document.querySelector('#gryffindorHeads').addEventListener('click', function(){
                    printGryffindorHeads()
                })

                const gryffindorTraits = document.createElement('button')
                gryffindorTraits.setAttribute('class', 'housesH2')
                gryffindorTraits.setAttribute('id', 'gryffindorTraits')
                gryffindorTraits.textContent = 'Traits'
                resultsContainer.append(gryffindorTraits)

                const printGryffindorTraits = function(){
                    clearUI()
                    const gryffindorTrait1 = document.createElement('h3')
                    gryffindorTrait1.textContent = arr[0]['traits'][0]['name']
                    resultsContainer.append(gryffindorTrait1)

                    const gryffindorTrait2 = document.createElement('h3')
                    gryffindorTrait2.textContent = arr[0]['traits'][1]['name']
                    resultsContainer.append(gryffindorTrait2)

                    const gryffindorTrait3 = document.createElement('h3')
                    gryffindorTrait3.textContent = arr[0]['traits'][2]['name']
                    resultsContainer.append(gryffindorTrait3)

                    const gryffindorTrait4 = document.createElement('h3')
                    gryffindorTrait4.textContent = arr[0]['traits'][3]['name']
                    resultsContainer.append(gryffindorTrait4)

                    const gryffindorTrait5 = document.createElement('h3')
                    gryffindorTrait5.textContent = arr[0]['traits'][4]['name']
                    resultsContainer.append(gryffindorTrait5)

                    const gryffindorTrait6 = document.createElement('h3')
                    gryffindorTrait6.textContent = arr[0]['traits'][5]['name']
                    resultsContainer.append(gryffindorTrait6)
                }

                document.querySelector('#gryffindorTraits').addEventListener('click', function(){
                    printGryffindorTraits()
                })


            }

            document.querySelector('#gryffindorBtnMain').addEventListener('click', function(){
                printGryffindor()
            })


            const ravenclawBtnMain = document.createElement('button')
            ravenclawBtnMain.setAttribute('id', 'ravenclawBtnMain')
            ravenclawBtnMain.setAttribute('class', 'ravenclawBtnMain')
            ravenclawBtnMain.textContent = arr[1]['name']
            resultsContainer.append(ravenclawBtnMain)

            const printravenclaw =  function(){
                clearUI()

                const ravenclawAnimal = document.createElement('h3')
                ravenclawAnimal.setAttribute('class', 'housesH2')
                ravenclawAnimal.textContent = arr[0]['animal']
                resultsContainer.append(ravenclawAnimal)

                const ravenclawCommonRoom = document.createElement('h3')
                ravenclawCommonRoom.setAttribute('class', 'housesH2')
                ravenclawCommonRoom.textContent = arr[0]['commonRoom']
                resultsContainer.append(ravenclawCommonRoom)

                const ravenclawElement = document.createElement('h3')
                ravenclawElement.setAttribute('class', 'housesH2')
                ravenclawElement.textContent = arr[0]['element']
                resultsContainer.append(ravenclawElement)

                const ravenclawFounder = document.createElement('h3')
                ravenclawFounder.setAttribute('class', 'housesH2')
                ravenclawFounder.textContent = arr[0]['founder']
                resultsContainer.append(ravenclawFounder)

                const ravenclawGhost = document.createElement('h3')
                ravenclawGhost.setAttribute('class', 'housesH2')
                ravenclawGhost.textContent = arr[0]['ghost']
                resultsContainer.append(ravenclawGhost)

                const ravenclawHeads = document.createElement('button')
                ravenclawHeads.setAttribute('class', 'housesH2')
                ravenclawHeads.setAttribute('id', 'ravenclawHeads')
                ravenclawHeads.textContent = 'Heads'
                resultsContainer.append(ravenclawHeads)

                const printravenclawHeads = function(){
                    clearUI()
                    const ravenclawHead1 = document.createElement('h3')
                    ravenclawHead1.textContent = arr[1]['heads'][0]['firstName'] + arr[1]['heads'][0]['lastName']
                    resultsContainer.append(ravenclawHead1)

                    const ravenclawHead2 = document.createElement('h3')
                    ravenclawHead2.textContent = arr[1]['heads'][1]['firstName'] + arr[1]['heads'][1]['lastName']
                    resultsContainer.append(ravenclawHead2)

                }
                document.querySelector('#ravenclawHeads').addEventListener('click', function(){
                    printravenclawHeads()
                })

                const ravenclawTraits = document.createElement('button')
                ravenclawTraits.setAttribute('class', 'housesH2')
                ravenclawTraits.setAttribute('id', 'ravenclawTraits')
                ravenclawTraits.textContent = 'Traits'
                resultsContainer.append(ravenclawTraits)

                const printravenclawTraits = function(){
                    clearUI()
                    const ravenclawTrait1 = document.createElement('h3')
                    ravenclawTrait1.textContent = arr[1]['traits'][0]['name']
                    resultsContainer.append(ravenclawTrait1)

                    const ravenclawTrait2 = document.createElement('h3')
                    ravenclawTrait2.textContent = arr[1]['traits'][1]['name']
                    resultsContainer.append(ravenclawTrait2)

                    const ravenclawTrait3 = document.createElement('h3')
                    ravenclawTrait3.textContent = arr[1]['traits'][2]['name']
                    resultsContainer.append(ravenclawTrait3)

                    const ravenclawTrait4 = document.createElement('h3')
                    ravenclawTrait4.textContent = arr[1]['traits'][3]['name']
                    resultsContainer.append(ravenclawTrait4)

                    const ravenclawTrait5 = document.createElement('h3')
                    ravenclawTrait5.textContent = arr[1]['traits'][4]['name']
                    resultsContainer.append(ravenclawTrait5)

                    const ravenclawTrait6 = document.createElement('h3')
                    ravenclawTrait6.textContent = arr[1]['traits'][5]['name']
                    resultsContainer.append(ravenclawTrait6)
                }

                document.querySelector('#ravenclawTraits').addEventListener('click', function(){
                    printravenclawTraits()
                })


            }

            document.querySelector('#ravenclawBtnMain').addEventListener('click', function(){
                printravenclaw()
            })

            

            const hufflepuffBtnMain = document.createElement('button')
            hufflepuffBtnMain.setAttribute('id', 'hufflepuffBtnMain')
            hufflepuffBtnMain.setAttribute('class', 'hufflepuffBtnMain')
            hufflepuffBtnMain.textContent = arr[2]['name']
            resultsContainer.append(hufflepuffBtnMain)

            const printHufflepuff =  function(){
                clearUI()

                const hufflepuffAnimal = document.createElement('h3')
                hufflepuffAnimal.setAttribute('class', 'housesH2')
                hufflepuffAnimal.textContent = arr[0]['animal']
                resultsContainer.append(hufflepuffAnimal)

                const hufflepuffCommonRoom = document.createElement('h3')
                hufflepuffCommonRoom.setAttribute('class', 'housesH2')
                hufflepuffCommonRoom.textContent = arr[0]['commonRoom']
                resultsContainer.append(hufflepuffCommonRoom)

                const hufflepuffElement = document.createElement('h3')
                hufflepuffElement.setAttribute('class', 'housesH2')
                hufflepuffElement.textContent = arr[0]['element']
                resultsContainer.append(hufflepuffElement)

                const hufflepuffFounder = document.createElement('h3')
                hufflepuffFounder.setAttribute('class', 'housesH2')
                hufflepuffFounder.textContent = arr[0]['founder']
                resultsContainer.append(hufflepuffFounder)

                const hufflepuffGhost = document.createElement('h3')
                hufflepuffGhost.setAttribute('class', 'housesH2')
                hufflepuffGhost.textContent = arr[0]['ghost']
                resultsContainer.append(hufflepuffGhost)

                const hufflepuffHeads = document.createElement('button')
                hufflepuffHeads.setAttribute('class', 'housesH2')
                hufflepuffHeads.setAttribute('id', 'hufflepuffHeads')
                hufflepuffHeads.textContent = 'Heads'
                resultsContainer.append(hufflepuffHeads)

                const printhufflepuffHeads = function(){
                    clearUI()
                    const hufflepuffHead1 = document.createElement('h3')
                    hufflepuffHead1.textContent = arr[2]['heads'][0]['firstName'] + arr[2]['heads'][0]['lastName']
                    resultsContainer.append(hufflepuffHead1)

                    const hufflepuffHead2 = document.createElement('h3')
                    hufflepuffHead2.textContent = arr[2]['heads'][1]['firstName'] + arr[2]['heads'][1]['lastName']
                    resultsContainer.append(hufflepuffHead2)

                }
                document.querySelector('#hufflepuffHeads').addEventListener('click', function(){
                    printhufflepuffHeads()
                })

                const hufflepuffTraits = document.createElement('button')
                hufflepuffTraits.setAttribute('class', 'housesH2')
                hufflepuffTraits.setAttribute('id', 'hufflepuffTraits')
                hufflepuffTraits.textContent = 'Traits'
                resultsContainer.append(hufflepuffTraits)

                const printhufflepuffTraits = function(){
                    clearUI()
                    const hufflepuffTrait1 = document.createElement('h3')
                    hufflepuffTrait1.textContent = arr[2]['traits'][0]['name']
                    resultsContainer.append(hufflepuffTrait1)

                    const hufflepuffTrait2 = document.createElement('h3')
                    hufflepuffTrait2.textContent = arr[2]['traits'][1]['name']
                    resultsContainer.append(hufflepuffTrait2)

                    const hufflepuffTrait3 = document.createElement('h3')
                    hufflepuffTrait3.textContent = arr[2]['traits'][2]['name']
                    resultsContainer.append(hufflepuffTrait3)

                    const hufflepuffTrait4 = document.createElement('h3')
                    hufflepuffTrait4.textContent = arr[2]['traits'][3]['name']
                    resultsContainer.append(hufflepuffTrait4)

                    const hufflepuffTrait5 = document.createElement('h3')
                    hufflepuffTrait5.textContent = arr[2]['traits'][4]['name']
                    resultsContainer.append(hufflepuffTrait5)

                    const hufflepuffTrait6 = document.createElement('h3')
                    hufflepuffTrait6.textContent = arr[2]['traits'][5]['name']
                    resultsContainer.append(hufflepuffTrait6)
                }

                document.querySelector('#hufflepuffTraits').addEventListener('click', function(){
                    printhufflepuffTraits()
                })


            }

            document.querySelector('#hufflepuffBtnMain').addEventListener('click', function(){
                printHufflepuff()
            })

            

            const slytherinBtnMain = document.createElement('button')
            slytherinBtnMain.setAttribute('id', 'slytherinBtnMain')
            slytherinBtnMain.setAttribute('class', 'slytherinBtnMain')
            slytherinBtnMain.textContent = arr[3]['name']
            resultsContainer.append(slytherinBtnMain)

            const printslytherin =  function(){
                clearUI()

                const slytherinAnimal = document.createElement('h3')
                slytherinAnimal.setAttribute('class', 'housesH2')
                slytherinAnimal.textContent = arr[0]['animal']
                resultsContainer.append(slytherinAnimal)

                const slytherinCommonRoom = document.createElement('h3')
                slytherinCommonRoom.setAttribute('class', 'housesH2')
                slytherinCommonRoom.textContent = arr[0]['commonRoom']
                resultsContainer.append(slytherinCommonRoom)

                const slytherinElement = document.createElement('h3')
                slytherinElement.setAttribute('class', 'housesH2')
                slytherinElement.textContent = arr[0]['element']
                resultsContainer.append(slytherinElement)

                const slytherinFounder = document.createElement('h3')
                slytherinFounder.setAttribute('class', 'housesH2')
                slytherinFounder.textContent = arr[0]['founder']
                resultsContainer.append(slytherinFounder)

                const slytherinGhost = document.createElement('h3')
                slytherinGhost.setAttribute('class', 'housesH2')
                slytherinGhost.textContent = arr[0]['ghost']
                resultsContainer.append(slytherinGhost)

                const slytherinHeads = document.createElement('button')
                slytherinHeads.setAttribute('class', 'housesH2')
                slytherinHeads.setAttribute('id', 'slytherinHeads')
                slytherinHeads.textContent = 'Heads'
                resultsContainer.append(slytherinHeads)

                const printslytherinHeads = function(){
                    clearUI()
                    const slytherinHead1 = document.createElement('h3')
                    slytherinHead1.textContent = arr[3]['heads'][0]['firstName'] + arr[3]['heads'][0]['lastName']
                    resultsContainer.append(slytherinHead1)

                    const slytherinHead2 = document.createElement('h3')
                    slytherinHead2.textContent = arr[3]['heads'][1]['firstName'] + arr[3]['heads'][1]['lastName']
                    resultsContainer.append(slytherinHead2)

                }
                document.querySelector('#slytherinHeads').addEventListener('click', function(){
                    printslytherinHeads()
                })

                const slytherinTraits = document.createElement('button')
                slytherinTraits.setAttribute('class', 'housesH2')
                slytherinTraits.setAttribute('id', 'slytherinTraits')
                slytherinTraits.textContent = 'Traits'
                resultsContainer.append(slytherinTraits)

                const printslytherinTraits = function(){
                    clearUI()
                    const slytherinTrait1 = document.createElement('h3')
                    slytherinTrait1.textContent = arr[3]['traits'][0]['name']
                    resultsContainer.append(slytherinTrait1)

                    const slytherinTrait2 = document.createElement('h3')
                    slytherinTrait2.textContent = arr[3]['traits'][1]['name']
                    resultsContainer.append(slytherinTrait2)

                    const slytherinTrait3 = document.createElement('h3')
                    slytherinTrait3.textContent = arr[3]['traits'][2]['name']
                    resultsContainer.append(slytherinTrait3)

                    const slytherinTrait4 = document.createElement('h3')
                    slytherinTrait4.textContent = arr[3]['traits'][3]['name']
                    resultsContainer.append(slytherinTrait4)

                    const slytherinTrait5 = document.createElement('h3')
                    slytherinTrait5.textContent = arr[3]['traits'][4]['name']
                    resultsContainer.append(slytherinTrait5)

                    const slytherinTrait6 = document.createElement('h3')
                    slytherinTrait6.textContent = arr[3]['traits'][5]['name']
                    resultsContainer.append(slytherinTrait6)
                }

                document.querySelector('#slytherinTraits').addEventListener('click', function(){
                    printslytherinTraits()
                })


            }

            document.querySelector('#slytherinBtnMain').addEventListener('click', function(){
                printslytherin()
            })


            // const housesNavBar = 

            


        }
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

