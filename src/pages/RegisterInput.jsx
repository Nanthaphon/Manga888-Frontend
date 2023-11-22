export default function RegisterInput({
  type = "text",
  placeholder,
  value,
  onChange,
  name,
  hasError,
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`block bg-gray-200 rounded-md py-3 w-full border border-gray-600 px-3
        focus:ring ${
          hasError
            ? "border-red-500 focus:ring-red-300"
            : "focus:ring-blue-300 focus:border-blue-500 border-gray-300"
        }
        `}
      value={value}
      onChange={onChange}
      name={name}
    />
  );
}
