'use-strict'

document.querySelector('#btnGeocoding').addEventListener('click', function(){
    clearUI()

    let geocoding0  = document.createElement('button')
    let geocoding1  = document.createElement('button')
    let geocoding2  = document.createElement('button')
    let geocoding3  = document.createElement('button')
    let geocoding4  = document.createElement('button')
    let geocoding5  = document.createElement('button')
    let geocoding6  = document.createElement('button')
    let geocoding7  = document.createElement('button')
    let geocoding8  = document.createElement('button')
    let geocoding9  = document.createElement('button')
    let geocoding10  = document.createElement('button')
    let geocoding11  = document.createElement('button')
    let geocoding12  = document.createElement('button')
    let geocoding13  = document.createElement('button')
    let geocoding14  = document.createElement('button')
    let geocoding15  = document.createElement('button')
    let geocoding16  = document.createElement('button')
    let geocoding17  = document.createElement('button')
    let geocoding18  = document.createElement('button')
    let geocoding19  = document.createElement('button')
    let geocoding20  = document.createElement('button')
    let geocoding21  = document.createElement('button')
    let geocoding22  = document.createElement('button')
    let geocoding23  = document.createElement('button')
    let geocoding24  = document.createElement('button')
    let geocoding25  = document.createElement('button')
    let geocoding26  = document.createElement('button')
    let geocoding27  = document.createElement('button')
    let geocoding28  = document.createElement('button')
    let geocoding29  = document.createElement('button')
    let geocoding30  = document.createElement('button')
    let geocoding31  = document.createElement('button')
    let geocoding32  = document.createElement('button')
    let geocoding33  = document.createElement('button')
    let geocoding34  = document.createElement('button')
    let geocoding35  = document.createElement('button')
    let geocoding36  = document.createElement('button')
    let geocoding37  = document.createElement('button')
    let geocoding38  = document.createElement('button')
    let geocoding39  = document.createElement('button')
    let geocoding40  = document.createElement('button')
    let geocoding41  = document.createElement('button')
    let geocoding42  = document.createElement('button')
    let geocoding43  = document.createElement('button')
    let geocoding44  = document.createElement('button')
    let geocoding45  = document.createElement('button')
    let geocoding46  = document.createElement('button')
    let geocoding47  = document.createElement('button')
    let geocoding48  = document.createElement('button')
    let geocoding49  = document.createElement('button')
    let geocoding50  = document.createElement('button')
    let geocoding51  = document.createElement('button')
    let geocoding52  = document.createElement('button')
    let geocoding53  = document.createElement('button')
    let geocoding54  = document.createElement('button')
    let geocoding55  = document.createElement('button')
    let geocoding56  = document.createElement('button')
    let geocoding57  = document.createElement('button')
    let geocoding58  = document.createElement('button')
    let geocoding59  = document.createElement('button')
    let geocoding60  = document.createElement('button')
    let geocoding61  = document.createElement('button')
    let geocoding62  = document.createElement('button')
    let geocoding63  = document.createElement('button')
    let geocoding64  = document.createElement('button')
    let geocoding65  = document.createElement('button')
    let geocoding66  = document.createElement('button')
    let geocoding67  = document.createElement('button')
    let geocoding68  = document.createElement('button')
    let geocoding69  = document.createElement('button')
    let geocoding70  = document.createElement('button')
    let geocoding71  = document.createElement('button')
    let geocoding72  = document.createElement('button')
    let geocoding73  = document.createElement('button')
    let geocoding74  = document.createElement('button')
    let geocoding75  = document.createElement('button')
    let geocoding76  = document.createElement('button')
    let geocoding77  = document.createElement('button')
    let geocoding78  = document.createElement('button')
    let geocoding79  = document.createElement('button')
    let geocoding80  = document.createElement('button')
    let geocoding81  = document.createElement('button')
    let geocoding82  = document.createElement('button')
    let geocoding83  = document.createElement('button')
    let geocoding84  = document.createElement('button')
    





    
    geocoding0.textContent = arr[24]['list'][0]['name']
    geocoding0.setAttribute("id", "btnGeocoding0");
    geocoding0.setAttribute("class", "yellow");
    resultsContainer.append(geocoding0)

    // document.querySelector('#btnGeocoding0').addEventListener('click',function(){
    // function fetchAPI(){
    //     let url = ``
    //     fetch(url)
    //         .then((response) => response.json())
    //         .then((data)=> console.log(data)) 
    //         // .then((data)=> renderAPI4(data) )       
    // }
    // fetchAPI()
    // })

    geocoding1.textContent = arr[24]['list'][1]['name']
    geocoding1.setAttribute("id", "btnGeocoding1");
    geocoding1.setAttribute("class", "red");
    resultsContainer.append(geocoding1)

    // document.querySelector('#btnGeocoding1').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    geocoding2.textContent = arr[24]['list'][2]['name']
    geocoding2.setAttribute("id", "btnGeocoding2");
    geocoding2.setAttribute("class", "green");
    resultsContainer.append(geocoding2)

    document.querySelector('#btnGeocoding2').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://rawcdn.githack.com/kamikazechaser/administrative-divisions-db/master/api/KE.json`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    geocoding3.textContent = arr[24]['list'][3]['name']
    geocoding3.setAttribute("id", "btnGeocoding3");
    geocoding3.setAttribute("class", "yellow");
    resultsContainer.append(geocoding3)

    // document.querySelector('#btnGeocoding3').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    geocoding4.textContent = arr[24]['list'][4]['name']
    geocoding4.setAttribute("id", "btnGeocoding4");
    geocoding4.setAttribute("class", "green");
    resultsContainer.append(geocoding4)

    document.querySelector('#btnGeocoding4').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://sys.airtel.lv/ip2country/1.1.1.1/?full=true`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    geocoding5.textContent = arr[24]['list'][5]['name']
    geocoding5.setAttribute("id", "btnGeocoding5");
    geocoding5.setAttribute("class", "yellow");
    resultsContainer.append(geocoding5)

    // document.querySelector('#btnGeocoding5').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    geocoding6.textContent = arr[24]['list'][6]['name']
    geocoding6.setAttribute("id", "btnGeocoding6");
    geocoding6.setAttribute("class", "yellow");
    resultsContainer.append(geocoding6)

    // document.querySelector('#btnGeocoding6').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    geocoding7.textContent = arr[24]['list'][7]['name']
    geocoding7.setAttribute("id", "btnGeocoding7");
    geocoding7.setAttribute("class", "yellow");
    resultsContainer.append(geocoding7)

    // document.querySelector('#btnGeocoding7').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    geocoding8.textContent = arr[24]['list'][8]['name']
    geocoding8.setAttribute("id", "btnGeocoding8");
    geocoding8.setAttribute("class", "yellow");
    resultsContainer.append(geocoding8)

    document.querySelector('#btnGeocoding8').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://api.bigdatacloud.net/data/country-by-ip`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    geocoding9.textContent = arr[24]['list'][9]['name']
    geocoding9.setAttribute("id", "btnGeocoding9");
    geocoding9.setAttribute("class", "yellow");
    resultsContainer.append(geocoding9)

    // document.querySelector('#btnGeocoding9').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    geocoding10.textContent = arr[24]['list'][10]['name']
    geocoding10.setAttribute("id", "btnGeocoding10");
    geocoding10.setAttribute("class", "green");
    resultsContainer.append(geocoding10)

    document.querySelector('#btnGeocoding10').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://api.getthedata.com/bng2latlong/529090/179645`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    geocoding11.textContent = arr[24]['list'][11]['name']
    geocoding11.setAttribute("id", "btnGeocoding11");
    geocoding11.setAttribute("class", "yellow");
    resultsContainer.append(geocoding11)

    // document.querySelector('#btnGeocoding11').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://cartes.io/`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    geocoding12.textContent = arr[24]['list'][12]['name']
    geocoding12.setAttribute("id", "btnGeocoding12");
    geocoding12.setAttribute("class", "yellow");
    resultsContainer.append(geocoding12)

    // document.querySelector('#btnGeocoding12').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    geocoding13.textContent = arr[24]['list'][13]['name']
    geocoding13.setAttribute("id", "btnGeocoding13");
    geocoding13.setAttribute("class", "yellow");
    resultsContainer.append(geocoding13)

    // document.querySelector('#btnGeocoding13').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    geocoding14.textContent = arr[24]['list'][14]['name']
    geocoding14.setAttribute("id", "btnGeocoding14");
    geocoding14.setAttribute("class", "green");
    resultsContainer.append(geocoding14)

    document.querySelector('#btnGeocoding14').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://api.country.is`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    geocoding15.textContent = arr[24]['list'][15]['name']
    geocoding15.setAttribute("id", "btnGeocoding15");
    geocoding15.setAttribute("class", "yellow");
    resultsContainer.append(geocoding15)

    document.querySelector('#btnGeocoding15').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://api.countrystatecity.in/v1/countries`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    geocoding16.textContent = arr[24]['list'][16]['name']
    geocoding16.setAttribute("id", "btnGeocoding16");
    geocoding16.setAttribute("class", "yellow");
    resultsContainer.append(geocoding16)

    // document.querySelector('#btnGeocoding16').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    geocoding17.textContent = arr[24]['list'][17]['name']
    geocoding17.setAttribute("id", "btnGeocoding17");
    geocoding17.setAttribute("class", "yellow");
    resultsContainer.append(geocoding17)

    // document.querySelector('#btnGeocoding17').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    geocoding18.textContent = arr[24]['list'][18]['name']
    geocoding18.setAttribute("id", "btnGeocoding18");
    geocoding18.setAttribute("class", "yellow");
    resultsContainer.append(geocoding18)

    // document.querySelector('#btnGeocoding18').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    geocoding19.textContent = arr[24]['list'][19]['name']
    geocoding19.setAttribute("id", "btnGeocoding19");
    geocoding19.setAttribute("class", "yellow");
    resultsContainer.append(geocoding19)

    // document.querySelector('#btnGeocoding19').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    geocoding20.textContent = arr[24]['list'][20]['name']
    geocoding20.setAttribute("id", "btnGeocoding20");
    geocoding20.setAttribute("class", "yellow");
    resultsContainer.append(geocoding20)

    // document.querySelector('#btnGeocoding20').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    geocoding21.textContent = arr[24]['list'][21]['name']
    geocoding21.setAttribute("id", "btnGeocoding21");
    geocoding21.setAttribute("class", "yellow");
    resultsContainer.append(geocoding21)

    // document.querySelector('#btnGeocoding21').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    geocoding22.textContent = arr[24]['list'][22]['name']
    geocoding22.setAttribute("id", "btnGeocoding22");
    geocoding22.setAttribute("class", "yellow");
    resultsContainer.append(geocoding22)
    
    // document.querySelector('#btnGeocoding22').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })


    geocoding23.textContent = arr[24]['list'][23]['name']
    geocoding23.setAttribute("id", "btnGeocoding23");
    geocoding23.setAttribute("class", "yellow");
    resultsContainer.append(geocoding23)

    // document.querySelector('#btnGeocoding23').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    geocoding24.textContent = arr[24]['list'][24]['name']
    geocoding24.setAttribute("id", "btnGeocoding24");
    geocoding24.setAttribute("class", "yellow");
    resultsContainer.append(geocoding24)

    // document.querySelector('#btnGeocoding24').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    geocoding25.textContent = arr[24]['list'][25]['name']
    geocoding25.setAttribute("id", "btnGeocoding25");
    geocoding25.setAttribute("class", "yellow");
    resultsContainer.append(geocoding25)

    // document.querySelector('#btnGeocoding25').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    geocoding26.textContent = arr[24]['list'][26]['name']
    geocoding26.setAttribute("id", "btnGeocoding26");
    geocoding26.setAttribute("class", "yellow");
    resultsContainer.append(geocoding26)

    // document.querySelector('#btnGeocoding26').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://api.geographql.rudio.dev/graphql`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    geocoding27.textContent = arr[24]['list'][27]['name']
    geocoding27.setAttribute("id", "btnGeocoding27");
    geocoding27.setAttribute("class", "yellow");
    resultsContainer.append(geocoding27)

    // document.querySelector('#btnGeocoding27').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://get.geojs.io/v1/ip`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    geocoding28.textContent = arr[24]['list'][28]['name']
    geocoding28.setAttribute("id", "btnGeocoding28");
    geocoding28.setAttribute("class", "yellow");
    resultsContainer.append(geocoding28)

    // document.querySelector('#btnGeocoding28').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    geocoding29.textContent = arr[24]['list'][29]['name']
    geocoding29.setAttribute("id", "btnGeocoding29");
    geocoding29.setAttribute("class", "yellow");
    resultsContainer.append(geocoding29)

    // document.querySelector('#btnGeocoding29').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `http://api.geonames.org/postalCodeSearchJSON?postalcode=9011&maxRows=10&username=demo`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    geocoding30.textContent = arr[24]['list'][30]['name']
    geocoding30.setAttribute("id", "btnGeocoding30");
    geocoding30.setAttribute("class", "yellow");
    resultsContainer.append(geocoding30)

    // document.querySelector('#btnGeocoding30').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `http://www.geoplugin.net/javascript.gp`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    geocoding31.textContent = arr[24]['list'][31]['name']
    geocoding31.setAttribute("id", "btnGeocoding31");
    geocoding31.setAttribute("class", "yellow");
    resultsContainer.append(geocoding31)

    // document.querySelector('#btnGeocoding31').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    geocoding32.textContent = arr[24]['list'][32]['name']
    geocoding32.setAttribute("id", "btnGeocoding32");
    geocoding32.setAttribute("class", "yellow");
    resultsContainer.append(geocoding32)

    // document.querySelector('#btnGeocoding32').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    geocoding33.textContent = arr[24]['list'][33]['name']
    geocoding33.setAttribute("id", "btnGeocoding33");
    geocoding33.setAttribute("class", "yellow");
    resultsContainer.append(geocoding33)

    // document.querySelector('#btnGeocoding33').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://countries-274616.ew.r.appspot.com`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    geocoding34.textContent = arr[24]['list'][34]['name']
    geocoding34.setAttribute("id", "btnGeocoding34");
    geocoding34.setAttribute("class", "yellow");
    resultsContainer.append(geocoding34)

    // document.querySelector('#btnGeocoding34').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    geocoding35.textContent = arr[24]['list'][35]['name']
    geocoding35.setAttribute("id", "btnGeocoding35");
    geocoding35.setAttribute("class", "yellow");
    resultsContainer.append(geocoding35)

    // document.querySelector('#btnGeocoding35').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    geocoding36.textContent = arr[24]['list'][36]['name']
    geocoding36.setAttribute("id", "btnGeocoding36");
    geocoding36.setAttribute("class", "red");
    resultsContainer.append(geocoding36)

    // document.querySelector('#btnGeocoding36').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    geocoding37.textContent = arr[24]['list'][37]['name']
    geocoding37.setAttribute("id", "btnGeocoding37");
    geocoding37.setAttribute("class", "green");
    resultsContainer.append(geocoding37)

    document.querySelector('#btnGeocoding37').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://geodata.gov.hk/gs/api/v1.0.0/geoDataQuery?q=%7Bv%3A%221%2E0%2E0%22%2Cid%3A%2293da2d9d-d45d-4d4b-b7ba-b5ed310c4930%22%2Clang%3A%22ALL%22%7D`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    geocoding38.textContent = arr[24]['list'][38]['name']
    geocoding38.setAttribute("id", "btnGeocoding38");
    geocoding38.setAttribute("class", "yellow");
    resultsContainer.append(geocoding38)

    // document.querySelector('#btnGeocoding38').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    geocoding39.textContent = arr[24]['list'][39]['name']
    geocoding39.setAttribute("id", "btnGeocoding39");
    geocoding39.setAttribute("class", "yellow");
    resultsContainer.append(geocoding39)

    // document.querySelector('#btnGeocoding39').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    geocoding40.textContent = arr[24]['list'][40]['name']
    geocoding40.setAttribute("id", "btnGeocoding40");
    geocoding40.setAttribute("class", "yellow");
    resultsContainer.append(geocoding40)

    // document.querySelector('#btnGeocoding40').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    geocoding41.textContent = arr[24]['list'][41]['name']
    geocoding41.setAttribute("id", "btnGeocoding41");
    geocoding41.setAttribute("class", "yellow");
    resultsContainer.append(geocoding41)

    // document.querySelector('#btnGeocoding41').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://ipvigilante.com/8.8.8.8`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    geocoding42.textContent = arr[24]['list'][42]['name']
    geocoding42.setAttribute("id", "btnGeocoding42");
    geocoding42.setAttribute("class", "yellow");
    resultsContainer.append(geocoding42)

    // document.querySelector('#btnGeocoding42').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `http://ip-api.com/json/?fields=61439`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    geocoding43.textContent = arr[24]['list'][43]['name']
    geocoding43.setAttribute("id", "btnGeocoding43");
    geocoding43.setAttribute("class", "yellow");
    resultsContainer.append(geocoding43)

    // document.querySelector('#btnGeocoding43').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    geocoding44.textContent = arr[24]['list'][44]['name']
    geocoding44.setAttribute("id", "btnGeocoding44");
    geocoding44.setAttribute("class", "yellow");
    resultsContainer.append(geocoding44)

    // document.querySelector('#btnGeocoding44').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    geocoding45.textContent = arr[24]['list'][45]['name']
    geocoding45.setAttribute("id", "btnGeocoding45");
    geocoding45.setAttribute("class", "green");
    resultsContainer.append(geocoding45)

    document.querySelector('#btnGeocoding45').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://ipapi.co/8.8.8.8/json/`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    geocoding46.textContent = arr[24]['list'][46]['name']
    geocoding46.setAttribute("id", "btnGeocoding46");
    geocoding46.setAttribute("class", "yellow");
    resultsContainer.append(geocoding46)

    // document.querySelector('#btnGeocoding46').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    geocoding47.textContent = arr[24]['list'][47]['name']
    geocoding47.setAttribute("id", "btnGeocoding47");
    geocoding47.setAttribute("class", "green");
    resultsContainer.append(geocoding47)

    document.querySelector('#btnGeocoding47').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://api.techniknews.net/ipgeo/84.231.19.214`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    geocoding48.textContent = arr[24]['list'][48]['name']
    geocoding48.setAttribute("id", "btnGeocoding48");
    geocoding48.setAttribute("class", "yellow");
    resultsContainer.append(geocoding48)

    // document.querySelector('#btnGeocoding48').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    geocoding49.textContent = arr[24]['list'][49]['name']
    geocoding49.setAttribute("id", "btnGeocoding49");
    geocoding49.setAttribute("class", "yellow");
    resultsContainer.append(geocoding49)

    // document.querySelector('#btnGeocoding49').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    geocoding50.textContent = arr[24]['list'][50]['name']
    geocoding50.setAttribute("id", "btnGeocoding50");
    geocoding50.setAttribute("class", "yellow");
    resultsContainer.append(geocoding50)

    // document.querySelector('#btnGeocoding50').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    geocoding51.textContent = arr[24]['list'][51]['name']
    geocoding51.setAttribute("id", "btnGeocoding51");
    geocoding51.setAttribute("class", "yellow");
    resultsContainer.append(geocoding51)

    // document.querySelector('#btnGeocoding51').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    geocoding52.textContent = arr[24]['list'][52]['name']
    geocoding52.setAttribute("id", "btnGeocoding52");
    geocoding52.setAttribute("class", "yellow");
    resultsContainer.append(geocoding52)

    // document.querySelector('#btnGeocoding52').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    geocoding53.textContent = arr[24]['list'][53]['name']
    geocoding53.setAttribute("id", "btnGeocoding53");
    geocoding53.setAttribute("class", "yellow");
    resultsContainer.append(geocoding53)

    // document.querySelector('#btnGeocoding53').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    geocoding54.textContent = arr[24]['list'][54]['name']
    geocoding54.setAttribute("id", "btnGeocoding54");
    geocoding54.setAttribute("class", "yellow");
    resultsContainer.append(geocoding54)

    // document.querySelector('#btnGeocoding54').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    geocoding55.textContent = arr[24]['list'][55]['name']
    geocoding55.setAttribute("id", "btnGeocoding55");
    geocoding55.setAttribute("class", "yellow");
    resultsContainer.append(geocoding55)

    // document.querySelector('#btnGeocoding55').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    geocoding56.textContent = arr[24]['list'][56]['name']
    geocoding56.setAttribute("id", "btnGeocoding56");
    geocoding56.setAttribute("class", "yellow");
    resultsContainer.append(geocoding56)

    // document.querySelector('#btnGeocoding56').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://sepomex.icalialabs.com/api/v1/zip_codes?city=monterrey`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    geocoding57.textContent = arr[24]['list'][57]['name']
    geocoding57.setAttribute("id", "btnGeocoding57");
    geocoding57.setAttribute("class", "green");
    resultsContainer.append(geocoding57)

    document.querySelector('#btnGeocoding57').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://nominatim.openstreetmap.org/search/Unter%20den%20Linden%201%20Berlin?format=json&addressdetails=1&limit=1&polygon_svg=1`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    geocoding58.textContent = arr[24]['list'][58]['name']
    geocoding58.setAttribute("id", "btnGeocoding58");
    geocoding58.setAttribute("class", "yellow");
    resultsContainer.append(geocoding58)

    // document.querySelector('#btnGeocoding58').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    geocoding59.textContent = arr[24]['list'][59]['name']
    geocoding59.setAttribute("id", "btnGeocoding59");
    geocoding59.setAttribute("class", "red");
    resultsContainer.append(geocoding59)

    // document.querySelector('#btnGeocoding59').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    geocoding60.textContent = arr[24]['list'][60]['name']
    geocoding60.setAttribute("id", "btnGeocoding60");
    geocoding60.setAttribute("class", "yellow");
    resultsContainer.append(geocoding60)

    // document.querySelector('#btnGeocoding60').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://api.opentopodata.org/v1/test-dataset?locations=56,123`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    geocoding61.textContent = arr[24]['list'][61]['name']
    geocoding61.setAttribute("id", "btnGeocoding61");
    geocoding61.setAttribute("class", "yellow");
    resultsContainer.append(geocoding61)

    // document.querySelector('#btnGeocoding61').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    geocoding62.textContent = arr[24]['list'][62]['name']
    geocoding62.setAttribute("id", "btnGeocoding62");
    geocoding62.setAttribute("class", "yellow");
    resultsContainer.append(geocoding62)

    // document.querySelector('#btnGeocoding62').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    geocoding63.textContent = arr[24]['list'][63]['name']
    geocoding63.setAttribute("id", "btnGeocoding63");
    geocoding63.setAttribute("class", "yellow");
    resultsContainer.append(geocoding63)

    // document.querySelector('#btnGeocoding63').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    geocoding64.textContent = arr[24]['list'][64]['name']
    geocoding64.setAttribute("id", "btnGeocoding64");
    geocoding64.setAttribute("class", "yellow");
    resultsContainer.append(geocoding64)

    // document.querySelector('#btnGeocoding64').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://pinballmap.com/api/v1/region/:region/events.json`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    geocoding65.textContent = arr[24]['list'][65]['name']
    geocoding65.setAttribute("id", "btnGeocoding65");
    geocoding65.setAttribute("class", "yellow");
    resultsContainer.append(geocoding65)

    // document.querySelector('#btnGeocoding65').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    geocoding66.textContent = arr[24]['list'][66]['name']
    geocoding66.setAttribute("id", "btnGeocoding66");
    geocoding66.setAttribute("class", "yellow");
    resultsContainer.append(geocoding66)

    // document.querySelector('#btnGeocoding66').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://postali.app/codigo-postal/65936.json`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    geocoding67.textContent = arr[24]['list'][67]['name']
    geocoding67.setAttribute("id", "btnGeocoding67");
    geocoding67.setAttribute("class", "green");
    resultsContainer.append(geocoding67)

    document.querySelector('#btnGeocoding67').addEventListener('click',function(){
        function fetchAPI(){
            let url = `http://api.postcodedata.nl/v1/postcode/?postcode=1211EP&streetnumber=60&ref=domeinnaam.nl&type=json`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    geocoding68.textContent = arr[24]['list'][68]['name']
    geocoding68.setAttribute("id", "btnGeocoding68");
    geocoding68.setAttribute("class", "yellow");
    resultsContainer.append(geocoding68)

    // document.querySelector('#btnGeocoding68').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `api.postcodes.io/postcodes/:postcode`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    geocoding69.textContent = arr[24]['list'][69]['name']
    geocoding69.setAttribute("id", "btnGeocoding69");
    geocoding69.setAttribute("class", "yellow");
    resultsContainer.append(geocoding69)

    // document.querySelector('#btnGeocoding69').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    geocoding70.textContent = arr[24]['list'][70]['name']
    geocoding70.setAttribute("id", "btnGeocoding70");
    geocoding70.setAttribute("class", "green");
    resultsContainer.append(geocoding70)

    document.querySelector('#btnGeocoding70').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://restcountries.com/v3.1/all`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    geocoding71.textContent = arr[24]['list'][71]['name']
    geocoding71.setAttribute("id", "btnGeocoding71");
    geocoding71.setAttribute("class", "green");
    resultsContainer.append(geocoding71)

    // document.querySelector('#btnGeocoding71').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    geocoding72.textContent = arr[24]['list'][72]['name']
    geocoding72.setAttribute("id", "btnGeocoding72");
    geocoding72.setAttribute("class", "yellow");
    resultsContainer.append(geocoding72)

    // document.querySelector('#btnGeocoding72').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    geocoding73.textContent = arr[24]['list'][73]['name']
    geocoding73.setAttribute("id", "btnGeocoding73");
    geocoding73.setAttribute("class", "green");
    resultsContainer.append(geocoding73)

    document.querySelector('#btnGeocoding73').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://slftool.github.io/data.json`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    geocoding74.textContent = arr[24]['list'][74]['name']
    geocoding74.setAttribute("id", "btnGeocoding74");
    geocoding74.setAttribute("class", "yellow");
    resultsContainer.append(geocoding74)

    // document.querySelector('#btnGeocoding74').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    geocoding75.textContent = arr[24]['list'][75]['name']
    geocoding75.setAttribute("id", "btnGeocoding75");
    geocoding75.setAttribute("class", "yellow");
    resultsContainer.append(geocoding75)

    // document.querySelector('#btnGeocoding75').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    geocoding76.textContent = arr[24]['list'][76]['name']
    geocoding76.setAttribute("id", "btnGeocoding76");
    geocoding76.setAttribute("class", "yellow");
    resultsContainer.append(geocoding76)

    // document.querySelector('#btnGeocoding76').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    geocoding77.textContent = arr[24]['list'][77]['name']
    geocoding77.setAttribute("id", "btnGeocoding77");
    geocoding77.setAttribute("class", "yellow");
    resultsContainer.append(geocoding77)

    // document.querySelector('#btnGeocoding77').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    geocoding78.textContent = arr[24]['list'][78]['name']
    geocoding78.setAttribute("id", "btnGeocoding78");
    geocoding78.setAttribute("class", "yellow");
    resultsContainer.append(geocoding78)

    // document.querySelector('#btnGeocoding78').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    geocoding79.textContent = arr[24]['list'][79]['name']
    geocoding79.setAttribute("id", "btnGeocoding79");
    geocoding79.setAttribute("class", "yellow");
    resultsContainer.append(geocoding79)

    // document.querySelector('#btnGeocoding79').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    geocoding80.textContent = arr[24]['list'][80]['name']
    geocoding80.setAttribute("id", "btnGeocoding80");
    geocoding80.setAttribute("class", "yellow");
    resultsContainer.append(geocoding80)

    // document.querySelector('#btnGeocoding80').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    geocoding81.textContent = arr[24]['list'][81]['name']
    geocoding81.setAttribute("id", "btnGeocoding81");
    geocoding81.setAttribute("class", "yellow");
    resultsContainer.append(geocoding81)

    // document.querySelector('#btnGeocoding81').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    geocoding82.textContent = arr[24]['list'][82]['name']
    geocoding82.setAttribute("id", "btnGeocoding82");
    geocoding82.setAttribute("class", "yellow");
    resultsContainer.append(geocoding82)

    // document.querySelector('#btnGeocoding82').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    geocoding83.textContent = arr[24]['list'][83]['name']
    geocoding83.setAttribute("id", "btnGeocoding83");
    geocoding83.setAttribute("class", "yellow");
    resultsContainer.append(geocoding83)

    // document.querySelector('#btnGeocoding83').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `api.zippopotam.us/us/90210`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    geocoding84.textContent = arr[24]['list'][84]['name']
    geocoding84.setAttribute("id", "btnGeocoding84");
    geocoding84.setAttribute("class", "yellow");
    resultsContainer.append(geocoding84)

    // document.querySelector('#btnGeocoding84').addEventListener('click',function(){
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

    