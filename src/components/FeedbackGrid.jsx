import React from "react";

const FeedbackGrid = ({ feedbacks }) => {
  const renderStars = (count) => {
    // Render the correct number of stars based on count
    return Array.from({ length: 5 }).map((_, index) => (
      <svg
        key={index}
        xmlns="http://www.w3.org/2000/svg"
        className={`size-5 ${
          index < count ? "text-green-500" : "text-gray-300"
        }`}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="bg-white">
      <div className="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8 lg:py-16">
        {/* Header */}
        <h2 className="text-4xl font-bold tracking-tight text-center text-gray-900 sm:text-5xl">
          Read trusted reviews from our customers
        </h2>

        {/* Feedback container */}
        <div className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-3 md:gap-8">
          {feedbacks.map((feedback, index) => (
            <blockquote
              key={index}
              className="p-6 rounded-lg shadow-sm bg-gray-50 sm:p-8"
            >
              <div className="flex items-center gap-4">
                <img
                  alt={feedback.username}
                  src={feedback.image}
                  className="object-cover rounded-full size-14"
                />

                <div>
                  <div className="flex justify-center gap-0.5">
                    {renderStars(feedback.stars)}
                  </div>
                  <p className="mt-0.5 text-lg font-medium text-gray-900">
                    {feedback.username}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-gray-700">{feedback.content}</p>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeedbackGrid;
