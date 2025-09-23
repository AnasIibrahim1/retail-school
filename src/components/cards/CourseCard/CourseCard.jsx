import CourseHead from "@/components/Paragraphs/CourseHead/CourseHead";
import Hours from "@/components/CardSpecialists/Hours/Hours";
import Stars from "@/components/CardSpecialists/Stars/Stars";
import CourseCircles from "@/components/Circles/CoursesCircles/CoursesCircles";
import BusinessCard from "../BusinessCard/BusinessCard";
import "./style.css";
export default function CourseCard({title, image, price}) {
  return (
    <div className="course-card-container" style={{display: "flex", flexDirection: "column", justifyContent: "space-between", width: "450px", height : "300px",borderRadius: "10px", backgroundColor: "#fff", padding : "30px",zIndex: "10", }}>
      <div style={{position:"relative"}}>
<CourseCircles image={image} width="225px" height="225px" style={{position: "absolute", top: "-150px", left: "0", zIndex: "10"}} /> 
</div>

<div className="hours-container" style={{position: "relative", zIndex: "10"}}>
<Hours hour={10} />
</div>

<Stars rating={5} reviews={24} size="medium" />
<CourseHead title={title} />
<BusinessCard type="salary" />
    </div>
  )
}