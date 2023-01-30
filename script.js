'use-strict'


const resultsContainer = document.querySelector('#main')
const clearUI = function(){
    document.querySelector('#homeScreen').style.display = 'none'
    document.querySelector('#main').textContent= ''
    document.querySelector('#main').style.backgroundColor = '#272640'

}

const printHome = function(){
    document.querySelector('#homeScreen').style.display = 'block'   
}

printHome()

document.querySelector('#btnHome').addEventListener('click', function(){
    clearUI()
    printHome()
})




