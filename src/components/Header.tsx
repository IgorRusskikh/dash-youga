import Image from "next/image";

const Header = () => {
  return (
    <header className="container">
      <div>
        <div className="mx-auto py-5 px-5 mt-3 mb-5 flex flex-col items-center justify-center gap-5 2xl:gap-10 absolute m-auto left-0 right-0 align-bottom">
          <Image
            src="/lotos.svg"
            width={100}
            height={100}
            alt={"lotos"}
            className=" 2xl:block w-[50px] xl:w-[100px]"
          />
          <div className="grid grid-cols-7 gap-0 items-end">
            {navLinks.map((link) => (
              <div className="flex flex-col items-center max-w-full justify-center">
                <div
                  key={link.label}
                  className="text-base 2xl:text-xl w-28 xl:w-36 text-center"
                >
                  {link.label}
                </div>
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
  { label: "Тарифы" },
];

export default Header;
