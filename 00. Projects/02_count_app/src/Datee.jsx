export default function Datee({ count, step }) {
  const today = new Date();
  const modifier = count * step;

  const dateOptions = {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric",
  };

  const newDate = new Date(
    today.setDate(today.getDate() + modifier)
  ).toDateString();

  return (
    <h6>
      {modifier > 0
        ? `${modifier} days from Today will be `
        : modifier === 0
        ? "Today is "
        : modifier < 0
        ? `${Math.abs(modifier)} days ago was `
        : ""}
      {newDate}
    </h6>
  );
}
