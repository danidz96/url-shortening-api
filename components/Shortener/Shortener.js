import Button from 'components/Button/Button';

function Shortener() {
  return (
    <section className="max-w-7xl mx-auto my-16 w-4/5">
      <div className="bg-violet bg-shorten-mobile bg-no-repeat bg-right-top p-6 rounded-xl flex flex-col space-y-4 lg:flex-row lg:p-12 lg:space-x-5 lg:space-y-0 lg:bg-shorten-desktop">
        <input
          type="text"
          aria-label="Link Input"
          placeholder="Shorten a link here..."
          className="p-4 rounded-md flex-1 lg:p-2 leading-4"
        />
        <Button className="rounded-md py-5 px-12 mt-0">Shorten It!</Button>
      </div>
    </section>
  );
}

export default Shortener;
