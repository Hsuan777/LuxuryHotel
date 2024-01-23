import { LoginForm } from "@/components/login/LoginForm";
export const LoginPage: React.FC = () => {
  return (
    <>
      <section className="mt-24">
        <div className="row g-0">
          <div className="col-6">
            <img
              className="w-100"
              style={{ height: "1078px" }}
              src="https://images.unsplash.com/photo-1630587148265-761cbd139043?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="col-12 col-md-6 bg-dark">
            <div className="d-flex flex-column justify-content-center align-items-center h-100">
              <div className="mb-10 text-start">
                <p className="text-primary">享樂酒店，誠摯歡迎</p>
                <h2 className="text-light">立即開始旅程</h2>
              </div>
              <LoginForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
