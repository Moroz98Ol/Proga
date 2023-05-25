import React from 'react'
import {motion} from 'framer-motion'
import '../App.css'

const Description = () => {
  return (
    <div> 
      <motion.div id='div2'
          initial= {{
              scale: 0.1,
              opacity: 0
            }}
          animate= {{
            scale: 1,
            opacity: 1,
            }}
          transition={{
              duration: 2,
              delay: 0,
            }}>

     <motion.img  
     src='/img/Logo1.png'
     className='Logo1'
     width={550}

    initial= {{
      opacity: 1,
    }}

    transition={{
      duration: 2,
    }}
     ></motion.img>

    </motion.div>

    < motion.div id='div1'
    initial= {{
      x: -100,
      opacity: 0
    }}
    animate= {{
          x: 0,
          opacity: 1
        }}
        transition={{
          duration: 2,
          delay: 2,
          type: 'spring',
        }}
    >
      Orpheus <br></br>
      Это место, где продается широкий ассортимент музыкальных инструментов, аппаратуры и аксессуаров. 
       В магазине можно найти гитары, барабаны, клавишные, духовые и струнные инструменты, а также звуковые установки, микрофоны, наушники, кабели и другие аксессуары, необходимые музыкантам и любителям музыки.
       Здесь вы можете найти все необходимое для того, чтобы начать изучать музыку или развивать свой музыкальный талант, а также приобрести качественную аппаратуру для выступлений и записей. 
      </motion.div>

      <motion.div id='div3'
          className="box"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 700, damping: 5 }}>
            <motion.img 
            src='img/1111.png'
            width={400}
            >
            </motion.img>
     </motion.div>

      
    

  </div>
  )
}

export default Description