import spinner from './assets/spinner.gif';

function Spinner() {
  return (
    <div className="mt-20">
      <img
        src={spinner}
        alt="Loading..."
        className="text-center mx-auto w-16"
      />
    </div>
  );
}

export default Spinner;
