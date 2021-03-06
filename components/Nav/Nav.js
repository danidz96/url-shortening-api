import React from 'react';
import Button from 'components/Button/Button';
import Logo from 'components/Logo/Logo';
import { useWindowSize } from 'hooks/useWindowSize';

function Nav() {
  const [showMobileNav, setShowMobileNav] = React.useState(undefined);
  const { width } = useWindowSize();

  const toggleMobileNav = () => {
    setShowMobileNav((value) => !value);
  };

  React.useEffect(() => {
    if (showMobileNav !== undefined && width > '1024') {
      setShowMobileNav(undefined);
    }
  }, [width]);

  const mobileNavMenuAnimation =
    showMobileNav === undefined
      ? null
      : showMobileNav
      ? 'animate-scale-up-tr'
      : 'animate-scale-downs-tr lg:animate-scale-up-tr';

  return (
    <header className="max-w-7xl mx-auto w-4/5">
      <nav id="main-nav" className="lg:flex items-center my-10 text-violet-light font-bold">
        <div className="flex justify-between">
          <Logo />
          <img
            src="/images/bars.svg"
            alt="Bars"
            className="ml-auto lg:hidden cursor-pointer"
            onClick={toggleMobileNav}
          />
        </div>
        <div
          className={`transform scale-0 lg:transform lg:scale-1 ${mobileNavMenuAnimation} absolute w-4/5 justify-center flex-col bg-violet p-8 rounded-xl mt-8 lg:relative lg:space-x-8 lg:flex-row lg:justify-between lg:w-full lg:p-2 lg:bg-transparent lg:mt-0 lg:flex`}
        >
          <div className="flex justify-center flex-col space-y-6 lg:space-x-8 lg:space-y-0 lg:flex-row lg:items-center lg:ml-6">
            <button
              type="button"
              className="text-white font-bold lg:hover:text-violet-dark lg:text-violet-light"
            >
              <a href="#">
                <span>Features</span>
              </a>
            </button>
            <button
              type="button"
              className="text-white font-bold lg:hover:text-violet-dark lg:text-violet-light"
            >
              <a href="#">
                <span>Pricing</span>
              </a>
            </button>
            <button
              type="button"
              className="text-white font-bold lg:hover:text-violet-dark lg:text-violet-light"
            >
              <a href="#">
                <span>Resources</span>
              </a>
            </button>
          </div>
          <div className="mt-6 mb-6 border-solid text-violet-light border-b lg:hidden"></div>
          <div className="flex justify-center flex-col space-y-6 lg:ml-auto lg:space-x-10 lg:flex lg:flex-row lg:space-y-0">
            <button
              type="button"
              className="text-white font-bold lg:hover:text-violet-dark lg:text-violet-light"
            >
              <a href="#">
                <span>Login</span>
              </a>
            </button>
            <Button className="rounded-full bg-cyan hover:bg-cyan-light">
              <a href="#">
                <span>Sign Up</span>
              </a>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
