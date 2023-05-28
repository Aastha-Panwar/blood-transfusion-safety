import React from 'react'
import bg from "../../assets/bnr0.jpg";
import bg2 from "../../assets/bg2.jpg";
import bg3 from "../../assets/img3.jpg";

import donationFact from "../../assets/donationFact.webp"
import g1 from "../../assets/donation/f1.jpg"
import g2 from "../../assets/donation/f2.jpg"
import g3 from "../../assets/donation/f3.jpg"
import g4 from "../../assets/donation/f4.jpg"
import g5 from "../../assets/donation/f5.jpg"
import g6 from "../../assets/donation/f6.jpg"

const Home = () => {
    const temp = [
        { blood: "A+", donate: "A+ AB+", recieve: "A+ A- O+ O-" },
        { blood: "O+", donate: "O+ A+ B+ AB+", recieve: "O+ O-" },
        { blood: "B+", donate: "B+ AB+", recieve: "B+ B- O+ O-" },
        { blood: "AB+", donate: "AB+", recieve: "Everyone" },
        { blood: "A-", donate: "A+ A- AB+ AB-", recieve: "A- O-" },
        { blood: "O-", donate: "Everyone", recieve: "O-" },
        { blood: "B-", donate: "B+ B- AB+ AB-", recieve: "B- O-" },
        { blood: "AB-", donate: "AB+ AB-", recieve: "AB- A- B- O-" }
    ]
    const temp2 = [
        { title: "Donor Login/Register", img: g2, desc:"Provide a dedicated login and registration functionality specifically for blood donors. Donors can create accounts or log in to access features related to blood donation." },
        { title: "Patient Login/Register", img: g3, desc:"Offer a separate login and registration system for patients in need of blood. Patients can create accounts or log in to request blood or interact with donors." },
        { title: "Blood Bank Login", img: g5, desc:"Provide a login system for authorized personnel to access the blood bank's administrative features. This feature enables blood bank staff to manage and update blood-related information." },
        { title: "Blood Donation Camps", img: g4, desc:"Display information and details about upcoming blood donation camps. Users can find relevant information such as camp locations, dates, and registration processes." },
        { title: "Blood Bank Directory", img: g1, desc:"Allow users to create accounts and securely log in to the website. Enable new users to register by providing their necessary information." },
        { title: "Add Your Bloodbank", img: g6, desc:"Allow users to add information about their own blood banks. Users can provide details such as the blood bank's location, contact information, and services offered." },
    ]
    return (
        <div className="dark:text-white-900">
            <img className="home_bnr" src={bg} alt="" />
            <div className='grid grid-cols-2 place-items-center mt-8 px-52'>
                <div>
                    <p className='text-center font-bold text-4xl text-gray-dark dark:text-white-900'>
                        Be the<br /> reason for <br />someone's heartbeat
                    </p>
                </div>
                <div>
                    <img draggable={false} src={bg2} width="100%" alt="" />
                </div>
            </div>
            <div className='grid grid-cols-2 place-items-center mt-8 mb-8 px-52'>
                <div>
                    <img draggable={false} src={bg3} width="100%" alt="" />
                </div>
                <div>
                    <p className='pl-10 text-left text-2xl text-gray-dark dark:text-white-900'>
                    After donating blood, the body works to replenish the blood loss. This stimulates the production of new blood cells and in turn, helps in maintaining good health.
                    </p>
                </div>
            </div>
            {/* <h1 className='font-bold text-center text-blood my-4 text-lg underline'>Learn About Donation</h1> */}
            
            <p className='text-4xl font-bold text-blood text-center mt-6 mb-6'>
                Features
            </p>
            <div className='grid grid-cols-3 place-items-center pl-6 pr-6'>
                {temp2.map((e, i) =>
                    <div className='border-metal shadow-md rounded-lg overflow-hidden max-w-[90%] select-none grid grid-cols-1 mt-5 mb-5'>
                        <div><img src={e.img} draggable={false} width="100%" alt="" /></div>
                        <div className='m-4'>
                            <h1 className='font-bold text-lg text-midnight dark:text-white-900'>{i + 1}. {e.title}</h1>
                            <p className='text-justify'>{e.desc}</p>
                            {/* <p className='text-justify'>hjfdjfhbLorem ipsum dolor, sit amet consectetur qwey adipisicing elit. Doloribus, as aliquam corporis dolorem consectetur qui libero, veritatis, nihil alias repellat quam architecto nobis laudantium ipsum nemo nesciunt quisquam est odit ad?</p> */}
                        </div>
                    </div>
                )}
            </div>
            <div className='pt-6 pb-6'></div>

            <div className='flex px-20 vcenter'>
                <div>
                    <img src={donationFact} width="90%" alt="" />
                    {/* <p className='text-center'>
                        <code>After donating blood, the body works to replenish the blood loss. This stimulates the production of new blood cells and in turn, helps in maintaining good health.</code>
                    </p> */}
                </div>
                <div>
                    <table className='w-max' cellPadding={5}>
                        <tr>
                            <td colSpan={3} className="border bg-blood text-white-900 text-center font-bold">Compatible Blood Type Donors</td>
                        </tr>
                        <tr>
                            <th className='border w-max text-lg'>Blood Type</th>
                            <th className='border w-max text-lg'>Donate Blood To</th>
                            <th className='border w-max text-lg'>Receive Blood From</th>
                        </tr>
                        {temp.map((e) => {
                            return (
                                <tr>
                                    <td className='border w-max text-lg'>{e.blood}</td>
                                    <td className='border w-max text-lg'>{e.donate}</td>
                                    <td className='border w-max text-lg'>{e.recieve}</td>
                                </tr>
                            )
                        })}
                    </table>
                </div>
            </div>
            <br />
            <div className='w-full bg-blood pt-6 pb-6 text-white-900 h-max text-sm text-center font-bold'>
                <code>© {new Date().getFullYear()} Blood Transfusion Safety </code>
            </div>
        </div>
    )
}

export default Home