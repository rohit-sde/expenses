import axios from 'axios';

const BACKEND_URL = 'https://expense-manager-84429-default-rtdb.firebaseio.com';

export default function storeExpense(expenseData: any) {
  axios.post(BACKEND_URL + '/expenses.json', expenseData);
}

export function fetchExpenses() {
  axios.get(BACKEND_URL + '/expenses.json');
}
