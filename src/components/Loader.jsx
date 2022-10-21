
const Loader = () => {

  return (
    <div className="w-1/3 mx-auto">
      <p className="uppercase mb-2 text-center text-2xl stroke-text-black text-red-200">Preparando la sopa</p>
      <div className="h-12 bg-transparent p-1.5 border-solid border-black border-4 animate loader">
        <span className="block h-full w-[5%] bg-red-200"></span>
      </div>
    </div>
  )

}

export default Loader
