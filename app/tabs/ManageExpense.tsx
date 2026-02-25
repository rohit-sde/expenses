import ExpenseForm from '@/components/ManageExpense/ExpenseForm';
import { GlobalStyles } from '@/constants/styles';
import { useContext, useLayoutEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
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
    await deleteExpense(expenseId);
    expensesCtx.deleteExpense(expenseId);
    setIsLoading(false);
    navigation.goBack();
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
    if (isEditing) {
      expensesCtx.updateExpense(expenseId, expenseData);
      await updateExpense(expenseId, expenseData);
    } else {
      const id = await storeExpense(expenseData);
      expensesCtx.addExpense({ ...expenseData, id: id });
    }
    setIsLoading(false);
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      {isLoading && <LoadingOverlay />}
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
