function FeatureCard({ icon, title, text }) {
  return (
    <div className="w-full bg-white rounded-lg flex flex-col items-center p-8 relative">
      <div className="h-24 w-24 rounded-full bg-violet absolute -top-12 flex justify-center items-center">
        <img src={icon} alt={title} />
      </div>
      <div className="mt-20">
        <h3 className="text-2xl text-violet-dark font-bold text-center">{title}</h3>
        <span className="text-lg mt-3 text-center text-violet-light">
          <p>{text}</p>
        </span>
      </div>
    </div>
  );
}

export default FeatureCard;
