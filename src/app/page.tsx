import StartSection from "@/components/StartSection";
import WhyWeSection from "@/components/WhyWeSection";
import SectionBar from "@/components/SectionBar";
import ForWhomSection from "@/components/ForWhomSection";

export default function Home() {
  return (
    <>
      <StartSection />
      <SectionBar image="yoga.svg" color="bg-[#eadcc1]">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
        reiciendis fugit nulla ipsa, nobis cupiditate ea eveniet nisi aliquam
        nemo animi mollitia ratione accusamus, architecto ab vero quas tempora?
        Rem.
      </SectionBar>
      <WhyWeSection />
      <SectionBar image="yoga_mat.svg" color="bg-[#94bdcb]">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
        reiciendis fugit nulla ipsa, nobis cupiditate ea eveniet nisi aliquam
        nemo animi mollitia ratione accusamus, architecto ab vero quas tempora?
        Rem.
      </SectionBar>
      {/* <ForWhomSection /> */}
    </>
  );
}
