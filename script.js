function buscarCEP(){
            let cep = document.getElementById("endereco_cep").value;
            let url = "https://brasilapi.com.br/api/cep/v1/"+cep;

            fetch(url).then(function(dados){
                dados.json().then(function(endereco){
                    document.getElementById("endereco_rua").value = endereco.street;
                    document.getElementById("endereco_bairro").value = endereco.neighborhood;
                    document.getElementById("endereco_cidade").value = endereco.city;
                    document.getElementById("endereco_estado").value = endereco.state;
                })
            })
        }

        function showFile(input) {
            let file = input.files[0];

            let fr = new FileReader();
            fr.onload = function(dadosArquivo) {
                let dados = JSON.parse(dadosArquivo.target.result);
                document.getElementById("usuario_nome").value = dados.nome;
                document.getElementById("endereco_cep").value = dados.cep;
                document.getElementById("endereco_rua").value = dados.rua;
                document.getElementById("endereco_bairro").value = dados.bairro;
                document.getElementById("endereco_cidade").value = dados.cidade;
                document.getElementById("endereco_estado").value = dados.estado;
            }
            fr.readAsText(file);
        }
        function salvar(){
            let templink = document.createElement("a");
            let dadosSalvar = {
                "nome":document.getElementById("usuario_nome").value,
                "cep":document.getElementById("endereco_cep").value, 
                "rua":document.getElementById("endereco_rua").value,
                "bairro":document.getElementById("endereco_bairro").value,
                "cidade":document.getElementById("endereco_cidade").value,
                "estado":document.getElementById("endereco_estado").value
            }
            let meuArquivo = new Blob([JSON.stringify(dadosSalvar)],{type:"text/plain"});
            templink.setAttribute("href",URL.createObjectURL(meuArquivo));
            templink.setAttribute("download","dados.json");
            templink.click();
        }
