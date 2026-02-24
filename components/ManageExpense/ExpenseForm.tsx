import Button from '@/app/UI/Button';
import getFormattedDate from '@/app/utils/date';
import { GlobalStyles } from '@/constants/styles';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Input from './Input';

export default function ExpenseForm({
  submitButtonLabel,
  onCancel,
  onSubmit,
  defaultValues,
}: {
  submitButtonLabel: string;
  onCancel: () => void;
  onSubmit: (expenseData: { amount: number; date: Date; description: string }) => void;
  defaultValues?: { amount: number; date: Date; description: string };
}) {
  const [inputs, setInputs] = useState({
    amount: {
      value: defaultValues ? defaultValues.amount?.toString() : '',
      isValid: true,
    },
    date: {
      value: defaultValues ? getFormattedDate(defaultValues.date) : '',
      isValid: true,
    },
    description: { value: defaultValues ? defaultValues.description : '', isValid: true },
  });

  function inputChangeHandler(inputIdentifier: string, enteredValue: string) {
    setInputs((curInputs) => {
      return {
        ...curInputs,
        [inputIdentifier]: { value: enteredValue, isValid: true },
      };
    });
  }

  function submitHandler() {
    const expenseData: {
      amount: number;
      date: Date;
      description: string;
    } = {
      amount: +inputs.amount.value,
      date: new Date(inputs.date.value),
      description: inputs.description.value,
    };

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString() !== 'Invalid Date';
    const descriptionIsValid = expenseData.description.trim().length > 0;

    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      // Alert.alert('Invalid input', 'Please check your input values');
      setInputs((curInputs: any) => {
        return {
          amount: { value: curInputs.amount.value, isValid: amountIsValid },
          date: { value: curInputs.date.value, isValid: dateIsValid },
          description: {
            value: curInputs.description.value,
            isValid: descriptionIsValid,
          },
        };
      });
      return;
    }

    onSubmit(expenseData);
  }

  const isFormValid =
    !inputs.amount.isValid || !inputs.date.isValid || !inputs.description.isValid;

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputRow}>
        <Input
          label="Amount"
          textInputConfig={{
            keyboardType: 'decimal-pad',
            onChangeText: (value: string) => inputChangeHandler('amount', value),
            value: inputs.amount.value,
          }}
          invalid={!inputs.amount.isValid}
          style={styles.rowInput}
        />
        <Input
          label="Date"
          textInputConfig={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            onChangeText: (value: string) => inputChangeHandler('date', value),
            value: inputs.date.value,
          }}
          invalid={!inputs.date.isValid}
          style={styles.rowInput}
        />
      </View>
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          onChangeText: (value: string) => inputChangeHandler('description', value),
          value: inputs.description.value,
        }}
        invalid={!inputs.description.isValid}
      />
      {isFormValid && <Text style={styles.errorText}>Invalid input values</Text>}
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={onCancel}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={submitHandler}>
          {submitButtonLabel}
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    marginTop: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 24,
    textAlign: 'center',
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowInput: {
    flex: 1,
  },
  errorText: {
    color: GlobalStyles.colors.error500,
    margin: 8,
    textAlign: 'center',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
