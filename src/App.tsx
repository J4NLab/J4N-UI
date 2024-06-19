import "./App.css";
import { useState } from "react";
import Button from "./components/Button";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "./components/Dialog";
import Pagination from "./components/Pagination";
import JanUIProvider from "./theme/provider";
import { colorList } from "./mocks/_colorList";
import Checkbox from "./components/Checkbox";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const [checked, setChecked] = useState(false);
  const onCheckboxChange = (checked: boolean) => {
    setChecked(!checked);
  };
  return (
    <JanUIProvider customColor={colorList}>
      <Dialog isOpen={isOpen} onClose={() => setIsOpen(!isOpen)}>
        <DialogTitle title="123" status="correct">
          我是標題
        </DialogTitle>
        <DialogContent>Lorem ipsum dolor sit amet consectetur.</DialogContent>
        <DialogActions>
          <Button onClick={() => setIsOpen(false)}>取消</Button>
          <Button onClick={() => {}}>確認</Button>
        </DialogActions>
      </Dialog>

      <button onClick={() => setIsOpen(true)}>點擊展開</button>
      <Pagination count={10} />
      <Button textColor="success.100" onClick={() => setIsOpen(false)}>
        取消
      </Button>
      <Checkbox />
      <Checkbox
        label="Checkbox 1"
        description="Description of Checkbox 1"
        disabled={false}
        checked={checked}
        onChange={() => onCheckboxChange(checked)}
      />
      <Checkbox label="Checkbox 2" />
      <Checkbox label="Checkbox 3" description="Description of Checkbox 3" />
      <Checkbox
        label="Checkbox 1"
        description="Description of Checkbox 1"
        disabled={true}
      />
    </JanUIProvider>
  );
}

export default App;
