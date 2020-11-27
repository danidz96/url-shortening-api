import Image from 'next/image';
import Button from 'components/Button/Button';

function Header() {
  return (
    <section className="max-w-7xl mx-auto w-4/5">
      <div className="flex flex-col lg:flex-row-reverse">
        <div className="place-self-center">
          <img src="/images/illustration-working.svg" alt="illustration working" />
        </div>
        <div className="cta my-8 flex flex-col justify-center">
          <h1
            className="text-5xl font-bold text-center text-violet-dark lg:text-6xl lg:text-left"
            style={{ lineHeight: '5rem' }}
          >
            More than just shorter links
          </h1>
          <span className="text-lg mt-3 text-violet-light text-center lg:text-left">
            Build your brand's recognition and get detailed insights on how your links are
            performing.
          </span>
          <div className="mt-6 place-self-center lg:place-self-start">
            <Button className="text-lg px-8 py-3 rounded-full">Get Started</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
