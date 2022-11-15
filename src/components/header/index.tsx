import { tw, css } from 'twind/css';
import Button from '@/components/button';
import Netlify from '@/constants/svg/netlify.svg';
import Nike from '@/constants/svg/nike.svg';
import Figma from '@/constants/svg/figma.svg';
import Aws from '@/constants/svg/aws.svg';

const headerStyle = css`
  background-color: #f9f9f9;
  background-image: url('http://placeimg.com/1920/640/any');
  background-repeat: no-repeat;
  min-height: calc(100vh - 6rem);
  position: relative;
  z-index: 1;
`;

const overLay = css`
  // background-color: #f9f9f9;
  background: linear-gradient(-45deg, rgba(180, 43, 65, 0.6), rgba(45, 65, 188, 0.6));
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
`;

const Header = () => (
  // FIXME: color
  <header className={tw(headerStyle, `bg-gradient-to-r from-violet-500 to-fuchsia-500`)}>
    <div className={tw(overLay)} />
    <div className={tw(`max-w-4xl mx-auto py-16 px-14 sm:px-6 lg:px-8`)}>
      <h1
        className={`${tw(
          `font-sans font-bold text-4xl md:text-5xl lg:text-8xl text-center leading-snug text-gray-800`,
        )} hoge`}
      >
        Your website, beyond expectations
      </h1>
      <div className={tw(`max-w-xl mx-auto`)}>
        <p className={tw(`mt-10 text-gray-500 text-center text-xl lg:text-3xl`)}>
          Make your website wonderful and build beyond your expectations.
        </p>
      </div>
      <div className={tw(`mt-10 flex justify-center items-center w        }-full mx-auto`)}>
        <Button primary>Get started</Button>
        <span className={tw(`mx-2`)}>or</span>
        <Button>Contact us</Button>
      </div>
    </div>
    <div className={tw(`flex justify-center w-full`)}>
      <div className={tw(`mt-4 w-full`)}>
        <p className={tw(`font-mono uppercase text-center font-medium text-sm text-gray-600`)}>These folks get it</p>
        <div className={tw(`flex items-center justify-center mx-auto flex-wrap`)}>
          <Aws className={tw(`m-12 mb-8`)} width={120} />
          <Netlify className={tw(`m-12`)} width={140} />
          <Nike className={tw(`m-12`)} width={140} />
          <Figma className={tw(`m-12`)} width={140} />
        </div>
      </div>
    </div>
  </header>
);

export default Header;
