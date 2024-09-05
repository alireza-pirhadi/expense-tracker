import { useState } from "react";
import { ExpenseData } from "./ExpenseForm";

interface TableProps {
  items: ExpenseData[];
  deleteItem: (item: ExpenseData) => void;
}

function ExpenseTable({ items, deleteItem }: TableProps) {
  const [selectedCategory, setCategory] = useState<string>("All Categories");
  return (
    <div style={{ margin: "20px 0" }}>
      <select
        onChange={(event) => setCategory(event.target.value)}
        className="form-select"
        aria-label="Default select example"
      >
        <option value="All Categories">All Categories</option>
        <option value="Groceries">Groceries</option>
        <option value="Utilities">Utilities</option>
        <option value="Entertainment">Entertainment</option>
      </select>

      <table className="table table-bordered" style={{ margin: "5px 0" }}>
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items
            .filter(
              (item) =>
                selectedCategory === "All Categories" ||
                item.category === selectedCategory
            )
            .map((item, index) => (
              <tr key={index}>
                <td>{item.description}</td>
                <td>{"$" + item.amount}</td>
                <td>{item.category}</td>
                <td>
                  <button
                    onClick={() => {
                      deleteItem(item);
                    }}
                    type="button"
                    className="btn btn-outline-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
        <tfoot>
          <tr>
            <th>Total</th>
            <th>
              {"$" +
                items
                  .filter(
                    (item) =>
                      selectedCategory === "All Categories" ||
                      item.category === selectedCategory
                  )
                  .reduce((acc, curr) => acc + curr.amount, 0)}
            </th>
            <th></th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default ExpenseTable;
