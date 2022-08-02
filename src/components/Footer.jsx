import React from 'react';
import { CDBFooter, CDBFooterLink, CDBBox, CDBBtn, CDBIcon } from 'cdbreact';
import mylogo from '/Users/hassaanbaig/Desktop/call_center/src/Images/call-center-service.png';

export const Footer = () => {
  return (
    <CDBFooter className="shadow" >
    <CDBBox style={{backgroundColor:'rgba(200, 216, 228, 1)'}}>
      <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%'}}>
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox>
            <a href="/" className="d-flex align-items-center p-0 text-dark">
              <img alt="logo" src={mylogo} width="30px" />
              <span className="ml-3 h5 font-weight-bold">CT CALL CENTER</span>
            </a>
            <p className="my-3" style={{ width: '250px' }}>
            Our Company strives to hire the most dedicated agents at the top of their trade. They don’t just deliver your message — they become the voice of your company, confident about your products and brand.
            </p>
            <CDBBox display="flex" className="mt-4">
              <CDBBtn flat color="dark">
                <CDBIcon fab icon="facebook-f" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="mx-3">
                <CDBIcon fab icon="twitter" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="p-2">
                <CDBIcon fab icon="instagram" />
              </CDBBtn>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
             Contact Information
            </p>
            <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <CDBFooterLink href="/">Resources</CDBFooterLink>
              <CDBFooterLink href="/">About Us</CDBFooterLink>
              <CDBFooterLink href="/">Contact</CDBFooterLink>
              <CDBFooterLink href="/">Blog</CDBFooterLink>
            </CDBBox>
          </CDBBox>

         

          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Latest News
            </p>
            <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
                <CDBFooterLink href="/">News 1</CDBFooterLink>
                <CDBFooterLink href="/">News 2</CDBFooterLink>
                <CDBFooterLink href="/">News 3</CDBFooterLink>
                <CDBFooterLink href="/">News 4</CDBFooterLink>
            </CDBBox>
          </CDBBox>
        </CDBBox>
       
      </CDBBox>
    </CDBBox>

      {/*--------------------------------------------------------------- */}

      <CDBBox style={{backgroundColor:'rgba(43, 103, 119, 0.5)'}}>
      <CDBBox
        display="flex"
        justifyContent="between"
        alignItems="center"
        className="mx-auto py-4 flex-wrap"
        style={{ width: '80%'}}
      >
        <CDBBox display="flex" alignItems="center">
          <a href="/" className="d-flex align-items-center p-0 text-dark">
            <img
              alt="logo"
              src={mylogo}
              width="30px"
            />
            <span className="ml-4 h5 mb-0 font-weight-bold">CT CALL CENTER</span>
          </a>
        </CDBBox>
       
        <CDBBox display="flex">
            <CDBFooterLink href="/" style={{display: "flex",  margin: "10px"}}>Resource   </CDBFooterLink>
            <CDBFooterLink href="/" style={{display: 'flex',  margin: "10px"}}>About Us  </CDBFooterLink>
            <CDBFooterLink href="/" style={{display: 'flex',  margin: "10px"}}>Contact  </CDBFooterLink>
            <CDBFooterLink href="/" style={{display: 'flex',  margin: "10px"}}>Blog  </CDBFooterLink>
        </CDBBox>
      </CDBBox>
      </CDBBox>  
    </CDBFooter>
  );
};
