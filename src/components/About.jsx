import React from 'react'
import wwd from '../Images/what-we-do.jpeg'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import peoplePic from '../Images/our_people.jpeg'
import processPic from '../Images/our_process.jpeg'
import techPic from '../Images/our_tech.jpeg'

const About= () => {
  return (
    <>
    <br></br>
    {/* -------------------- ABOUT COMPANY ------------ */}
    <div style={{ padding:'20px 120px 20px 120px', backgroundColor:'rgba(119, 180, 250, 0.5)', display:'flex'}}>
        <div style={{ fontFamily:'sans-serif', alignSelf:'center', fontWeight:'bold' , width:'30%', fontSize:'30px'}}>
            ABOUT COMPANY
        </div>
        <div style={{ width:'70%'}}>
        Specializing in sales support, multi-channel customer service, account services, fraud investigation, dispute resolution, process automation.
        </div>
    </div>

    {/* -------------------- COMPANY OVERVIEW ------------ */}
   
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

    {/* -------------------- WHAT WE DO ------------ */}

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

    <div style={{backgroundColor: 'rgba(200, 216, 228, .5)' }}>
    <div style={{fontWeight:'bold', fontFamily:'Helvetica' ,padding:'20px 80px 20px 120px',alignSelf:'center',width:'50%', color:'' , fontSize:'20px'}}>
        A Brief Look at a Selection of our Services:
    </div>
    </div>

    <div style={{display:'flex',  backgroundColor: 'rgba(200, 216, 228, .5)'}}>
    <ul style={{padding:'20px 120px 20px 140px',width : '50%'}}>
        <li>Sales Support</li>
        <li>Cross-Sell / Upsell</li>
        <li>Customer Courtesy</li>
        <li>B2B / Commercial Service</li>
        <li>Multi-Channel Customer Service</li>
        <li>Relationship Management</li>
    </ul>

    <ul style={{padding:'20px 120px 20px 140px',width : '50%'}}>
        <li>Customer Relationship</li>
        <li>Dispute Resolution</li>
        <li>Verification Services</li>
        <li>Document / Order Management</li>
        <li>Process Automation</li>
        <li>Interactive Voice Response Systems</li>
    </ul>
    </div>

     {/* -------------------- CCP CARD ------------ */}

     <div style={{backgroundColor: 'rgba(200, 216, 228, .5)' }}>
        <CardGroup style={{padding:'20px 120px 20px 120px'}}> 

        <Card>
            <Card.Body style={{backgroundColor: 'rgba(200, 216, 228, .5)'}} >
            <Card.Title style={{color:'rgba(52,168, 235, 1)'}}>Custom Programs</Card.Title>
            <Card.Text>
            Our Companys strives to hire the most dedicated agents at the top of their trade. They don’t just deliver your message — they become the voice of your company, confident about your products and brand.
            </Card.Text>
            </Card.Body>
        </Card>

        <Card>
            <Card.Body style={{backgroundColor: 'rgba(200, 216, 228, .5)' }}>
            <Card.Title style={{color:'rgba(52,168, 235, 1)'}}>Compliance</Card.Title>
            <Card.Text>
            Our cost-effective solutions are based on proven and reliable processes that we have spent years developing and constantly refining through the use of performance-based analytics.{' '}
            </Card.Text>
            </Card.Body>
        </Card>

        <Card>
            <Card.Body style={{backgroundColor: 'rgba(200, 216, 228, .5)' }}>
            <Card.Title style={{color:'rgba(52,168, 235, 1)'}}>Performance Analysis</Card.Title>
            <Card.Text>
            From big data to program metric analysis, and from scalable call centers to cutting-edge IVR solutions, ACT delivers consistent results using the latest smart technology.
            </Card.Text>
            </Card.Body>
        </Card>
        
        </CardGroup>

                        {/* SEE SOLUTION BUTTON */}
        <div style={{padding:'0px 0px 20px 535px'}}>
            <Button variant="info">See Solution</Button>
        </div>
        
    </div>
    <div style={{padding:'0px 0px 20px 510px', fontSize:'30px', fontWeight:'bold'}}>
        How We Do It
    </div>
   <div style={{fontSize:'15px', textAlign:'center', padding:'0px 150px 20px 120px'}}>
   Call Center isn’t just an outsourced solutions provider — we become a true partner, an extension of your business
that is committed to delivering you world-class results and promoting your brand.
   </div>


     {/* ---------------------------PPT CARDS---------------------- */}
   <CardGroup style={{padding:'20px 120px 20px 120px'}}> 

      <Card>
        <Card.Img variant="top" src={peoplePic} style={{alignSelf:'center',width:"100%"}} />
        <Card.Body>
          <Card.Title style={{color:'rgba(52,168, 235, 1)'}}>Our People</Card.Title>
          <Card.Text>
          Our Companys strives to hire the most dedicated agents at the top of their trade. They don’t just deliver your message — they become the voice of your company, confident about your products and brand.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img variant="top" src={processPic} style={{alignSelf:'center',width:"100%"}}/>
        <Card.Body>
          <Card.Title style={{color:'rgba(52,168, 235, 1)'}}>Our Process</Card.Title>
          <Card.Text>
          Our cost-effective solutions are based on proven and reliable processes that we have spent years developing and constantly refining through the use of performance-based analytics.{' '}
          </Card.Text>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img variant="top" src={techPic}  style={{alignSelf:'center',width:"100%"}}/>
        <Card.Body>
          <Card.Title style={{color:'rgba(52,168, 235, 1)'}}>Our Technology</Card.Title>
          <Card.Text>
          From big data to program metric analysis, and from scalable call centers to cutting-edge IVR solutions, ACT delivers consistent results using the latest smart technology.
          </Card.Text>
        </Card.Body>   
      </Card>

    </CardGroup>


                     {/* --------------DIFFERENCES  BUTTON ------------*/}
    <div style={{padding:'0px 0px 20px 500px'}}>
        <Button variant="info">Learn About Differences</Button>
    </div>

    {/* --------------------NEXT SOLUTION------------ */}
    <div style={{ padding:'20px 120px 20px 120px', backgroundColor:'rgba(119, 180, 250, 0.5)'}}>
        <div style={{ fontFamily:'sans-serif', alignSelf:'center' , fontSize:'30px'}}>
            Next: <p style={{fontSize:'30px', fontWeight:'bold', color:'black' }}>SOLUTIONS</p> 
        </div>
        <div style={{fontSize:'20px'}}>
        Sales services, customer services, fraud and dispute management, back office management, and more—expert solutions for every industry.
        </div>
        <div style={{padding:'20px 0px 0px 0px'}}>
            <Button variant="info">Solutions </Button>
        </div>
    </div>
    <br></br>
    
    </>
  )
}

export default About