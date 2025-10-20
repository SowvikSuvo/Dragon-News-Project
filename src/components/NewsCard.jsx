import { FaEye, FaShareAlt, FaBookmark, FaStar } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const {
    title,
    author,

    rating,
    total_view,
    thumbnail_url,
    details,
  } = news;

  // Convert ISO date to readable format
  const date = new Date(news.author.published_date).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <div className="card bg-base-100 shadow-xl  rounded-xl overflow-hidden mb-3">
      {/* Header */}
      <div className="flex bg-base-200 justify-between items-center px-4 py-3 ">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h2 className="font-semibold text-gray-800">{author.name}</h2>
            <p className="text-sm text-gray-500">{date}</p>
          </div>
        </div>
        <div className="flex gap-3 text-gray-500">
          <FaBookmark className="cursor-pointer hover:text-gray-700" />
          <FaShareAlt className="cursor-pointer hover:text-gray-700" />
        </div>
      </div>

      {/* Body */}
      <div className="px-4 pt-4">
        <h3 className="text-lg font-bold mb-3 text-gray-800 leading-tight">
          {title}
        </h3>
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full h-56 object-cover rounded-lg"
        />
        <p className="text-gray-600 text-sm mt-3 leading-relaxed">
          {details.slice(0, 200)}...
          <span className="text-primary font-medium cursor-pointer">
            Read More
          </span>
        </p>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-4 py-3 border-t mt-3">
        <div className="flex items-center text-yellow-500">
          {[...Array(rating.number)].map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="ml-2 text-gray-700 font-medium">
            {rating.number}
          </span>
        </div>

        <div className="flex items-center gap-2 text-gray-500">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
