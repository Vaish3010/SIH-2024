import React from "react";
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>

      {/* Hero Section */}
      <section
        className="bg-cover bg-center py-24 text-center text-white flex-grow"
        style={{
          backgroundImage: "url('disaster-image1.avif')",
        }}
      >
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold mb-4">
            Stay Informed About Disasters
          </h2>
          <p className="text-xl mb-8">
            Get real-time updates from news websites and social media all in one
            place.
          </p>
          <a href="#" className="btn btn-primary">
            Get Started
          </a>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="bg-white container mx-auto py-12 text-black">
        <h2 className="text-3xl font-bold text-center mb-6">What We Do</h2>
        <p className="text-center max-w-2xl mx-auto">
          Our platform aggregates information from various sources including
          news websites, Twitter, Facebook, and more. We aim to provide you with
          the most accurate and up-to-date information during critical times.
        </p>
      </section>

      {/* Additional Content Section */}
      <section className="bg-gray-100 container mx-auto py-12 text-black">
        <h2 className="text-3xl font-bold text-center mb-6">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="feature-item p-6 bg-white shadow-md rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-4">Real-Time Updates</h3>
            <p>Stay informed with the latest updates from multiple reliable sources.</p>
          </div>
          <div className="feature-item p-6 bg-white shadow-md rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-4">Social Media Integration</h3>
            <p>Get the latest news and updates from social media platforms like Twitter and Facebook.</p>
          </div>
          <div className="feature-item p-6 bg-white shadow-md rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-4">Easy to Use</h3>
            <p>Our platform is designed to be user-friendly, ensuring easy navigation during critical times.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;