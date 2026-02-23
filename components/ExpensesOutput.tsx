import { GlobalStyles } from '@/constants/styles';
import { StyleSheet, View } from 'react-native';
import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';

const Dummy_Expenses = [
  {
    id: 'e1',
    description: 'A Pair of Shoes',
    amount: 59.99,
    date: new Date('2022-12-19'),
  },
  {
    id: 'e2',
    description: 'Another Pair of Shoes',
    amount: 59.99,
    date: new Date('2022-12-20'),
  },
  {
    id: 'e3',
    description: 'Yet Another Pair of Shoes',
    amount: 59.99,
    date: new Date('2022-12-21'),
  },
  {
    id: 'e4',
    description: 'One More Pair of Shoes',
    amount: 59.99,
    date: new Date('2022-12-22'),
  },
  {
    id: 'e5',
    description: 'Last Pair of Shoes',
    amount: 59.99,
    date: new Date('2022-12-23'),
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
  {
    id: 'e13',
    description: 'A Pair of Shoes',
    amount: 59.99,
    date: new Date('2022-12-31'),
  },
  {
    id: 'e14',
    description: 'A Pair of Shoes',
    amount: 59.99,
    date: new Date('2023-01-01'),
  },
  {
    id: 'e15',
    description: 'A Pair of Shoes',
    amount: 59.99,
    date: new Date('2023-01-02'),
  },
  {
    id: 'e16',
    description: 'A Pair of Shoes',
    amount: 59.99,
    date: new Date('2023-01-03'),
  },
  {
    id: 'e17',
    description: 'A Pair of Shoes',
    amount: 59.99,
    date: new Date('2023-01-04'),
  },
  {
    id: 'e18',
    description: 'A Pair of Shoes',
    amount: 59.99,
    date: new Date('2023-01-05'),
  },
  {
    id: 'e19',
    description: 'A Pair of Shoes',
    amount: 59.99,
    date: new Date('2023-01-06'),
  },
  {
    id: 'e20',
    description: 'A Pair of Shoes',
    amount: 59.99,
    date: new Date('2023-01-07'),
  },
];

export default function ExpensesOutput({ expensesPeriod }: { expensesPeriod: string }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={Dummy_Expenses} periodName={expensesPeriod} />
      <ExpensesList expenses={Dummy_Expenses} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
