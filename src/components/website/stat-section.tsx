import SectionHeader from "./section-header";

export default function StatSection() {
  const stats = [
    {
      data: "3K+",
      title: "Visas approved",
    },
    {
      data: "5k+",
      title: "Students placed",
    },
    {
      data: "13+",
      title: "Countries",
    },
    {
      data: "9+",
      title: "Years of experience",
    },
  ];

  return (
    <section className="w-full md:w-8/12 mx-auto space-y-20 px-4 md:px-0">
      <div className="">
      <SectionHeader
        title="Our Statistics"
        heading="Our students are always happy"
        description="Ensuring our students' happiness is at the heart of everything we do. We pride ourselves on providing personalized support and guidance that goes beyond expectations."
      />
        <div className="mt-12">
          <ul className=" grid grid-cols-2 md:grid-cols-4 gap-12 ">
            {stats.map((item, idx) => (
              <li
                key={idx}
                className="text-center   mb-4 ">
                <h4 className="text-4xl text-primary-600 font-semibold">{item.data}</h4>
                <p className="mt-3 font-medium">{item.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
