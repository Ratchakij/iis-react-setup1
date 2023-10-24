export default function LoginInput({ type = "text", value, onChange }) {
  return (
    <input
      className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
      type={type}
      value={value}
      onChange={onChange}
      placeholder=""
    />
  );
}
