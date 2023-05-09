document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    validarNumero();
  });

  function obterMensagem(n) {
    if (n == 0) return "Acabou o namoro!! Seu namorado vai chorar";
    if (n <= 4) return "Só isso? Vc ta de brincadeira com a minha cara, bota um valor decente nessa porra!";
    if (n <= 6) return "Vc me ama a mesma quantidade que uma média escolar? Imagina se me odiasse!!!!!!!";
    if (n <= 7) return "kkkkkkkkkkkkk SÉRIO YASMIN?";
    if (n <= 8) return "Por isso que o neymar é o meu amor e não você.";
    if (n <= 9) return "Ta melhorando";
    if (n <= 10) return "Que fofa, mas ainda não chega nem perto do quanto eu te amo. MENGO!";
    if (n <= 100) return "Até que vc ama bastante, mas com certeza pode melhorar...";
    return "Boa tentativa mas o amor que eu sinto por vc beira o infinito";
  }

  let timeout 

  function validarNumero() {
    if (timeout) clearTimeout(timeout)
    let inputNumero =document.getElementById("numero")
    let caixaDeMensagem = document.getElementById("mensagem")
    let numero = Number(inputNumero.value);
    let mensagem = obterMensagem(numero)

    caixaDeMensagem.innerHTML = mensagem
    caixaDeMensagem.style.display = "block"

    timeout = setTimeout(()=> {
      caixaDeMensagem.style.display = 'none'
    }, 5000)
  }
