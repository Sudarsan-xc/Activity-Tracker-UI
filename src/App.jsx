import Footer from "./layouts/Footer";

function App() {
  return (
    <>
      <>
        <div className="container vh-90">
          <div
            className="d-flex justify-content-center"
            style={{ minHeight: "575px" }}
          >
            <Home />
          </div>
          <Footer />
        </div>
      </>
    </>
  );
}

export default App;
