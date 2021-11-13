btnCalcular = document.getElementById("btnCalcular");

btnCalcular.addEventListener("click", ()=>{

    nome = document.getElementById('nomeUsuario').value;
    renda = parseFloat(document.getElementById('rendaMensal').value);
    valorP = parseFloat(document.getElementById('valorProduto').value);
    valorE = parseFloat(document.getElementById('valorEntrada').value);
    taxa = parseFloat(document.getElementById('taxaJuros').value);
    prestacoes = parseFloat(document.getElementById('numPrestacoes').value);

    if (nome !== '' && renda !== '' && valorP !== '' && valorE !== '' && taxa !== '' && prestacoes !== ''){

        taxa2 = taxa / 100;

        PMT = valorP * ((taxa) / (1- (Math.pow(1 / (1 + (taxa)),prestacoes))));

        validacao = renda * (30/100);

        if(PMT <= validacao){

            window.alert('Olá ' + nome + '! Com sua renda de R$ ' + renda + ',00, o valor do produto sendo R$ ' + valorP + ',00, acresentando-se uma taxa de ' + taxa + 
            '% com ' + prestacoes + ' prestações. O valor da prestação mensal deste produto será de R$ ' + PMT + ',00.');
        }
        else{
            window.alert('valor ' + PMT);
        }

    }else {
        window.alert('Para calcular o seu Pace , preencha todos os campos.');

    }
});

