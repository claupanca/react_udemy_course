function Message({ step, children }) {
  return (
    <div className="message">
      <p>
        Step {step}: {children}
      </p>
    </div>
  );
}

export default Message;
