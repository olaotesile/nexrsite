export default function VideoReview() {
  return (
    <section
      className="relative bg-cover bg-center py-18 mt-0"
      style={{ backgroundImage: "url('/background2.png')" }}
    >
      <div className="absolute inset-0 bg-black/60 z-0" />

      <div className="relative z-10 text-center text-white">
        <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          See in action
        </h3>
        <p className="text-lg mb-6">
          Our team is working hard to bring it to life!
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 rounded-2xl p-12 shadow-md text-white border border-white/20">
            {/* Placeholder for Video */}
            <div className="flex justify-center items-center h-48 sm:h-80 bg-gray-700 rounded-2xl mb-6">
              <p className="text-white font-semibold text-xl">
                Video review is coming soon!
              </p>
            </div>
            <p className="text-sm">
              Stay tuned for an exciting review video that showcases the power
              of Nexr!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
