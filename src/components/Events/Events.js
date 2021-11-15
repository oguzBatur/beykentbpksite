import Etkinlikler from "../../Etkinlikler";
import Kart from "../Kart/Kart";
import { motion } from "framer-motion";

const putEvents = Etkinlikler.map(etkinlik => {
    return <Kart key={etkinlik.id} img={etkinlik.img} name={etkinlik.name} description={etkinlik.description} date={etkinlik.date} time={etkinlik.time}  />
})

const Events = () => {
    const parentItem = {
        visible: {opacity: 1, translateY:0, transition:{
            when: "beforeChildren",
            staggerChildren: 0.3
        }},
        hidden: {opacity: 1, translateY:0, transition:{
            when: "afterChildren"
            }}
    }

    return(
        <div className='etkinlikler-body'>
            <h1 className='etkinlikler-header'>
                Etkinlikler
            </h1>
            <motion.div animate='visible' initial='hidden' variants={parentItem} className='etkinlikler-grid'>
                {putEvents} 
            </motion.div>
            
        </div>
    )
}

export default Events;