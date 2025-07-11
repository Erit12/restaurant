import Header from "../components/Header";
import imagen1 from "../assets/images/imagen1.jpg";
import imagen2 from "../assets/images/imagen2.jpg";
import imagen3 from "../assets/images/imagen3.jpg";

export default function Home() {
  return (
    <>
      <Header />
      <section className="py-12 px-4 md:px-12 bg-gray-50">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-8">Nuestros Beneficios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" role="region" aria-label="Lista de beneficios">
          <article className="bg-white p-6 shadow rounded">
            <img src={imagen1} alt="Estudiante feliz aprendiendo" className="mb-4 w-full h-48 object-cover rounded" />
            <h3 className="text-xl font-bold text-gray-800">Platillos Esquisitos</h3>
            <p className="text-gray-600 mt-2">Nuestros cocineros te degustaran con su sabor</p>
          </article>
          <article className="bg-white p-6 shadow rounded">
            <img src={imagen2} alt="Grupo de desarrolladores trabajando" className="mb-4 w-full h-48 object-cover rounded" />
            <h3 className="text-xl font-bold text-gray-800">Diversidad Gastronomica</h3>
            <p className="text-gray-600 mt-2">Platillos para todo tipo de paladares y edades.</p>
          </article>
          <article className="bg-white p-6 shadow rounded">
            <img src={imagen3} alt="Graduado mostrando su certificado" className="mb-4 w-full h-48 object-cover rounded" />
            <h3 className="text-xl font-bold text-gray-800">Certificación oficial</h3>
            <p className="text-gray-600 mt-2">Contamos con los certificados que avalan nuestra cocina.</p>
          </article>
        </div>
      </section>
    </>
  );
}
