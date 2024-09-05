import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseTable from "./ExpenseTable";
import { ExpenseData } from "./ExpenseForm";

function ExpenseTracker() {
  const [items, setItems] = useState<ExpenseData[]>([]);
  const [selectedCategory, setCategory] = useState<string>("All Categories");

  const onSubmit = (data: ExpenseData) => {
    setItems([...items, data]);
  };
  const changeCategory = (category: string) => {
    setCategory(category);
  };
  const deleteItem = (item: ExpenseData) => {
    setItems(items.filter((i) => i !== item));
  };

  return (
    <>
      <ExpenseForm onSubmit={onSubmit} />
      <ExpenseTable
        items={items}
        deleteItem={deleteItem}
        selectedCategory={selectedCategory}
        changeCategory={changeCategory}
      />
    </>
  );
}

export default ExpenseTracker;
