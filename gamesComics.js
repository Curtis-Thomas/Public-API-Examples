'use-strict'

document.querySelector('#btnGamesComics').addEventListener('click', function(){
    clearUI()

    let gamesComics0  = document.createElement('button')
    let gamesComics1  = document.createElement('button')
    let gamesComics2  = document.createElement('button')
    let gamesComics3  = document.createElement('button')
    let gamesComics4  = document.createElement('button')
    let gamesComics5  = document.createElement('button')
    let gamesComics6  = document.createElement('button')
    let gamesComics7  = document.createElement('button')
    let gamesComics8  = document.createElement('button')
    let gamesComics9  = document.createElement('button')
    let gamesComics10  = document.createElement('button')
    let gamesComics11  = document.createElement('button')
    let gamesComics12  = document.createElement('button')
    let gamesComics13  = document.createElement('button')
    let gamesComics14  = document.createElement('button')
    let gamesComics15  = document.createElement('button')
    let gamesComics16  = document.createElement('button')
    let gamesComics17  = document.createElement('button')
    let gamesComics18  = document.createElement('button')
    let gamesComics19  = document.createElement('button')
    let gamesComics20  = document.createElement('button')
    let gamesComics21  = document.createElement('button')
    let gamesComics22  = document.createElement('button')
    let gamesComics23  = document.createElement('button')
    let gamesComics24  = document.createElement('button')
    let gamesComics25  = document.createElement('button')
    let gamesComics26  = document.createElement('button')
    let gamesComics27  = document.createElement('button')
    let gamesComics28  = document.createElement('button')
    let gamesComics29  = document.createElement('button')
    let gamesComics30  = document.createElement('button')
    let gamesComics31  = document.createElement('button')
    let gamesComics32  = document.createElement('button')
    let gamesComics33  = document.createElement('button')
    let gamesComics34  = document.createElement('button')
    let gamesComics35  = document.createElement('button')
    let gamesComics36  = document.createElement('button')
    let gamesComics37  = document.createElement('button')
    let gamesComics38  = document.createElement('button')
    let gamesComics39  = document.createElement('button')
    let gamesComics40  = document.createElement('button')
    let gamesComics41  = document.createElement('button')
    let gamesComics42  = document.createElement('button')
    let gamesComics43  = document.createElement('button')
    let gamesComics44  = document.createElement('button')
    let gamesComics45  = document.createElement('button')
    let gamesComics46  = document.createElement('button')
    let gamesComics47  = document.createElement('button')
    let gamesComics48  = document.createElement('button')
    let gamesComics49  = document.createElement('button')
    let gamesComics50  = document.createElement('button')
    let gamesComics51  = document.createElement('button')
    let gamesComics52  = document.createElement('button')
    let gamesComics53  = document.createElement('button')
    let gamesComics54  = document.createElement('button')
    let gamesComics55  = document.createElement('button')
    let gamesComics56  = document.createElement('button')
    let gamesComics57  = document.createElement('button')
    let gamesComics58  = document.createElement('button')
    let gamesComics59  = document.createElement('button')
    let gamesComics60  = document.createElement('button')
    let gamesComics61  = document.createElement('button')
    let gamesComics62  = document.createElement('button')
    let gamesComics63  = document.createElement('button')
    let gamesComics64  = document.createElement('button')
    let gamesComics65  = document.createElement('button')
    let gamesComics66  = document.createElement('button')
    let gamesComics67  = document.createElement('button')
    let gamesComics68  = document.createElement('button')
    let gamesComics69  = document.createElement('button')
    let gamesComics70  = document.createElement('button')
    let gamesComics71  = document.createElement('button')
    let gamesComics72  = document.createElement('button')
    let gamesComics73  = document.createElement('button')
    let gamesComics74  = document.createElement('button')
    let gamesComics75  = document.createElement('button')
    let gamesComics76  = document.createElement('button')
    let gamesComics77  = document.createElement('button')
    let gamesComics78  = document.createElement('button')
    let gamesComics79  = document.createElement('button')
    let gamesComics80  = document.createElement('button')
    let gamesComics81  = document.createElement('button')
    let gamesComics82  = document.createElement('button')
    let gamesComics83  = document.createElement('button')
    let gamesComics84  = document.createElement('button')
    let gamesComics85  = document.createElement('button')
    let gamesComics86  = document.createElement('button')
    let gamesComics87  = document.createElement('button')
    let gamesComics88  = document.createElement('button')
    let gamesComics89  = document.createElement('button')
    let gamesComics90  = document.createElement('button')
    let gamesComics91  = document.createElement('button')
    let gamesComics92  = document.createElement('button')
    let gamesComics93  = document.createElement('button')
    let gamesComics94  = document.createElement('button')



    
    gamesComics0.textContent = arr[23]['list'][0]['name']
    gamesComics0.setAttribute("id", "btnGamesComics0");
    gamesComics0.setAttribute("class", "yellow");
    resultsContainer.append(gamesComics0)

    // document.querySelector('#btnGamesComics0').addEventListener('click',function(){
    // function fetchAPI(){
    //     let url = ``
    //     fetch(url)
    //         .then((response) => response.json())
    //         .then((data)=> console.log(data)) 
    //         // .then((data)=> renderAPI4(data) )       
    // }
    // fetchAPI()
    // })

    gamesComics1.textContent = arr[23]['list'][1]['name']
    gamesComics1.setAttribute("id", "btnGamesComics1");
    gamesComics1.setAttribute("class", "green");
    resultsContainer.append(gamesComics1)

    document.querySelector('#btnGamesComics1').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://www.amiiboapi.com/api/amiibo/?name=mario`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    gamesComics2.textContent = arr[23]['list'][2]['name']
    gamesComics2.setAttribute("id", "btnGamesComics2");
    gamesComics2.setAttribute("class", "green");
    resultsContainer.append(gamesComics2)

    document.querySelector('#btnGamesComics2').addEventListener('click',function(){
        function fetchAPI(){
            let url = `http://acnhapi.com/v1/fish/1`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    gamesComics3.textContent = arr[23]['list'][3]['name']
    gamesComics3.setAttribute("id", "btnGamesComics3");
    gamesComics3.setAttribute("class", "yellow");
    resultsContainer.append(gamesComics3)


    // document.querySelector('#btnGamesComics3').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://autochess-vng-api.didadadida93.xyz/classes`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    gamesComics4.textContent = arr[23]['list'][4]['name']
    gamesComics4.setAttribute("id", "btnGamesComics4");
    gamesComics4.setAttribute("class", "green");
    resultsContainer.append(gamesComics4)


    document.querySelector('#btnGamesComics4').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://barter.vg/browse/cards/json`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    gamesComics5.textContent = arr[23]['list'][5]['name']
    gamesComics5.setAttribute("id", "btnGamesComics5");
    gamesComics5.setAttribute("class", "yellow");
    resultsContainer.append(gamesComics5)


    // document.querySelector('#btnGamesComics5').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    gamesComics6.textContent = arr[23]['list'][6]['name']
    gamesComics6.setAttribute("id", "btnGamesComics6");
    gamesComics6.setAttribute("class", "yellow");
    resultsContainer.append(gamesComics6)


    // document.querySelector('#btnGamesComics6').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://boardgamegeek.com/xmlapi2/`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    gamesComics7.textContent = arr[23]['list'][7]['name']
    gamesComics7.setAttribute("id", "btnGamesComics7");
    gamesComics7.setAttribute("class", "yellow");
    resultsContainer.append(gamesComics7)


    // document.querySelector('#btnGamesComics7').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    gamesComics8.textContent = arr[23]['list'][8]['name']
    gamesComics8.setAttribute("id", "btnGamesComics8");
    gamesComics8.setAttribute("class", "red");
    resultsContainer.append(gamesComics8)


    document.querySelector('#btnGamesComics8').addEventListener('click',function(){
        function fetchAPI(){
            let url = ``
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    gamesComics9.textContent = arr[23]['list'][9]['name']
    gamesComics9.setAttribute("id", "btnGamesComics9");
    gamesComics9.setAttribute("class", "green");
    resultsContainer.append(gamesComics9)

    
    document.querySelector('#btnGamesComics9').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })
    gamesComics10.textContent = arr[23]['list'][10]['name']
    gamesComics10.setAttribute("id", "btnGamesComics10");
    gamesComics10.setAttribute("class", "green");
    resultsContainer.append(gamesComics10)

    document.querySelector('#btnGamesComics10').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://api.chess.com/pub/player/hikaru`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    gamesComics11.textContent = arr[23]['list'][11]['name']
    gamesComics11.setAttribute("id", "btnGamesComics11");
    gamesComics11.setAttribute("class", "red");
    resultsContainer.append(gamesComics11)

    // document.querySelector('#btnGamesComics11').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    gamesComics12.textContent = arr[23]['list'][12]['name']
    gamesComics12.setAttribute("id", "btnGamesComics12");
    gamesComics12.setAttribute("class", "yellow");
    resultsContainer.append(gamesComics12)

    // document.querySelector('#btnGamesComics12').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    gamesComics13.textContent = arr[23]['list'][13]['name']
    gamesComics13.setAttribute("id", "btnGamesComics13");
    gamesComics13.setAttribute("class", "yellow");
    resultsContainer.append(gamesComics13)

    // document.querySelector('#btnGamesComics13').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    gamesComics14.textContent = arr[23]['list'][14]['name']
    gamesComics14.setAttribute("id", "btnGamesComics14");
    gamesComics14.setAttribute("class", "yellow");
    resultsContainer.append(gamesComics14)

    // document.querySelector('#btnGamesComics14').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    gamesComics15.textContent = arr[23]['list'][15]['name']
    gamesComics15.setAttribute("id", "btnGamesComics15");
    gamesComics15.setAttribute("class", "yellow");
    resultsContainer.append(gamesComics15)

    // document.querySelector('#btnGamesComics15').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://crafatar.com/avatars/uuid`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    gamesComics16.textContent = arr[23]['list'][16]['name']
    gamesComics16.setAttribute("id", "btnGamesComics16");
    gamesComics16.setAttribute("class", "red");
    resultsContainer.append(gamesComics16)

    // document.querySelector('#btnGamesComics16').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    gamesComics17.textContent = arr[23]['list'][17]['name']
    gamesComics17.setAttribute("id", "btnGamesComics17");
    gamesComics17.setAttribute("class", "green");
    resultsContainer.append(gamesComics17)

    document.querySelector('#btnGamesComics17').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    gamesComics18.textContent = arr[23]['list'][18]['name']
    gamesComics18.setAttribute("id", "btnGamesComics18");
    gamesComics18.setAttribute("class", "yellow");
    resultsContainer.append(gamesComics18)

    // document.querySelector('#btnGamesComics18').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    gamesComics19.textContent = arr[23]['list'][19]['name']
    gamesComics19.setAttribute("id", "btnGamesComics19");
    gamesComics19.setAttribute("class", "green");
    resultsContainer.append(gamesComics19)

    document.querySelector('#btnGamesComics19').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://digimon-api.vercel.app/api/digimon`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    gamesComics20.textContent = arr[23]['list'][20]['name']
    gamesComics20.setAttribute("id", "btnGamesComics20");
    gamesComics20.setAttribute("class", "green");
    resultsContainer.append(gamesComics20)

    document.querySelector('#btnGamesComics20').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://digimoncard.io/api-public/search.php?n=Agumon&desc=Reveal 5 cards&color=red&type=digimon&attribute=Vaccine&card=BT1-010&pack=BT01-03: Release Special Booster Ver.1.0&sort=name&sortdirection=desc&series=Digimon Card Game`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    gamesComics21.textContent = arr[23]['list'][21]['name']
    gamesComics21.setAttribute("id", "btnGamesComics21");
    gamesComics21.setAttribute("class", "green");
    resultsContainer.append(gamesComics21)

    document.querySelector('#btnGamesComics21').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://api.disneyapi.dev/characters`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    gamesComics22.textContent = arr[23]['list'][22]['name']
    gamesComics22.setAttribute("id", "btnGamesComics22");
    gamesComics22.setAttribute("class", "yellow");
    resultsContainer.append(gamesComics22)

    // document.querySelector('#btnGamesComics22').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    gamesComics23.textContent = arr[23]['list'][23]['name']
    gamesComics23.setAttribute("id", "btnGamesComics23");
    gamesComics23.setAttribute("class", "green");
    resultsContainer.append(gamesComics23)

    document.querySelector('#btnGamesComics23').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://www.dnd5eapi.co/api/ability-scores/cha`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    gamesComics24.textContent = arr[23]['list'][24]['name']
    gamesComics24.setAttribute("id", "btnGamesComics24");
    gamesComics24.setAttribute("class", "green");
    resultsContainer.append(gamesComics24)

    document.querySelector('#btnGamesComics24').addEventListener('click',function(){
        function fetchAPI(){
            //https://api.open5e.com/
            let url = `https://api.open5e.com/spells/`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    gamesComics25.textContent = arr[23]['list'][25]['name']
    gamesComics25.setAttribute("id", "btnGamesComics25");
    gamesComics25.setAttribute("class", "green");
    resultsContainer.append(gamesComics25)

    document.querySelector('#btnGamesComics25').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://esi.evetech.net/latest/alliances/?datasource=tranquility`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    gamesComics26.textContent = arr[23]['list'][26]['name']
    gamesComics26.setAttribute("id", "btnGamesComics26");
    gamesComics26.setAttribute("class", "green");
    resultsContainer.append(gamesComics26)

    document.querySelector('#btnGamesComics26').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://ffxivcollect.com/api/mounts/186`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    gamesComics27.textContent = arr[23]['list'][27]['name']
    gamesComics27.setAttribute("id", "btnGamesComics27");
    gamesComics27.setAttribute("class", "red");
    resultsContainer.append(gamesComics27)

    // document.querySelector('#btnGamesComics27').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `
    //         `
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    gamesComics28.textContent = arr[23]['list'][28]['name']
    gamesComics28.setAttribute("id", "btnGamesComics28");
    gamesComics28.setAttribute("class", "yellow");
    resultsContainer.append(gamesComics28)

    // document.querySelector('#btnGamesComics28').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `xivapi.com/item/1675?columns=ID,Name,Description,LevelItem,ClassJobCategory.Name`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    gamesComics29.textContent = arr[23]['list'][29]['name']
    gamesComics29.setAttribute("id", "btnGamesComics29");
    gamesComics29.setAttribute("class", "yellow");
    resultsContainer.append(gamesComics29)

    // document.querySelector('#btnGamesComics29').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://api.fortnitetracker.com/v1/challenges`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    gamesComics30.textContent = arr[23]['list'][30]['name']
    gamesComics30.setAttribute("id", "btnGamesComics30");
    gamesComics30.setAttribute("class", "red");
    resultsContainer.append(gamesComics30)

    // document.querySelector('#btnGamesComics30').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    gamesComics31.textContent = arr[23]['list'][31]['name']
    gamesComics31.setAttribute("id", "btnGamesComics31");
    gamesComics31.setAttribute("class", "yellow");
    resultsContainer.append(gamesComics31)

    // document.querySelector('#btnGamesComics31').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://www.freetogame.com/api/games?platform=pc`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    gamesComics32.textContent = arr[23]['list'][32]['name']
    gamesComics32.setAttribute("id", "btnGamesComics32");
    gamesComics32.setAttribute("class", "red");
    resultsContainer.append(gamesComics32)

    // document.querySelector('#btnGamesComics32').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    gamesComics33.textContent = arr[23]['list'][33]['name']
    gamesComics33.setAttribute("id", "btnGamesComics33");
    gamesComics33.setAttribute("class", "yellow");
    resultsContainer.append(gamesComics33)

    // document.querySelector('#btnGamesComics33').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://www.freetogame.com/api/games?platform=pc`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    gamesComics34.textContent = arr[23]['list'][34]['name']
    gamesComics34.setAttribute("id", "btnGamesComics34");
    gamesComics34.setAttribute("class", "yellow");
    resultsContainer.append(gamesComics34)

    // document.querySelector('#btnGamesComics34').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ` https://www.gamerpower.com/api/giveaways?platform=pc`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    gamesComics35.textContent = arr[23]['list'][35]['name']
    gamesComics35.setAttribute("id", "btnGamesComics35");
    gamesComics35.setAttribute("class", "red");
    resultsContainer.append(gamesComics35)

    // document.querySelector('#btnGamesComics35').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    gamesComics36.textContent = arr[23]['list'][36]['name']
    gamesComics36.setAttribute("id", "btnGamesComics36");
    gamesComics36.setAttribute("class", "green");
    resultsContainer.append(gamesComics36)

    document.querySelector('#btnGamesComics36').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://geek-jokes.sameerkumar.website/api?format=json`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    gamesComics37.textContent = arr[23]['list'][37]['name']
    gamesComics37.setAttribute("id", "btnGamesComics37");
    gamesComics37.setAttribute("class", "green");
    resultsContainer.append(gamesComics37)

    document.querySelector('#btnGamesComics37').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://api.genshin.dev/`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    gamesComics38.textContent = arr[23]['list'][38]['name']
    gamesComics38.setAttribute("id", "btnGamesComics38");
    gamesComics38.setAttribute("class", "yellow");
    resultsContainer.append(gamesComics38)

    // document.querySelector('#btnGamesComics38').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    gamesComics39.textContent = arr[23]['list'][39]['name']
    gamesComics39.setAttribute("id", "btnGamesComics39");
    gamesComics39.setAttribute("class", "yellow");
    resultsContainer.append(gamesComics39)

    // document.querySelector('#btnGamesComics39').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://graphqlpokemon.favware.tech/v7`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    gamesComics40.textContent = arr[23]['list'][40]['name']
    gamesComics40.setAttribute("id", "btnGamesComics40");
    gamesComics40.setAttribute("class", "yellow");
    resultsContainer.append(gamesComics40)

    // document.querySelector('#btnGamesComics40').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    gamesComics41.textContent = arr[23]['list'][41]['name']
    gamesComics41.setAttribute("id", "btnGamesComics41");
    gamesComics41.setAttribute("class", "yellow");
    resultsContainer.append(gamesComics41)

    // document.querySelector('#btnGamesComics41').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    gamesComics42.textContent = arr[23]['list'][42]['name']
    gamesComics42.setAttribute("id", "btnGamesComics42");
    gamesComics42.setAttribute("class", "yellow");
    resultsContainer.append(gamesComics42)

    // document.querySelector('#btnGamesComics42').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    gamesComics43.textContent = arr[23]['list'][43]['name']
    gamesComics43.setAttribute("id", "btnGamesComics43");
    gamesComics43.setAttribute("class", "yellow");
    resultsContainer.append(gamesComics43)

    // document.querySelector('#btnGamesComics43').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    gamesComics44.textContent = arr[23]['list'][44]['name']
    gamesComics44.setAttribute("id", "btnGamesComics44");
    gamesComics44.setAttribute("class", "yellow");
    resultsContainer.append(gamesComics44)

    // document.querySelector('#btnGamesComics44').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    gamesComics45.textContent = arr[23]['list'][45]['name']
    gamesComics45.setAttribute("id", "btnGamesComics45");
    gamesComics45.setAttribute("class", "yellow");
    resultsContainer.append(gamesComics45)

    // document.querySelector('#btnGamesComics45').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://api.humorapi.com/jokes/search`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    gamesComics46.textContent = arr[23]['list'][46]['name']
    gamesComics46.setAttribute("id", "btnGamesComics46");
    gamesComics46.setAttribute("class", "yellow");
    resultsContainer.append(gamesComics46)

    // document.querySelector('#btnGamesComics46').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://api.hypixel.net/player`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    gamesComics47.textContent = arr[23]['list'][47]['name']
    gamesComics47.setAttribute("id", "btnGamesComics47");
    gamesComics47.setAttribute("class", "green");
    resultsContainer.append(gamesComics47)

    document.querySelector('#btnGamesComics47').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://botw-compendium.herokuapp.com/api/v2/entry/white-maned_lynel`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    gamesComics48.textContent = arr[23]['list'][48]['name']
    gamesComics48.setAttribute("id", "btnGamesComics48");
    gamesComics48.setAttribute("class", "red");
    resultsContainer.append(gamesComics48)

    // document.querySelector('#btnGamesComics48').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    gamesComics49.textContent = arr[23]['list'][49]['name']
    gamesComics49.setAttribute("id", "btnGamesComics49");
    gamesComics49.setAttribute("class", "yellow");
    resultsContainer.append(gamesComics49)

    // document.querySelector('#btnGamesComics49').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    gamesComics50.textContent = arr[23]['list'][50]['name']
    gamesComics50.setAttribute("id", "btnGamesComics50");
    gamesComics50.setAttribute("class", "green");
    resultsContainer.append(gamesComics50)

    document.querySelector('#btnGamesComics50').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://v2.jokeapi.dev/joke/Any`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    gamesComics51.textContent = arr[23]['list'][51]['name']
    gamesComics51.setAttribute("id", "btnGamesComics51");
    gamesComics51.setAttribute("class", "green");
    resultsContainer.append(gamesComics51)

    document.querySelector('#btnGamesComics51').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://api.jokes.one/jod`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    gamesComics52.textContent = arr[23]['list'][52]['name']
    gamesComics52.setAttribute("id", "btnGamesComics52");
    gamesComics52.setAttribute("class", "yellow");
    resultsContainer.append(gamesComics52)

    // document.querySelector('#btnGamesComics52').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `http://jservice.io/Random`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    gamesComics53.textContent = arr[23]['list'][53]['name']
    gamesComics53.setAttribute("id", "btnGamesComics53");
    gamesComics53.setAttribute("class", "yellow");
    resultsContainer.append(gamesComics53)

    // document.querySelector('#btnGamesComics53').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://lichess.org/api/account`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    gamesComics54.textContent = arr[23]['list'][54]['name']
    gamesComics54.setAttribute("id", "btnGamesComics54");
    gamesComics54.setAttribute("class", "green");
    resultsContainer.append(gamesComics54)

    document.querySelector('#btnGamesComics54').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://api.magicthegathering.io/v1/cards`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    gamesComics55.textContent = arr[23]['list'][55]['name']
    gamesComics55.setAttribute("id", "btnGamesComics55");
    gamesComics55.setAttribute("class", "red");
    resultsContainer.append(gamesComics55)

    // document.querySelector('#btnGamesComics55').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    gamesComics56.textContent = arr[23]['list'][56]['name']
    gamesComics56.setAttribute("id", "btnGamesComics56");
    gamesComics56.setAttribute("class", "yellow");
    resultsContainer.append(gamesComics56)

    // document.querySelector('#btnGamesComics56').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    gamesComics57.textContent = arr[23]['list'][57]['name']
    gamesComics57.setAttribute("id", "btnGamesComics57");
    gamesComics57.setAttribute("class", "green");
    resultsContainer.append(gamesComics57)

    document.querySelector('#btnGamesComics57').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://api.mcsrvstat.us/2/domain.tld`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    gamesComics58.textContent = arr[23]['list'][58]['name']
    gamesComics58.setAttribute("id", "btnGamesComics58");
    gamesComics58.setAttribute("class", "yellow");
    resultsContainer.append(gamesComics58)

    // document.querySelector('#btnGamesComics58').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://www.mmobomb.com/api1/games?platform=pc`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    gamesComics59.textContent = arr[23]['list'][59]['name']
    gamesComics59.setAttribute("id", "btnGamesComics59");
    gamesComics59.setAttribute("class", "yellow");
    resultsContainer.append(gamesComics59)

    // document.querySelector('#btnGamesComics59').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://api.mod.io/v1`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    gamesComics60.textContent = arr[23]['list'][60]['name']
    gamesComics60.setAttribute("id", "btnGamesComics60");
    gamesComics60.setAttribute("class", "yellow");
    resultsContainer.append(gamesComics60)

    // document.querySelector('#btnGamesComics60').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://status.mojang.com/check`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    gamesComics61.textContent = arr[23]['list'][61]['name']
    gamesComics61.setAttribute("id", "btnGamesComics61");
    gamesComics61.setAttribute("class", "green");
    resultsContainer.append(gamesComics61)

    document.querySelector('#btnGamesComics61').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://mhw-db.com/ailments`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    gamesComics62.textContent = arr[23]['list'][62]['name']
    gamesComics62.setAttribute("id", "btnGamesComics62");
    gamesComics62.setAttribute("class", "green");
    resultsContainer.append(gamesComics62)

    document.querySelector('#btnGamesComics62').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://opentdb.com/api.php?amount=10`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    gamesComics63.textContent = arr[23]['list'][63]['name']
    gamesComics63.setAttribute("id", "btnGamesComics63");
    gamesComics63.setAttribute("class", "yellow");
    resultsContainer.append(gamesComics63)

    // document.querySelector('#btnGamesComics63').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://api.pandascore.co/additions?sort=&page=1&per_page=50&type=&videogame=`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    gamesComics64.textContent = arr[23]['list'][64]['name']
    gamesComics64.setAttribute("id", "btnGamesComics64");
    gamesComics64.setAttribute("class", "yellow");
    resultsContainer.append(gamesComics64)

    // document.querySelector('#btnGamesComics64').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://api.pathofexile.com/league`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    gamesComics65.textContent = arr[23]['list'][65]['name']
    gamesComics65.setAttribute("id", "btnGamesComics65");
    gamesComics65.setAttribute("class", "green");
    resultsContainer.append(gamesComics65)

    document.querySelector('#btnGamesComics65').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://playerdb.co/api/player/minecraft/$123-abc`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    gamesComics66.textContent = arr[23]['list'][66]['name']
    gamesComics66.setAttribute("id", "btnGamesComics66");
    gamesComics66.setAttribute("class", "green");
    resultsContainer.append(gamesComics66)

    document.querySelector('#btnGamesComics66').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://pokeapi.co/api/v2/pokemon/ditto`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    gamesComics67.textContent = arr[23]['list'][67]['name']
    gamesComics67.setAttribute("id", "btnGamesComics67");
    gamesComics67.setAttribute("class", "yellow");
    resultsContainer.append(gamesComics67)

    // document.querySelector('#btnGamesComics67').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://graphql-pokeapi.vercel.app/api/graphql`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    gamesComics68.textContent = arr[23]['list'][68]['name']
    gamesComics68.setAttribute("id", "btnGamesComics68");
    gamesComics68.setAttribute("class", "green");
    resultsContainer.append(gamesComics68)

    document.querySelector('#btnGamesComics68').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://api.pokemontcg.io/v2/cards?q=name:gardevoir`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    gamesComics69.textContent = arr[23]['list'][69]['name']
    gamesComics69.setAttribute("id", "btnGamesComics69");
    gamesComics69.setAttribute("class", "yellow");
    resultsContainer.append(gamesComics69)

    document.querySelector('#btnGamesComics69').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://psychonauts-api.herokuapp.com/characters`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    gamesComics70.textContent = arr[23]['list'][70]['name']
    gamesComics70.setAttribute("id", "btnGamesComics70");
    gamesComics70.setAttribute("class", "yellow");
    resultsContainer.append(gamesComics70)

    // document.querySelector('#btnGamesComics70').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    gamesComics71.textContent = arr[23]['list'][71]['name']
    gamesComics71.setAttribute("id", "btnGamesComics71");
    gamesComics71.setAttribute("class", "yellow");
    resultsContainer.append(gamesComics71)

    // document.querySelector('#btnGamesComics71').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    gamesComics72.textContent = arr[23]['list'][72]['name']
    gamesComics72.setAttribute("id", "btnGamesComics72");
    gamesComics72.setAttribute("class", "yellow");
    resultsContainer.append(gamesComics72)

    // document.querySelector('#btnGamesComics72').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://puyodb-api-deno.herokuapp.com/api/v1/characters`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    gamesComics73.textContent = arr[23]['list'][73]['name']
    gamesComics73.setAttribute("id", "btnGamesComics73");
    gamesComics73.setAttribute("class", "green");
    resultsContainer.append(gamesComics73)

    document.querySelector('#btnGamesComics73').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://raider.io/api/v1/characters/profile?region=eu&realm=burning-blade&name=furrygrowler`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    gamesComics74.textContent = arr[23]['list'][74]['name']
    gamesComics74.setAttribute("id", "btnGamesComics74");
    gamesComics74.setAttribute("class", "yellow");
    resultsContainer.append(gamesComics74)

    // document.querySelector('#btnGamesComics74').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    gamesComics75.textContent = arr[23]['list'][75]['name']
    gamesComics75.setAttribute("id", "btnGamesComics75");
    gamesComics75.setAttribute("class", "green");
    resultsContainer.append(gamesComics75)

    document.querySelector('#btnGamesComics75').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://rickandmortyapi.com/api`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    gamesComics76.textContent = arr[23]['list'][76]['name']
    gamesComics76.setAttribute("id", "btnGamesComics76");
    gamesComics76.setAttribute("class", "yellow");
    resultsContainer.append(gamesComics76)

    // document.querySelector('#btnGamesComics76').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    gamesComics77.textContent = arr[23]['list'][77]['name']
    gamesComics77.setAttribute("id", "btnGamesComics77");
    gamesComics77.setAttribute("class", "green");
    resultsContainer.append(gamesComics77)

    document.querySelector('#btnGamesComics77').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://rps101.pythonanywhere.com/api/v1/objects/all`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    gamesComics78.textContent = arr[23]['list'][78]['name']
    gamesComics78.setAttribute("id", "btnGamesComics78");
    gamesComics78.setAttribute("class", "yellow");
    resultsContainer.append(gamesComics78)

    // document.querySelector('#btnGamesComics78').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://secure.runescape.com/m=itemdb_rs/api/info.json`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    gamesComics79.textContent = arr[23]['list'][79]['name']
    gamesComics79.setAttribute("id", "btnGamesComics79");
    gamesComics79.setAttribute("class", "yellow");
    resultsContainer.append(gamesComics79)

    // document.querySelector('#btnGamesComics79').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://protected-taiga-89091.herokuapp.com/api/card?pageSize=10&page=3`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    gamesComics80.textContent = arr[23]['list'][80]['name']
    gamesComics80.setAttribute("id", "btnGamesComics80");
    gamesComics80.setAttribute("class", "yellow");
    resultsContainer.append(gamesComics80)

    // document.querySelector('#btnGamesComics80').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://api.scryfall.com`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    gamesComics81.textContent = arr[23]['list'][81]['name']
    gamesComics81.setAttribute("id", "btnGamesComics81");
    gamesComics81.setAttribute("class", "yellow");
    resultsContainer.append(gamesComics81)

    // document.querySelector('#btnGamesComics81').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `api.spacetraders.io/game/status`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    gamesComics82.textContent = arr[23]['list'][82]['name']
    gamesComics82.setAttribute("id", "btnGamesComics82");
    gamesComics82.setAttribute("class", "yellow");
    resultsContainer.append(gamesComics82)

    // document.querySelector('#btnGamesComics82').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://github.com/Revadike/InternalSteamWebAPI/about/stats`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    gamesComics83.textContent = arr[23]['list'][83]['name']
    gamesComics83.setAttribute("id", "btnGamesComics83");
    gamesComics83.setAttribute("class", "yellow");
    resultsContainer.append(gamesComics83)

    // document.querySelector('#btnGamesComics83').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    gamesComics84.textContent = arr[23]['list'][84]['name']
    gamesComics84.setAttribute("id", "btnGamesComics84");
    gamesComics84.setAttribute("class", "green");
    resultsContainer.append(gamesComics84)

    document.querySelector('#btnGamesComics84').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://api.tcgdex.net/v2/en/sets`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    gamesComics85.textContent = arr[23]['list'][85]['name']
    gamesComics85.setAttribute("id", "btnGamesComics85");
    gamesComics85.setAttribute("class", "yellow");
    resultsContainer.append(gamesComics85)

    // document.querySelector('#btnGamesComics85').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    gamesComics86.textContent = arr[23]['list'][86]['name']
    gamesComics86.setAttribute("id", "btnGamesComics86");
    gamesComics86.setAttribute("class", "yellow");
    resultsContainer.append(gamesComics86)

    // document.querySelector('#btnGamesComics86').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ` https://ch.tetr.io/api/general/stats`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    gamesComics87.textContent = arr[23]['list'][87]['name']
    gamesComics87.setAttribute("id", "btnGamesComics87");
    gamesComics87.setAttribute("class", "yellow");
    resultsContainer.append(gamesComics87)

    // document.querySelector('#btnGamesComics87').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `io.tronalddump.api/random/quote`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    gamesComics88.textContent = arr[23]['list'][88]['name']
    gamesComics88.setAttribute("id", "btnGamesComics88");
    gamesComics88.setAttribute("class", "yellow");
    resultsContainer.append(gamesComics88)

    // document.querySelector('#btnGamesComics88').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    gamesComics89.textContent = arr[23]['list'][89]['name']
    gamesComics89.setAttribute("id", "btnGamesComics89");
    gamesComics89.setAttribute("class", "green");
    resultsContainer.append(gamesComics89)

    document.querySelector('#btnGamesComics89').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://valorant-api.com/v1/currencies`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    gamesComics90.textContent = arr[23]['list'][90]['name']
    gamesComics90.setAttribute("id", "btnGamesComics90");
    gamesComics90.setAttribute("class", "green");
    resultsContainer.append(gamesComics90)

    document.querySelector('#btnGamesComics90').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://api.wfstats.cf/`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    gamesComics91.textContent = arr[23]['list'][91]['name']
    gamesComics91.setAttribute("id", "btnGamesComics91");
    gamesComics91.setAttribute("class", "yellow");
    resultsContainer.append(gamesComics91)

    // document.querySelector('#btnGamesComics91').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    gamesComics92.textContent = arr[23]['list'][92]['name']
    gamesComics92.setAttribute("id", "btnGamesComics92");
    gamesComics92.setAttribute("class", "green");
    resultsContainer.append(gamesComics92)

    document.querySelector('#btnGamesComics92').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://www.whenisthenextmcufilm.com/api`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    gamesComics93.textContent = arr[23]['list'][93]['name']
    gamesComics93.setAttribute("id", "btnGamesComics93");
    gamesComics93.setAttribute("class", "yellow");
    resultsContainer.append(gamesComics93)

    // document.querySelector('#btnGamesComics93').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://xkcd.com/json.html`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    gamesComics94.textContent = arr[23]['list'][94]['name']
    gamesComics94.setAttribute("id", "btnGamesComics94");
    gamesComics94.setAttribute("class", "green");
    resultsContainer.append(gamesComics94)

    document.querySelector('#btnGamesComics94').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://db.ygoprodeck.com/api/v7/cardinfo.php`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })







})

    