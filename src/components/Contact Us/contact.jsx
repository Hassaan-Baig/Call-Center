import React from 'react'
import { useState } from 'react'

export const Contact = () => {
    const [firstname, setfirstname] = useState('')
    const [lastname, setlastname] = useState('')
    const [jobtitle, setjobtitle] = useState('')
    const [companyname, setcompanyname] = useState('')
    const [phone, setphone] = useState('')
    const [email, setemail] = useState('')
    const [address, setaddress] = useState('')
    const [city, setcity] = useState('')
    const [state, setstate] = useState('')
    const [zip, setzip] = useState('')
    const [country, setcountry] = useState('')


    return (
    <>
        <div>Fill out the form below and we’ll get back to you as quickly as possible. If you need a quicker response, feel free to call us at 866-704-5580 or email us directly at info@acttoday.com.</div>
        <div className='create'>
            <form action="">
                <label >First Name : </label>
                <input type="text"  
                    required
                    value={firstname}
                    onChange={(e)=> setfirstname(e.target.value)}
                />
                <br />
                <label >Last Name : </label>
                <input type="text"  
                    required
                    value={lastname}
                    onChange={(e)=>setlastname(e.target.value) }
                />
                <br />
                <label >Job Title : </label>
                <input type="text"  
                    required
                    value={jobtitle}
                    onChange={(e)=>setjobtitle(e.target.value) }
                />
                <br />
                <label >Company Name : </label>
                <input type="text"  
                    required
                    value={companyname}
                    onChange={(e)=>setcompanyname(e.target.value) }
                />
                <br />
                <label >Phone : </label>
                <input type="number"  
                    required
                    value={phone}
                    onChange={(e)=>setphone(e.target.value) }
                />
                <br />
                <label >Email : </label>
                <input type="email"  
                    required
                    value={email}
                    onChange={(e)=> setemail(e.target.value)}
                />
                <br />
                <label >Address : </label>
                <input type="text"  
                    required
                    value={address}
                    onChange={(e)=>setaddress(e.target.value) }
                />
                <br />
                <label >City : </label>
                <input type="text"  
                    required
                    value={city}
                    onChange={(e)=>setcity(e.target.value) }
                />
                <br />
                <label >State : </label>
                <input type="text"  
                    required
                    value={state}
                    onChange={(e)=>setstate(e.target.value) }
                />
                <br />
                <label >Zip : </label>
                <input type="number"  
                    required
                    value={zip}
                    onChange={(e)=>setzip(e.target.value) }
                />
                <br />
                 <label >Country : </label>
                <input type="text"  
                    required
                    value={country}
                    onChange={(e)=>setcountry(e.target.value) }
                />
                <br />
                
            </form>
        </div>
    </>
    )
}
