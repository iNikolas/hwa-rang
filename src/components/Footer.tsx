const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="sm:px-5 tablet:px-[30px] px-[85px] pt-[50px] pb-4">
      <div className="flex justify-between flex-wrap xs:flex-col">
        <div className="flex flex-col text-2xl font-semibold leading-8 tracking-tight">
          <span className="font-fontMonument w-[240px] mb-3 block bg-gradient-to-r text-transparent bg-clip-text from-[#09142e] via-[#58275f] to-[#f85253]">
            HWA-RANG
          </span>
          <p className="text-[20px] font-normal">
            Спортивний клуб <br /> олімпійського тхеквондо <br /> для дітей та
            дорослих
          </p>
        </div>
        <nav>
          <ul className="[&_li]:pl-[35px] flex 1xl:flex-col 1xl:justify-between pr-15">
            <li className="md:pl-0 xs:pt-[30px] 1xl:my-3 font-medium text-14">
              <a href="#about">/ ПРО КЛУБ</a>
            </li>
            <li className="md:pl-0 1xl:my-3  font-medium text-14">
              <a href="#advantages">/ НАШІ ПЕРЕВАГИ</a>
            </li>
            <li className="md:pl-0 1xl:my-3 font-medium text-14">
              <a href="#trainers">/ ТРЕНЕРА</a>
            </li>
            <li className="md:pl-0 1xl:my-3 font-medium text-14">
              <a href="#trainers">/ ЗАЛИ</a>
            </li>
            <li className="md:pl-0 1xl:my-3 font-medium text-14">
              <a href="#trainers">/ ПОСЛУГИ</a>
            </li>
          </ul>
        </nav>

        <div>
          <p className="font-medium text-14 block xs:hidden">/ КОНТАКТИ</p>

          <a
            className="font-normal  text-18 text-lg text-gray-600"
            href="mailto:hwa-rang@ukr.net"
          >
            <span className="font-normal xs:block text-14 text-gray-600 pr-2">
              Email:
            </span>
            hwa-rang@ukr.net
          </a>
          <div className="flex w-[230px] mt-10 justify-between">
            <a href="https://www.facebook.com/hwarang.kiev">
              <img
                src="/icons/facebook.svg"
                alt="www.facebook.com/hwarang.kiev"
              />
            </a>
            <a href="https://www.instagram.com/HWA_RANG.TKD/">
              <img
                src="/icons/instagram.svg"
                alt="www.instagram.com/HWA_RANG.TKD"
              />
            </a>
            <a href="https://www.youtube.com/@hwa-rangtkdkyiv3970">
              <img
                src="/icons/youtube.svg"
                alt="www.youtube.com/@hwa-rangtkdkyiv3970"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="pt-20 text-base font-semibold text-gray-400">
        <a className="block" href="https://www.linkedin.com/in/daria-doletska/">
          designer: Daria Doletska
        </a>
        <a className="block" href="https://www.linkedin.com/in/vlad-doletskiy/">
          front-end: Vlad Doletskiy
        </a>
        @ All Rights Reserved {currentYear}.
      </div>
    </footer>
  );
};

export default Footer;
