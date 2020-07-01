const buttonCats = document.getElementById('btn-cat')
buttonCats.addEventListener('click', async _ =>{const response = await fetch('https://sf-pyw.mosyag.in/sse/vote/cats',{ method: 'post'})})

const buttonDogs = document.getElementById('btn-dog')
buttonDogs.addEventListener('click', async _ =>{const response = await fetch('https://sf-pyw.mosyag.in/sse/vote/dogs',{ method: 'post'})})

const buttonParrots = document.getElementById('btn-par')
buttonParrots.addEventListener('click', async _ =>{const response = await fetch('https://sf-pyw.mosyag.in/sse/vote/parrots',{ method: 'post'})})