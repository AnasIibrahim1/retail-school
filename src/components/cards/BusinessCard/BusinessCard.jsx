import GeneralBox from "@/components/Boxes/GeneralBox/GeneralBox";
import ProfileCircles from "@/components/Circles/ProfileCicles/ProfileCircles";
import DateDisplay from "@/components/CardSpecialists/Date/Date";
import SalaryLessons from "@/components/CardSpecialists/SalaryLessons/SalaryLessons";
import "./style.css";
export default function BusinessCard({type, actionButton = {}, href = "", salary = 100, lessons = 24, profileImage = "/test/photo.jpg", name = "انس ابراهيم حلمي", role = "مبرمج تطبيقات"}) {
  return (
<GeneralBox backgroundColor="#F1F2FD" width="100%" height="auto" padding="5px" flexDirection="row" alignItems="center" justifyContent="space-between">
      <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "100%", height: "100%"}}>
      <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "100%", height: "100%"}}>
        <ProfileCircles image={profileImage} backgroundColor="#E4E4E4" width="60px" height="40px" />
      <div style={{display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "center", width: "100%", height: "100%", marginRight: "10px"}}>
        {name && <h3 style={{color: "#000", fontSize: "16px", fontWeight: "bold"}}>{name}</h3>}
        {role && <p style={{color: "gray", fontSize: "12px", fontWeight: "bold"}}>{role}</p>}
      </div>
      <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "40%", height: "100%", position:"relative"}}>
        {type === "date" ? (
          <DateDisplay date={new Date()} style={{color: "#F57005", fontSize: "16px", fontWeight: "bold"}} className="date-display"/>
        ) : type === "salary" ? (
          <SalaryLessons salary={salary} lessons={lessons} />
        ) : type === "button" ? (
          <button
            style={{
              backgroundColor: "transparent", 
              borderRadius: "50%", 
              width: "40px", 
              height: "40px", 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center", 
              border:"1px solid #F57005", 
              color:"#000",
              transition: "all 0.3s ease",
              cursor: "pointer"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#F57005";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#000";
            }}
            onClick={() => {
              if (actionButton) actionButton();
              if (href) window.location.href = href;
            }}
            aria-label="Previous page"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12,5 5,12 12,19"></polyline>
            </svg>
          </button>
        ) : null}
</div>
      </div>
      </div>
    </GeneralBox>
  )
}