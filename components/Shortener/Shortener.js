import { useState } from 'react';
import { useForm, reset } from 'react-hook-form';
import Button from 'components/Button/Button';
import { shorten } from 'utils/Shorten';
import ShortenedUrlList from 'components/ShortenedUrlList/ShortenedUrlList';

function Shortener() {
  const { register, handleSubmit, watch, errors, setValue } = useForm();
  const [shortenedUrlList, setShortenedUrlList] = useState([]);
  const [loading, setLoading] = useState(false);

  const onSubmit = async ({ url }) => {
    setLoading(true);
    const response = await shorten(url);
    setLoading(false);
    const updatedUrlList = [
      ...shortenedUrlList,
      { code: response.code, url, shortenedUrl: response.short_link },
    ];
    setShortenedUrlList(updatedUrlList);
    setValue('url', '');
  };

  return (
    <section className="max-w-7xl mx-auto my-16 w-4/5">
      <form onSubmit={handleSubmit(onSubmit)}>
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
            className={`p-4 rounded-md flex-1 lg:py-2 lg:px-6 ${
              errors.url && 'border-2 border-red'
            }`}
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
          <Button
            type="submit"
            className="bg-cyan hover:bg-cyan-light rounded-md py-4 px-12 mt-0 lg:ml-5 lg:w-52"
          >
            {loading ? 'Loading...' : 'Shorten It!'}
          </Button>
        </div>
      </form>
      <div className="py-6">
        <ShortenedUrlList shortenedUrlList={shortenedUrlList} />
      </div>
    </section>
  );
}

export default Shortener;
