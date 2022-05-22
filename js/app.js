var repeatElements = [];
container = document.getElementsByClassName("symbol");
// wszystkie element na scenie zawierjące klase symbol
elementsSymbols = [];
y = 0;
for (x = 0; x < container.length; x++) {
    if (container[x].textContent != 'DE' && container[x].textContent != 'DEL' && container[x].textContent != '57-71' && container[x].textContent != '89-103') {
        elementsSymbols[y] = container[x];
        // przyporządkowujemy sybole pierwiastków do zmiennej 

        console.log(y + "-" + elementsSymbols[y].textContent);
        y++;
    }
}
game();
//wywlasnie losowania gry
function game() {
    console.log(repeatElements);
    if (repeatElements.length >= elements.length) {
        console.log("koniec gry");
        // linijki odpowiada za koniec gry
    } else {
        RandomElement = Math.floor(Math.random() * elements.length);
        // losowanie liczby ze wszytkich elementów tablicy pierwiastków
        if (repeatElements.includes(RandomElement)) {
            //sprawdzanie czy wylsowana liczba zawiera sie w tablicy powtorzonych pierwiastków
            game();
            //
        } else {
            elementsSymbols[RandomElement].parentElement.classList.add("checked");
            //zaznaczenoe wyloswanego pierwiastka na tablicy pierwiastków
            repeatElements.push(RandomElement)
                //dodanie wylosowanej liczby do tablicy powtórznych pierwiastków
        }
    }
}

function checkElement(event) {
    if (event.keyCode == 13) {
        if (event.target.value == elements[RandomElement][1]) {
            elementsSymbols[RandomElement].parentElement.classList.remove("checked");
            elementsSymbols[RandomElement].parentElement.classList.add("goodAnswer");
            //zaznaczenie danego pierwiastka i zaznaczenie dobrej odpowiedzi 
        } else {
            elementsSymbols[RandomElement].parentElement.classList.remove("checked");
            elementsSymbols[RandomElement].parentElement.classList.add("badAnswer");
            //przypisanie dobrej odpowiedzi danym kolorem z tablicy pierwiastków 
        }
        game();
    }
}