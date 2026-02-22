import { FlatList, Text } from "react-native";

function renderItem(item: any) {
    return <Text>{item.item.description}</Text>;
}
export default function ExpensesList({ expenses }: { expenses: any }) {
    return (
        <FlatList
            data={expenses}
            renderItem={renderItem}
            keyExtractor={(item) => item.id} />
    );
}