import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="bg-[url('https://ss.sport-express.ru/userfiles/materials/196/1962380/full.jpg')] bg-cover bg-no-repeat">
        <div
          className="
          h-[100vh]
          flex 
          justify-between 
          mx-48
        "
        >
          <div
            className="
            container 
            mt-96 
            text-8xl w-2/5
          "
          >
            <div
              className="
              text-8xl
              mb-5
            "
            >
              Dash Yoga
            </div>
            <div
              className="
              text-2xl 
              w-full
            "
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
              sapiente nobis enim perspiciatis, porro dolores sit natus sequi
              placeat nesciunt illum ex non distinctio optio quidem adipisci
              labore? Perferendis, similique?
            </div>
          </div>
          <div
            className="
            mt-[50vh] 
            mr-40
          "
          >
            <button
              className="
              py-3
              px-5
              bg-[#c4b9a3bb]
              border-2
              border-[#c4b9a3]
              rounded-lg
              text-xl
            "
            >
              Записаться на занятие
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
