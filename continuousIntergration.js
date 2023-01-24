'use-strict'

document.querySelector('#btnContinuousIntergration').addEventListener('click', function(){
    clearUI()

    let continuousIntergration0  = document.createElement('button')
    let continuousIntergration1  = document.createElement('button')
    let continuousIntergration2  = document.createElement('button')
    let continuousIntergration3  = document.createElement('button')
    let continuousIntergration4  = document.createElement('button')
    let continuousIntergration5  = document.createElement('button')

 
    continuousIntergration0.textContent = arr[10]['list'][0]['name']
    continuousIntergration0.setAttribute("id", "btnContinuousIntergration0");
    continuousIntergration0.setAttribute("class", "yellow");
    resultsContainer.append(continuousIntergration0)

    // document.querySelector('btnContinuousIntergration0').addEventListener('click',function(){
    // function fetchAPI(){
    //     let url = ``
    //     fetch(url)
    //         .then((response) => response.json())
    //         .then((data)=> console.log(data)) 
    //         // .then((data)=> renderAPI4(data) )       
    // }
    // fetchAPI()
    // })

    continuousIntergration1.textContent = arr[10]['list'][1]['name']
    continuousIntergration1.setAttribute("id", "btnContinuousIntergration1");
    continuousIntergration1.setAttribute("class", "green");
    resultsContainer.append(continuousIntergration1)

    document.querySelector('#btnContinuousIntergration1').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://api.bitrise.io/v0.1/addons`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

    continuousIntergration2.textContent = arr[10]['list'][2]['name']
    continuousIntergration2.setAttribute("id", "btnContinuousIntergration2");
    continuousIntergration2.setAttribute("class", "yellow");
    resultsContainer.append(continuousIntergration2)

    // document.querySelector('#btnContinuousIntergration2').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://api.buddy.works`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    continuousIntergration3.textContent = arr[10]['list'][3]['name']
    continuousIntergration3.setAttribute("id", "btnContinuousIntergration3");
    continuousIntergration3.setAttribute("class", "yellow");
    resultsContainer.append(continuousIntergration3)

    // document.querySelector('#btnContinuousIntergration3').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://circleci.com/api/v1.1`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    continuousIntergration4.textContent = arr[10]['list'][4]['name']
    continuousIntergration4.setAttribute("id", "btnContinuousIntergration4");
    continuousIntergration4.setAttribute("class", "yellow");
    resultsContainer.append(continuousIntergration4)

    // document.querySelector('#btnContinuousIntergration4').addEventListener('click',function(){
    //     function fetchAPI(){
    //         let url = `https://api.codeship.com/v2`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data)=> console.log(data)) 
    //             // .then((data)=> renderAPI4(data) )       
    //     }
    //     fetchAPI()
    // })

    continuousIntergration5.textContent = arr[10]['list'][5]['name']
    continuousIntergration5.setAttribute("id", "btnContinuousIntergration5");
    continuousIntergration5.setAttribute("class", "green");
    resultsContainer.append(continuousIntergration5)

    document.querySelector('#btnContinuousIntergration5').addEventListener('click',function(){
        function fetchAPI(){
            let url = `https://api.travis-ci.org`
            fetch(url)
                .then((response) => response.json())
                .then((data)=> console.log(data)) 
                // .then((data)=> renderAPI4(data) )       
        }
        fetchAPI()
    })

})

    