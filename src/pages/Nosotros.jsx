import cocinerosImg from "../assets/images/cocineros.jpg";

export default function Nosotros() {
  return (
    <section className="py-12 px-4 md:px-12 bg-white text-gray-800" role="region" aria-label="Sobre nosotros">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">¿Quiénes somos?</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src={cocinerosImg}
              alt="Equipo de cocineros certificados"
              className="rounded shadow-lg"
            />
          </div>
          <article>
            <p className="mb-4">
              <strong>Mi Restaurant</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nostrum nemo culpa accusantium delectus eos odit qui facilis, ex quisquam optio error necessitatibus magnam voluptate temporibus adipisci itaque dicta, animi amet sed. Hic et accusamus beatae eum impedit reiciendis vel sequi rem, culpa modi, officia placeat vitae? Sequi, alias recusandae..
            </p>
            <p className="mb-4">
              Contamos con Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ad deserunt ducimus, minus reiciendis natus! Delectus maiores, dolor accusantium voluptas doloribus, aliquam magni velit reiciendis ipsam ratione eum!.
            </p>
            <p>
              Todos nuestros Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta id consequuntur ducimus illo sit?.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
