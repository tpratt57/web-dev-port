export default function Projects() {
  return (
    <section id="projects" className="py-16 animate-gradient text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Gemini Clone */}
          <div className="bg-[rgba(255,255,255,0.1)] p-6 rounded shadow hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-semibold mb-2">Gemini Clone</h3>
            <p className="mb-4">
              A front‐end recreation of Google’s Gemini interface and features.
              This project demonstrates your ability to replicate a modern, 
              AI‐focused user interface and mimic Google’s clean design patterns.
              It highlights responsive layouts, smooth transitions, and any 
              interactivity or API integrations you may have implemented to 
              bring the Gemini concept to life.
            </p>
            <a
              href="https://gemini-clone-gamma-rust.vercel.app"
              className="text-[var(--color-red-main)] hover:text-[var(--color-red-dark)] underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>

          {/* Spotify Clone */}
          <div className="bg-[rgba(255,255,255,0.1)] p-6 rounded shadow hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-semibold mb-2">Spotify Clone</h3>
            <p className="mb-4">
              A feature‐rich music streaming app clone emulating Spotify’s core 
              UI and functionality. Leveraging Next.js, React, and styled 
              components (or Tailwind), it showcases playlists, track previews, 
              and a familiar layout for music discovery.
            </p>
            <a
              href="https://spotify-clone-mu-pied.vercel.app"
              className="text-[var(--color-red-main)] hover:text-[var(--color-red-dark)] underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>

          {/* Ambassadors of Humanity */}
          <div className="bg-[rgba(255,255,255,0.1)] p-6 rounded shadow hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-semibold mb-2">Ambassadors of Humanity</h3>
            <p className="mb-4">
              A full‐stack web application designed to showcase and support 
              humanitarian efforts around the world. Built with Next.js and 
              Tailwind CSS, this platform features dynamic content, 
              responsive layouts, and an API‐integrated back end (if applicable) 
              to highlight important causes, upcoming events, and volunteer 
              opportunities.
            </p>
            <a
              href="https://ambassadors-of-humanity.vercel.app"
              className="text-[var(--color-red-main)] hover:text-[var(--color-red-dark)] underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>

          {/* The Image Gallery (Barber Website) */}
          <div className="bg-[rgba(255,255,255,0.1)] p-6 rounded shadow hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-semibold mb-2">The Image Gallery</h3>
            <p className="mb-4">
              An updated, modern website for a local barbershop. This project 
              focuses on clean UI, simple scheduling integrations, and strong 
              branding to reflect the barber’s unique style. 
            </p>
            <a
              href="#"
              className="text-[var(--color-red-main)] hover:text-[var(--color-red-dark)] underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
