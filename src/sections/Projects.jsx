const Projects = () => {
  return (
    <section id="projects" className="bg-slate-50 px-6 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-semibold text-indigo-600">
          MY PROJECTS
        </p>

        <h2 className="mt-3 text-4xl font-bold text-slate-900">
          Some Things I've Built
        </h2>

        <div className="mt-10 rounded-2xl bg-white p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-slate-900">
            KaarYab Afghanistan
          </h3>

          <p className="mt-4 text-slate-600">
            An opportunity finder platform for Afghan youth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;