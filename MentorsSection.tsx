import MentorCard, { type Mentor } from "@/components/MentorCard";

interface MentorsSectionProps {
  mentors: Mentor[];
  title?: string;
  subtitle?: string;
}

const MentorsSection = ({
  mentors,
  title = "Meet Our Mentors",
  subtitle = "Get guidance from industry experts who are passionate about helping you succeed.",
}: MentorsSectionProps) => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{title}</h2>
          <p className="mt-4 text-lg leading-6 text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {mentors.map((mentor) => (
            <MentorCard key={mentor.name} {...mentor} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MentorsSection;