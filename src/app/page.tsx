import CourseCard from "@/components/cards/CourseCard/CourseCard";
import HomeBackCircle from "@/components/backCircles/HomeBackCircle/HomeBackCircle";

export default function Home() {
  return (
    <>
    {/* Landing Section */}
    <section className="landing-section" style={{height:"90vh", display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
    <div style={{width:"50%", height:"100%", position:"relative"}}>
        <HomeBackCircle />
      </div>
      <div style={{width:"50%", height:"100%"}}>

      </div>

    </section>
    </>
  );
}
