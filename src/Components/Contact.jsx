import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me </p>
        </div>
        <div className="flex justify-center items-center">
          <form action="https://getform.io/f/ae752f89-08e5-427f-82d6-fe9e28e941aa" method="POST" className="flex flex-col w-full md:w-1/2">
            FullName : <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              className="p-2 bg-transparent border-2 text-white focus:outline-none"
              required
            />
         Email : <input
              type="text"
              name="email"
              placeholder="Enter Your Email"
              className=" p-2 bg-transparent border-2 text-white focus:outline-none"
              required
            />
            Enter Your Text : <textarea
              name="message"
              placeholder="Enter Your Message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              required
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's Talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
