import "@/assets/style/views/frontend/HomePage.scss";
export const HomePage: React.FC = () => {
  return (
    <>
      {/* Banner */}
      <section className="banner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 text-primary display-6">
              <p>享樂酒店</p>
              <p>Enjoyment Luxury Hotel</p>
            </div>
            <div className="col-12 col-md-6 border rounded-3">
              <div className="py-24">
                <div className="display-2 fw-bold ">
                  <p>高雄</p>
                  <p>豪華住宿之選</p>
                </div>
                <p>我們致力於為您提供無與倫比的奢華體驗與優質服務</p>
                <input
                  type="button"
                  value="立即訂房"
                  className="btn btn-white text-white w-100"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
