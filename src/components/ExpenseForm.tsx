import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import categories from "../categories";
import errorMap from "zod/lib/locales/en";

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description should be at least 3 characters." }),
  amount: z.number({ invalid_type_error: "Amount is required." }),
  category: z.enum(categories, {
    errorMap: () => ({ message: "Category is required." }),
  }),
});

type ExpenseData = z.infer<typeof schema>;

interface FormProps {
  onSubmit: (data: ExpenseData) => void;
}

function ExpenseForm({ onSubmit }: FormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ExpenseData>({ resolver: zodResolver(schema) });
  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}
    >
      <div>
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          id="description"
          type="text"
          className="form-control"
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount", { valueAsNumber: true })}
          id="amount"
          type="number"
          className="form-control"
        />
        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select
          className="form-select"
          aria-label="Default select example"
          {...register("category")}
          id="category"
        >
          <option value=""></option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className="text-danger">{errors.category.message}</p>
        )}
      </div>

      <div className="mb-3">
        <button
          className="btn btn-primary"
          type="submit"
          style={{ margin: "5px 0" }}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ExpenseForm;
export type { ExpenseData };
