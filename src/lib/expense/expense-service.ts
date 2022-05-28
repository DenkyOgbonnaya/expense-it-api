import { IExpense, IExpenseGetRes, IExpenseService } from "./expense-interface";
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

    const res = await Expense.aggregate([
      {
        $match: { user: userId, date: { $gte: fromDate, $lte: toDate } },
      },

      {
        $sort: { date: -1 },
      },
      {
        $group: {
          _id: "$date",
          expenses: {
            $push: "$$ROOT",
          },
        },
      },
    ]);
    //   .skip(offset)
    //   .limit(limit);
    return res;
  }
  async getExpenseCategories(
    userId: string,
    startDate: string,
    endDate: string,
    page: number,
    limit: number
  ): Promise<any> {
    const offset = page + limit - limit;
    const fromDate = new Date(startDate);
    const toDate = new Date(endDate);

    return await Expense.aggregate([
      {
        $match: {
          user: userId,
          amount: { $gte: 10 },
          date: { $gte: fromDate, $lte: toDate },
        },
      },

      { $sort: { total: -1 } },
      { $group: { _id: "$category", total: { $sum: "$amount" } } },
    ]);
  }
  async getTotalExpenses(userId: string): Promise<number> {
    const res = await Expense.aggregate([
      { $match: { user: userId } },
      { $group: { _id: null, total: { $sum: "$amount" } } },
    ]);
    return res[0].total;
  }
  async getTotalExpensesByDate(
    userId: string,
    startDate: string,
    endDate: string
  ): Promise<number> {
    const fromDate = new Date(startDate);
    const toDate = new Date(endDate);
    const res = await Expense.aggregate([
      { $match: { user: userId, date: { $gte: fromDate, $lte: toDate } } },
      { $group: { _id: null, total: { $sum: "$amount" } } },
    ]);
    return res[0].total;
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
  async getExpense(expenseId: string, userId): Promise<IExpense> {
    return await Expense.findOne({ id: expenseId, user: userId });
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
