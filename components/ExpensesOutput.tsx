import { View } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

const Dummy_Expenses = [
    { id: 'e1', description: 'A Pair of Shoes', amount: 59.99, date: new Date('2022-12-19') },
    { id: 'e2', description: 'Another Pair of Shoes', amount: 59.99, date: new Date('2022-12-20') },
    { id: 'e3', description: 'Yet Another Pair of Shoes', amount: 59.99, date: new Date('2022-12-21') },
    { id: 'e4', description: 'One More Pair of Shoes', amount: 59.99, date: new Date('2022-12-22') },
    { id: 'e5', description: 'Last Pair of Shoes', amount: 59.99, date: new Date('2022-12-23') },
];

export default function ExpensesOutput({ expensesPeriod }: { expensesPeriod: string }) {
    return (
        <View>
            <ExpensesSummary expenses={Dummy_Expenses} periodName={expensesPeriod} />
            <ExpensesList expenses={Dummy_Expenses} />
        </View>
    );
}