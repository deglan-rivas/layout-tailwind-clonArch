export default function Gallery() {
  return (
    <section className="bg-white pb-12 pt-12 w-full max-w-6xl mx-auto md:pt-0">
      <h2 className="text-6xl font-bold px-5 mb-12">
        Galería
      </h2>

      <div className="grid grid-cols-2 grid-rows-5 gap-4 grid-flow-dense mx-5 md:grid-cols-3 md:grid-rows-3">
        <div className="">
          <img src="/imagen_1.jpg" alt="imagen de galería" className="object-center object-cover" />
        </div>

        <div className="row-span-2 md:row-start-2">
          <img src="/imagen_2.jpg" alt="imagen de galería" className="object-center object-cover" />
        </div>

        <div className="row-span-2 md:col-start-3">
          <img src="/imagen_6.jpg" alt="imagen de galería" className="object-center object-cover" />
        </div>

        <div className="row-span-2 md:row-span-1">
          <img src="/imagen_3.jpg" alt="imagen de galería" className="h-full object-cover" />
        </div>

        <div className="">
          <img src="/imagen_4.jpg" alt="imagen de galería" className="object-center object-cover" />
        </div>

        <div>
          <img src="/imagen_5.jpg" alt="imagen de galería" className="object-center object-cover" />
        </div>

        <div>
          <img src="/imagen_7.jpg" alt="imagen de galería" className="object-center object-cover" />
        </div>
      </div>
    </section>
  )
}