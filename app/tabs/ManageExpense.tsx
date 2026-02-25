import ExpenseForm from '@/components/ManageExpense/ExpenseForm';
import { GlobalStyles } from '@/constants/styles';
import { useContext, useLayoutEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import ErrorOverlay from '../UI/ErrorOverlay';
import IconButton from '../UI/IconButton';
import LoadingOverlay from '../UI/LoadingOverlay';
import { ExpensesContext } from '../store/expenses-context';
import storeExpense, { deleteExpense, updateExpense } from '../utils/http';

export default function ManageExpense({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const expensesCtx = useContext(ExpensesContext);

  const expenseId = route.params?.expenseId;
  const isEditing = !!expenseId;

  const selectedExpense = expensesCtx.expenses.find(
    (expense: { id: string }) => expense.id === expenseId,
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [navigation, isEditing]);

  async function deleteExpenseHandler() {
    setIsLoading(true);
    try {
      await deleteExpense(expenseId);
      expensesCtx.deleteExpense(expenseId);
      navigation.goBack();
    } catch (error) {
      setError('Could not delete expense');
      setIsLoading(false);
    }
  }

  function cancelHandler() {
    navigation.goBack();
  }

  async function confirmHandler(expenseData: {
    amount: number;
    date: Date;
    description: string;
  }) {
    setIsLoading(true);
    try {
      if (isEditing) {
        expensesCtx.updateExpense(expenseId, expenseData);
        await updateExpense(expenseId, expenseData);
      } else {
        const id = await storeExpense(expenseData);
        expensesCtx.addExpense({ ...expenseData, id: id });
      }
      navigation.goBack();
    } catch (error) {
      setError('Could not save expense - Please try again later');
      setIsLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      {isLoading && <LoadingOverlay />}
      {error && !isLoading && (
        <ErrorOverlay message={error} onCancel={() => setError(null)} />
      )}
      <ExpenseForm
        submitButtonLabel={isEditing ? 'Update' : 'Add'}
        onCancel={cancelHandler}
        onSubmit={confirmHandler}
        defaultValues={selectedExpense}
      />

      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },

  deleteContainer: {
    marginTop: 16,
    padding: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center',
  },
});
