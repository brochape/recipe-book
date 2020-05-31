import {QuantityKind} from "./quantityKind";

export interface Ingredient {
    name: string,
    quantity: string,
    unit: QuantityKind,
}

export default interface Recipe{
    id: number,
    name: string,
    yield?: string,
    ingredients?: Ingredient[],
    explanation: string,
    url: string,
    image: string,
}