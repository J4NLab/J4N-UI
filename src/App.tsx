import './App.css';
import { useState } from 'react';
import Button from './components/Button';
import {
  Dialog, DialogTitle, DialogContent, DialogActions,
} from './components/Dialog';
import Pagination from './components/Pagination';
import Radio from './components/Radio';
import Checkbox from './components/Checkbox';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Dialog
        isOpen={isOpen}
        onClose={() => setIsOpen(!isOpen)}
      >
        <DialogTitle title="123" status="correct">我是標題</DialogTitle>
        <DialogContent>Lorem ipsum dolor sit amet consectetur.</DialogContent>
        <DialogActions>
          <Button onClick={() => setIsOpen(false)}>取消</Button>
          <Button>確認</Button>
        </DialogActions>
      </Dialog>

      <button onClick={() => setIsOpen(true)}>點擊展開</button>
      <Pagination count={10} />
      <Radio labelText='我就測試' value="female" />
      <Checkbox labelText='我就測試' />
    </>
  );
}

export default App;
