import React from 'react'

const SubscribeToNewsletter = () => {
  return (
 <div>
  <div className="w-[90%] md:w-[75%] mt-8 h-auto text-center rounded-3xl text-white relative left-1/2 transform -translate-x-1/2 py-10 px-4">
    <p className="text-2xl md:text-3xl font-bold mb-6">
      Subscribe to our Newsletter for latest updates
    </p>

    {/* Input + Button Group */}
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
      <input
        type="email"
        placeholder="Enter your email address"
        className="rounded-3xl md:rounded-r-none focus:outline-amber-900 text-black px-4 h-[40px] w-[90%] md:w-[40%]"
      />
      <button
        className="rounded-3xl md:rounded-l-none bg-orange-600 hover:bg-orange-700 duration-300 text-black font-semibold h-[40px] w-[80%] md:w-[20%] mt-4 md:mt-0"
      >
        Subscribe Now
      </button>
    </div>
  </div>
</div>

  )
}

export default SubscribeToNewsletter