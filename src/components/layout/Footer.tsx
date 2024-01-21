export const Footer: React.FC = () => {
  return (
    <>
      <footer className="bg-dark text-white">
        <div className="container pt-20 pb-30">
          <div className="row mb-20">
            <div className="col-12 col-lg-6 mb-10 mb-lg-0">
              <img
                className="mb-10"
                src="./src/assets/images/logoWhite.svg"
                alt="Logo"
              />
              <ul className="list-unstyled d-flex">
                <li>
                  <a href="#">
                    <img
                      className="me-4"
                      src="./src/assets/icons/Line.svg"
                      alt="Line"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="./src/assets/icons/IG.svg" alt="IG" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-lg-6">
              <ul className="list-unstyled mb-0 row">
                <li className="col-12 col-md-6 col-xl-8 d-flex justify-content-xl-end mb-4 mb-md-10 pe-17">
                  <div>
                    <h4 className="">TEL</h4>
                    <span>+886-7-1234567</span>
                  </div>
                </li>
                <li className="col-12 col-md-6 col-xl-4 mb-4 mb-md-0">
                  <div>
                    <h4>MAIL</h4>
                    <span>elh@hexschool.com</span>
                  </div>
                </li>
                <li className="col-12 col-md-6 col-xl-8 d-flex justify-content-xl-end mb-4 mb-md-0 pe-17">
                  <div>
                    <h4>FAX</h4>
                    <span>+886-7-1234567</span>
                  </div>
                </li>
                <li className="col-12 col-md-6 col-xl-4">
                  <div>
                    <h4>WEB</h4>
                    <span>www.elhhexschool.com.tw</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="row justify-content-between">
            <div className="col-12 col-md-6 mb-4 mb-md-0">
              806023 台灣高雄市新興區六角路123號
            </div>
            <div className="col-12 col-md-6 text-md-end">
              © 享樂酒店 2023 All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
