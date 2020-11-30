import Button from 'components/Button/Button';

function ShortenedUrlItem({ url, shortenedUrl, status }) {
  return (
    <div className="bg-white rounded-md p-4 lg:flex lg:w-full lg:space-x-6 lg:items-center lg:py-3 lg:px-6">
      <p className="text-violet-dark truncate border-b border-gray pb-3 lg:border-none lg:py-3 lg:flex-1">
        <a href={url}>{url}</a>
      </p>
      <p className="truncate text-cyan py-3">
        <a href={shortenedUrl}>{shortenedUrl}</a>
      </p>
      <Button className="rounded-md w-full h-10 lg:w-36">Copy</Button>
    </div>
  );
}

export default ShortenedUrlItem;
