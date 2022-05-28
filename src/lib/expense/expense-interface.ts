import { Schema } from "mongoose";
export interface IExpense {
  title: string;
  date: Date | number;
  amount: number;
  category?: string;
  user: string;
  isDeleted: boolean;
}
export interface IExpenseGetRes {
  _id: string;
  expenses: [IExpense];
}

export interface IExpenseService {
  createExpense(expense: IExpense): Promise<IExpense>;

  /**
   * Get all expenses that belongs to a user
   * @param userId user id
   * @param page current page
   * @param limit entries limit
   * @route GET api/v1/expenses/users/:userId
   * @returns promise:IExpense[]
   */
  getExpensesByUser(
    userId: string,
    page: number,
    limit: number
  ): Promise<IExpense[]>;

  /**
   * Edit an expense
   * @param id expense id
   * @param userId user id
   * @param expense the expense
   * @route PUT: api/v1/expenses/:id/users/:id
   * @returns promise:IExpense
   */
  editExpense(
    expenseId: string,
    userId: string,
    expense: IExpense
  ): Promise<IExpense>;

  /**
   * Get an expense
   * @param expenseId expense id
   * @param userId user id
   * @route GET: api/v1/expenses/:id
   * @returns promise:IExpense
   */
  getExpense(expenseId: string, userId): Promise<IExpense>;

  /**
   * Delete an expense
   * @param expenseId expense id
   * @param userId user id
   * @route DELETE: api/v1/expenses/:id
   * @returns promise:IExpense
   */
  deleteExpense(expenseId: string, userId): Promise<void>;

  /**
   * Get expenses by date
   * @param userId user id
   * @param startDate start date
   * @param endDate end date
   * @param page current page
   * @param limit entries limit
   * @route GET: api/v1/expenses/users/:id/date
   * @returns promise:IExpense
   */
  getExpensesByDate(
    userId: string,
    startDate: string,
    endDate: string,
    page: number,
    limit: number
  ): Promise<IExpense[]>;

  /**
   * Get top five category
   * @param userId user id
   * @param startDate start date
   * @param endDate end date
   * @param page current page
   * @param limit entries limit
   * @route GET: api/v1/expenses/users/:id/categories
   * @returns promise:IExpense
   */
  getExpenseCategories(
    userId: string,
    startDate: string,
    endDate: string,
    page: number,
    limit: number
  ): Promise<void>;

  /**
   * Get total expenses amount
   * @param userId user id
   * @route GET: api/v1/expenses/users/:id/total
   */
  getTotalExpenses(userId: string): Promise<number>;

   /**
   * Get total expenses amount
   * @param userId user id
   * @route GET: api/v1/expenses/users/:id/date-total
   */
    getTotalExpensesByDate(userId: string, startDate:string, endDate:string): Promise<number>;
  getUserExpensesCount(
    userId: string,
    startDate: string,
    endDate: string
  ): Promise<number>;
}
