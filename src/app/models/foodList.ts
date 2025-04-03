export interface Recipe {
    estimateTime: string;
    imageUrl: string;
    cuisine: string;
}

export interface formData {
  ingredients: string;
  appliances: string;
  preferences: string;
  cuisine: string;
}

export interface RecipeDetail {
    recipeName: string;
    introduction: string;
    preparationTime: {
      total: string;
      preparation: string;
      cooking: string;
    };
    ingredients: string[];
    instructions: string[];
    proTips?: string[];
    servingSuggestions?: string[];
    nutritionFacts: {
      calories: string;
      carbohydrates: string;
      protein: string;
      fat: string;
    };
    imgUrl: string;
  }
  