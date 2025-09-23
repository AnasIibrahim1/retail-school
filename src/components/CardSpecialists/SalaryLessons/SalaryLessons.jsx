import "./style.css";
export default function SalaryLessons({salary, lessons}) {
  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", zIndex: "10"}}>
        <h3 className="salary-lessons-salary" style={{color: "#4F5DE4", fontSize: "24px", fontWeight: "bold"}}>${salary}</h3>
        <h3 className="salary-lessons-lessons" style={{color: "#F57005", fontSize: "16px", fontWeight: "medium"}}>{lessons} محاضرة</h3>
    </div>
  )
}