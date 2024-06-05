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
import Select from "./components/Select";

const countryList = [
  { id: 1, name: "Australia" },
  { id: 2, name: "Brazil" },
  { id: 3, name: "China" },
  { id: 4, name: "Denmark" },
  { id: 5, name: "Egypt" },
  { id: 6, name: "Finland" },
  { id: 7, name: "Ghana" },
  { id: 8, name: "Hungary" },
  { id: 9, name: "India" },
  { id: 10, name: "Japan" },
];

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [optionValue, setOptionValue] = useState("");
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

      <Select
        label="預設文字"
        options={countryList}
        value={optionValue}
        onChange={() => {}}
      />
    </JanUIProvider>
  );
}

export default App;
