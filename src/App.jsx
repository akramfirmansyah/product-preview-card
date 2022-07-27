import prevImage from "./images/image-product-desktop.jpg";

function App() {
  return (
    <div className="App">
      <div className="w-screen h-screen bg-cream font-montserrat flex justify-center items-center overflow-hidden">
        <div className="bg-white flex items-center rounded-3xl overflow-hidden">
          <img src={prevImage} alt="preview image" className="h-[422px]" />
          <div className="h-fit w-[320px]">
            <div className="px-10 py-6">
              <h3 className="uppercase text-dark-grayish-blue tracking-widest text-sm mb-2">
                perfume
              </h3>
              <h1 className="font-fraunces text-4xl mb-4">
                Gabrielle Essence Eau De Parfum
              </h1>
              <p className="normal-case text-dark-grayish-blue text-sm mb-6">
                A floral, solar and voluptuous interpretation composed by
                Olivier Polge, Perfumer-Creator for the House of CHANEL
              </p>
              <div className="flex items-center mb-6">
                <span className="font-fraunces text-dark-cyan text-4xl inline-block pr-4">
                  $149.99
                </span>
                <span className=" line-through text-dark-grayish-blue text-sm">
                  $169.99
                </span>
              </div>
              <button className="border block w-full font-bold text-white bg-dark-cyan py-2 rounded-lg">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
