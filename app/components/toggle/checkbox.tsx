"use client";

export default function Checkbox({ checked }: { checked: boolean }) {
  return (
    <input
      type="checkbox"
      checked={checked}
      className=" w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
      onChange={(e) => e.target.form?.requestSubmit()}
    />
  );
}
