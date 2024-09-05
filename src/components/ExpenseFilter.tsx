interface FilterProps {
  onSelectCategory: (category: string) => void;
}
function ExpenseFilter({ onSelectCategory }: FilterProps) {
  return (
    <select
      onChange={(event) => onSelectCategory(event.target.value)}
      className="form-select"
      aria-label="Default select example"
    >
      <option value="">All Categories</option>
      <option value="Groceries">Groceries</option>
      <option value="Utilities">Utilities</option>
      <option value="Entertainment">Entertainment</option>
    </select>
  );
}

export default ExpenseFilter;
