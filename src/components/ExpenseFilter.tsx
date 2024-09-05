import categories from "../categories";

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
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
}

export default ExpenseFilter;
