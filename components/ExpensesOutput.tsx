import { GlobalStyles } from '@/constants/styles';
import { StyleSheet, View } from 'react-native';
import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';

export default function ExpensesOutput({
  expenses,
  expensesPeriod,
}: {
  expenses: any[];
  expensesPeriod: string;
}) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      <ExpensesList expenses={expenses} />
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
