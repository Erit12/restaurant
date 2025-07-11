import { useDispatch, useSelector } from "react-redux";
import { actualizarCampo, limpiarFormulario } from "../redux/slices/formularioSlice";

export default function Contacto() {
  const dispatch = useDispatch();
  const { nombre, email, mensaje } = useSelector((state) => state.formulario);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ nombre, email, mensaje }); // simula envío
    dispatch(limpiarFormulario());
    alert("Mensaje enviado correctamente.");
  };

  const handleChange = (e) => {
    dispatch(actualizarCampo({ campo: e.target.name, valor: e.target.value }));
  };

  return (
    <section className="py-12 px-4 md:px-12 bg-gray-50 text-gray-800" role="form" aria-label="Formulario de contacto">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Contáctanos</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
              Nombre completo
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={nombre}
              onChange={handleChange}
              required
              aria-label="Nombre completo"
              className="mt-1 block w-full rounded border border-gray-300 p-2"
              placeholder="Escribe tu nombre completo"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              required
              aria-label="Correo electrónico"
              className="mt-1 block w-full rounded border border-gray-300 p-2"
              placeholder="Escribe tu Correo Electronico"
            />
          </div>

          <div>
            <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700">
              Mensaje
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows="4"
              value={mensaje}
              onChange={handleChange}
              required
              aria-label="Mensaje"
              className="mt-1 block w-full rounded border border-gray-300 p-2"
              placeholder="Escribe tu mensaje"
            />
          </div>

          <div>
            <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700" aria-label="Enviar formulario">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
