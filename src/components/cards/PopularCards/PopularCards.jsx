import ActionButtons from "@/components/Buttons/ActionButtons/ActionButtons";
import Hours from "@/components/CardSpecialists/Hours/Hours";
import Stars from "@/components/CardSpecialists/Stars/Stars";
import BusinessCard from "../BusinessCard/BusinessCard";
import "./style.css";

export default function PopularCards({ href = '/courses/complete-web-dev', image = '/photo.jpg', title = 'عنوان الدورة', hours = '10', rating = 5, reviews = 24, price = 100, lessons = 24, instructor = {} }) {
  return (
    <a href={href} className="popular-cards-container" style={{width:"410px", height:"450px", borderRadius:"10px", backgroundColor:"#fff", boxShadow:"0 15px 35px rgba(0,0,0,0.2)", position:"relative", display:"flex", flexDirection:"column", alignItems:"start", justifyContent:"space-between", zIndex:"0", textDecoration:'none'}}>
      <div style={{width:"100%", height:"50%", backgroundImage:`url('${image}')`, backgroundSize:"cover", backgroundPosition:"center", borderRadius:"10px 10px 50% 50%", position:"relative", display:"flex", flexDirection:"column", alignItems:"start", justifyContent:"end"}}>
        <div style={{width:"80%", height:"50%", backgroundColor:"#F57005", borderRadius:"10px 10px 50% 50%", position:"absolute", bottom:"-10px", left:"50%", transform:"translateX(-50%)", zIndex:"-1"}}>
        </div>
    <ActionButtons margin="20px" icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>} backgroundColor="#F57005" width="40px" height="40px" ariaLabel="Love" title="Love"/>

        </div>   
<div style={{width:"100%", display:"flex", flexDirection:"column", alignItems:"start", justifyContent:"space-between", padding:"20px"}}>
<div style={{marginBottom:"10px"}}>
<Hours hour={hours}/>
</div>
<div style={{marginBottom:"10px"}}>
<Stars rating={rating} reviews={reviews} size="medium" />
</div>
<h4 style={{color:"#2A254D", fontSize:"20px", fontWeight:"bold"}}>{title}</h4>
<div style={{width:"100%", height:"50%", display:"flex", flexDirection:"column", alignItems:"start", justifyContent:"start"}}>
<BusinessCard type="salary" salary={price} lessons={lessons} profileImage={instructor.avatar} name={instructor.name} role={instructor.role} />

</div>
</div>
    </a>
  )
}