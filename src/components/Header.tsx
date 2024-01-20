import Image from "next/image";

const Header = () => {
  return (
    <header
      className="
        container 
        mx-auto 
        py-5 
        mt-3
        mb-5
        flex 
        flex-col
        items-center
        justify-center 
        gap-10
        absolute
        left-[20vh]
        "
    >
      <Image src="/lotos.svg" width={100} height={100} alt={"lotos"} />
      <div className="flex">
        {navLinks.map((link) => (
          <div key={link.label} className="px-5 text-base">
            {link.label}
          </div>
        ))}
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
