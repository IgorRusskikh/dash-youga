import Image from "next/image";

type Props = {
  children: string;
  color: string;
  image: string;
};

const SectionBar = ({ children, color, image }: Props) => {
  return (
    <div
      className={`py-5 sm:py-10 w-full ${color} flex justify-center flex-col align-center items-center gap-5 lg:gap-8 h-[20rem] sm:h-[23rem] max-h-[23rem]`}
    >
      <Image
        src={`/${image}`}
        width={100}
        height={100}
        alt={""}
        className="w-[50px] h-[50px] sm:w-[75px] sm:h-[75px] xl:w-[100px] xl:h-[100px]"
      />
      <div className="text-lg sm:text-xl font-medium lg:text-2xl">
        DASH YOGA
      </div>
      <div className="w-2/3 lg:w-2/5 text-center text-sm sm:text-base">
        {children}
      </div>
    </div>
  );
};

export default SectionBar;
