import { useForm } from "react-hook-form";
import { IReactHookFormInput } from "@/interface/ReactHookForm";

type InputName = "email" | "password";
type TLogin = Record<InputName, string>;

const resetPWFormInputs: Array<IReactHookFormInput<InputName>> = [
  {
    name: "email",
    label: "電子信箱",
    placeholder: "hello@exsample.com",
    type: "password",
    options: {
      required: {
        value: true,
        message: "請輸入電子信箱",
      },
    },
  },
  {
    name: "password",
    label: "密碼",
    placeholder: "請輸入密碼",
    type: "password",
    options: {
      required: {
        value: true,
        message: "請輸入密碼",
      },
    },
  },
];

export const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLogin>();
  const onSubmit = (data: TLogin) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-50">
      {resetPWFormInputs.map((input: IReactHookFormInput<InputName>) => {
        return (
          <div className="mb-3" key={input.name}>
            <label className="form-label text-light">{input.label}</label>
            <input
              type={input.type}
              className="form-control"
              placeholder={input.placeholder}
              {...register(input.name, input.options)}
            />
            {errors[input.name] && (
              <p className="text-danger" role="alert">
                {errors[input.name]?.message}
              </p>
            )}
          </div>
        );
      })}
      <div className="d-flex justify-content-between">
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="rememberAccount"
          />
          <label
            className="form-check-label text-light"
            htmlFor="rememberAccount"
          >
            記住帳號
          </label>
        </div>
        <div className="mb-3">
          <a href="#" className="text-primary">
            忘記密碼?
          </a>
        </div>
      </div>
      <input
        type="submit"
        value="會員登入"
        className="btn btn-primary w-100 text-light mb-10"
      />
      {/* 沒有會員嗎？ 點此登入 */}
      <div className="d-flex text-light">
        沒有會員嗎？
        <a href="#" className="text-primary ps-2">
          點此登入
        </a>
      </div>
    </form>
  );
};
