import React from "react";

function App() {
  // TODO: implement logic of the calculator interface!

  return (
    <div className="calculator">
      <input data-testid="display" className="display" type="text" disabled></input>

      <div className="btn-container">
        <button data-testid="btn-clear" className="btn wide">C</button>
        <button data-testid="btn-div" className="btn">/</button>

        <button data-testid="btn-7" className="btn">7</button>
        <button data-testid="btn-8" className="btn">8</button>
        <button data-testid="btn-9" className="btn">9</button>
        <button data-testid="btn-mul" className="btn">*</button>

        <button data-testid="btn-4" className="btn">4</button>
        <button data-testid="btn-5" className="btn">5</button>
        <button data-testid="btn-6" className="btn">6</button>
        <button data-testid="btn-sub" className="btn">-</button>

        <button data-testid="btn-1" className="btn">1</button>
        <button data-testid="btn-2" className="btn">2</button>
        <button data-testid="btn-3" className="btn">3</button>
        <button data-testid="btn-add" className="btn">+</button>

        <button data-testid="btn-0" className="btn wide">0</button>
        <button data-testid="btn-eval" className="btn">=</button>
      </div>
    </div>
  );
}

export default App;
