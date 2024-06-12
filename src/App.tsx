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
import Tab from "./components/Tab";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <JanUIProvider customColor={colorList}>
      <Dialog isOpen={isOpen} onClose={() => setIsOpen(!isOpen)}>
        <DialogTitle title="123" status="correct">
          我是標題
        </DialogTitle>
        <DialogContent>Lorem ipsum dolor sit amet consectetur.</DialogContent>
        <DialogActions>
          <Button onClick={() => setIsOpen(false)}>取消</Button>
          <Button onClick={() => { }}>確認</Button>
        </DialogActions>
      </Dialog>

      <button onClick={() => setIsOpen(true)}>點擊展開</button>
      <Pagination count={10} />
      <Button textColor="success.100" onClick={() => setIsOpen(false)}>
        取消
      </Button>
      <Tab
        alignment="left"
        shape="rectangle"
        tabs={[
          {
            label: 'Tab Name 1',
            content: <div>Content of Tab 1</div>,
            // icon: <FaBeer />,
            notification: 3,
          },
          {
            label: 'Tab Name 2',
            content: <div>Content of Tab 2</div>,
            // icon: <FaHome />,
            notification: 0,
          },
          {
            label: 'Tab Name 3',
            content: <div>Content of Tab 3</div>,
            // icon: <FaBeer />,
            notification: 1001,
          }
        ]}
      />
    </JanUIProvider>
  );
}

export default App;
