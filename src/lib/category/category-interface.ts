export interface ICategory {
  name: string;
  user:string,
  description?: string;
}

export interface ICategoryService {
  /**
   * Add a new category
   * @param category category object
   * @returns
   */
  createCategory(category: ICategory): Promise<ICategory>;

  /**
   *
   * @param userId user id
   */
  getCategories(userId: string): Promise<ICategory[]>;
}
