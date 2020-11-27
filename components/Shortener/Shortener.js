import Button from 'components/Button/Button';

function Shortener() {
  return (
    <section className="max-w-7xl mx-auto my-16 w-4/5">
      <div className="bg-violet bg-shorten-mobile bg-no-repeat bg-right-top p-6 rounded-xl flex flex-col space-y-4">
        <input
          type="text"
          aria-label="Link Input"
          placeholder="Shorten a link here..."
          className="p-4 rounded-md"
        />
        <Button className="rounded-md">Shorten It!</Button>
      </div>
    </section>
  );
}

export default Shortener;
