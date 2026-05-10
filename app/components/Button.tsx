"use client";

type ButtonProps = {
  action: (formData: FormData) => Promise<void>;
  label: string;
  variant?: "primary" | "danger" | "secondary";
  hiddenFields?: Record<string, string | number>;
};

const variantStyles = {
  primary: "bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-500/20",
  danger: "bg-red-600 hover:bg-red-500 shadow-lg shadow-red-500/20",
  secondary: "bg-zinc-700 hover:bg-zinc-600 shadow-lg shadow-zinc-700/20",
};

export default function Button({
  action,
  label,
  variant = "primary",
  hiddenFields = {},
}: ButtonProps) {
  return (
    <form action={action}>
      {Object.entries(hiddenFields).map(([key, value]) => (
        <input key={key} type="hidden" name={key} value={value} />
      ))}
      <button
        type="submit"
        className={`px-5 py-2.5 transition-colors rounded-lg font-medium ${variantStyles[variant]}`}
      >
        {label}
      </button>
    </form>
  );
}
