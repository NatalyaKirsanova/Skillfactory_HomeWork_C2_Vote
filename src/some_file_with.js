


const progress_cat = document.querySelector('.cat');
const progress_dog = document.querySelector('.dog');
const progress_parrot = document.querySelector('.parrot');





const header = new Headers({
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Origin': '*'
})

const url = new URL('https://sf-pyw.mosyag.in/sse/vote/stats')

const ES = new EventSource(url, header)

ES.onerror = error => {
    ES.readyState ? progress_cat.textContent = "Some error" : null;
}




ES.onmessage = message => {
    var json=message.data;
    var data = JSON.parse( json );
    var itog=data.cats+data.dogs+data.parrots
    var num_cats=data.cats*100/itog
    var num_dogs=data.dogs*100/itog
    var num_parrots=data.parrots*100/itog
    var max_en=Math.max(num_cats,num_dogs,num_parrots)
    var enimals_max =''
    if (max_en==num_cats)
        enimals_max='Кошки'
    if (max_en==num_dogs)
        (enimals_max='Собаки')
    if (max_en==num_parrots)
        enimals_max='Попугаи'
    var pre = document.getElementsByTagName('p')[0];
    pre.innerHTML = 'Побеждают   ' + enimals_max+' !';


    progress_cat.style.cssText = `width: ${num_cats}%;`
    progress_cat.textContent = `${num_cats.toFixed(2)}%`+'-кошки'

    progress_dog.style.cssText = `width: ${num_dogs}%;`
    progress_dog.textContent = `${num_dogs.toFixed(2)}%`+'-собаки'

    progress_parrot.style.cssText = `width: ${num_parrots}%;`
    progress_parrot.textContent = `${num_parrots.toFixed(2)}%`+'-попугаи'
  }



