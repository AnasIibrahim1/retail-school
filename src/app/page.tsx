import CourseCard from "@/components/cards/CourseCard/CourseCard";
import HomeBackCircle from "@/components/backCircles/HomeBackCircle/HomeBackCircle";

export default function Home() {
  return (
    <>
    <CourseCard title="Course 1" image="https://via.placeholder.com/150" price={100} />
    <HomeBackCircle />
    </>
  );
}
