#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main() {
   int resultado1, resultado2;
   char primeiroAtributo;
   int ataque1, ataque2, defesa1, defesa2, recuo1, recuo2;

   // gerar numero aleatório
   srand(time(0));
   ataque1 = 1; //rand() % 100 + 1; // número entre 1 e 100
   ataque2 = 0; //rand() % 100 + 1; // número entre 1 e 100
   defesa1 = 1; //rand() % 100 + 1; // número entre 1 e 100
   defesa2 = 0; //rand() % 100 + 1; // número entre 1 e 100
   recuo1 = 0; //rand() % 100 + 1; // número entre 1 e 100
   recuo2 = 1; //rand() % 100 + 1; // número entre 1 e 100

   // inicio do jogo
   printf("bem-vindo ao jogo\n");
   printf("escolha o primeiro atributo. \n");
   printf("A. Ataque\n");
    printf("D. Defesa\n");
    printf("R. Recuo\n");

    printf("escolha a comparacao: \n");
    scanf(" %c", &primeiroAtributo);

    switch (primeiroAtributo) {
        case 'A':
        case 'a':
            printf("voce escolheu o atributo ataque\n");
            resultado1 = (ataque1 > ataque2) ? 1 : 0;
            break;
        case 'D':
        case 'd':
            printf("voce escolheu o atributo defesa\n");
            resultado1 = (defesa1 > defesa2) ? 1 : 0;
            break;
        case 'R':
        case 'r':
            printf("voce escolheu o atributo recuo\n");
            resultado1 = (recuo1 > recuo2) ? 1 : 0;
            break;
        default:
            printf("opcao de jogo invalida\n");
            return 1;
    }

    if (resultado1 == 1) {
        printf("Carta 1 venceu!\n");
    } else {
        printf("Carta 2 venceu ou empatou!\n");
    }

    return 0;
}
