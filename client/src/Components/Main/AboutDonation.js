import React from 'react'
import g1 from "../../assets/donation/f1.jpg"
import g2 from "../../assets/donation/f2.jpg"
import g3 from "../../assets/donation/f3.jpg"
import g4 from "../../assets/donation/f4.jpg"
import g5 from "../../assets/donation/f5.jpg"
import g6 from "../../assets/donation/f6.jpg"


const AboutDonation = () => {
    const data = [
        { title: "Registration", img: g1 },
        { title: "Seeing", img: g2 },
        { title: "Donation", img: g3 },
        { title: "Save Life", img: g4 },
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
        <section className="grid place-items-center dark:text-white-900">
            <div className="container">
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
            </div>
            <div className='w-full bg-blood pt-6 pb-6 text-white-900 h-max text-sm text-center font-bold'>
                <code>© {new Date().getFullYear()} Blood Transfusion Safety </code>
            </div>
        </section>
    )
}

export default AboutDonation