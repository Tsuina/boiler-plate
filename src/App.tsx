import ShortResume from './Pages/ShortResume';
import TrainClock from './Pages/TrainClock';

function App() {
  return (
    <>
      <div className="flex h-[100vh]">
        <div className="m-auto max-w-[1024px]">
          {/* <ShortResume /> */}
          <TrainClock />
        </div>
      </div>
    </>
  );
}
export default App;
