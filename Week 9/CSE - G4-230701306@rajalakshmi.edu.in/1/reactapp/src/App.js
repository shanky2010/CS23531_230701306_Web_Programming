import React, {useState} from 'react';

const e = [
  "John Doe", "Jane Smith", "Mike Johnson", "James Brown"
];

function App() {
  const [s, setS] = useState("");
  const f = e.filter(em => em.toLowerCase().includes(s.toLowerCase()));

  return (
    <div>
      <h1>Employee Directory</h1>
      <input placeholder='Search employees...' value={s} onChange={ev => setS(ev.target.value)}/>
      <ul>
        {f.map(n => (
          <li key={n}>{n}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
