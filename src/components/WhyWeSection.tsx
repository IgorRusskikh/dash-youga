import Reasons from "./Reasons";

const WhyWeSection = () => {
  return (
    <div className="bg-[url('/4.jpg')] bg-cover py-10 backdrop-brightness-50 xs:h-[70rem] md:h-[60rem] flex justify-center lg:bg-fixed bg-center lg:h-[50rem] xl:h-[55rem]">
      <div className="sm:backdrop-blur-sm w-full mx-10 sm:w-[45rem] lg:w-[60rem] xl:w-[70rem] xl:h-[50rem] 2xl:w-[75rem] 2xl:h-[50rem] md:h-[50rem] sm:h-[50rem] px-5 rounded-2xl sm:border-x-[1px] sm:border-[#94bdcbba]">
        <div className="text-center text-4xl mt-5 lg:mt-8 font-medium text-[#6d8990]">
          Почему мы?
        </div>
        <div
          className="flex flex-col items-center px-0 2xl:px-2"
          suppressHydrationWarning={true}
        >
          <Reasons />
          <button className="py-5 xs:px-7 bg-[#94bdcbba] rounded-lg border-2 border-[#99cfe1] text-xl w-[15rem] sm:w-[20rem]">
            Записаться на занятие
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyWeSection;
