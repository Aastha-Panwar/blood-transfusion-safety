import React from 'react'
import bg2 from "../../assets/bg2.jpg";

const About = () => {
  return (
    <div>
    <div className='px-44'>
            {/* <p className='text-4xl pt-5 font-bold text-center mt-4'>About Blood Transfusion Safety</p> */}
      <div className='grid grid-cols-2 place-items-center mt-8 px-42'>
                <div>
                    <p className='text-center font-bold text-4xl text-gray-dark dark:text-white-900'>
                        Be the<br /> reason for <br />someone's heartbeat
                    </p>
                </div>
                <div>
                    <img draggable={false} src={bg2} width="100%" alt="" />
                </div>
            </div>
      <br /><p className='text-xl'>BTS works as a platform for users to register as blood to either request/donate blood and blood banks to manage their stocks by managing the pending donations and request along with scheduling blood camps and managing them. The system will authenticate the user/bank using their username(mobile) and password to further perform other actions.</p>
      <br /><p className='text-xl'>Blood Transfusion Safety remains an important public health concern in India.
The availability of blood products of all blood types and the provision of its
safety ensure public trust of its excellent healthcare system. Through the use of
online blood bank system, blood transfusion safety is expected to be enhanced or
improved. Risks on improper blood donors’ documentation, and misplaced
records can be minimized or totally avoided. Also, processes involving blood
bag collection, storage, and inventory will be systematized and organized, hence,
improving the healthcare management. </p>
      <br /><p className='text-xl'>It includes managing and tracking blood donations, connecting donors with recipients, and providing real-time information on blood shortages and needs. The platform will include both a user-facing interface and an blood bank’s interface for managing the data.</p>
      <p className='text-right text-5xl'>
        <br />
        {/* <a target="_blank" href="https://github.com/Aastha-Panwar/" className='hover:drop-shadow-md hover:text-purple'><i class="fa-brands fa-github"></i></a>&nbsp;&nbsp;&nbsp;
        <a target="_blank" href="https://www.linkedin.com/in/aasthapanwar0710/" className='hover:drop-shadow-md hover:text-metal'><i class="fa-brands fa-linkedin"></i> </a>&nbsp;&nbsp; */}
      </p>
    </div>
    <div className='w-full bg-blood pt-6 pb-6 text-white-900 h-max text-sm text-center font-bold'>
                <code>© {new Date().getFullYear()} Blood Transfusion Safety </code>
            </div>

    </div>
  )
}

export default About