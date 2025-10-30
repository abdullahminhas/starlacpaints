'use client'

// Define TypeScript interface for Color
interface Color {
  name: string;
  color: string;
}

// Colors data array with TypeScript type
const colors: Color[] = [
  { name: "Light Taupe", color: "#E5D9C8" },
  { name: "Dusty Mauve", color: "#9B8183" },
  { name: "Chestnut Brown", color: "#8B5A3C" },
  { name: "Camel Brown", color: "#C19A6B" },
  { name: "Olive Green", color: "#6B7C5D" },
  { name: "Sage Grey", color: "#D5CDB5" },
  { name: "Steel Teal", color: "#4A7C8C" },
  { name: "Off-White", color: "#F5F5DC" },
];

export default function PlayWithColors() {
  const handleColorClick = (color: Color): void => {
    console.log(`Selected color: ${color.name} - ${color.color}`);
    // You can add logic here to update the featured color
  };

  const handleFeaturedColorClick = (): void => {
    console.log('Featured color clicked: Steel Teal - #4A7C8C');
    // You can add logic here for the featured color action
  };

  return (
    <section className="bg-[#1a1a1a] text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-4">
          Play with Colors
        </h2>
        <p className="text-center text-gray-300 mb-16 max-w-3xl mx-auto">
          Buy premium quality paint products for your interior and exterior at economical prices. Book your orders Now!
        </p>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Color Swatches */}
          <div className="grid grid-cols-4 gap-4">
            {colors.map((color, idx) => (
              <div 
                key={idx} 
                className="text-center cursor-pointer"
                onClick={() => handleColorClick(color)}
              >
                <div
                  className="w-full h-32 rounded-lg mb-3 border border-gray-700 transition-transform hover:scale-105"
                  style={{ backgroundColor: color.color }}
                />
                <p className="text-sm font-medium">{color.name}</p>
              </div>
            ))}
          </div>

          {/* Featured Color */}
          <div className="relative">
            <div
              className="w-full h-96 rounded-3xl"
              style={{ backgroundColor: "#4A7C8C" }}
            />
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
              <button 
                onClick={handleFeaturedColorClick}
                className="bg-white text-black px-12 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Steel Teal
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}