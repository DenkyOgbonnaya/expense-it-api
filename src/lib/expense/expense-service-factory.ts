import Expense from "./expense-model";

class ExpenseServiceFactory {
  async getUserExpenseCount(
    userId: string,
    startDate: string,
    endDate: string
  ): Promise<number> {
    if (startDate && endDate) {
      const fromDate = new Date(startDate);
      const toDate = new Date(endDate);
      return await Expense.countDocuments({
        user: userId,
        date: { $gte: fromDate, $lte: toDate },
      });
    } else {
      return await Expense.countDocuments({ user: userId });
    }
  }
}

export default ExpenseServiceFactory;
