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

function getZP() {
    const FOP = document.getElementById("FOP").value;
    const TOV = document.getElementById("TOV").value;
    const group = document.getElementById("myDropdown");
    const selectedValue = group.value;
    if (selectedValue === 'first') {
        const zarplata = first(TOV, FOP);
        if (zarplata < 10000) {
            document.getElementById("zep").innerHTML = zarplata + ' - вы кассир!';
        } else {
            document.getElementById("zep").innerHTML = zarplata + ' - вы продавец!';
        }
    } else if (selectedValue === 'second') {
        const zarplata = second(TOV, FOP);
        if (zarplata < 15000) {
            document.getElementById("zep").innerHTML = zarplata + ' - вы кассир!';
        } else {
            document.getElementById("zep").innerHTML = zarplata + ' - вы продавец!';
        }
        
    } else {
        const zarplata = therth(TOV, FOP);
        if (zarplata < 20000) {
            document.getElementById("zep").innerHTML = zarplata + ' - вы кассир!';
        } else {
            document.getElementById("zep").innerHTML = zarplata + ' - вы продавец!';
        }
    }
    
}

