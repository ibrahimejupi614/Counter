let numri = 0;
let vlera = document.querySelector("#value");
let btns = document.querySelectorAll(".btn");

btns.forEach(function (buton){
    buton.addEventListener("click", function(butonVlera){
        let c = butonVlera.currentTarget.classList;
        if(c.contains("decrease")){
            numri--;
        }
        else if(c.contains("increase")){
            numri++;
        }
        else{
            numri = 0;
        }
        if(numri>0){
            vlera.style.color = "green";
        }
        if(numri<0){
            vlera.style.color = "red";
        }
        if(numri == 0){
            vlera.style.color = "#222";
        }
        vlera.textContent = numri;
    })
});