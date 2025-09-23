export default function HomeBackCircle() {
  return (
      <div style={{poistion:"relative", width:"100%", height:"100%"}}>
        <img src="/shapes/landing-circle.svg" alt="" style={{position: "absolute", bottom:"0", right:"0"}} />
        <img src="/test/ppl.png" alt="" style={{position: "absolute",  bottom:"0", right:"50%", transform:"translateX(50%)", width:"100%", height:"100%", zIndex:"10"}} />
        <img src="/shapes/half-cir.svg" alt="" style={{position: "absolute",  top:"25%", left:"-10%", width:"20%"}} />
        <img src="/shapes/book.svg" alt="" style={{position: "absolute",  top:"10%", left:"-10%", width:"10%"}} />
        <img src="/dots/square-dots.svg" alt="" style={{position: "absolute",  top:"15%", right:"20%", width:"30%", zIndex:"9"}} />
      </div>
  )
}