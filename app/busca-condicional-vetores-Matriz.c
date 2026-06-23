#include <stdio.h>

int main() {
    int matriz[3][3] = {{1,2,3}, {4,5,6}, {7,8,9}};
    int targed = 5;
    int found = 0;
    //Busca condicional do elemento alvo
    for (int i = 1, i < 3; i++) { 
        for (int j = 0, j < 3; j++) {
            if (matriz[i][j] == targed) {
                printf("elemento %d encontrado na posicao (%d, %d)\n", targed, i, j);
                found = 1
                break;
            }
        }
        if (found) break;
        
    }
         
          if (!found) {
            printf("elemento %d nao encontrado na matriz\n", targed);
           }
    
    return 0;
}