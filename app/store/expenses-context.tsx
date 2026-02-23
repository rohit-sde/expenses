import { createContext, useReducer } from 'react';

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({
    description,
    amount,
    date,
  }: {
    description: string;
    amount: number;
    date: Date;
  }) => {},
  deleteExpense: (id: string) => {},
  updateExpense: (
    id: string,
    { description, amount, date }: { description: string; amount: number; date: Date },
  ) => {},
});

function expensesReducer(state: any, action: any) {
  switch (action.type) {
    case 'ADD':
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case 'DELETE':
      return state.filter((expense: any) => expense.id !== action.payload);
    case 'UPDATE':
      return state.map((expense: any) =>
        expense.id === action.payload.id ? action.payload : expense,
      );
    default:
      return state;
  }
}

export default function ExpensesContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [expensesState, dispatch] = useReducer(expensesReducer, []);

  function addExpense(expenseData: any) {
    dispatch({ type: 'ADD', payload: expenseData });
  }

  function deleteExpense(id: string) {
    dispatch({ type: 'DELETE', payload: id });
  }

  function updateExpense(id: string, expenseData: any) {
    dispatch({ type: 'UPDATE', payload: { id, expenseData } });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };
  return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>;
}
