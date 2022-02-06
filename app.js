const toTopButton = document.querySelector('#toTop')
toTopButton.onclick = function() {
    document.body.scrollTop = 0 
    document.documentElement.scrollTop = 0
}