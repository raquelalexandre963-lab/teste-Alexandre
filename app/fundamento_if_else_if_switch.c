#include <stdio.h>

int main() {
  int opcao;
  float nota1, nota2, media;

  // Exibição do menu
  printf("Menu de Gerenciamento de Estudantes\n");
  printf("1. Calcular Média\n");
  printf("2. Determinar Status\n");
  printf("3. Sair\n");
  printf("Escolha uma opção: \n");
  scanf("%d", &opcao);

  switch (opcao) {
    case 1:
      
    // Entrada de notas
      printf("calcular a media \n");
      printf("Digite a primeira nota: \n");
      scanf("%f", &nota1);
      printf("Digite a segunda nota: \n");
      scanf("%f", &nota2);
      
      // testar a condicao se a nota e >= 0 e <= 10
      if ( (nota1 >= 0 && nota1 <= 10)  && (nota2 >= 0 && nota2 <= 10) ) {
        media = (nota1 + nota2) / 2;
        printf("A média é: %.2f\n", media);
        printf("entrada correta");
        } else {
            printf("entrada com valores errados de notas!\n");
      }

      media = (nota1 + nota2) / 2;
      printf("A média é: %.2f\n", media);

      break;
    case 2:
      printf("Determinar o status\n");
      printf("entrar com a media \n");
      scanf("%f", &media);
      // media >=5 ? printf("Aprovado!\n") : printf("Reprovado!\n");
      
      if (media >= 7) {
        printf("aprovado!\n");
      } else if (media >= 5) {
        printf("recuperação!\n");
      } else {
        printf("reprovado!\n");
      }
      break;
    case 3:
      printf("Saindo do programa\n");
      break;
    default:
      printf("Opção inválida\n");
  }

}