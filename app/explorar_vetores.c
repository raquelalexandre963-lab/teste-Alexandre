#include <stdio.h>

int main() {
    int linha = 25;
    int coluna = 25;
    int matriz[linha][coluna]; 
    int soma = 0;

    for (int i = 0; i < linha; i++) {
        for (int j = 0; j < coluna; j++) {
            soma++;
            matriz[i][j] = soma;
            printf("%d ", matriz[i][j]);
        }
        printf("\n");
    }
    return 0;
} //matriz 5 x5 preenchido de 1 a 25.