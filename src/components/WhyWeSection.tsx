import Reasons from "./Reasons";

const WhyWeSection = () => {
  return (
    <div className="bg-[url('/4.jpg')] bg-cover py-10 backdrop-brightness-50 h-[60rem] flex justify-center lg:bg-fixed bg-center">
      <div className="backdrop-blur-sm w-[45rem] lg:w-[80rem] px-0 rounded-2xl">
        <div className="text-center text-4xl mt-5 lg:mt-8 font-medium text-[#476c75]">
          Почему мы?
        </div>
        <div className="flex flex-col items-center px-20">
          <Reasons />
          <button
            className="
              py-5
              px-7
              bg-[#94bdcbba]
              rounded-lg
              border-2
              border-[#99cfe1]
              text-xl
              w-[20rem]
            "
          >
            Записаться на занятие
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyWeSection;
