import ShortResume from './Pages/ShortResume';

function App() {
  const check = 4;
  return (
    <>
      <div className="flex h-[100vh]">
        <div className="m-auto max-w-[1024px]">
          <div>adding a test div</div>
          <ShortResume />
        </div>
      </div>
    </>
  );
}
export default App;
