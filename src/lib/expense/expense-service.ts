import { IExpense, IExpenseService } from "./expense-interface";
import Expense from "./expense-model";
import ExpenseServiceFactory from "./expense-service-factory";

export class ExpenseService implements IExpenseService {
  async editExpense(
    expenseId: string,
    userId: string,
    expense: IExpense
  ): Promise<IExpense> {
    return await Expense.findOneAndUpdate(
      { id: expenseId, user: userId },
      { $set: expense },
      { new: true }
    );
  }
  async deleteExpense(expenseId: string, userId: any): Promise<void> {
    await Expense.findOneAndUpdate(
      { id: expenseId, user: userId },
      { $set: { isDeleted: true } }
    );
  }
  async getExpensesByDate(
    userId: string,
    startDate: string,
    endDate: string,
    page: number,
    limit: number
  ): Promise<IExpense[]> {
    const offset = page + limit - limit;

    const fromDate = new Date(startDate);
    const toDate = new Date(endDate);

    return await Expense.aggregate([
      {
        $match: { user: userId },
      },
      {
        $match: { date: { $gte: fromDate, $lte: toDate } },
      },
      {
        $group: { _id: "date" },
      },
      {
        $sort: { date: -1 },
      },
    ])
      .skip(offset)
      .limit(limit)
    //   .sort({ createdDate: -1 });
  }
  async getExpenseCategories(
    userId: string,
    startDate: string,
    endDate: string,
    page: number,
    limit: number
  ): Promise<void> {
    const offset = page + limit - limit;
    const fromDate = new Date(startDate);
    const toDate = new Date(endDate);
    await Expense.aggregate([
      { $match: { user: userId } },
      { $match: { amount: { $gte: 10 } } },
      { $match: { date: { $gte: fromDate, $lte: toDate } } },
      { $group: { _id: "$Category.name", total: { $sum: "$amount" } } },
      { $sort: { total: -1 } },
    ]);
  }
  async getTotalExpenses(userId: string): Promise<number> {
    const res = await Expense.aggregate([
      { $match: { user: userId } },
      { $group: { _id: null, total: { $sum: "$amount" } } },
    ]);
    console.log(res, "AMOUNT");
    return 0;
  }
  async createExpense(expense: IExpense): Promise<IExpense> {
    const res = (await Expense.create(expense)) as IExpense;

    return res;
  }
  async getExpensesByUser(
    userId: string,
    page: number,
    limit: number
  ): Promise<IExpense[]> {
    const offset = page + limit - limit;

    return await Expense.find({ user: userId })
      .skip(offset)
      .limit(limit)
      .sort({ createdDate: -1 });
  }
  async getExpense(userId: string, expenseId): Promise<IExpense> {
    return await Expense.findOne({ user: userId, id: expenseId });
  }
  async getUserExpensesCount(
    userId: string,
    startDate: string,
    endDate: string
  ): Promise<number> {
    const expenseServFact = new ExpenseServiceFactory();

    return await expenseServFact.getUserExpenseCount(
      userId,
      startDate,
      endDate
    );
  }
}
