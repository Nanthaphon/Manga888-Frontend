export default function CheckoutInput({
  placeholder,
  value,
  onChange,
  name,
  hasError,
}) {
  return (
    <input
      // className="border border-neutral-200 rounded-md p-3 w-full"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      className={`block w-full bg-[#f6f6f6] rounded-md px-4 py-4 outline-none border border-gray-300
        focus:ring ${
          hasError
            ? "bg-blue-100 border-black focus:ring focus:ring-black"
            : "focus:ring-2 focus:ring-black"
        }
        `}
    />
  );
}
