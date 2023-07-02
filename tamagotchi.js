class Tamagotchi {
  constructor() {
    this.fome = 0;
    this.felicidade = 100;
    this.emoji = "😊";
  }

  alimentar() {
    if (this.fome >= 20) {
      this.fome -= 20;
      console.log("Você alimentou o tamagotchi!");
    } else {
      console.log("O tamagotchi não está com fome agora.");
    }
  }

  receberCarinho() {
    if (this.felicidade < 100) {
      this.felicidade += 10;
      console.log("Você deu carinho ao tamagotchi!");
    } else {
      console.log("O tamagotchi está muito feliz agora.");
    }
  }

  levarParaPassear() {
    if (this.felicidade >= 20) {
      this.felicidade -= 20;
      console.log("Você levou o tamagotchi para passear!");
    } else {
      console.log("O tamagotchi não quer passear agora.");
    }
  }

  trocarRoupa(emoji) {
    this.emoji = emoji;
    console.log("Você trocou a roupa do tamagotchi!");
  }

  atualizarEstado() {
    this.fome += 10;
    this.felicidade -= 5;

    if (this.fome >= 100) {
      console.log("Seu tamagotchi morreu de fome! Game over.");
      return;
    }

    if (this.felicidade <= 0) {
      console.log("Seu tamagotchi ficou triste demais e morreu. Game over.");
      return;
    }

    console.log("Estado atual do tamagotchi:");
    console.log(`Fome: ${this.fome}`);
    console.log(`Felicidade: ${this.felicidade}`);
    console.log(`Emoji: ${this.emoji}`);
  }
}

// Criando uma instância do Tamagotchi
const tamagotchi = new Tamagotchi();

// Função para exibir o menu de opções
function exibirMenu() {
  console.log("\nMenu:");
  console.log("1 - Alimentar");
  console.log("2 - Dar carinho");
  console.log("3 - Levar para passear");
  console.log("4 - Trocar de roupa");
  console.log("5 - Sair");
}

// Loop principal do programa
function executarPrograma() {
  const interval = setInterval(() => {
    tamagotchi.atualizarEstado();
  }, 20000); // Atualiza o estado a cada 20 segundos

  exibirMenu();

  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question("Escolha uma opção: ", (opcao) => {
    switch (opcao) {
      case "1":
        tamagotchi.alimentar();
        break;
      case "2":
        tamagotchi.receberCarinho();
        break;
      case "3":
        tamagotchi.levarParaPassear();
        break;
      case "4":
        readline.question("Digite o novo emoji: ", (emoji) => {
          tamagotchi.trocarRoupa(emoji);
          readline.close();
        });
        break;
      case "5":
        clearInterval(interval);
        console.log("Programa encerrado.");
        readline.close();
        break;
      default:
        console.log("Opção inválida. Tente novamente.");
        break;
    }

    executarPrograma();
  });
}

executarPrograma();
