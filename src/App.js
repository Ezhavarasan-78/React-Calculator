import React, { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState('');

  const add = (operands) => {
    const result = operands.reduce((acc, curr) => acc + parseFloat(curr), 0);
    setValue(result.toString());
  };

  const sub = (operands) => {
    const result = operands.reduce((acc, curr) => acc - parseFloat(curr));
    setValue(result.toString());
  };

  const mul = (operands) => {
    const result = operands.reduce((acc, curr) => acc * parseFloat(curr), 1);
    setValue(result.toString());
  };

  const div = (operands) => {
    const result = operands.reduce((acc, curr) => acc / parseFloat(curr));
    setValue(result.toString());
  };

  const cal = () => {
    let operands = [];
    if (value.includes('+')) {
      operands = value.split('+');
      add(operands);
    } else if (value.includes('-')) {
      operands = value.split('-');
      sub(operands);
    } else if (value.includes('*')) {
      operands = value.split('*');
      mul(operands);
    } else if (value.includes('/')) {
      operands = value.split('/');
      div(operands);
    }
  };

  return (
    <div className="Container">
      <div className="cal">
        <form action="">
          <div>
            <input type="text" value={value} readOnly />
          </div>
          <div>
            <input type="button" value="AC" onClick={() => setValue('')} />
            <input type="button" value="DE" onClick={() => setValue(value.slice(0, -1))} />
            <input type="button" value="." onClick={e => setValue(value + e.target.value)} />
            <input type="button" value="/" onClick={e => setValue(value + e.target.value)} />
          </div>
          <div>
            <input type="button" value="7" onClick={e => setValue(value + e.target.value)} />
            <input type="button" value="8" onClick={e => setValue(value + e.target.value)} />
            <input type="button" value="9" onClick={e => setValue(value + e.target.value)} />
            <input type="button" value="*" onClick={e => setValue(value + e.target.value)} />
          </div>
          <div>
            <input type="button" value="4" onClick={e => setValue(value + e.target.value)} />
            <input type="button" value="5" onClick={e => setValue(value + e.target.value)} />
            <input type="button" value="6" onClick={e => setValue(value + e.target.value)} />
            <input type="button" value="+" onClick={e => setValue(value + e.target.value)} />
          </div>
          <div>
            <input type="button" value="1" onClick={e => setValue(value + e.target.value)} />
            <input type="button" value="2" onClick={e => setValue(value + e.target.value)} />
            <input type="button" value="3" onClick={e => setValue(value + e.target.value)} />
            <input type="button" value="-" onClick={e => setValue(value + e.target.value)} />
          </div>
          <div>
            <input type="button" value="00" onClick={e => setValue(value + e.target.value)} />
            <input type="button" value="0" onClick={e => setValue(value + e.target.value)} />
            <input type="button" value="=" onClick={cal} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
