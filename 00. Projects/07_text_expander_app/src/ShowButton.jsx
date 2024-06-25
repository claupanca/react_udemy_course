export default function ShowButton({
  hideText,
  showText,
  expanded,
  setExpand,
  color,
}) {
  return (
    <>
      <span
        onClick={() => setExpand((prevState) => !prevState)}
        style={{ cursor: "pointer", color: color }}
      >
        {expanded ? hideText : showText}
      </span>
    </>
  );
}
