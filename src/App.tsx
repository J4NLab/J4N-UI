import "./App.css";
import { useState } from 'react';

import Dialog from './components/Dialog';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Dialog isOpen={isOpen} onClose={()=>setIsOpen(!isOpen)} title="123" />
      <button onClick={()=>setIsOpen(true)}>點擊展開</button>
    </>
  );
}

export default App;
