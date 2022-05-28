import { ICategory, ICategoryService } from "./category-interface";
import Category from "./category-model";

export class CategoryService implements ICategoryService {
  async createCategory(category: ICategory): Promise<ICategory> {
    return await Category.create(category);
  }
  async getCategories(userId: string): Promise<ICategory[]> {
    return await Category.find({ user: userId });
  }
}
