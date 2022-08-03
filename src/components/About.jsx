import React from 'react'
import wwd from '../Images/what-we-do.jpeg'

const About= () => {
  return (
    <>
    {/* -------------------- ABOUT COMPANY------------ */}
    <div style={{ padding:'20px 120px 20px 120px', backgroundColor:'rgba(200, 216, 228, 1)', display:'flex'}}>
    <div style={{ fontFamily:'sans-serif', alignSelf:'center', fontWeight:'bold' , width:'30%', fontSize:'30px'}}>
         ABOUT COMPANY
    </div>
    <div style={{ width:'70%'}}>
    Specializing in sales support, multi-channel customer service, account services, fraud investigation, dispute resolution, process automation.
    </div>
    </div>

    {/* -------------------- COMPANY OVERVIEW------------ */}
   
    <div style={{padding:'20px 120px 20px 120px', fontWeight:'bold', fontSize:'22px'}}>
         COMPANY OVERVIEW
    </div>

    <div style={{display:'flex'}}>
        <div style={{ fontFamily:'Helvetica' ,padding:'0px 80px 20px 120px',alignSelf:'center',width:'50%' , fontSize:'18px'}}>
        Building your bottom line one contact at a time — that’s exactly what ACT can do for your business as a leading performance-driven provider of contact center and back office support services. Founded in 1997, ACT provides CRM outsourcing programs for Customer Service, Sales Support, Fraud & Dispute Management, Claims Processing and a wide variety of other programs and custom solutions for some of the top companies in the United States.
        </div>
        <div style={{ fontFamily:'Helvetica', padding:'0px 80px 20px 120px',alignSelf:'center', width:'50%' , fontSize:'18px'}}>
        Our philosophy is to treat each interaction as an opportunity to strengthen loyalty and increase revenue. To do that, we need to be more than just an outsourced service provider. By combining People, Process, and Technology, ACT becomes a transparent partner as the voice of your brand. Our agents are thoroughly vetted and given continuing education as long term employees. Every service goes through rigorous quality assurance and ongoing performance analysis.
        </div>
    </div>

    {/* -------------------- WHAT WE DO------------ */}

    <div style={{padding:'20px 120px 20px 120px', fontWeight:'bold', fontSize:'22px', backgroundColor: 'rgba(200, 216, 228, 0.5)'}}>
        WHAT WE DO
    </div>

    <div style={{display:'flex', backgroundColor: 'rgba(200, 216, 228, .5)' }}>
        <div style={{ fontFamily:'Helvetica' ,padding:'0px 80px 20px 120px',alignSelf:'center',width:'50%' , fontSize:'18px'}}>
        ACT is a complete end-to-end, multi-channel customer communications provider capable of integrating many different facets of your daily operations, management, and back office logistics. We work nationwide 24/7 from domestic and near-shore operation centers, providing service in 8 different languages including English, Spanish, Mandarin, Cantonese, Punjabi, Vietnamese, Armenian, and Tagalog.
From personal onboarding through the entire customer relationship lifecycle, ACT tailors solutions that meet the unique needs of your business and make every customer connection count.
        </div>

        <div  style={{padding:'0px 80px 20px 120px',alignSelf:'center',width:'50%'}} >
            <img
            src={wwd}
            alt="what_we_do"
            width ={400}
            />
        </div>

    </div>    
    

    <div style={{ fontFamily:'Helvetica' ,padding:'0px 80px 20px 120px',alignSelf:'center',width:'50%', color:'blue' , fontSize:'20px'}}>
        A Brief Look at a Selection of our Services:
    </div>

    
    </>
  )
}

export default About