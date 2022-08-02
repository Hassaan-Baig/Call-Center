import React from 'react'
import Button from 'react-bootstrap/Button';
import people from '../Images/people.png' 
import process from '../Images/process.png' 
import tech from '../Images/tech.png' 
import PEOPLE from '../Images/PEOPLE.jpeg'


const About= () => {
  return (
    <>
    <br></br>
    {/* -------------------- THE DIFFERENCE ------------ */}
    <div style={{ padding:'20px 120px 20px 120px', backgroundColor:'rgba(119, 180, 250, 0.5)', display:'flex'}}>
        <div style={{ fontFamily:'sans-serif', alignSelf:'center', fontWeight:'bold' , width:'50%', fontSize:'30px'}}>
            THE CT DIFFERENCE
        </div>
        <div style={{ width:'50%'}}>
        Talented people, custom and multi-channel solutions, big data performance monitoring, standards compliance, scalable solutions.
        </div>
    </div>

    {/* -------------------- WHAT MAKES CT DIFFERENT------------ */}
   
    <div style={{padding:'20px 120px 20px 120px', fontWeight:'bold', fontSize:'22px'}}>
        What Makes CT Different?
    </div>

    <div style={{display:'flex'}}>
        
        <div style={{ fontFamily:'Helvetica' ,padding:'0px 80px 20px 120px',alignSelf:'center',width:'60%' , fontSize:'18px'}}>
        CT isn’t your typical outsourced services provider. For more than 17 years, CT has deployed complete end-to-end, multi-channel customer communication and back-office logistics solutions to the top companies in the United States. And unlike other providers who might offer you an impressive collection of off-the-shelf a la carte services, CT creates flexible, custom programs tailored to the specific needs of your business.
        </div>

        <div style={{flex:'1', width:'40%'}}>
            <div style={{padding:'0px 120px 20px 160px'}}>
                <img style={{height:'40px'}}  src={people} alt='people'/>
                <Button style={{padding:'0px 0px 0px 20px', borderColor:'white', color:'purple'}} variant="outline-info"> People</Button>
            </div>

            <div style={{padding:'20px 120px 20px 160px'}}>
                <img style={{width:'40px', height:'40px'}}  src={process} alt='process' />
                <Button style={{padding:'0px 0px 0px 20px',borderColor:'white', color:'purple'}} variant="outline-info"> Process</Button>
            </div>
            <div style={{padding:'20px 120px 40px 160px'}}>
                <img style={{width:'40px', height:'40px'}}  src={tech} alt='tech' /> 
                <Button style={{borderColor:'white', color:'purple'}} variant="outline-info">Technology</Button>
            </div>
        </div>

    </div>

     {/* -------------------- PEOPLE ------------ */}
    
     <div style={{padding:'20px 120px 20px 120px', fontWeight:'bold', fontSize:'22px', backgroundColor: 'rgba(200, 216, 228, 0.5)'}}>
       TALENTED PEOPLE
    </div>

    <div style={{display:'flex', backgroundColor: 'rgba(200, 216, 228, .5)' }}>
        <div style={{ fontFamily:'Helvetica' ,padding:'0px 80px 20px 120px',alignSelf:'center',width:'60%' , fontSize:'18px'}}>
        ACT strives to hire dedicated agents at the top of their trade that make a career out of their craft. They don’t just deliver a scripted message — they become a real, human voice for your company.<br></br><br></br>

On top of vigorous best-practice training for properly interfacing with your customers, ACT agents are thoroughly versed in the specifics of your program. This allows them to speak confidently and naturally about your products or services, without sounding scripted. Agents are given continued education, then routinely reviewed and tested to ensure compliance and continuity in your messaging.<br></br><br></br>

We work nationwide 24/7 from domestic and near-shore operation centers, providing service in 8 different languages including English, Spanish, Mandarin, Cantonese, Punjabi, Vietnamese, Armenian, and Tagolog.<br></br><br></br>
            <Button style={{color:'purple'}} variant="outline-info">Get Started Today</Button>
        </div>

        <div  style={{padding:'0px 120px 20px 0px',alignSelf:'center',width:'45%'}} >
            <img
            src={PEOPLE}
            alt="our_people"
            width ={ 500}
    
            />
        </div>
    </div>    


                 {/* -------------------- PROVEN PROCESS ------------ */}
    <div style={{padding:'20px 120px 20px 120px', fontWeight:'bold', fontSize:'22px'}}>
         Proven Process
    </div>
    <div style={{padding:'0px 120px 20px 120px',alignSelf:'center'}}>
        At ACT, our proven process starts with a thorough understanding of your specific needs, and ends with a customized solution where performance is tightly managed and results are measured.
    </div>

    <div style={{display:'flex'}}>
        <div style={{ fontFamily:'Helvetica' ,padding:'0px 80px 20px 120px',alignSelf:'center',width:'50%' , fontSize:'18px'}}>
            <p style={{color:'purple', fontWeight:'bold'}}>Custom Solutions</p>
            This starts with a highly refined base routine for each solution, one that is already proven and subsequently evolved with our knowledge and experience from more than 17 years in business. From there, we analyze the specific needs of your project and utilize Six Sigma methodologies to efficiently adapt the solution to your specific goals.<br></br><br></br>
Your ACT project managers work with you to develop a communication strategy that not only delivers superior results, but will do so on the timeline you need and with a budget you can afford. Don’t see your particular industry listed or the service you need mentioned anywhere? It’s only because this website would need to be endless to list them all. Contact us today to discuss a custom program developed for your unique needs.<br></br><br></br>
            <Button style={{color:'purple'}} variant="outline-info">Get Started Today</Button>

        </div>
        <div style={{ fontFamily:'Helvetica', padding:'0px 80px 175px 120px',alignSelf:'center', width:'50%' , fontSize:'18px'}}>
            <p style={{color:'purple', fontWeight:'bold'}}>Performance Monitoring</p>
    The ACT Difference doesn’t stop once the program starts. ACTs operations team has the experience to deliver ongoing improvements and results. Combined with real-time performance tracking scorecards to custom reports we not only ensure quality service and compliance, but are able to provide you with access to deep analytics about your program as a whole.<br></br><br></br>

Paired with our experienced work force management team, you’re able to make accurate call forecasting and set reliable expectations.<br></br><br></br>

        </div>
    </div>

          {/* -------------------- LEADING EDGE TECHNOLOGY ------------ */}
    <div style={{ backgroundColor: 'rgba(200, 216, 228, 0.5)'}}>

        <div style={{padding:'80px 120px 0px 120px', fontWeight:'bold', fontSize:'22px'}}>
            Leading Edge Technology
        </div>
        <div style={{padding:'20px 120px 0px 120px',alignSelf:'center'}}>
            At ACT, our proven process starts with a thorough understanding of your specific needs, and ends with a customized solution where performance is tightly managed and results are measured.
        </div>

        <div style={{display:'flex'}}>
            <div style={{ fontFamily:'Helvetica' ,padding:'0px 80px 20px 120px',alignSelf:'center',width:'50%' , fontSize:'18px'}}>
                <p style={{color:'purple', fontWeight:'bold'}}>Multi-Channel-Solutions</p>
                Whether it’s phone, chat, email, or direct mail, our programs incorporate multiple channels to match your customers preferred communication method. This now includes self-service options such as custom Interactive Voice Response (IVR) platform development, to engage your customers with automated voice, web chat, and e-mail correspondence options.<br></br><br></br>
                <p style={{color:'purple', fontWeight:'bold'}}>Multi-Channel-Solutions</p>
                Our large call centers have the ability to handle programs of any size. Once launched, they can scale up to meet your growing need for additional resources or services. This also greatly reduces the lead time required to deploy new programs.<br></br><br></br>
                <Button style={{color:'purple'}} variant="outline-info">Get Started Today</Button>

            </div>
            <div style={{ fontFamily:'Helvetica', padding:'0px 80px 175px 120px',alignSelf:'center', width:'50%' , fontSize:'18px'}}>
                <p style={{padding:'90px 0px 0px 0px',color:'purple', fontWeight:'bold'}}>Compliance</p>
                Industry and regulatory standards and extensively documented processes and procedures are particular important in managing our business. ACT transparent partnership philosophy gives you the peace of mind, things are done right.<br></br><br></br>ACT is PCI, ISO 27001, GDPR, GLBA, SOC 1 and SOC 2 compliant.<br></br><br></br>

                <p style={{padding:'0px 0px 0px 0px',color:'purple', fontWeight:'bold'}}>Big Data</p>
                Data capture and analysis is at the heart of ACT’s commitment to driving key performance metrics, customer behavioral trends and preferences, upstream problem solving and downstream satisfaction ratings.
            </div>
        </div>

    </div>
    
    </>
  )
}

export default About