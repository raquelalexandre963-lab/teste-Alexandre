#include <stdio.h>
 
int main() {
    int i = 1; //varavel do incremento do loop
   
    while (i <= 5) { //condicao pode nao terminar
        printf("%d\n", i);
        // O valor de 'i' incrementado nunca acontece
    }
   
    return 0;
}