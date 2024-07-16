type Props = {
  title?: string;
  heading?: string;
  description?: string;
};

export default function SectionHeader({ title, heading, description }: Props) {
  return (
    <div className="max-w-xl space-y-3 mb-12">
      <h3 className="text-primary-600 font-semibold tracking-wide leading-relaxed ">
        {title}
      </h3>
      <p className="text-gray-800/95 text-3xl font-semibold sm:text-4xl  ">
        {heading}
      </p>
      <p className=" text-gray-600  tracking-wide leading-relaxed">
        {description}
      </p>
    </div>
  );
}
