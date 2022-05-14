
document.addEventListener("DOMContentLoaded", function() {
    // Czekamy na wczytanie dokumentu
    var input1 = document.getElementById('pole1');
    
    // Przypisujemy input o id pole1 do zmiennej input1
    var input2 = document.getElementById('pole2');
    // Przypisujemy input o id pole2 do zmiennej input2
    
    input1.addEventListener('change', updateValue);
    // Uruchamiamy updatevalue, kiedy zmieni się coś w polu1
    input2.addEventListener('change', updateValue);
    // Uruchamiamy updatevalue, kiedy zmieni się coś w polu2
    
    
    
    // Definiujemy funkcję, która przyjmuje 2 argumenty
    function dodawanie(liczba1,liczba2) {
    
    log = document.getElementById("box");
    //   Przypisujemy div o id box do zmiennej log
    console.log(liczba1);
    console.log(liczba2);
    log.textContent = liczba1 + liczba2 ;
    if(log.textContent == 'NaN'){
      log.textContent = "to nie jest liczba";
    } 
    if (Number(log.textContent) < 300 ){
       log.textContent = "ta liczba mniejsza od 300";
    }
    else {
      log.textContent = "ta liczba jest wieksza od 300";
    }
    // Do środka diva o id box wyswietlamy sume zmiennych
    }; 
    
    
    function updateValue(e) {
        console.log (e.target.value);
        // Wyświetlanie wartosci jaka trafi do funkcji z pól nadsłuchiwanych
         pole1 = parseInt(document.getElementById('pole1').value);
         // Pobieranie wartości z pola html input o id pole1 i zamiana na wartość liczbową
         pole2 = parseInt(document.getElementById('pole2').value);
           // Pobieranie wartości z pola html input o id pole2 i zamiana na wartość liczbową
        dodawanie(pole1,pole2);
    //  Wykonywanie funkcji dodawanie
    }
    tabelka.addEventListener("click",gra);
    firstMove = '<div class="black">x</div>';
    nameField="x"
    numberMove = "0" ;
    var p = [] ;
    wygrana=[];
    function gra(e){
      numberMove++;
      console.log (e.target.id);
      targetId = document.getElementById(e.target.id);
      if (targetId.innerHTML == "") {
        targetId.innerHTML = firstMove;
        console.log("ok");
        targetId.setAttribute('name',nameField);
     
      if(firstMove == '<div class="black">x</div>'){
        firstMove = '<div class="black">o</div>';
        nameField="o";
      }
      else {
        firstMove = '<div class="black">x</div>';
        nameField="x";
      
      }}
      reset = document.getElementById("reset");
      reset.addEventListener("click",resetGame)

    function resetGame(e){
    wygrana=[];
    numberMove=0;
      for (x= 1 ; x < 10 ; x++){
      document.getElementById("p"+x).innerHTML = "";
      }
      tabelka.addEventListener("click",gra)
      document.getElementById("reset").disabled = true;
      document.getElementById("result").innerHTML = "";
    }
    
    for(x=1;x<10;x++){
    p[x]=document.getElementById("p"+x).getAttribute("name");

    
    }
    
    // wygrana1=p[1]+p[2]+p[3];
    // wygrana2=p[4]+p[5]+p[6];
    // wygrana3=p[7]+p[8]+p[9];
    // wygrana4=p[1]+p[4]+p[7];
    // wygrana5=p[2]+p[5]+p[8];
    // wygrana6=p[3]+p[6]+p[9];
    // wygrana7=p[1]+p[5]+p[9];
    // wygrana8=p[3]+p[5]+p[7];

    
    function getElementP(elem,what) {
        document.getElementById("p"+elem).innerHTML = '<div class="green">'+what+'</div>';
      }

      ////Funkcja pozwala nam na przypisanie koloru do pola o danej wartości i ustaleniu symbolu wygranego
      function getResult(info) {
        document.getElementById("result").innerHTML = info;
      }////Funkcja pozwala na zwrócenie rezultatu gry
      function wygranaGry(x,kto,par1,par2,par3){
      ///x - liczba porządkowa
      ///kto-symbol który wygrał w postaci xxx lub ooo
      ///par1-pierwsze pole z elementów które tworzą wygraną
      ///par2-drugie pole z elementów które tworzą wygraną
      ///par3-trzecie pole z elementów które tworzą wygraną
        wygrana[x]=p[par1] + p[par2] + p[par3];
      //Definiuje kofigurację wygraną
        console.log(wygrana[x]);
          if (wygrana[x]== kto){
      //Sprawdza czy konfiguracja wygrana zgadza się z symbolem
            if (kto == "xxx") {
              //Jeśli konfiguracja wygrana była x to koloruj x
              getElementP(par1,"x");
              getElementP(par2,"x");
              getElementP(par3,"x");
              getResult("Po wielkich bojach wygrały krzyżki");
              reset.disabled = false ;
          }
          if (kto == "ooo") {
             //Jeśli konfiguracja wygrana była o to koloruj o
              getElementP(par1,"o");
              getElementP(par2,"o");
              getElementP(par3,"o");
              getResult("Po wielkich bojach wygrały kółka");
              reset.disabled = false ;
              tabelka.removeEventListener("click",gra);

          }
          }
        
      }
      
  
  
      wynik = [];
      wynik[1] = 'xxx';
      wynik[2] = 'ooo';
      
      for(x=1;x<3;x++){
        wygranaGry(1,wynik[x],1,2,3);
          wygranaGry(2,wynik[x],4,5,6);
          wygranaGry(3,wynik[x],7,8,9);
          wygranaGry(4,wynik[x],1,4,7);
          wygranaGry(5,wynik[x],2,5,8);
          wygranaGry(6,wynik[x],3,6,9);
          wygranaGry(7,wynik[x],1,5,9);
          wygranaGry(8,wynik[x],3,5,7);
      }    
  
  
    
    // if(wygrana1=="xxx"){
    //   console.log ("wygrałeś");
    //   reset.disabled = false ;
    //   tabelka.removeEventListener("click",gra);
    //   for (x=1;x<4; x++) {
    //     document.getElementById("p"+x).innerHTML = '<div style="color:#00cc00">x</div>';
    //   }
    // document.getElementById("result").innerHTML = "Po wielkich bojach wygrały krzyżyki";
    // }
    
    // if(wygrana2=="xxx"){
    //   console.log ("wygrałeś");
    //   reset.disabled = false ;
    //   tabelka.removeEventListener("click",gra)
    //   for (x=4;x<7; x++) {
    //     document.getElementById("p"+x).innerHTML = '<div style="color:#00cc00">x</div>';
    //   }
    //   document.getElementById("result").innerHTML = "Po wielkich bojach wygrały krzyżyki";
    // }
    
    
    // if(wygrana3=="xxx"){
    //   console.log ("wygrałeś");
    //   reset.disabled = false ;
    //   tabelka.removeEventListener("click",gra)
    //   for (x=7;x<10; x++) {
    //     document.getElementById("p"+x).innerHTML = '<div style="color:#00cc00">x</div>';
    //   }
    //   document.getElementById("result").innerHTML = "Po wielkich bojach wygrały krzyżyki";
    // }
    
    
    // if(wygrana4=="xxx"){
    //   console.log ("wygrałeś");
    //   reset.disabled = false ;
    //   tabelka.removeEventListener("click",gra)
    //   for (x=1;x<8; x += 3) {
    //     console.log(x);
    //     document.getElementById("p"+x).innerHTML = '<div style="color:#00cc00">x</div>';
    //   }
    //   document.getElementById("result").innerHTML = "Po wielkich bojach wygrały krzyżyki";
    // }
    
    
    // if(wygrana5=="xxx"){
    //   console.log ("wygrałeś");
    //   reset.disabled = false ;
    //   tabelka.removeEventListener("click",gra)
    //   for (x=2;x<9; x += 3) {
    //     document.getElementById("p"+x).innerHTML = '<div style="color:#00cc00">x</div>';
    //   }
    //   document.getElementById("result").innerHTML = "Po wielkich bojach wygrały krzyżyki";
    // }
    
    
    // if(wygrana6=="xxx"){
    //   console.log ("wygrałeś");
    //   reset.disabled = false ;
    //   tabelka.removeEventListener("click",gra)
    //   for (x=3;x<10; x += 3) {
    //     console.log(x);
    //     document.getElementById("p"+x).innerHTML = '<div style="color:#00cc00">x</div>';
    //   }
    //   document.getElementById("result").innerHTML = "Po wielkich bojach wygrały krzyżyki";
    // }
    
    
    // if(wygrana7=="xxx"){
    //   console.log ("wygrałeś");
    //   reset.disabled = false ;
    //   tabelka.removeEventListener("click",gra)
    //   for (x=1;x<10; x += 4) {
    //     console.log(x);
    //     document.getElementById("p"+x).innerHTML = '<div style="color:#00cc00">x</div>';
    //   }
    //   document.getElementById("result").innerHTML = "Po wielkich bojach wygrały krzyżyki";
    // }
    
    
    // if(wygrana8=="xxx"){
    //   console.log ("wygrałeś");
    //   reset.disabled = false ;
    //   tabelka.removeEventListener("click",gra)
    //   for (x=3;x<8; x += 2) {
    //     console.log(x);
    //     document.getElementById("p"+x).innerHTML = '<div style="color:#00cc00">x</div>';
    //   }
    //   document.getElementById("result").innerHTML = "Po wielkich bojach wygrały krzyżyki";
    // } 
    
    
    
    // if(wygrana1=="ooo"){
    //   console.log ("wygrałeś");
    //   reset.disabled = false ;
    //   tabelka.removeEventListener("click",gra)
    //   for (x=1;x<4; x++) {
    //     document.getElementById("p"+x).innerHTML = '<div style="color:#00cc00">o</div>';
    //   }
    //   document.getElementById("result").innerHTML = "Po wielkich bojach wygrały kółka";
    // }
    
    // if(wygrana2=="ooo"){
    //   console.log ("wygrałeś");
    //   reset.disabled = false ;
    //   tabelka.removeEventListener("click",gra)
    //   for (x=4;x<7; x++) {
    //     document.getElementById("p"+x).innerHTML = '<div style="color:#00cc00">o</div>';
    //   }
    //   document.getElementById("result").innerHTML = "Po wielkich bojach wygrały kółka";
    // }
    
    
    // if(wygrana3=="ooo"){
    //   console.log ("wygrałeś");
    //   reset.disabled = false ;
    //   for (x=7;x<10; x++) {
    //     document.getElementById("p"+x).innerHTML = '<div style="color:#00cc00">o</div>';
    //   }
    //   tabelka.removeEventListener("click",gra)
    //   document.getElementById("result").innerHTML = "Po wielkich bojach wygrały kółka";
    // }
    
    
    // if(wygrana4=="ooo"){
    //   console.log ("wygrałeś");
    //   reset.disabled = false ;
    //   tabelka.removeEventListener("click",gra)
    //   for (x=1;x<8; x += 3) {
    //     console.log(x);
    //     document.getElementById("p"+x).innerHTML = '<div style="color:#00cc00">o</div>';
    //   }
    //   document.getElementById("result").innerHTML = "Po wielkich bojach wygrały kółka";
    // }
    
    
    // if(wygrana5=="ooo"){
    //   console.log ("wygrałeś");
    //   reset.disabled = false ;
    //   tabelka.removeEventListener("click",gra)
    //   for (x=1;x<8; x += 3) {
    //     console.log(x);
    //     document.getElementById("p"+x).innerHTML = '<div style="color:#00cc00">o</div>';
    //   }
    //   document.getElementById("result").innerHTML = "Po wielkich bojach wygrały kółka";
    // }
    
    
    // if(wygrana6=="ooo"){
    //   console.log ("wygrałeś");
    //   reset.disabled = false ;
    //   tabelka.removeEventListener("click",gra)
    //   for (x=1;x<8; x += 3) {
    //     console.log(x);
    //     document.getElementById("p"+x).innerHTML = '<div style="color:#00cc00">o</div>';
    //   }
    //   document.getElementById("result").innerHTML = "Po wielkich bojach wygrały kółka";
    // }
    
    
    // if(wygrana7=="ooo"){
    //   console.log ("wygrałeś");
    //   reset.disabled = false ;
    //   tabelka.removeEventListener("click",gra)
    //   for (x=1;x<10; x += 4) {
    //     console.log(x);
    //     document.getElementById("p"+x).innerHTML = '<div style="color:#00cc00">o</div>';
    //   }
    //   document.getElementById("result").innerHTML = "Po wielkich bojach wygrały kółka";
    // }
    
    
    // if(wygrana8=="ooo"){
    //   console.log ("wygrałeś");
    //   reset.disabled = false ;
    //   tabelka.removeEventListener("click",gra)
    //   for (x=2;x<8; x += 2) {
    //     console.log(x);
    //     document.getElementById("p"+x).innerHTML = '<div style="color:#00cc00">o</div>';
    //   }
    //   document.getElementById("result").innerHTML = "Po wielkich bojach wygrały kółka";
    // } 
    
    
    if(numberMove==9){
      reset.disabled = false;
      tabelka.removeEventListener("click",gra)
    }
    
    }
    
    
    
    
    });
    