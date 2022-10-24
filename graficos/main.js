const selectElement = document.querySelector('.marca');
const selectCat = document.querySelector('.categoria');

selectElement.addEventListener('change', (event) => {
    var audi = document.querySelector('.Audi')
    var mercedes = document.querySelector('.Mercedes')
    var vw = document.querySelector('.VW')
    var cat2 = document.querySelector('.cat2')
   
    if (event.target.value === 'Audi' ){
        audi.classList.toggle('class')
        mercedes.classList.remove("class")
        vw.classList.remove("class")
        cat2.classList.remove("class")
        selectCat.addEventListener('change', (event) => {
            
            if (event.target.value === 'cat2' ){
                cat2.classList.toggle('class')
                audi.classList.remove("class")
            }

            if (event.target.value === 'cat1' ){
                audi.classList.toggle('class')
                cat2.classList.remove('class')
            }

        });
        
    }

    if (event.target.value === 'Mercedes' ){
        mercedes.classList.toggle('class')
        audi.classList.remove("class")
        vw.classList.remove("class")
        cat2.classList.remove("class")
        selectCat.addEventListener('change', (event) => {
           
            if (event.target.value === 'cat2' ){
                cat2.classList.toggle('class')
                mercedes.classList.remove("class")
            }

            if (event.target.value === 'cat1' ){
                mercedes.classList.toggle('class')
                cat2.classList.REMOVE('class')
            }

        });
    }

    if (event.target.value === 'VW' ){
        vw.classList.toggle('class')
        audi.classList.remove("class")
        mercedes.classList.remove("class")
        cat2.classList.remove("class")
        selectCat.addEventListener('change', (event) => {
           
            if (event.target.value === 'cat2' ){
                cat2.classList.toggle('class')
                vw.classList.remove("class")
            }

            if (event.target.value === 'cat1' ){
                vw.classList.toggle('class')
                cat2.classList.REMOVE('class')
            }

        });
        
    }


});


