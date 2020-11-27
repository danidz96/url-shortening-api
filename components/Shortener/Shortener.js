import { useForm } from 'react-hook-form';
import Button from 'components/Button/Button';
import { shorten } from 'utils/Shorten';

function Shortener() {
  const { register, handleSubmit, watch, errors } = useForm();

  return (
    <section className="max-w-7xl mx-auto my-16 w-4/5">
      <form onSubmit={handleSubmit(shorten)}>
        <div
          className={`bg-violet bg-shorten-mobile bg-no-repeat bg-right-top p-6 rounded-xl flex flex-col space-y-4 lg:flex-row lg:p-12 lg:space-y-0 lg:bg-shorten-desktop lg:flex-wrap ${
            errors.url && 'lg:pb-6'
          }`}
        >
          <input
            type="text"
            name="url"
            aria-label="Link Input"
            placeholder="Shorten a link here..."
            className={`p-4 rounded-md flex-1 lg:p-2 ${errors.url && 'border-2 border-red'}`}
            ref={register({
              required: { value: true, message: 'Please add link' },
              pattern: {
                value: /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,
                message: 'Link is invalid',
              },
            })}
          />
          {errors.url && (
            <span className="text-red italic min-w-full lg:order-3 lg:mt-4 ">
              {errors.url.message}
            </span>
          )}
          <Button type="submit" className="rounded-md py-4 px-12 mt-0 lg:ml-5">
            Shorten It!
          </Button>
        </div>
      </form>
    </section>
  );
}

export default Shortener;
