import { Categories, Filters, SortPopup, Title, TopBar } from "@/components/shared";
import { Container } from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="relative">
        <div className="h-16 sticky top-0 left-0 bg-white z-1000">
          <div className="absulote z-1000 shadow w-full flex justify-between px-7"><Categories/><SortPopup/></div>
          <div className="w-full top-16 left-0 flex justify-between px-7">
            <div className="w-fit"></div>
            <Filters className="mr-12 mt-4"/>
          </div>
        </div>
        
        <div className="h-1000 px-5">
          <Title text="Все пиццы" size="lg" className="font-bold"/>
          </div>
      </Container>
    </>
  );
}
