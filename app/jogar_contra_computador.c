#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main() {
    int numeroJogador, numeroComputador, resultado;
    char tipoComparacao;

    // gerar numero aleatório
    srand(time(0));
    numeroComputador = rand() % 100 + 1; // número entre 1 e 100

    // inicio do jogo
    printf("Bem-vindo ao jogo maior ou igual!\n");
    printf("voce deve escolher um numero e o tipo de comparacao.\n");
    printf("M. Maior\n");
    printf("N. menor\n");
    printf("I. igual\n");

    printf("escolha a comparacao: \n");
    scanf(" %c", &tipoComparacao);

    printf("escolha um numero entre 1 e 100: \n");
    scanf("%d", &numeroJogador);

    // exibir o numero do computador
    printf("O numero do computador e: %d\n", numeroComputador);

    switch (tipoComparacao) {
        case 'M':
        case 'm':
            printf("voce escolheu a opcao maior\n");
            resultado = (numeroJogador > numeroComputador) ? 1 : 0;
            break;
        case 'N':
        case 'n':
            printf("voce escolheu a opcao menor\n");
            resultado = (numeroJogador < numeroComputador) ? 1 : 0;
            break;
        case 'I':
        case 'i':
            printf("voce escolheu a opcao igual\n");
            resultado = (numeroJogador == numeroComputador) ? 1 : 0;
            break;
        default:
            printf("opcao de jogo invalida\n");
            return 1;
    }

    if (resultado == 1) {
        printf("Parabens! voce ganhou!\n");
    } else {
        printf("infelizmente, voce perdeu!\n");
    }

    return 0;
}
