export const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p>styledJsx</p>
        <button>button</button>
      </div>
      <style jsx="true">{`
        .container{
        background-color:blue;}
        `}</style>  
    </>
  );
};