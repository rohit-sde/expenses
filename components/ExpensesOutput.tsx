import { FlatList, Text, View } from "react-native";

export default function ExpensesOutput({ expenses }) {
    return (
        <View>
            <View>
                <Text>Total Expenses</Text>
                <Text>$Total</Text>
            </View>
            <FlatList data={expenses} renderItem={renderItem} keyExtractor={keyExtractor} />
        </View>
    );
}