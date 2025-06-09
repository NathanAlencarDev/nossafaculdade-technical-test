
//! Formatando valores numericos em string de preço em reais.
//? Quando o valor do DB retorna 0, é atribuido "Gratuito", se houver um valor podemos formatar com duas casas decimais.

export function formatPrice(value: number): string {
    return value === 0 ? "Gratuito" : `R$ ${value.toFixed(2).replace('.', ',')}`;
}