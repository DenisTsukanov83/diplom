import { dishType } from "./dishType"

export interface dataType{
    [key: string]: dishType[],
    'coldSnacks': dishType[],
    'hotSnacks': dishType[],
    'hotDishes': dishType[],
    'soups': dishType[],
    'sideDishes': dishType[],
    'grillMenu': dishType[],
    'childMenu': dishType[],
    'drinks': dishType[]
    
}