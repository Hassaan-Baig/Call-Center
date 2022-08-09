import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import peoplePic from '../Images/our_people.jpeg'
import processPic from '../Images/our_process.jpeg'
import techPic from '../Images/our_tech.jpeg'
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../Images/callcenter1.jpg'
import image2 from '../Images/callcenter2.jpg'
import image3 from '../Images/callcenter3.jpg'
import './style.scss'
class CardHeader extends React.Component {
  render() {
    const { image } = this.props;
    var style = { 
        backgroundImage: 'url(' + image + ')',
    };
    return (
      <header style={style} id={image} className="card-header">
        <h4 className="card-header--title">News</h4>
      </header>
    )
  }
}

class Button extends React.Component {
  render() {
    return (
      <button className="button button-primary">
        <i className="fa fa-chevron-right"></i> Find out more
      </button>
    )
  }
}

class CardBody extends React.Component {
  render() {
    return (
      <div className="card-body">
        
        <h2>{this.props.title}</h2>
        
        <p className="body-content">{this.props.text}</p>
        
        <Button />
      </div>
    )
  }
}

class Card3 extends React.Component {
  render() {
    return (
      <article className="card">
        <CardHeader image={this.props.image}/>
        <CardBody title={this.props.title} text={this.props.text}/>
      </article>
    )
  }
}

export const Home = () => {
  return (

    < >
    {/*-------------------------__SLIDER__-----------------------*/}
   <Carousel className="Setting " variant="dark" style = {{  left: '0',top: '0', width: '66%',height: '100%', margin: 'auto', backgroundPosition:'center', backgroundSize:'cover', WebkitBackgroundSize:'cover'}}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 class="text-white bg-dark">Treat every call like it was your only call.</h3>
          <p class="text-white bg-dark" >ACT leverages industry best practices and operations expertise to meet the unique needs of your business.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 class="text-white bg-dark">Don't just make a sale;  secure a long-term customer.</h3>
          <p class="text-white bg-dark">Optimize sales by developing great customer relationships.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 class="text-white bg-dark">Everyone remembers great customer service.</h3>
          <p class="text-white bg-dark">
          Every campaign includes integrated quality assurance and compliance measures to ensure your customers always have the best possible experience.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    {/* Cards */}
  <div className='Cardsalignment'>
      <Card3 
        image={'https://source.unsplash.com/user/erondu/600x400'} 
        title={'What happened in Thialand?'}
        text={'Kayaks crowd Three Sister Springs, where people and manatees maintain controversial coexistence'}
      />
      
      <Card3 
        image={'https://source.unsplash.com/user/erondu/600x400'} 
        title={'What happened in Thialand?'}
        text={'Kayaks crowd Three Sister Springs, where people and manatees maintain controversial coexistence'}
      />
      
      <Card3 
        image={'https://source.unsplash.com/user/erondu/600x400'} 
        title={'What happened in Thialand?'}
        text={'Kayaks crowd Three Sister Springs, where people and manatees maintain controversial coexistence'}
      />
      
      <Card3 
        image={'https://source.unsplash.com/user/erondu/600x400'} 
        title={'What happened in Thialand?'}
        text={'Kayaks crowd Three Sister Springs, where people and manatees maintain controversial coexistence'}
      />
    </div>
   {/*-------------------------__CEO-MESSAGE__-----------------------*/}

    <p style={{padding:'20px 120px 20px 120px', backgroundColor:'rgba(200, 216, 228, 1)'}}>
    <p style={{fontFamily:'ariel', alignItems:'center'}}>
        “We have found ACT to be a tremendously flexible partner. They have been able to provide solutions to our business needs with impressive turnaround times.  We also value their focus and commitment to quality and compliance.”

— VP – Centralized Servicing Top 3 Personal Finance Company

“ACT is a partner that consistently demonstrates their ability to anticipate our needs, proactively develop solutions for problems, and customize processes that are specific to my business, while providing superior performance, quality and customer experience. They are an invaluable partner who has been with us since 2006, and who continues to facilitate our growth for tomorrow.”

— Business Leader, Top 10 Bank

“When seeking a company to support the business we chose to outsource, Our Company rose to the top of contenders. At introduction, they demonstrated business acumen and a deep understanding of our business. Over the years, we have experienced strong and consistent service metrics balanced with high “quality” standard achievement and a commitment to  streamline processes in order to move the business forward. We have grown together over the years as a result of the commitment of all of the staff. I have and will continue to recommend the services of ACT to my business contacts.”
    </p>

    <p>
        -Company's Head
    </p>
    </p>
   
   {/*-------------------------__CARD__-----------------------*/}
    
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
    </>
  );
};
