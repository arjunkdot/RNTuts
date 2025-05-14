import { StyleSheet, View, Text } from "react-native";
import Input from "./Input";
import Button from "../../components/UI/Button";
import { useState } from "react";
import { getFormattedDate } from "../../util/date";

const ExpenseForm = ({
  onCancel,
  onSubmit,
  submitHandlerLabel,
  defaultValues,
}) => {
  const [inputs, setInputs] = useState({
    amount: {
      value: defaultValues ? defaultValues?.amount?.toString() : "",
      isValid: true,
    },
    date: {
      value: defaultValues ? getFormattedDate(defaultValues?.date) : "",
      isValid: true,
    },
    description: {
      value: defaultValues ? defaultValues?.description : "",
      isValid: true,
    },
  });

  const inputChangeHandler = (inputIdentifier, enteredAmount) => {
    setInputs((prev) => ({
      ...prev,
      [inputIdentifier]: { value: enteredAmount, isValid: true },
    }));
  };

  function submitHandler() {
    const expenseData = {
      amount: +inputs.amount.value,
      date: new Date(inputs.date.value),
      description: inputs.description.value,
    };

    const amountIsValid =
      !Number.isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString() !== "Invalid Date";
    const descriptionIsValid = expenseData.description.trim().length > 0;

    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      setInputs((prev) => ({
        amount: { value: prev.amount.value, isValid: amountIsValid },
        date: { value: prev.date.value, isValid: dateIsValid },
        description: {
          value: prev.description.value,
          isValid: descriptionIsValid,
        },
      }));
      return;
    }

    onSubmit(expenseData);
  }

  const formIsInvalid =
    !inputs.amount.isValid ||
    !inputs.date.isValid ||
    !inputs.description.isValid;

  return (
    <View style={styles.form}>
      <Text style={styles.label}>Your expense</Text>
      <View style={styles.inputsRow}>
        <Input
          label="Amount"
          style={styles.rowInput}
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChangeHandler.bind(this, "amount"),
            value: inputs?.amount?.value,
          }}
        />
        <Input
          label="Date"
          style={styles.rowInput}
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputChangeHandler.bind(this, "date"),
            value: inputs?.date?.value,
          }}
        />
      </View>
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          autoCorrect: false,
          onChangeText: inputChangeHandler.bind(this, "description"),
          value: inputs?.description?.value,
        }}
      />
      {formIsInvalid && (
        <Text>Invalid input values. Please check your entered data.</Text>
      )}
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={onCancel}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={submitHandler}>
          {submitHandlerLabel}
        </Button>
      </View>
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({
  form: {
    marginTop: 20,
  },
  inputsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
  },
  label: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 4,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
