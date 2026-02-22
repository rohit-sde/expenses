import { Text, View } from "react-native";

export default function ExpensesSummary({ expenses, periodName }: { expenses: any, periodName: string }) {
    const expensesSum = expenses.reduce((sum: number, expense: any) => sum + expense.amount, 0);
    return (
        <View>
            <Text>{periodName}</Text>
            <Text>${expensesSum}</Text>
        </View>
    );
}