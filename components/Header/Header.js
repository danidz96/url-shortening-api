import Image from 'next/image';
import Button from 'components/Button/Button';

function Header() {
  return (
    <section className="max-w-7xl mx-auto w-4/5">
      <div className="flex flex-col">
        <div className="place-self-center">
          <img src="/images/illustration-working.svg" alt="illustration working" />
        </div>
        <div className="cta my-8 flex flex-col justify-center">
          <h1 className="text-5xl font-bold text-center text-violet-dark">
            More than just shorter links
          </h1>
          <span className="text-lg mt-3 text-gray text-center">
            Build your brand's recognition and get detailed insights on how your links are
            performing.
          </span>
          <div className="mt-6 place-self-center">
            <Button className="text-lg px-8 py-3">Get Started</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
