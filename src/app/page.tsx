import HomeBackCircle from "@/components/backCircles/HomeBackCircle/HomeBackCircle";
import GeneralButton from "@/components/Buttons/GeneralButtons/Buttons";
import Header from "@/components/Paragraphs/Header/HeaderPargraph";
import StatusBox from "@/components/Boxes/StatusBox/StatusBox";
import './style.css';
import ContactCard from "@/components/cards/ContactCard/ContactCard";
import AboutBox from "@/components/Boxes/AboutBox/AboutBox";

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
      <div className="about-section-content-left">
        <Header title="About Us" color="#4F5DE4" alignItems="center" justifyContent="center" style={{marginBottom:"20px"}} />
        <h1 className="about-section-content-left-h1">
        Creating a Lifelong Learning Best Community 
        </h1>
        <p className="about-section-content-left-p">
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum. Class aptent taciti sociosqu ad litora torquent 
        </p>
        <StatusBox />
        <div style={{width:"100%", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:"20px", marginTop:"40px"}}>
        <ContactCard />
        </div>
        <hr />
        <GeneralButton backgroundColor="#F57005" color="#fff" padding="10px 20px" border="none" href="/courses" style={{marginTop:"20px"}}>Discover More</GeneralButton>
      </div>
      <div className="about-section-content-right">
        <div style={{width:"80%", height:"100%"}}>
        <AboutBox />
        </div>
      </div>
    </section>
    </>
  );
}
