const HealthGoals = () => {
  return (
    <section className="max-w-4xl mx-auto text-center py-12 px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
        Steps for visualizing You MyFitnessPal data 1-2-3
      </h2>

      <div className="flex flex-col items-center mt-10">
        <div className="flex flex-col md:flex-row items-center text-left gap-6">
          <img
            src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftrack-food-medium.bdcec284.png&w=828&q=75"
            alt="Track Food"
            className="rounded-lg w-full md:w-1/2"
          />
          <div className="md:w-1/2">
            <h3 className="text-blue-600 text-2xl font-bold">1</h3>
            <h4 className="text-xl font-semibold mt-2">
              Click On the Visualizations button on the Navbar
            </h4>
            <p className="text-gray-600 mt-1">
              After Clicking You will navigate to new page
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse items-center text-left gap-6">
          <img
            src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flearn-what-works-medium.7b1178f5.png&w=828&q=75"
            alt="Learn What Works"
            className="rounded-lg w-full md:w-1/2"
          />
          <div className="md:w-1/2">
            <h3 className="text-blue-600 text-2xl font-bold">2</h3>
            <h4 className="text-xl font-semibold mt-2">
              Click on choose file and upload it
            </h4>
            <p className="text-gray-600 mt-1">
              Upload Your csv file you want to visualize
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center text-left gap-6">
          <img
            src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fchange-your-habits-medium.30486d75.png&w=828&q=75"
            alt="Change Your Habits"
            className="rounded-lg w-full md:w-1/2"
          />
          <div className="md:w-1/2">
            <h3 className="text-blue-600 text-2xl font-bold">3</h3>
            <h4 className="text-xl font-semibold mt-2">click on visualize</h4>
            <p className="text-gray-600 mt-1">
              Once you click on Visualize button Char panel will open in front
              of You
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthGoals;
