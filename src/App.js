/**
 * A component called App.js that has a function called Square()
 * 
 * @returns a button with a className of square
 */

//value is a prop that square takes in.
function Square({ value }) {

  function handleClick() {
    console.log('clicked!');
  }
  
  /**
   * return will show the button component with the value
   * displayed in the middle of the button. 
   * The Square commponent is styled the way it is because of the className prop within button that 
   * references the style within styles.css file.
   */
  return( 
    <button
      className="square"
      onClick={handleClick}
    >
        {value} 
      </button>
  );
}

export default function Board() {
  return(
    <> 
      <div className="board-row">
        <Square value="1"/>
        <Square value="2"/>
        <Square value="3"/>
      </div>
      <div className="board-row">
        <Square value="4"/>
        <Square value="5"/>
        <Square value="6"/>
      </div>
      <div className="board-row">
        <Square value="7"/>
        <Square value="8"/>
        <Square value="9"/>
      </div>
    </>
  );
}
