import { CTA } from "../components";
import { projects } from "../constants";

const Projects = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        My{" "}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          Projects
        </span>
      </h1>

      <p className='text-slate-500 mt-2 leading-relaxed'>
       
      </p>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 my-16'>
        {projects.map((project) => (
          <div
            className='w-full p-6 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col'
            key={project.name}
          >
            <div className='block-container w-14 h-14'>
              <div className={`btn-back rounded-2xl ${project.theme}`} />
              <div className='btn-front rounded-2xl flex justify-center items-center p-2.5'>
                <img
                  src={project.iconUrl}
                  alt={project.name}
                  className='w-3/4 h-3/4 object-contain'
                />
              </div>
            </div>

            <div className='mt-5 flex flex-col'>
              <h4 className='text-xl font-poppins font-bold text-slate-800 leading-snug'>
                {project.name}
              </h4>
              <p className='mt-2 text-slate-600 text-sm leading-relaxed'>
                {project.description}
              </p>

              {project.tags && (
                <div className='mt-4 flex flex-wrap gap-1.5'>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className='text-[11px] font-semibold px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-100'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default Projects;