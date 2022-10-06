var compra = document.getElementById("compra");
    var inputValor = document.getElementById("inputValor");
    var resposta = document.getElementById("resposta");
    var bt2 = document.getElementById("botao2");
    let valorDolar;

    function inicializa() {
        var bt = document.getElementById("botao");
        inputValor.onblur = abreURL;
    }

    function abreURL() {

        var valorInput = document.getElementById("inputValor").value;
        var moeda = document.getElementById("moeda");
        moeda.innerHTML = "Reais"
        if (valorInput =="") {
            alert("Preecha um Valor Corretamente na caixa de texto! ");

            return;
            resposta.innerHTML = "";
        }

        var XHR = new XMLHttpRequest();
        XHR.onreadystatechange = function() {
            if (XHR.readyState == 4) {
                if (XHR.status ==200) {

                    var obj = JSON.parse(XHR.responseText);
                    console.log(obj);

                    valorDolar = parseFloat(obj[0].ask).toFixed(2);
                    //parsefloat retorna o valor do objeto en numero,tofixed acrecenta 2 casa apos o ponto ou virgula

                    var horas = new Date();
                    var completo = horas.toLocaleString();

                    var resultado = (valorInput / valorDolar).toFixed(2);

                    resposta.innerHTML = "";

                    resposta.innerHTML = "<div>Na data de hoje " + completo + "<br>" + "R$" + valorInput + "seria o equivalente a <br>$ " + resultado + "dolares<hr>Sorria!Podia ser pior.</div>";

                }

                if (XHR.status ==404) {
                    alert("este pais: " + dolar.value + "Não foi encotrado,digite um pais valido! ");
                }
            }
        }

        var url = "https://economia.awesomeapi.com.br/json/daily/USD-BRL";
        XHR.open("GET", url);
        XHR.send();


    }

    console.log(valorDolar)

    function inverter() {
        var valorInput = document.getElementById("inputValor").value;

        if (valorInput == "") {
            alert("preencha un Valor corretamente na caixa de texto!");
            resposta.style.display="none";
        } else{
            resposta.style.display="block";
            moeda.innerHTML = "Dolar"
            var resultado = (valorDolar * valorInput).toFixed(2);
            
            var horas = new Date();
            var completo = horas.toLocaleString();

            resposta.innerHTML = "";

            resposta.innerHTML = "<div>Na data de hoje " + completo + "<br>" + "$" + valorInput + "dolares seria o equivalente a<br> R$ " + resultado + "</div>";
        }
    }