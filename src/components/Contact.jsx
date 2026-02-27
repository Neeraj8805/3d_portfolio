import { useState,useRef } from "react"
import {motion} from "framer-motion"
import emailjs from "@emailjs/browser"


import {styles} from "../styles.js"
import { EarthCanvas } from "./canvas/index.js"
import SectionWrapper from "../hoc/SectionWrapper.jsx"
import { fadeIn, slideIn } from "../utils/motion.js"


import { toast, ToastContainer } from "react-toastify"

const Contact = () => {

  const formRef=useRef();

  const [form,setForm]=useState(
    {
      name : "",
      email : "",
      message : ""
    }
  )

  const [loading,setLoading]=useState(false);

    const handleChange=(e)=>{

    const {name,value} =e.target;

    setForm({...form,[name]:value});

  }

  const handleSubmit=(e)=>{
    e.preventDefault();

    setLoading(true);

    toast.success("Message Sent Successfully, I will get back to you Soon!");
  }

  return (
  <>

      <div className="xl:mt-12 xl:flex-row flex flex-col-reverse gap-10 overflow-hidden">

          <motion.div
            variants={fadeIn("","",0.2,1)}

            className=" w-full bg-black-100 p-8 rounded-2xl"
          >

                <p className={`${styles.sectionSubText}`}>Get in touch</p>
                <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>


                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="mt-12 flex flex-col gap-8"
                >

                    <label className="flex flex-col ">

                          <span className="text-white font-medium mb-4">Your Name</span>

                          <input type="text" name="myname" value={form.name} onChange={handleChange} placeholder="What's your name?" 

                          className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"

                          />

                    </label>




                    <label className="flex flex-col ">

                          <span className="text-white font-medium mb-4">Your Email</span>

                          <input type="text" name="myemail" value={form.email} onChange={handleChange} placeholder="What's your email?" 

                          className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"

                          />

                    </label>






                    <label className="flex flex-col ">

                          <span className="text-white font-medium mb-4">Your Message</span>

                          <textarea rows="7" name="mymessage" value={form.message} onChange={handleChange} placeholder="What do you want to say?" 

                          className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"

                          />

                    </label>


                    <button type="submit"

                        className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
                    
                    >{loading ? "Sending" : "Send"}</button>

                </form>
          </motion.div>



      </div>


    <ToastContainer position="top-center" className="mt-[90px]"/>
  
  </>
  )
}

export default SectionWrapper(Contact,"contact");

