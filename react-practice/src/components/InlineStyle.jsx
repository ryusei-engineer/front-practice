export const InlineStyle = () => {
  const containerStyle = {
    border: "1px solid #aaa",
  };
  const titleStyle = {};
  const buttonStyle = {};
  return(
    <div style={containerStyle}>
      <p style={titleStyle}>aaa</p>
      <button style={buttonStyle}>a</button>
    </div>
  )
}