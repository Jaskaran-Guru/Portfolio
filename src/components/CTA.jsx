import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="cta">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        
        <p className="cta-text text-center sm:text-left">
          Have a project in mind?{" "}
          <br className="sm:block hidden" />
          Let’s build something together!
        </p>

        <Link
          to="/contact"
          className="bg-purple-600 hover:bg-purple-700 text-white px-2 py-1 rounded-lg font-semibold transition"
        >
          Contact
        </Link>

      </div>
    </section>
  );
};

export default CTA;
