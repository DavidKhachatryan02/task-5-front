import { useState } from 'react';
import { toast } from 'react-toastify';

const App=()=> {
  const [inputNumber, setInputNumber] = useState<number | string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputNumber(event.target.value);
  };

  const handleSendClick = () => {
    if(!inputNumber){
      toast.error("Please input the number")
    }
    toast(`Number: ${inputNumber}`)
  };

  return (
    <div className="App">
      <div className="center">
      <p>Enter a number of emails you wont to send</p>
        <input
          id="input"
          type="number"
          placeholder="Enter a number"
          value={inputNumber}
          onChange={handleInputChange}
        />
        <button onClick={handleSendClick}>Send</button>
      </div>
    </div>
  );
}

export default App;
