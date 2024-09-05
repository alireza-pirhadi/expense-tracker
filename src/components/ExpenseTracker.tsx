import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseTable from "./ExpenseTable";
import { ExpenseData } from "./ExpenseForm";

function ExpenseTracker() {
  const [items, setItems] = useState<ExpenseData[]>([]);

  const onSubmit = (data: ExpenseData) => {
    setItems([...items, data]);
  };
  const deleteItem = (item: ExpenseData) => {
    setItems(items.filter((i) => i !== item));
  };

  return (
    <>
      <ExpenseForm onSubmit={onSubmit} />
      <ExpenseTable items={items} deleteItem={deleteItem} />
    </>
  );
}

export default ExpenseTracker;
