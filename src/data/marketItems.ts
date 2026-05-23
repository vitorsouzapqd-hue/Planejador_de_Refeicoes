export type MarketItem = {
  id: string
  name: string
  shoppingCategory: string
  defaultUnit: 'g' | 'un' | 'ml' | 'pacote' | 'caixa'
  defaultQuantity: number
}

export const marketItems: MarketItem[] = [
  createMarketItem('peito-frango', 'Peito de frango', 'Proteínas', 'g', 1000),
  createMarketItem('sobrecoxa-frango', 'Sobrecoxa de frango', 'Proteínas', 'g', 1000),
  createMarketItem('patinho-moido', 'Patinho moído', 'Proteínas', 'g', 1000),
  createMarketItem('carne-bovina', 'Carne bovina', 'Proteínas', 'g', 1000),
  createMarketItem('tilapia', 'Tilápia', 'Proteínas', 'g', 1000),
  createMarketItem('ovos', 'Ovos', 'Proteínas', 'un', 12),
  createMarketItem('atum', 'Atum', 'Proteínas', 'un', 2),
  createMarketItem('sardinha', 'Sardinha', 'Proteínas', 'un', 2),
  createMarketItem('lombo-suino', 'Lombo suíno', 'Proteínas', 'g', 1000),
  createMarketItem('arroz', 'Arroz', 'Carboidratos', 'g', 1000),
  createMarketItem('arroz-integral', 'Arroz integral', 'Carboidratos', 'g', 1000),
  createMarketItem('feijao-preto', 'Feijão preto', 'Carboidratos', 'g', 1000),
  createMarketItem('macarrao', 'Macarrão', 'Carboidratos', 'g', 500),
  createMarketItem('batata-doce', 'Batata doce', 'Carboidratos', 'g', 1000),
  createMarketItem('batata-inglesa', 'Batata inglesa', 'Carboidratos', 'g', 1000),
  createMarketItem('mandioca', 'Mandioca', 'Carboidratos', 'g', 1000),
  createMarketItem('inhame', 'Inhame', 'Carboidratos', 'g', 1000),
  createMarketItem('aveia', 'Aveia', 'Carboidratos', 'g', 500),
  createMarketItem('pao-integral', 'Pão integral', 'Padaria', 'pacote', 1),
  createMarketItem('tapioca', 'Goma de tapioca', 'Carboidratos', 'g', 500),
  createMarketItem('banana', 'Banana', 'Frutas', 'g', 1000),
  createMarketItem('maca', 'Maçã', 'Frutas', 'g', 1000),
  createMarketItem('laranja', 'Laranja', 'Frutas', 'g', 1000),
  createMarketItem('mamao', 'Mamão', 'Frutas', 'un', 1),
  createMarketItem('abacaxi', 'Abacaxi', 'Frutas', 'un', 1),
  createMarketItem('melancia', 'Melancia', 'Frutas', 'g', 1000),
  createMarketItem('melao', 'Melão', 'Frutas', 'un', 1),
  createMarketItem('morango', 'Morango', 'Frutas', 'caixa', 1),
  createMarketItem('uva', 'Uva', 'Frutas', 'g', 500),
  createMarketItem('manga', 'Manga', 'Frutas', 'un', 2),
  createMarketItem('alface', 'Alface', 'Vegetais', 'un', 1),
  createMarketItem('tomate', 'Tomate', 'Vegetais', 'g', 500),
  createMarketItem('cebola', 'Cebola', 'Vegetais', 'g', 500),
  createMarketItem('alho', 'Alho', 'Vegetais', 'un', 1),
  createMarketItem('cenoura', 'Cenoura', 'Vegetais', 'g', 500),
  createMarketItem('beterraba', 'Beterraba', 'Vegetais', 'g', 500),
  createMarketItem('brocolis', 'Brócolis', 'Vegetais', 'un', 1),
  createMarketItem('couve-flor', 'Couve-flor', 'Vegetais', 'un', 1),
  createMarketItem('couve', 'Couve', 'Vegetais', 'un', 1),
  createMarketItem('pepino', 'Pepino', 'Vegetais', 'un', 2),
  createMarketItem('repolho', 'Repolho', 'Vegetais', 'un', 1),
  createMarketItem('agriao', 'Agrião', 'Vegetais', 'un', 1),
  createMarketItem('milho', 'Milho', 'Vegetais', 'un', 2),
  createMarketItem('leite', 'Leite', 'Laticínios', 'ml', 1000),
  createMarketItem('iogurte-natural', 'Iogurte natural', 'Laticínios', 'un', 4),
  createMarketItem('queijo', 'Queijo', 'Laticínios', 'g', 300),
  createMarketItem('requeijao', 'Requeijão', 'Laticínios', 'un', 1),
  createMarketItem('azeite', 'Azeite', 'Temperos', 'ml', 500),
  createMarketItem('oleo', 'Óleo', 'Temperos', 'ml', 900),
  createMarketItem('sal', 'Sal', 'Temperos', 'pacote', 1),
  createMarketItem('pimenta', 'Pimenta', 'Temperos', 'un', 1),
  createMarketItem('paprica', 'Páprica', 'Temperos', 'un', 1),
  createMarketItem('molho-tomate', 'Molho de tomate', 'Despensa', 'un', 2),
  createMarketItem('shoyu', 'Shoyu', 'Temperos', 'ml', 150),
  createMarketItem('cafe', 'Café', 'Bebidas', 'g', 500),
  createMarketItem('agua-mineral', 'Água mineral', 'Bebidas', 'un', 6),
]

function createMarketItem(
  id: string,
  name: string,
  shoppingCategory: string,
  defaultUnit: MarketItem['defaultUnit'],
  defaultQuantity: number,
): MarketItem {
  return {
    id,
    name,
    shoppingCategory,
    defaultUnit,
    defaultQuantity,
  }
}
