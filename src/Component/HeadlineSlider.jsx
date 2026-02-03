

export const HeadlineSlider = () => {
  const tags = [
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "JavaScript",
    "TypeScript",
    "Redux",
    "Zustand",
    "Framer Motion",
    "REST API",
    "Node.js",
  ];

  return (
    <div className="relative overflow-hidden">



      {/* Slider */}
      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-slide gap-4">
          {[...tags, ...tags].map((tag, index) => (
            <span
              key={index}
              className="px-4 py-2 text-sm font-medium rounded-full
                         bg-zinc-900/80 border border-green-500/30
                         text-green-400 whitespace-nowrap"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
