import Image from "next/image";

const Header = () => {
  return (
    <header className="container">
      <div className="sm:hidden flex justify-between fixed z-50 top-5 w-full items-center">
        <div className="burger-container flex gap-2 flex-col px-2 py-2 ml-5 hover:cursor-pointer">
          <div className="burger-line"></div>
          <div className="burger-line"></div>
          <div className="burger-line"></div>
        </div>
        <div className="text-xl font-medium">Dash Yoga</div>
        <Image
          src="/lotos.svg"
          width={100}
          height={100}
          alt={"lotos"}
          className=" 2xl:block w-[50px] xl:w-[100px] mr-7"
        />
      </div>
      <div className="hidden sm:block">
        <div className="mx-auto py-5 px-5 mt-3 mb-5 flex flex-col items-center justify-center gap-5 2xl:gap-10 absolute m-auto left-0 right-0 align-bottom">
          <Image
            src="/lotos.svg"
            width={100}
            height={100}
            alt={"lotos"}
            className=" 2xl:block w-[50px] xl:w-[100px]"
          />
          <div className="flex gap-5 ">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="text-base 2xl:text-xl text-center"
              >
                {link.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

const navLinks = [
  { label: "Миссия" },
  { label: "Для кого" },
  { label: "Ценности" },
  { label: "Dash Yoga" },
  { label: "Направления" },
  { label: "Тарифы" },
];

export default Header;
