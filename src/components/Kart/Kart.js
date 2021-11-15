import { motion} from "framer-motion";

const Kart = ({name, description, date,time, img}) => {
    const item = {
        visible: {opacity: 1, translateY:0},
        hidden: {opacity: 0, translateY:10}
        
    }

    return(
        <motion.div variants={item}   whileHover={{scale:1.2}} whileTap={{scale:0.9}} className='kart-grid'>
            <img src={img} alt='etkinlik'/>
            <h1 className='etkinlik-name'>{name}</h1>
            <p className='etkinlik-desc'>{description}</p>
            <p className='etkinlik-date'>Tarih: {date}</p>
            <p className='etkinlik-time'>Zaman: {time}</p>

        </motion.div>
    )
}

export default Kart;