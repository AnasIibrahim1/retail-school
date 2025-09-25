"use client"
/* eslint-disable @next/next/no-img-element */
import HomeBackCircle from "@/components/backCircles/HomeBackCircle/HomeBackCircle";
import GeneralButton from "@/components/Buttons/GeneralButtons/Buttons";
import Header from "@/components/Paragraphs/Header/HeaderPargraph";
import StatusBox from "@/components/Boxes/StatusBox/StatusBox";
import './style.css';
import ContactCard from "@/components/cards/ContactCard/ContactCard";
import AboutBox from "@/components/Boxes/AboutBox/AboutBox";
import ServiceBox from "@/components/Boxes/ServiceBox/ServiceBox";
import FullTitle from "@/components/Paragraphs/FullTitle/FullTitle";
import DiscoverBox from "@/components/Boxes/DiscoverBox/DiscoverBox";
import PaginationBox from "@/components/Boxes/PaginationBox/innerPaginationBox";
import TeamCard from "@/components/cards/TeamCard/TeamCard";
import PopularCards from "@/components/cards/PopularCards/PopularCards"


import { FeedbacksData } from "@/data/data.js";

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

    {/* Our Services Section */}
    <section className="our-services-section">
      <div className="our-services-section-content-upper">
      <FullTitle title="Creating a Lifelong Learning Best Community " header="Our Services" alignItems="center" justifyContent="start" width="100%" cjustifyContent="start" calignItems="start" />
      <p className="our-services-section-p">
      There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. 
      </p>
      </div>
      <div className="our-services-section-content-lower">
    <ServiceBox src="/icons/edu.svg" title="Exclusive Coach" description="The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc." />
    <ServiceBox src="/icons/lamp.svg" title="Creative Minds" description="The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc." />
    <ServiceBox src="/icons/video.svg" title="Video Tutorials" description="The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc." />
    <ServiceBox src="/icons/neuon.svg" title="Worlds Record" description="The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc." />

    </div>
    </section>

    {/* Discover Section */}
    <section className="discover-section">
      <div className="discover-section-content-top">
        <div className="top-left-content">
          <h1 style={{color:"#fff", maxWidth:"500px"}}>Discover the campus through a video tour </h1>
          <GeneralButton backgroundColor="#F57005" color="#fff" padding="10px 20px" border="none" href="/courses" style={{marginTop:"20px"}}>Discover More</GeneralButton>
        </div>
        <div className="top-right-video">
          <div className="top-right-video-img">
            <img src="/icons/video-tri.svg" alt="" />
          </div>
        </div>
       <div style={{}}>
       <img src="/lines/line-shape-2.svg" alt="" style={{position:"absolute", bottom:0, right:0, zIndex:0}} />
       </div>
      </div>
      <div className="discover-section-content-bottom">
        <DiscoverBox styles={{borderRight:"1px dashed #fff"}} icon="/icons/edu.svg" num="100" type="+" text="Students" />
        <DiscoverBox styles={{borderRight:"1px dashed #fff"}} icon="/icons/edu.svg" num="30.5" type="k" text="Distance" />
        <DiscoverBox styles={{borderRight:"1px dashed #fff"}} icon="/icons/edu.svg" num="30" type="%" text="Percentage" />
        <DiscoverBox styles={{}} icon="/icons/edu.svg" num="100" type="m" text="Views" />
      </div>
    </section>

    {/* Feedback Section*/}
    <section className="feedback-section">
    <FullTitle title="What Our Students Feedback" header="Testimonial" alignItems="center" justifyContent="start" width="100%" cjustifyContent="start" calignItems="start" />
    <PaginationBox data={FeedbacksData} style={{}}/>
    </section>

    {/* Our Team Section */}
    <section className="our-team-section">
      <FullTitle title="Meet Our Professional Instructor" header="Our Team" alignItems="center" justifyContent="center" width="100%" cjustifyContent="center" calignItems="center" />
      <img src="/backgrounds/random-bg.svg" alt="" style={{position:"absolute", top:0, left:0, right:0, zIndex:-2, width:"100%", height:"50%"}} />
      <div className="our-team-section-content">
      <TeamCard name="John Doe" job="Software Engineer" image="/test/photo.jpg" socials={[
        {
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>,
          href: "https://www.facebook.com"
        },
        {
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>,
          href: "https://twitter.com"
        },
        {
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>,
          href: "https://instagram.com"
        }
      ]} onAction={()=>{}} />
      <TeamCard name="John Doe" job="Software Engineer" image="/test/photo.jpg" socials={[
        {
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>,
          href: "https://www.facebook.com"
        },
        {
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>,
          href: "https://twitter.com"
        },
        {
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>,
          href: "https://instagram.com"
        }
      ]} onAction={()=>{}} />
      <TeamCard name="John Doe" job="Software Engineer" image="/test/photo.jpg" socials={[
        {
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>,
          href: "https://www.facebook.com"
        },
        {
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>,
          href: "https://twitter.com"
        },
        {
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>,
          href: "https://instagram.com"
        }
      ]} onAction={()=>{}} />
      </div>
    </section>

<hr style={{width:"100%", margin:"100px 0"}} />
    {/* Blog Section */}
    <section className="blog-section">
      <FullTitle title="Latest Updates & Articles" header="Latest Blog" alignItems="center" justifyContent="center" width="100%" cjustifyContent="center" calignItems="center" />
      <div style={{position:"absolute", bottom:0, left:0, right:0, zIndex:-1, height:"60%", backgroundColor:"#F6F6F6"}}>
        <img src="/backgrounds/horizontal.svg" alt="" style={{width:"100%", height:"100%"}}/>
      </div>
      <div style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center", gap:"80px", flexWrap:"wrap", marginTop:"120px"}}>
      <PopularCards title="Course Title" image="/test/photo.jpg" price={100} />
      <PopularCards title="Course Title" image="/test/photo.jpg" price={100} />
      <PopularCards title="Course Title" image="/test/photo.jpg" price={100} />
      <PopularCards title="Course Title" image="/test/photo.jpg" price={100} />

      </div>
    </section>

    </>
  );
}
