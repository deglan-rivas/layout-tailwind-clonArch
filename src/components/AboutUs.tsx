export default function AboutUs() {
  return (
    <section className="grid grid-rows-2 w-full max-w-5xl mx-auto my-6 lg:grid-cols-3 lg:bg-[url(/nosotros.jpg)] lg:bg-no-repeat lg:bg-bottom">
      <div className="px-12 py-12 space-y-5 bg-white row-span-1 lg:col-span-2 lg:col-start-2">
        <h2 className="text-6xl font-bold">
          Sobre Nosotros
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere asperiores nostrum vitae et provident quis reprehenderit dolorem, ducimus qui, adipisci natus in illum quo tempore ab autem aperiam! Magni, dolor!
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit molestiae quaerat soluta porro, obcaecati ipsa assumenda quas suscipit nemo corporis.</p>
      </div>
      <div className="bg-[url(/nosotros.jpg)] bg-no-repeat bg-bottom bg-auto row-span-1 lg:col-span-3 lg:hidden">

      </div>
    </section>
  )
}