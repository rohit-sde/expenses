import { GlobalStyles } from '@/constants/styles';
import { StyleSheet, Text, View } from 'react-native';

export default function ExpensesSummary({
  expenses,
  periodName,
}: {
  expenses: any;
  periodName: string;
}) {
  const expensesSum = expenses.reduce(
    (sum: number, expense: any) => sum + expense.amount,
    0,
  );
  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.amount}>${expensesSum.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary50,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  period: {
    fontSize: 16,
    fontWeight: 'bold',
    color: GlobalStyles.colors.primary400,
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: GlobalStyles.colors.primary500,
  },
});
