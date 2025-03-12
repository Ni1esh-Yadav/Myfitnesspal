import HealthGoals from "./HealthGoals";

const HeroSection = () => {
  return (
    <div>
      <section className="bg-gradient-to-b from-blue-600 to-blue-400 text-white py-16 px-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center py-10">
          {/* Left Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-sm font-semibold text-yellow-200 uppercase">
              #1 nutrition tracking app
            </h3>
            <h1 className="text-6xl leading-relaxed font-semibold">
              Nutrition tracking <br />
              <span className="text-6xl leading-relaxed font-semibold px-2">
                for
              </span>
              <span className="bg-white text-blue-600 px-2">real life</span>
            </h1>
            <p className="text-base text-blue-200 mt-4">
              Make progress with the all-in-one food, exercise, and calorie
              tracker.
            </p>
            <button className="mt-6 bg-white text-blue-600 font-bold py-3 px-10 rounded-full shadow-lg hover:bg-gray-100 transition">
              PLEASE SCROLL ↓
            </button>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <img
              src="https://www.myfitnesspal.com/_next/image?url=%2Fpages%2Fhome%2Flogged-out-v2%2Fhero-phone-small.png&w=512&q=75"
              alt="MyFitnessPal App Preview"
              className="w-56 md:w-64 drop-shadow-2xl"
            />
          </div>
        </div>
      </section>
      <HealthGoals />
    </div>
  );
};

export default HeroSection;
