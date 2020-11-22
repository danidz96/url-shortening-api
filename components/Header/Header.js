import React from 'react';

function Header() {
  return (
    <header className="max-w-7xl mx-auto w-4/5">
      <nav className="flex items-center my-10 text-grayishViolet font-bold">
        <img src="/images/logo.svg" alt="Shortly logo" className="mr-10" />
        <img src="/images/bars.svg" alt="Bars" className="ml-auto lg:hidden" />
        <div className="justify-start space-x-8 hidden lg:flex">
          <button type="button" className="hover:text-darkViolet font-bold focus:text-yellow-100">
            <a href="#">
              <span>Workflow</span>
            </a>
          </button>
          <button type="button" className="hover:text-darkViolet font-bold">
            <a href="#">
              <span>Pricing</span>
            </a>
          </button>
          <button type="button" className="hover:text-darkViolet font-bold">
            <a href="#">
              <span>Resources</span>
            </a>
          </button>
        </div>
        <div className="ml-auto space-x-10 hidden lg:flex">
          <button type="button" className="hover:text-darkViolet font-bold">
            <a href="#">
              <span>Login</span>
            </a>
          </button>
          <button className="rounded-full bg-cyan py-2 px-5 text-white hover:bg-opacity-50 font-bold">
            <a href="#">
              <span>Sign Up</span>
            </a>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
