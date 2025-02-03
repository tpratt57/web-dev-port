export default function Projects() {
    return (
      <section id="projects" className="py-16 bg-white text-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Example Project Card */}
            <div className="bg-gray-100 p-6 rounded shadow hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold mb-2">Gemini Clone 1</h3>
              <p className="mb-4">A brief description of the project.</p>
              <a
                href="#"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>

            <div className="bg-gray-100 p-6 rounded shadow hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold mb-2">Project 1</h3>
              <p className="mb-4">A brief description of the project.</p>
              <a
                href="#"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>

            <div className="bg-gray-100 p-6 rounded shadow hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold mb-2">Project 1</h3>
              <p className="mb-4">A brief description of the project.</p>
              <a
                href="#"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>

            <div className="bg-gray-100 p-6 rounded shadow hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold mb-2">Project 1</h3>
              <p className="mb-4">A brief description of the project.</p>
              <a
                href="#"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
            {/* Add additional project cards as needed */}
          </div>
        </div>
      </section>
    );
  }
  