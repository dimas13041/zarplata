const btn = document.querySelector('.click'),
      arow = document.querySelector('#arow'),
      list = document.querySelector('.select-items'),
      select = document.querySelector('.select-text'),
      loading = document.querySelector('.loading')

function toggleList() { 
    list.classList.toggle('show');
    arow.classList.toggle('rotate');
}

document.addEventListener('click', (e) => {
    if (e.target.matches('.click') || e.target.matches('#arow') || e.target.matches('.select')) {
        toggleList();
    } else if (e.target.matches('#first')) {
        select.textContent = e.target.textContent;
        toggleList();
    } else if (e.target.matches('#second')) {
        select.textContent = e.target.textContent;
        toggleList();
    } else if (e.target.matches('#therth')) {
        select.textContent = e.target.textContent;
        toggleList();
    }
})





function first(tov, fop) {
    let sumtov = tov * 0.02;
    let sumfop = fop * 0.05;
    return sumfop + sumtov + 600;
}

function second(tov, fop) {
    let sumtov = tov * 0.02;
    let sumfop = fop * 0.06;
    return sumfop + sumtov + 400;
}

function therth(tov, fop) {
    let sumtov = tov * 0.02;
    let sumfop = fop * 0.07;
    return sumfop + sumtov;
}

const myButton = document.getElementById("calc");
myButton.addEventListener("click", getZP);


function getZP() {
    const FOP = document.getElementById("FOP").value;
    const TOV = document.getElementById("TOV").value;
    if (select.textContent === '1 группа (5%)') {
        const zarplata = first(TOV, FOP);
        loading.classList.remove('none');
        setTimeout(() => {
        loading.classList.add('none');
        if (zarplata < 1000) {
            document.querySelector(".zep-text").innerHTML = zarplata + ' - вы кассир!';
        } else {
            document.querySelector(".zep-text").innerHTML = zarplata + ' - вы продавец!';
        }
        }, 2000)
        
    } else if (select.textContent === '2 группа (6%)') {
        const zarplata = second(TOV, FOP);
        loading.classList.add('none');
        setTimeout(() => {
            loading.classList.remove('none');
            if (zarplata < 1500) {
                document.querySelector(".zep-text").innerHTML = zarplata + ' - вы кассир!';
            } else {
                document.querySelector(".zep-text").innerHTML = zarplata + ' - вы продавец!';
            }
        }, 2000)
        

    } else {
        const zarplata = therth(TOV, FOP);
        loading.classList.remove('none');
        setTimeout(() => {
        loading.classList.add('none');
            if (zarplata < 2000) {
                document.querySelector(".zep-text").innerHTML = zarplata + ' - вы кассир!';
            } else {
                document.querySelector(".zep-text").innerHTML = zarplata + ' - вы продавец!';
            }
        }, 2000)
        
    }

}

