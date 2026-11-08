import { RecipeModel } from './models';

export const MOCK_RECIPES: RecipeModel[] = [
  {
    id: 1,
    name: 'Spaghetti Carbonara',
    description: 'A classic Italian pasta dish.',
    isFavorite: true,
    ingredients: [
      { name: 'Spaghetti', quantity: 200, unit: 'g' },
      { name: 'Guanciale', quantity: 100, unit: 'g' },
      { name: 'Egg Yolks', quantity: 4, unit: 'each' },
      { name: 'Pecorino Romano Cheese', quantity: 50, unit: 'g' },
      { name: 'Black Pepper', quantity: 1, unit: 'tsp' },
    ],
    imgUrl: 'https://www.allrecipes.com/thmb/DZLFEwAZT2vRyo9-XjzUoALJFyI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/19356-spaghetti-italian-VAT-Beauty-4x3-af05b7565e014c16b1c5f86d45a18738.jpg'
  },
  {
    id: 2,
    name: 'Caprese Salad',
    description: 'A simple and refreshing Italian salad.',
    isFavorite: false,
    ingredients: [
      { name: 'Tomatoes', quantity: 4, unit: 'each' },
      { name: 'Fresh Mozzarella', quantity: 200, unit: 'g' },
      { name: 'Fresh Basil', quantity: 1, unit: 'bunch' },
      { name: 'Extra Virgin Olive Oil', quantity: 2, unit: 'tbsp' },
    ],
    imgUrl: 'https://www.southernliving.com/thmb/a6-2O8qbLUXeUtqY1i-VCOXNuVk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Cherry-Tomato-Caprese-Salad-3x2-17674-5f882f3e3ad14bb28076ef32b1150d8f.jpg'
  },
];