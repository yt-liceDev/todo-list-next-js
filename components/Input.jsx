export default function Input({ name, placeholder, type }) {
  return (
    <input
      className="form-input border-none rounded-md invert-[1]"
      type={type}
      name={name}
      placeholder={placeholder}
    />
  );
}
