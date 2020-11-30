import ShortenedUrlItem from 'components/ShortenedUrlItem/ShortenedUrlItem';

function ShortenedUrlList({ shortenedUrlList }) {
  return (
    <div className="space-y-3">
      {shortenedUrlList?.map((shortenedUrlItem) => (
        <ShortenedUrlItem
          url={shortenedUrlItem.url}
          shortenedUrl={shortenedUrlItem.shortenedUrl}
          status={null}
        />
      ))}
    </div>
  );
}

export default ShortenedUrlList;
