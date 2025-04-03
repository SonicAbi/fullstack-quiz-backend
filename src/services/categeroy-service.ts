import { eq } from "drizzle-orm";
import { categoriesTable, type Category } from "../db/schemas";
import { CategoryRepository } from "../repositories/category-repository";

export const CategoryService = {
  async getAllCategories(): Promise<Category[]> {
    return CategoryRepository().findMany();
    },
    
    async getOneCategory(category?: string) {
        let condition = undefined
        if (category) condition = eq(categoriesTable.name, category)
        return CategoryRepository().findOne(condition)
    }
};
