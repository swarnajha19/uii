export default function Chart({ title, height = 300 }) {
  // Generate dates for x-axis
  const dates = [];
  const startDate = new Date("2025-02-28");
  for (let i = 0; i < 11; i++) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i * 3);
    dates.push(date.toISOString().split("T")[0]);
  }

  return (
    <div className="mb-6">
      {title && (
        <h3 className="text-lg font-medium text-gray-700 mb-4">{title}</h3>
      )}
      <div
        className="w-full border-t border-gray-200"
        style={{ height: `${height}px` }}
      >
        {/* Chart would go here - using a placeholder */}
        <div className="flex justify-between mt-4">
          {dates.map((date, index) => (
            <div
              key={index}
              className="text-xs text-gray-500 transform -rotate-45 origin-top-left"
            >
              {date}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
