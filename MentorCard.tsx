export interface Mentor {
  name: string;
  imageUrl: string;
  description: string;
  designation: string;
}

const MentorCard = ({ name, imageUrl, designation, description }: Mentor) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center transition-transform duration-300 hover:scale-105">
      <img
        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
        src={imageUrl}
        alt={`Photo of ${name}`}
      />
      <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
      <p className="text-sm text-gray-500 mb-2">{designation}</p>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default MentorCard;