export default function ErrorMessage({ message }) {
  console.log("ERRor", message);
  return <div className="error">{message}</div>;
}
