import { FlatList } from 'react-native';
import ExpenseItem from './ExpenseItem';

function renderItem(item: any) {
  return <ExpenseItem {...item.item} />;
}
export default function ExpensesList({ expenses }: { expenses: any }) {
  return (
    <FlatList data={expenses} renderItem={renderItem} keyExtractor={(item) => item.id} />
  );
}
