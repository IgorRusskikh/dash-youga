import Button from "./Button";

const StartSection = () => {
  return (
    <div className="bg-[url('https://ss.sport-express.ru/userfiles/materials/196/1962380/full.jpg')] bg-cover bg-no-repeat bg-center h-[60rem] lg:h-[75rem] w-full">
      <div className="h-full flex flex-col pt-96 mx-16 xl:mx-32 items-center justify-end lg:justify-start">
        <div className="lg:flex justify-between items-center hidden">
          <div className="container xl:text-8xl lg:w-2/5">
            <div className="text-6xl 2xl:text-8xl mb-5 font-medium xl:font-normal">
              Dash Yoga
            </div>
            <div className="text-xl w-full pr-5 xl:px-0">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
              sapiente nobis enim perspiciatis, porro dolores sit natus sequi
              placeat nesciunt illum ex non distinctio optio quidem adipisci
              labore? Perferendis, similique?
            </div>
          </div>
          <div className="sm:mr-0">
            <button className="py-5 px-7 bg-[#c4b9a3bb] border-2 border-[#c4b9a3] rounded-lg text-xl 2xl:mr-20">
              Записаться на занятие
            </button>
          </div>
        </div>
        <div className="block lg:hidden mb-24">
          <button className="py-5 xs:px-7 bg-[#c4b9a3bb] border-2 border-[#c4b9a3] rounded-lg text-xl xs:w-[20rem] w-[15rem]">
            Записаться на занятие
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartSection;
