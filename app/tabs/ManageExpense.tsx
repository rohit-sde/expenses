import { useLayoutEffect } from 'react';
import { Text } from 'react-native';

export default function ManageExpense({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) {
  const expenseId = route.params?.expenseId;
  const isEditing = !!expenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [navigation, isEditing]);

  return <Text>Manage Expense {expenseId}</Text>;
}
