function verificarNumero() {
    const numero = document.getElementById("numero").value;
    const resultado = document.getElementById("resultado1");
  
    if (numero % 2 === 0) {
      resultado.textContent = "O numero é par.";
    } else {
      resultado.textContent = "O nmero é ímpar.";
    }
  }

  function calcularMedia() {
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);
    const nota4 = parseFloat(document.getElementById("nota4").value);
  
    const media = (nota1 + nota2 + nota3 + nota4) / 4;
  
    const resultado = document.getElementById("resultado2");
  
    if (media >= 7) {
      resultado.textContent = "aprovado com media " + media.toFixed(2);
    } else {
      resultado.textContent = "reprovado com media " + media.toFixed(2);
    }
  }
  
  gerarNotas();
function converteNota() {
    const nota = document.getElementById("nota").value;
    const resultado = document.getElementById("resultado3");
  
    switch (true) {
      case nota >= 90:
        resultado.textContent = "A";
        break;
      case nota >= 80:
        resultado.textContent = "B";
        break;
      case nota >= 70:
        resultado.textContent = "C";
        break;
      case nota >= 60:
        resultado.textContent = "D";
        break;
      default:
        resultado.textContent = "F";
    }
  }
  
  function traduzirCor() {
    const cor = document.getElementById("cor").value;
    const resultado = document.getElementById("resultado4");
  
    switch (cor) {
      case "red":
        resultado.textContent = "Vermelho";
        break;
      case "blue":
        resultado.textContent = "Azul";
        break;
      case "green":
        resultado.textContent = "Verde";
        break;
      case "yellow":
        resultado.textContent = "Amarelo";
        break;
      default:
        resultado.textContent = "Cor desconhecida";
    }
  }
  
  function somaNumerosPares() {
    let soma = 0;
    for (let i = 1; i <= 100; i++) {
      if (i % 2 === 0) {
        soma += i;
      }
    }
    const resultado = document.getElementById("resultado5");
    resultado.textContent = "A soma dos 100 números pares é: " + soma;
  }
  
  function tabuadaMultiplicacao() {
    const numero = document.getElementById("numero6").value;
    const resultado = document.getElementById("resultado6");
    let texto = "";
  
    for (let i = 1; i <= 10; i++) {
      texto += numero + " x " + i + " = " + (numero * i) + "\n";
    }
  
    resultado.textContent = texto;
  }
  
  function fatorialNumero() {
    const numero = document.getElementById("numero7").value;
    const resultado = document.getElementById("resultado7");
    let fatorial = 1;
  
    for (let i = 1; i <= numero; i++) {
      fatorial *= i;
    }
  
    resultado.textContent = "O fatorial de " + numero + " é: " + fatorial;
  }
  
  function verificarFormulario() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const resultado = document.getElementById("resultado8");
  
    if (nome === "" || email === "") {
      resultado.textContent = "Por favor, preencha todos os campos";
    } else {
      resultado.textContent = "Formulário válido";
    }
  }