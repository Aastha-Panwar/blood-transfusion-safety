import React from 'react'
import cc from "../../assets/cntct1.png"
import bg2 from "../../assets/bg2.jpg";

const Contact = () => {
    const data = [
        {
            title: "Blood Tranfusion Safety related queries, feedback and suggestions", body: [
                "Aastha Panwar:",
                "Phone: 9584726563",
                "Email: aasthapanwar0710@gmail.com", 
                "---------------------------------------------",
                "Prachi Patel:",
                "Phone: 7470340467",
                "Email: prachipatel6665@gmail.com", 
                "---------------------------------------------", 
                "Prince Jain:",
                "Phone: 8602507530",
                "Email: princejainutd2000@gmail.com", 

            ]
        },
        // {
        //     title: "For Administrative queries", body: [
        //         "Blood Cell, National Health Mission",
        //         "Ministry of Health & Family Welfare,New Delhi - 110011"
        //     ]
        // },
        // { title: "For administrative queries", body: ["Blood Cell, National Health Mission", "Ministry of Health & Family Welfare,New Delhi - 110011"] }
    ];
    return (
        <div>
            <div className='grid grid-cols-2 place-items-center mt-8 px-52'>
            <div>
                    <img draggable={false} src={bg2} width="100%" alt="" />
                </div>
                <div>
                    <p className='text-center font-bold text-4xl text-gray-dark dark:text-white-900'>
                        Be the<br /> reason for <br />someone's heartbeat
                    </p>
                </div>
               
            </div>
            <div className='pt-6 pb-6'></div>

        <div className='px-44'><br />
            {/* <h1 className='text-center text-3xl font-bold'>Contact Details</h1><br /> */}
            
            <div className='flex justify-around'>
                <div>
                    {
                        data.map((e) => {
                            return (
                                <>
                                    <p className='text-xl font-bold'>{e.title}</p><br />
                                    <code>
                                        {e.body.map((k) => {
                                            return <p className='text-md'>{k}</p>
                                        })}
                                    </code><br />
                                </>
                            )
                        })
                    }
                </div>
                <div>
                    <img src={cc} draggable={false} width="90%" alt="" />
                    <h1 className='text-center text-3xl font-bold'>Contact Us</h1><br />
                </div>
            </div>
            
        </div>
        <div className='w-full bg-blood pt-6 pb-6 text-white-900 h-max text-sm text-center font-bold'>
                <code>© {new Date().getFullYear()} Blood Transfusion Safety </code>
            </div>
        </div>
        
    )
}

export default Contact