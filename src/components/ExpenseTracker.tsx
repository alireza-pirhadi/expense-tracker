import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseTable from "./ExpenseTable";
import { ExpenseData } from "./ExpenseForm";
import ExpenseFilter from "./ExpenseFilter";

function ExpenseTracker() {
  const [items, setItems] = useState<ExpenseData[]>([]);
  const [selectedCategory, setCategory] = useState<string>("All Categories");

  const onSubmit = (data: ExpenseData) => {
    setItems([...items, data]);
  };
  const deleteItem = (item: ExpenseData) => {
    setItems(items.filter((i) => i !== item));
  };

  return (
    <>
      <ExpenseForm onSubmit={onSubmit} />
      <ExpenseFilter onSelectCategory={(category) => setCategory(category)} />
      <ExpenseTable
        items={items.filter((item) =>
          selectedCategory ? item.category === selectedCategory : item
        )}
        deleteItem={deleteItem}
      />
    </>
  );
}

export default ExpenseTracker;
