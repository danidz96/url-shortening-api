import Button from 'components/Button/Button';

function BottomCTA() {
  return (
    <div className="h-72 w-full mt-20 bg-violet bg-boost-mobile bg-no-repeat bg-right flex flex-col items-center justify-center space-y-5 lg:bg-boost-desktop lg:h-64">
      <h2 className="text-white text-3xl font-bold">Boost your links today</h2>
      <Button className="text-lg px-8 py-3 rounded-full bg-cyan hover:bg-cyan-light">
        Get Started
      </Button>
    </div>
  );
}

export default BottomCTA;
