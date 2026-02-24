import getFormattedDate from '@/app/utils/date';
import { GlobalStyles } from '@/constants/styles';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type RootStackParamList = any;

export default function ExpenseItem({
  description,
  amount,
  date,
  id,
}: {
  description: string;
  amount: number;
  date: Date;
  id: string;
}) {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  function expensePressHandler() {
    navigation.navigate('ManageExpense', {
      expenseId: id,
    });
  }
  return (
    <Pressable
      onPress={expensePressHandler}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.expenseItem}>
        <View>
          <Text style={[styles.textBase, styles.description]}>{description}</Text>
          <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
  expenseItem: {
    padding: 8,
    marginVertical: 4,
    backgroundColor: GlobalStyles.colors.primary500,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 6,
    elevation: 3,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  textBase: {
    color: GlobalStyles.colors.primary50,
  },
  description: {
    fontSize: 16,
    marginBottom: 6,
    fontWeight: 'bold',
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    minWidth: 80,
  },
  amount: {
    color: GlobalStyles.colors.primary500,
    fontWeight: 'bold',
  },
});
