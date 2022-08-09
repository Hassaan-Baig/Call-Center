import CSC from '../Images/csc.jpeg'
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom';



const Cyber= () => {
    const navigate = useNavigate();
    const navigateContact = () => {
        // 👇️ navigate to /
        navigate('/contact');
      };
    return (
        <>
            
            <br></br>
            {/* -------------------- CYBER SECURITY ------------ */}
            <div style={{ padding:'20px 120px 20px 380px', backgroundColor:'rgba(119, 180, 250, 0.5)', display:'flex'}}>
                <div style={{ fontFamily:'sans-serif', alignSelf:'center', fontWeight:'bold' , fontSize:'25px'}}>
                CYBER SECURITY CONSULTANCY
                </div>
            </div>         
            <br></br>

             {/* -------------------- WHAT WE PROVIDE ------------ */}
    
            <div style={{padding:'20px 120px 20px 120px', fontWeight:'bold', fontSize:'22px', backgroundColor: 'rgba(200, 216, 228, 0.5)'}}>
            WHAT WE PROVIDE ?
            </div>

            <div style={{display:'flex', backgroundColor: 'rgba(200, 216, 228, .5)' }}>
                <div style={{ fontFamily:'Helvetica' ,padding:'0px 80px 20px 120px',alignSelf:'center',width:'60%' , fontSize:'18px'}}>
                    We offer SOC analyst personells who will monitor and triage your log and system/server hardening services both on premise and on cloud. we also offer installation of configuration of NIDS/NIPS network intrusion detection and Network intrusion prevention like snort, cisco firewall and Splung of universal package forwarding.<br></br><br></br>
                    <Button style={{color:'purple'}} variant="outline-info" onClick={navigateContact}>Get Started Today</Button>
                </div>

                <div  style={{padding:'0px 120px 20px 0px',alignSelf:'center',width:'45%'}} >
                    <img
                    src={CSC}
                    alt="CSC"
                    width ={ 500}
            
                    />
                </div>
            </div> 
            <br></br>   

     
      
        </>
    )
  }
  
  export default Cyber