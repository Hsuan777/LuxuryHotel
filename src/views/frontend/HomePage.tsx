import "@/assets/style/views/frontend/HomePage.scss";
export const HomePage: React.FC = () => {
  return (
    <>
      {/* Banner */}
      <section className="banner">
        <div className="container banner__content">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6 text-primary display-6">
              <p>享樂酒店</p>
              <p>Enjoyment Luxury Hotel</p>
            </div>
            <div className="content__BG col-12 col-lg-6">
              <div className="py-15 py-2xl-24">
                <div className="ms-n10 d-inline-block">
                  <div className="display-2 d-inline fw-bold">
                    <p>高雄</p>
                    <p>豪華住宿之選</p>
                  </div>
                  <p className="fs-4 fs-xl-2 mb-15">
                    我們致力於為您提供無與倫比的奢華體驗與優質服務
                  </p>
                  <input
                    type="button"
                    value="立即訂房"
                    className="btn btn-light text-end py-10 w-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* News */}
      <section className="bg-primary-100 py-30">
        <div className="row">
          <div className="col-8 mx-auto">
            <div className="row">
              <div className="col-3">
                <h2 className="text-primary">
                  最新
                  <br />
                  消息
                </h2>
              </div>
              <div className="col-9">
                <ul className="list-unstyled">
                  <li className="row align-items-center">
                    <div className="col-12 col-md-6">
                      <img
                        src="https://images.unsplash.com/photo-1615722440048-da4ccf6de048?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="img-fluid rounded-2"
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <h3 className="mb-6">秋季旅遊，豪華享受方案</h3>
                      <p>
                        秋天就是要來場豪華的旅遊！我們為您準備了一系列的秋季特別方案，包括舒適的住宿、美食饗宴，以及精彩的活動。不論您是想來一趟浪漫之旅，還是想和家人共度美好時光，都能在這裡找到最適合的方案。
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Us */}
      <section className="py-30 bg-dark">
        <div className="banner__aboutUs pt-20">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-8 offset-md-3 content__aboutUs">
                <div className="p-20 text-light">
                  <h2 className="mb-20">
                    關於
                    <br />
                    我們
                  </h2>
                  <p>
                    享樂酒店，位於美麗島高雄的心臟地帶，是這座城市的璀璨瑰寶與傲人地標。
                    <br />
                    我們的存在，不僅僅是為了提供奢華的住宿體驗，更是為了將高雄的美麗與活力，獻給每一位蒞臨的旅客。
                  </p>
                  <p>
                    我們的酒店，擁有時尚典雅的裝潢，每一個細節都充滿著藝術與設計的精緻。
                    <br />
                    我們的員工，都以熱情的服務與專業的態度，讓每一位客人都能感受到賓至如歸的溫暖。
                  </p>
                  <p>
                    在這裡，您可以遙望窗外，欣賞高雄的城市景色，感受這座城市的繁華與活力；您也可以舒適地坐在我們的餐廳，品嚐精緻的佳餚，體驗無與倫比的味覺盛宴。
                  </p>
                  <p>
                    享樂酒店，不僅是您在高雄的住宿之選，更是您感受高雄魅力的最佳舞台。我們期待著您的蒞臨，讓我們共同編織一段難忘的高雄故事。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Room */}
      <div className="row align-items-end py-30 bg-dark">
        <div className="col-12 col-lg-6">
          <img
            className="img-fluid w-100"
            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="col-12 col-lg-4 text-light">
          <p>尊爵雙人房</p>
          <p className="mb-10">
            享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。
          </p>
          <p>NT$ 10,000</p>
          <button
            className="btn btn-light d-flex justify-content-end align-items-center my-10 py-10 w-100"
            type="button"
            value="查看更多"
          >
            <span className="me-4">查看更多</span>
            <hr className="w-25" />
          </button>
        </div>
      </div>
      {/* Culinary */}
      <section className="py-30 bg-primary-100">
        <div className="container">
          <div className="row">
            <div className="col- mx-auto">
              <h2 className="text-primary">
                佳餚
                <br />
                美饌
              </h2>
              <div
                className="position-relative"
                style={{ width: "481px", height: "600px" }}
              >
                <img
                  className="rounded-1 w-100 h-100"
                  src="https://images.unsplash.com/photo-1624938823487-d62ba4a5cf0f?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
                <div className="content__culinary text-light position-absolute bottom-0 start-0 end-0 p-6">
                  <h3>
                    <span>海霸</span>
                    <span>SUN-MON 11:00 - 20:30</span>
                  </h3>
                  <p className="mb-0">
                    以新鮮海產料理聞名，我們的專業廚師選用高雄當地的海鮮，每一道菜都充滿海洋的鮮美與清甜。無論是烤魚、蒸蝦還是煮蛤蜊，都能讓您品嚐到最新鮮的海洋風味。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Transportation */}
      <section className="pt-30 pb-20 bg-dark">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 className="text-primary mb-20">
                交通
                <br />
                方式
              </h2>
              <div className="mb-10">
                <p className="text-light">台灣高雄市新興區六角路123號</p>
                <img
                  className="img-fluid"
                  src="../src/assets/images/imgMap.png"
                  alt="Map"
                />
              </div>
              <ul className="list-unstyled row text-light">
                <li className="col-12 col-lg-4">
                  <p>自行開車</p>
                  <p>
                    如果您選擇自行開車，可以透過國道一號下高雄交流道，往市區方向行駛，並依路標指示即可抵達「享樂酒店」。飯店內設有停車場，讓您停車方便。
                  </p>
                </li>
                <li className="col-12 col-lg-4">
                  <p>高鐵/火車</p>
                  <p>
                    如果您是搭乘高鐵或火車，可於左營站下車，外頭有計程車站，搭乘計程車約20分鐘即可抵達。或者您也可以轉乘捷運紅線至中央公園站下車，步行約10分鐘便可抵達。
                  </p>
                </li>
                <li className="col-12 col-lg-4">
                  <p>禮賓車服務</p>
                  <p>
                    酒店提供禮賓專車接送服務，但因目的地遠近會有不同的收費，請撥打電話將由專人為您服務洽詢專線：(07)123-4567
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
