const btn = document.querySelector("#send");

btn.addEventListener("click", function(e){

    const primeiraNota = document.querySelector("#nota1");
    const value1 = Number(primeiraNota.value);

    const segundaNota = document.querySelector("#nota2");
    const value2 = Number(segundaNota.value);

    const terceiraNota = document.querySelector("#nota3");
    const value3 = Number(terceiraNota.value);

    const quartaNota = document.querySelector("#nota4");
    const value4 = Number(quartaNota.value);
    
    const soma = value1 + value2 + value3 + value4;

    const media = soma / 4;

    console.log(media);



    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.textContent = `${media}`;

    primeiraNota.value = "";
    segundaNota.value = "";
    terceiraNota.value = "";
    quartaNota.value = "";

})
