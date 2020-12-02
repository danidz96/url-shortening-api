function FeatureCard({ icon, title, text }) {
  return (
    <div className="w-full bg-white rounded-lg flex flex-col items-center p-8 relative">
      <div className="h-24 w-24 rounded-full bg-violet absolute -top-12 flex justify-center items-center lg:left-10">
        <img src={icon} alt={title} />
      </div>
      <div className="mt-12">
        <h3 className="text-2xl text-violet-dark font-bold text-center lg:text-left">{title}</h3>
        <span className="text-lg text-center text-violet-light lg:text-left">
          <p className="mt-5">{text}</p>
        </span>
      </div>
    </div>
  );
}

export default FeatureCard;
