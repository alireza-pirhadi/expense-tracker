import { useState } from "react";
import { ExpenseData } from "./ExpenseForm";

interface TableProps {
  items: ExpenseData[];
  deleteItem: (item: ExpenseData) => void;
}

function ExpenseTable({ items, deleteItem }: TableProps) {
  if (items.length === 0) return null;

  return (
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
        {items.map((item, index) => (
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
          <th>{"$" + items.reduce((acc, curr) => acc + curr.amount, 0)}</th>
          <th></th>
          <th></th>
        </tr>
      </tfoot>
    </table>
  );
}

export default ExpenseTable;
