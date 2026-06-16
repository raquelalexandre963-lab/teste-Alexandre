#include <stdio.h>

int main() {

    int numero;

    do
    {
        printf("digite um numero par sair do programa......");
        scanf("%d", &numero);

        if(numero % 2 == 0) {
        printf("%d e par!", numero);
        } else {
            printf("%d e impar!", numero);
        }
        
    } while (numero % 2 != 0);

    printf("voce digitou um numero par, saindo do programa....");

    return 0;
    
}