import Image from 'next/image';
import Logo from 'components/Logo/Logo';

function Footer(props) {
  return (
    <footer className="bg-blue-dark p-14 text-white">
      <div className="max-w-7xl mx-auto w-4/5 flex flex-col items-center lg:flex-row lg:justify-evenly lg:items-baseline">
        <Logo fill="white" className="mb-10 lg:flex-grow-1" />
        <div className="space-y-8 mb-10 lg:flex lg:flex-grow-2 lg:justify-evenly lg:space-y-0">
          <FooterList title="Features">
            <FooterItem>Link Shortening</FooterItem>
            <FooterItem>Branded Links</FooterItem>
            <FooterItem>Analytics</FooterItem>
          </FooterList>
          <FooterList title="Resources">
            <FooterItem>Blog</FooterItem>
            <FooterItem>Developers</FooterItem>
            <FooterItem>Support</FooterItem>
          </FooterList>
          <FooterList title="Company">
            <FooterItem>About</FooterItem>
            <FooterItem>Our Team</FooterItem>
            <FooterItem>Careers</FooterItem>
            <FooterItem>Contact</FooterItem>
          </FooterList>
        </div>
        <div className="lg:flex-grow-1">
          <div className="flex space-x-6">
            <div>
              <Image
                width="24"
                height="24"
                src="/images/icon-facebook.svg"
                alt="Facebook logo"
                className="cursor-pointer"
              />
            </div>
            <div>
              <Image
                width="24"
                height="24"
                src="/images/icon-twitter.svg"
                alt="Twitter logo"
                className="cursor-pointer"
              />
            </div>
            <div>
              <Image
                width="24"
                height="24"
                src="/images/icon-pinterest.svg"
                alt="Pinterest logo"
                className="cursor-pointer"
              />
            </div>
            <div>
              <Image
                width="24"
                height="24"
                src="/images/icon-instagram.svg"
                alt="Instagram logo"
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

function FooterList({ title, children }) {
  return (
    <div className="flex flex-col space-y-2 items-center">
      <span className="text-white">
        <p>{title}</p>
      </span>
      {children}
    </div>
  );
}

function FooterItem({ children }) {
  return <span className="text-gray cursor-pointer hover:text-cyan">{children}</span>;
}
