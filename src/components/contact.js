import React from 'react'

const Contact = () => {
  return (
    <div>
        <section class="text-gray-600 body-font relative">
  <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div class="lg:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
    <iframe
        width="100%"
        height="100%"
        class="absolute inset-0"
        frameborder="0"
        title="map"
        marginheight="0"
        marginwidth="0"
        scrolling="no"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.43633272584!2d88.4653976!3d22.7157683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f898b1484fffb5%3A0xcb91f67e86e9b877!2sGanguly%20St%2C%20Ramkrishnapally%2C%20Hridaypur%2C%20West%20Bengal%20700127!5e0!3m2!1sen!2sin!4v1690194552432!5m2!1sen!2sin"
        allowfullscreen
      ></iframe>
      <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
        <div class="lg:w-1/2 px-6">
          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
          <p class="mt-1">135/3A, 2ND FLOOR, B. B. GANGULY ST, Sankaritola,
          Kolkata, Sankaritola, West Bengal, India, 700012</p>
        </div>
        <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
          <a class="text-indigo-500 leading-relaxed">shantapathak9097@gamil.com</a>
          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
          <p class="leading-relaxed">+91 9547844835
          </p>
        </div>
      </div>
    </div>
    <div class="lg:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 text-left">
      <h2 class="text-gray-900 text-3xl mb-1 font-medium title-font">Get In Touch</h2>
      <p class="leading-relaxed mb-5 text-gray-600">We Are Bowerful Beyond Measures</p>
      <div class="flex flex-wrap -m-2">
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" id="name" name="name" placeholder='Your Name' class="w-full bg-gray-100 bg-opacity-50 rounded-full border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" placeholder='Your Email' class="w-full bg-gray-100 bg-opacity-50 rounded-full border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        </div>
      <div class="relative my-8">
        <label for="email" class="leading-7 text-sm text-gray-600">Phone No.</label>
        <input type="number" id="number" name="phone" placeholder='Your Phone Number' class="w-full bg-white rounded-full border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative mb-4">
        <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
        <textarea id="message" name="message" class="w-full bg-white rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Send Message</button>
     </div>
  </div>
</section>
    </div>
  )
}

export default Contact