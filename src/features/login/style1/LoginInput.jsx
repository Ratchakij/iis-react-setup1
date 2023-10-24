export default function LoginInput({ type = "text", value, onChange }) {
  return (
    <input
      type={type}
      className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
      value={value}
      onChange={onChange}
    />
  );
}
