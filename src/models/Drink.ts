export type Drinks ={
    name: String,
    garnish?: String,
    method: String,
    glass: String,
    ingredients: Array<Ingredient>,
    tag: String
    note?: String
}

export type Ingredient ={
    measure?: String,
    ingredient: String
}