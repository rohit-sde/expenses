import ExpensesOutput from '@/components/ExpenseOutput/ExpensesOutput';
import { useContext, useEffect, useState } from 'react';
import { ExpensesContext } from '../store/expenses-context';
import LoadingOverlay from '../UI/LoadingOverlay';
import { getDateMinusDays } from '../utils/date';
import { fetchExpenses } from '../utils/http';

export default function RecentExpenses() {
  const [isLoading, setIsLoading] = useState(true);
  const expensesCtx = useContext(ExpensesContext);
  // const [expensesCtx, setExpensesCtx] = useState<any>([]);

  useEffect(() => {
    async function getExpenses() {
      setIsLoading(true);
      const expenses = await fetchExpenses();
      setIsLoading(false);
      expensesCtx.setExpenses(expenses);
      // setExpensesCtx(expenses);
    }
    getExpenses();
  }, []);

  if (isLoading) {
    return <LoadingOverlay />;
  }

  const recentExpenses = expensesCtx.expenses.filter((expense: any) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return expense.date >= date7DaysAgo;
  });
  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="Last 7 Days"
      fallbackText="No expenses found for last 7 days"
    />
  );
}
