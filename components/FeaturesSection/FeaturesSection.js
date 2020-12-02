import FeatureCard from 'components/FeatureCard/FeatureCard';

function FeaturesSection() {
  return (
    <section className="mt-16 max-w-7xl mx-auto w-4/5">
      <h2
        className="text-3xl font-bold text-center text-violet-dark"
        style={{ lineHeight: '5rem' }}
      >
        Advanced Statistics
      </h2>
      <span className="text-lg max-w-0 mt-3 text-center text-violet-light">
        <p className="max-w-lg mx-auto">
          Track how your links are performing across the web with our advanced statistics dashboard.
        </p>
      </span>
      <div className="mt-24 lg:flex relative">
        <div className="bg-cyan absolute w-2 h-full left-1/2 lg:w-full lg:h-2 lg:top-1/3"></div>
        <div className="lg:mr-10">
          <FeatureCard
            icon="/images/icon-brand-recognition.svg"
            title="Brand Recognition"
            text="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
          />
        </div>
        <div className="mt-24 lg:mt-12 lg:mr-10">
          <FeatureCard
            icon="/images/icon-detailed-records.svg"
            title="Detailed Records"
            text="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
          />
        </div>
        <div className="mt-24 lg:mt-24">
          <FeatureCard
            icon="/images/icon-fully-customizable.svg"
            title="Fully Customizable"
            text="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
          />
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
