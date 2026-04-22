import { useState, useEffect } from 'react'; // Step 3.1 & 4.1

function App() {
  // Step 3.2: Initialize State
  // 'count' is the value, 'setCount' is the function to change it
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  // Step 4.2 & 4.3: Implement & Control useEffect
  useEffect(() => {
    // This effect runs every time 'count' changes
    setCalculation(() => count * 2);
    
    console.log(`Side effect: The count is now ${count}`);
    
    // Optional: Update the browser tab title (Side Effect)
    document.title = `Count: ${count}`;
    
  }, [count]); // Dependency array: only re-run if 'count' updates

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {/* Step 2.2 & 5.1: UI Structure & State Binding */}
      <h1>React Hooks Lab</h1>
      
      <div className="card">
        <h2>Count: {count}</h2>
        <p>Double the count is: {calculation}</p>
        
        {/* Step 3.3: Update State via User Interaction */}
        <button onClick={() => setCount((c) => c + 1)}>
          Increment
        </button>
        
        <button onClick={() => setCount((c) => c - 1)} style={{ marginLeft: '10px' }}>
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;