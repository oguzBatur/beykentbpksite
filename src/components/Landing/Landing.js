import React from "react";
import {motion} from 'framer-motion';

class Landing extends React.Component{
    render()
    {
        const parentItem = {
            visible: {opacity: 1, translateY:0, transition:{
                when: "beforeChildren",
                staggerChildren: 0.4
            }},
            hidden: {opacity: 1, translateY:0, transition:{
                when: "afterChildren"
                }}
        }

        const item = {
            visible: {opacity: 1, translateY:0},
            hidden: {opacity: 0, translateY:10}
            
        }
        return(
           //Greeter Bitti. 
            <div className='landing'>
              <motion.div variants={parentItem} initial='hidden' animate='visible' className='greeter'>
                <img className='greeter-gif' alt='programming-gif' src='https://userscontent2.emaze.com/images/bd9d69b0-5ccc-4b30-bb65-e8c4d9d01845/8b32562fcb412bf135f6e386ab81462d.gif'/>
                <motion.h1 variants={item} className='greeter-header'>Beykent Üniversitesi <br/> Bilgisayar Programcılığı'na Hoşgeldin! </motion.h1>
                <motion.p variants={item}  className='greeter-p'>Merhaba Beykentli! Bilişim dünyasına merakın varmı? <br/> Eğer cevabın evetse,
                    seni aramızda görmek isteriz!
                </motion.p>
                <motion.a variants={item} className='greeter-join' href='https://forms.office.com/Pages/ResponsePage.aspx?id=QpjZUCrRXk-etZvqSaPKU5jFiXc_hRNEswNGGr1aS5RUMUtKS1pBMUhQVkJJTlJMNUc0MzczSUhNVyQlQCN0PWcu&qrcode=true' target='_blank' rel="noreferrer">
                    Aramıza Katıl!
                </motion.a>
              </motion.div>
              {/* <div  className='socials'>
                <a target='_blank' rel="noreferrer" href='https://www.instagram.com/bubpk/' className='social'>
                    <i className="fab fa-instagram "/>
                   <h2 className='instagram-header'>instagram'da bizi takip et!</h2> 
                </a>
                <a target='_blank' rel="noreferrer" href='https://www.instagram.com/bubpk/' className='social'>
                    <i className="fab fa-twitter "/>
                   <h2 className='instagram-header'>Twitter'da bizi takip et!</h2> 
                </a>
                <a target='_blank' rel="noreferrer" href='https://www.instagram.com/bubpk/' className='social'>
                    <i className="fab fa-linkedin "/>
                   <h2 className='instagram-header'>LinkedIn'de bizi takip et!</h2> 
                </a>
                <a target='_blank' rel="noreferrer" href='https://www.instagram.com/bubpk/' className='social'>
                    <i className="fab fa-github "/>
                   <h2 className='instagram-header'>Github'da bizi takip et!</h2> 
                </a>
              </div> */}
            </div>        

        )
    }
}

export default Landing;