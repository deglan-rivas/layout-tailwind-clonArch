export default function Footer() {
  return (
    <>
      <footer className="bg-[url(/footer.jpg)] bg-cover bg-center">
        <div className="container mx-auto py-12 flex flex-col justify-between ">
          <div className="grid grid-cols-2 gap-y-12">
            <h1 className="text-3xl text-white text-center col-span-2 md:col-span-1 md:text-4xl md:flex md:items-center md:gap-2 md:justify-center lg:text-5xl">
              Arquitectura {""}
              <span className="font-bold">
                Bosque
              </span>
            </h1>

            <div className="space-y-5 col-span-2 md:col-span-1 md:space-y-12">
              <a href="#" className="text-white text-center text-xl flex items-center gap-5 justify-center lg:justify-end md:text-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-forward-fill w-8 h-8 text-white" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877zm10.761.135a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.293 4H9.5a.5.5 0 0 1 0-1h4.793l-1.647-1.646a.5.5 0 0 1 0-.708" />
                </svg>
                01-800-0000-000
              </a>
              <div className="flex flex-col gap-2 md:flex-col md:gap-7 lg:flex-row lg:gap-0 lg:justify-between">
                <a href="#" className="p-1 text-white text-center text-xl hover:text-black hover:bg-white/30 md:text-2xl">Inicio</a>
                <a href="#" className="p-1 text-white text-center text-xl hover:text-black hover:bg-white/30 md:text-2xl">Nosotros</a>
                <a href="#" className="p-1 text-white text-center text-xl hover:text-black hover:bg-white/30 md:text-2xl">Modelos</a>
                <a href="#" className="p-1 text-white text-center text-xl hover:text-black hover:bg-white/30 md:text-2xl">Galería</a>
                <a href="#" className="p-1 text-white text-center text-xl hover:text-black hover:bg-white/30 md:text-2xl">Contacto</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <p className="text-white bg-gray-900 text-center py-4 text-xl md:text-2xl">
        Todos los derechos reservados ©
      </p>
    </>
  )
}