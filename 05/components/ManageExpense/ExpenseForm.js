import { StyleSheet, View, Text } from "react-native";
import Input from "./Input";
import { useState } from "react";

const ExpenseForm = () => {
  const [inputValues, setInputValue] = useState({
    amount: "",
    date: "",
    description: "",
  });

  const inputChangeHandler = (inputIdentifier, enteredAmount) => {
    setInputValue((prev) => ({ ...prev, [inputIdentifier]: enteredAmount }));
  };

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
            value: inputValues?.amount,
          }}
        />
        <Input
          label="Date"
          style={styles.rowInput}
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputChangeHandler.bind(this, "date"),
            value: inputValues?.date,
          }}
        />
      </View>
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          autoCorrect: false,
          onChangeText: inputChangeHandler.bind(this, "description"),
          value: inputValues?.description,
        }}
      />
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
});
