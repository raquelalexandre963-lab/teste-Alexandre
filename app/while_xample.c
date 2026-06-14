#include <stdio.h>

int main() {

        int i = 1; //varavel do incremento do loop

        while (i <= 10) 
        { 
            printf("%d\n", i);
            // O valor de 'i' incrementado nunca acontece, evita o loop temporal se nao fizer isso nunca vai terminar
            i++; // esse i++ faz com que o loop seja executado 5 vezes, incrementando o valor de 'i' a cada iteração, permitindo que a condição do loop seja eventualmente falsa e o programa termine.
        }

    return 0;
}