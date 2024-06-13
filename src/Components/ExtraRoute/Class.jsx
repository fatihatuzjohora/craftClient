import { Typewriter } from "react-simple-typewriter";

const Class = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-5 mb-5">
      <Typewriter
            words={['Our People Saying & Achievement',]}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          /> 
      </h1>
      <section className="p-6 ">
        <div className="container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-3">
          <div className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-4xl font-bold leading-none lg:text-6xl">50+</p>
            <p className="text-sm sm:text-base">Clients</p>
          </div>
          <div className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-4xl font-bold leading-none lg:text-6xl">89K</p>
            <p className="text-sm sm:text-base">Followers on social media</p>
          </div>
          <div className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-4xl font-bold leading-none lg:text-6xl">3</p>
            <p className="text-sm sm:text-base">Published books</p>
          </div>
          <div className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-4xl font-bold leading-none lg:text-6xl">99K</p>
            <p className="text-sm sm:text-base">Sell Happyly</p>
          </div>
          <div className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-4xl font-bold leading-none lg:text-6xl">22</p>
            <p className="text-sm sm:text-base">Years of experience</p>
          </div>
          <div className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-4xl font-bold leading-none lg:text-6xl">10+</p>
            <p className="text-sm sm:text-base">Workshops</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Class;
