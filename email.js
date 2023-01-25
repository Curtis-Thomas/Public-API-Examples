'use-strict'

document.querySelector('#btnEmail').addEventListener('click', function(){
    clearUI()

    let email0  = document.createElement('button')
    let email1  = document.createElement('button')
    let email2  = document.createElement('button')
    let email3  = document.createElement('button')
    let email4  = document.createElement('button')
    let email5  = document.createElement('button')
    let email6  = document.createElement('button')
    let email7  = document.createElement('button')
    let email8  = document.createElement('button')
    let email9  = document.createElement('button')
    let email10  = document.createElement('button')
    let email11  = document.createElement('button')
    let email12  = document.createElement('button')
    let email13  = document.createElement('button')
    let email14  = document.createElement('button')
    let email15  = document.createElement('button')

   
    
 
    email0.textContent = arr[17]['list'][0]['name']
    email0.setAttribute("id", "btnEmail0");
    email0.setAttribute("class", "yellow");
    resultsContainer.append(email0)

    // document.querySelector('#btnEmail0').addEventListener('click',function(){
    // function fetchAPI(){
    //     let url = ``
    //     fetch(url)
    //         .then((response) => response.json())
    //         .then((data)=> console.log(data)) 
    //         // .then((data)=> renderAPI4(data) )       
    // }
    // fetchAPI()
    // })


    email1.textContent = arr[17]['list'][1]['name']
    email1.setAttribute("id", "btnEmail1");
    email1.setAttribute("class", "yellow");
    resultsContainer.append(email1)

    // document.querySelector('#btnEmail1').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })
    

    email2.textContent = arr[17]['list'][2]['name']
    email2.setAttribute("id", "btnEmail2");
    email2.setAttribute("class", "green");
    resultsContainer.append(email2)


    document.querySelector('#btnEmail2').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://www.disify.com/api/email/your@example.com`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    email3.textContent = arr[17]['list'][3]['name']
    email3.setAttribute("id", "btnEmail3");
    email3.setAttribute("class", "yellow");
    resultsContainer.append(email3)


    // document.querySelector('#btnEmail3').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://dropmail.me/api/graphql/web-test-20230125ZI8Sz?query=query%20%7Bdomains%20%7Bid%2C%20name%2C%20introducedAt%2C%20availableVia%7D%7D`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    email4.textContent = arr[17]['list'][4]['name']
    email4.setAttribute("id", "btnEmail4");
    email4.setAttribute("class", "yellow");
    resultsContainer.append(email4)


    // document.querySelector('#btnEmail4').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://api.eva.pingutil.com/email?email=test@mail7.io`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    email5.textContent = arr[17]['list'][5]['name']
    email5.setAttribute("id", "btnEmail5");
    email5.setAttribute("class", "yellow");
    resultsContainer.append(email5)


    // document.querySelector('#btnEmail5').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    email6.textContent = arr[17]['list'][6]['name']
    email6.setAttribute("id", "btnEmail6");
    email6.setAttribute("class", "green");
    resultsContainer.append(email6)


    // document.querySelector('#btnEmail6').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://api.improvmx.com/v3/`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    email7.textContent = arr[17]['list'][7]['name']
    email7.setAttribute("id", "btnEmail7");
    email7.setAttribute("class", "green");
    resultsContainer.append(email7)


    document.querySelector('#btnEmail7').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://open.kickbox.com/v1/disposable/mailinator.com`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    email8.textContent = arr[17]['list'][8]['name']
    email8.setAttribute("id", "btnEmail8");
    email8.setAttribute("class", "green");
    resultsContainer.append(email8)


    document.querySelector('#btnEmail8').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://api.mail.gw`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    email9.textContent = arr[17]['list'][9]['name']
    email9.setAttribute("id", "btnEmail9");
    email9.setAttribute("class", "green");
    resultsContainer.append(email9)


    document.querySelector('#btnEmail9').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://api.mail.tm`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    email10.textContent = arr[17]['list'][10]['name']
    email10.setAttribute("id", "btnEmail10");
    email10.setAttribute("class", "yellow");
    resultsContainer.append(email10)

    // document.querySelector('#btnEmail10').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://api.mailboxvalidator.com/v1/email/free`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })


    email11.textContent = arr[17]['list'][11]['name']
    email11.setAttribute("id", "btnEmail11");
    email11.setAttribute("class", "green");
    resultsContainer.append(email11)

    document.querySelector('#btnEmail11').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://api.mailcheck.ai/domain/example.com`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })


    email12.textContent = arr[17]['list'][12]['name']
    email12.setAttribute("id", "btnEmail12");
    email12.setAttribute("class", "yellow");
    resultsContainer.append(email12)

    // document.querySelector('#btnEmail12').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })


    email13.textContent = arr[17]['list'][13]['name']
    email13.setAttribute("id", "btnEmail13");
    email13.setAttribute("class", "yellow");
    resultsContainer.append(email13)

    // document.querySelector('#btnEmail13').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = ``
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })


    email14.textContent = arr[17]['list'][14]['name']
    email14.setAttribute("id", "btnEmail14");
    email14.setAttribute("class", "yellow");
    resultsContainer.append(email14)

    document.querySelector('#btnEmail14').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://api.sendinblue.com/v3/contacts`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })


    email15.textContent = arr[17]['list'][15]['name']
    email15.setAttribute("id", "btnEmail15");
    email15.setAttribute("class", "red");
    resultsContainer.append(email15)

    // document.querySelector('#btnEmail15').addEventListener('click',function(){
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

   