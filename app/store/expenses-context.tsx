import { createContext, useReducer } from 'react';

const Dummy_Expenses = [
  {
    id: 'e1',
    description: 'A Pair of Shoes',
    amount: 59.99,
    date: new Date('2026-02-20'),
  },
  {
    id: 'e2',
    description: 'Another Pair of Shoes',
    amount: 59.99,
    date: new Date('2026-02-21'),
  },
  {
    id: 'e3',
    description: 'Yet Another Pair of Shoes',
    amount: 59.99,
    date: new Date('2026-02-22'),
  },
  {
    id: 'e4',
    description: 'One More Pair of Shoes',
    amount: 59.99,
    date: new Date('2026-02-23'),
  },
  {
    id: 'e5',
    description: 'Last Pair of Shoes',
    amount: 59.99,
    date: new Date('2026-02-24'),
  },
  {
    id: 'e6',
    description: 'A Pair of Shoes',
    amount: 59.99,
    date: new Date('2022-12-24'),
  },
  {
    id: 'e7',
    description: 'A Pair of Shoes',
    amount: 59.99,
    date: new Date('2022-12-25'),
  },
  {
    id: 'e8',
    description: 'A Pair of Shoes',
    amount: 59.99,
    date: new Date('2022-12-26'),
  },
  {
    id: 'e9',
    description: 'A Pair of Shoes',
    amount: 59.99,
    date: new Date('2022-12-27'),
  },
  {
    id: 'e10',
    description: 'A Pair of Shoes',
    amount: 59.99,
    date: new Date('2022-12-28'),
  },
  {
    id: 'e11',
    description: 'A Pair of Shoes',
    amount: 59.99,
    date: new Date('2022-12-29'),
  },
  {
    id: 'e12',
    description: 'A Pair of Shoes',
    amount: 59.99,
    date: new Date('2022-12-30'),
  },
];

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
  setExpenses: (expenses: any[]) => {},
  deleteExpense: (id: string) => {},
  updateExpense: (
    id: string,
    { description, amount, date }: { description: string; amount: number; date: Date },
  ) => {},
});

function expensesReducer(state: any, action: any) {
  switch (action.type) {
    case 'ADD':
      return [action.payload, ...state];
    case 'SET':
      const inverted = action.payload.reverse();
      return inverted;
    case 'DELETE':
      return state.filter((expense: any) => expense.id !== action.payload);
    case 'UPDATE':
      const updatableExpenseIndex = state.findIndex(
        (expense: any) => expense.id === action.payload.id,
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.expenseData };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
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

  function setExpenses(expenses: any[]) {
    dispatch({ type: 'SET', payload: expenses });
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
    setExpenses: setExpenses,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };
  return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>;
}
