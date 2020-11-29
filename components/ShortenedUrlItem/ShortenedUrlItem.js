import Button from 'components/Button/Button';

function ShortenedUrlItem({ url, shortenedUrl, status }) {
  return (
    <div className="rounded-md p-4">
      <p className="truncate border-b border-gray pb-3">
        <a href={url}>{url}</a>
      </p>
      <p className="truncate text-cyan py-3">
        <a href={shortenedUrl}>{shortenedUrl}</a>
      </p>
      <Button className="rounded-md w-full">Copy</Button>
    </div>
  );
}

export default ShortenedUrlItem;
