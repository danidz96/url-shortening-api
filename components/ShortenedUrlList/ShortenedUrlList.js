import ShortenedUrlItem from 'components/ShortenedUrlItem/ShortenedUrlItem';

function ShortenedUrlList({ shortenedUrlList }) {
  return (
    <div className="space-y-3">
      {shortenedUrlList?.map((shortenedUrlItem) => (
        <ShortenedUrlItem
          key={shortenedUrlItem.code}
          url={shortenedUrlItem.url}
          shortenedUrl={shortenedUrlItem.shortenedUrl}
        />
      ))}
    </div>
  );
}

export default ShortenedUrlList;
