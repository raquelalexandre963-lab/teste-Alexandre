#include <stdio.h>

int main() {
    char codigo[4];
    char cidade[50];
    long long int populacao;
    double area;
    double pib;
    int pontosTuristicos;
    double densidade, pibPerCapita;

    printf("=== Cadastro Carta 1 ===\n");
    printf("Codigo: ");
    scanf("%s", codigo);

    printf("Nome da cidade: ");
    scanf(" %s", cidade);

    printf("Populacao: ");
    scanf("%lld", &populacao);

    printf("Area: ");
    scanf("%lf", &area);

    printf("PIB (em reais): ");
    scanf("%lf", &pib);

    printf("Pontos Turisticos: ");
    scanf("%d", &pontosTuristicos);

    densidade = populacao / area;
    pibPerCapita = pib / populacao;

    printf("\n=== Resultado ===\n");
    printf("Cidade: %s (%s)\n", cidade, codigo);
    printf("Densidade: %.2f hab/km²\n", densidade);
    printf("PIB per Capita: R$ %.2f\n", pibPerCapita);

    return 0;
}
