import HomeBackCircle from "@/components/backCircles/HomeBackCircle/HomeBackCircle";
import GeneralButton from "@/components/Buttons/GeneralButtons/Buttons";
import ContactCard from "@/components/cards/ContactCard/ContactCard";
import './style.css';
import StatusBox from "@/components/Boxes/StatusBox/StatusBox";

export default function Home() {
  return (
    <>
    {/* Landing Section */}
    <section className="landing-section">
    <div className="landing-section-content-left" >
        <div className="landing-section-content-left-text">
        <img className="landing-section-content-left-text-img" src="/text/Welcome.svg" alt="image"/>
        <h1 className="landing-section-content-left-text-h1">to the</h1>
        </div>
        <h1 className="landing-section-content-left-text-h1">
        beginning of our
        journey learning
        </h1>
        <p className="landing-section-content-left-text-p">All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary</p>
        <GeneralButton backgroundColor="#F57005" color="#fff" padding="10px 20px" border="none" href="/courses" style={{marginTop:"20px"}}>Get Started</GeneralButton>
      </div>
    <div className="landing-section-content-right">
        <HomeBackCircle />
      </div>
     

    </section>

    {/* About Section */}
    <section className="about-section">
      <div className="about-section-content">
      <ContactCard />
      </div>
<div style={{width:"40%", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:"20px"}}>
<StatusBox />

</div>
    </section>
    </>
  );
}
