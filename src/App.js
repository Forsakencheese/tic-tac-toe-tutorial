import { useState } from "react";
/**
 * A component called App.js that has a function called Square() and a function called Board()
 * 
 * @returns a button with a className of square
 */

//value is a prop that square takes in, unlike in typescript where we must define a type for value, javascript doesn't care.
function Square() {

  /**
   * value stores the value and setValue is a function that can be used to change the value.
   * The null passed to useState is used as the initial value for this state variable
   */
  const [value, setValue] = useState(null);

  //This function should fill the Square component with an 'x' when you click it, it uses the setValue function from useState 
  function handleClick() {
    setValue('X');
  }
  
  /**
   * return will show the button component with the value
   * displayed in the middle of the button. 
   * The Square commponent is styled the way it is because of the className prop within button that 
   * references the style within styles.css file.
   * 
   * To "escape into JavaScript" from JSX, you need curly braces around value.
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
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}
