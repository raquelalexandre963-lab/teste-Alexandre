#include <stdio.h>

int main() {
    // Carta 1
    char codigo1[4], cidade1[50];
    long long int pop1;
    double area1, pib1;
    int pontos1;

    // Carta 2
    char codigo2[4], cidade2[50];
    long long int pop2;
    double area2, pib2;
    int pontos2;

    // Cálculos
    double dens1, dens2, pibPerCapita1, pibPerCapita2;

    printf("=== CADASTRO CARTA 1 ===\n");
    printf("Codigo: ");
    scanf("%s", codigo1);
    printf("Cidade: ");
    scanf(" %s", cidade1);
    printf("Populacao: ");
    scanf("%lld", &pop1);
    printf("Area: ");
    scanf("%lf", &area1);
    printf("PIB em reais: ");
    scanf("%lf", &pib1);
    printf("Pontos Turisticos: ");
    scanf("%d", &pontos1);

    printf("\n=== CADASTRO CARTA 2 ===\n");
    printf("Codigo: ");
    scanf("%s", codigo2);
    printf("Cidade: ");
    scanf(" %s", cidade2);
    printf("Populacao: ");
    scanf("%lld", &pop2);
    printf("Area: ");
    scanf("%lf", &area2);
    printf("PIB em reais: ");
    scanf("%lf", &pib2);
    printf("Pontos Turisticos: ");
    scanf("%d", &pontos2);

    // Calcula densidade e PIB per capita
    dens1 = pop1 / area1;
    dens2 = pop2 / area2;
    pibPerCapita1 = pib1 / pop1;
    pibPerCapita2 = pib2 / pop2;

    printf("\n========== RESULTADO DO DUELO ==========\n");

    printf("\nCarta 1: %s - %s\n", codigo1, cidade1);
    printf("Carta 2: %s - %s\n", codigo2, cidade2);

    printf("\n--- Populacao ---\n");
    printf("%s: %lld | %s: %lld\n", cidade1, pop1, cidade2, pop2);
    if (pop1 > pop2) printf("Vencedor: %s\n", cidade1);
    else if (pop2 > pop1) printf("Vencedor: %s\n", cidade2);
    else printf("Empate!\n");

    printf("\n--- Area ---\n");
    printf("%s: %.2f | %s: %.2f\n", cidade1, area1, cidade2, area2);
    if (area1 > area2) printf("Vencedor: %s\n", cidade1);
    else if (area2 > area1) printf("Vencedor: %s\n", cidade2);
    else printf("Empate!\n");

    printf("\n--- PIB ---\n");
    printf("%s: R$ %.2f | %s: R$ %.2f\n", cidade1, pib1, cidade2, pib2);
    if (pib1 > pib2) printf("Vencedor: %s\n", cidade1);
    else if (pib2 > pib1) printf("Vencedor: %s\n", cidade2);
    else printf("Empate!\n");

    printf("\n--- Densidade Demografica ---\n");
    printf("%s: %.2f hab/km² | %s: %.2f hab/km²\n", cidade1, dens1, cidade2, dens2);
    if (dens1 < dens2) printf("Vencedor: %s - menor densidade ganha!\n", cidade1);
    else if (dens2 < dens1) printf("Vencedor: %s - menor densidade ganha!\n", cidade2);
    else printf("Empate!\n");

    printf("\n--- PIB per Capita ---\n");
    printf("%s: R$ %.2f | %s: R$ %.2f\n", cidade1, pibPerCapita1, cidade2, pibPerCapita2);
    if (pibPerCapita1 > pibPerCapita2) printf("Vencedor: %s\n", cidade1);
    else if (pibPerCapita2 > pibPerCapita1) printf("Vencedor: %s\n", cidade2);
    else printf("Empate!\n");

    printf("\n--- Pontos Turisticos ---\n");
    printf("%s: %d | %s: %d\n", cidade1, pontos1, cidade2, pontos2);
    if (pontos1 > pontos2) printf("Vencedor: %s\n", cidade1);
    else if (pontos2 > pontos1) printf("Vencedor: %s\n", cidade2);
    else printf("Empate!\n");

    return 0;
}
