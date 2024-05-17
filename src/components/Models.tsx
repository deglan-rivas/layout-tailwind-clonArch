export default function Models() {
  return (
    <section className="bg-white pt-12 w-full max-w-6xl mx-auto">
      <h2 className="text-6xl font-bold px-5 mb-12">
        Conoce nuestros 3 modelos
      </h2>
      <div className="grid grid-rows-2 md:grid-cols-2 md:bg-[url(/modelo_basico.jpg)] md:bg-auto md:bg-right-top md:bg-no-repeat">
        <div className="px-12 py-12 space-y-6 bg-white md:col-start-1 md:row-start-2 md:text-center lg:text-left">
          <h3 className="text-6xl font-bold">
            Modelo Básico
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita distinctio itaque voluptatibus iusto deleniti molestias in. Ducimus voluptates libero harum rerum, ipsum blanditiis saepe repellendus ipsam veritatis doloribus esse. Neque!
          </p>
          <button className="x border border-black py-1 px-4 text-center hover:text-white hover:bg-gray-700">
            Más información
          </button>
        </div>

        <div className="bg-[url(/modelo_basico.jpg)] bg-auto bg-bottom bg-no-repeat md:hidden">
        </div>
      </div>

      <div className="grid grid-rows-2 md:grid-cols-2 md:bg-[url(/modelo_premier.jpg)] md:bg-auto md:bg-left-top md:bg-no-repeat">
        <div className="px-12 py-12 space-y-6 bg-white md:col-start-2 md:row-start-1 md:text-center lg:text-left">
          <h3 className="text-6xl font-bold">
            Modelo Premier
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita distinctio itaque voluptatibus iusto deleniti molestias in. Ducimus voluptates libero harum rerum, ipsum blanditiis saepe repellendus ipsam veritatis doloribus esse. Neque!
          </p>
          <button className="x border border-black py-1 px-4 text-center hover:text-white hover:bg-gray-700">
            Más información
          </button>
        </div>

        <div className="bg-[url(/modelo_premier.jpg)] bg-auto bg-bottom bg-no-repeat md:hidden">
        </div>
      </div>

      <div className="grid grid-rows-2 md:grid-cols-2 md:bg-[url(/modelo_elite.jpg)] md:bg-auto md:bg-right-top md:bg-no-repeat">
        <div className="px-12 py-12 space-y-6 bg-white md:col-start-1 md:row-start-1 md:text-center lg:text-left">
          <h3 className="text-6xl font-bold">
            Modelo Elite
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita distinctio itaque voluptatibus iusto deleniti molestias in. Ducimus voluptates libero harum rerum, ipsum blanditiis saepe repellendus ipsam veritatis doloribus esse. Neque!
          </p>
          <button className="x border border-black py-1 px-4 text-center hover:text-white hover:bg-gray-700">
            Más información
          </button>
        </div>

        <div className="bg-[url(/modelo_elite.jpg)] bg-auto bg-bottom bg-no-repeat md:hidden">
        </div>
      </div>
    </section>
  )
}