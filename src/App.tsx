import ShortResume from './Pages/ShortResume';

function App() {
  // This variable is never used
  const check = 4;
  return (
    <>
      <div className="flex h-[100vh]">
        <div className="m-auto max-w-[1024px]">
          <ShortResume />
        </div>
      </div>
    </>
  );
}
export default App;
