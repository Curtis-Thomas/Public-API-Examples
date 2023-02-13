'use-strict'


const resultsContainer = document.querySelector('#main')
const clearUI = function(){
    document.querySelector('#homeScreen').style.display = 'none'
    document.querySelector('#main').textContent= ''
    document.querySelector('#main').style.backgroundColor = '#272640'
}

const printContainer = document.querySelector('#print')
const clearPrint = function(){
    document.querySelector('#print').textContent= ''
    document.querySelector('#print').style.backgroundColor = '#272640'
}

const navContainer = document.querySelector('#navBar')
const clearNav = function(){
    document.querySelector('#navBar').textContent = ''
}

const printHome = function(){
    document.querySelector('#homeScreen').style.display = 'block'   
}

printHome()

document.querySelector('#btnHome').addEventListener('click', function(){
    clearUI()
    clearPrint()
    clearNav()
    printHome()
})




