import Button from "./components/Button";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl font-bold underline text-red-500">
        Hello world!
      </h1>
      <Button
        style={{ color: "red", borderColor: "black", backgroundColor: "blue" }}
        startIcon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M7.97218 1.16666H6.02774V6.02777H1.16663V7.97221H6.02774V12.8333H7.97218V7.97221H12.8333V6.02777H7.97218V1.16666Z"
              fill="white"
            />
          </svg>
        }
      >
        CLICK ME!
      </Button>
    </>
  );
}

export default App;
