import AuthLayout from "./AuthLayout";
import { Form, Input, Button, message } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../services/auth.service";
import { authStorage } from "../../services/auth.storage";
import Logo from "../../assets/5skilsspng.png";

export default function Login() {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const user = await loginUser(values);
      authStorage.setUser(user);
      navigate("/dashboard", { replace: true });
    } catch (e) {
      message.error(e.message || "Login failed");
    }
  };

  return (
    <AuthLayout>
      <div className="mx-auto w-full max-w-105">
        <div className="rounded-2xl bg-white shadow-[0_18px_45px_rgba(15,23,42,0.12)] border border-slate-100 px-10 py-10">
          <div className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-b from-blue-500 to-blue-700 shadow-md">
            <img src={Logo} alt="5Skills Logo" />
          </div>

          <h1 className="text-center text-3xl font-semibold text-slate-900">
            Welcome Back
          </h1>
          <p className="mt-2 text-center text-slate-500">
            Continue your English learning journey
          </p>

          <div className="mt-8">
            <Form layout="vertical" onFinish={onFinish} requiredMark={false}>
              <Form.Item
                name="email"
                label={
                  <span className="text-slate-700 font-medium">Email</span>
                }
                rules={[
                  { required: true, message: "Please enter your email" },
                  { type: "email", message: "Enter a valid email" },
                ]}
              >
                <Input
                  size="large"
                  placeholder="your@email.com"
                  prefix={<MailOutlined className="text-slate-400" />}
                  className="!rounded-xl !bg-slate-50 !border-slate-200 !text-slate-900 placeholder:!text-slate-400 focus:shadow-none!"
                />
              </Form.Item>

              <Form.Item
                name="password"
                label={
                  <span className="text-slate-700 font-medium">Password</span>
                }
                rules={[
                  { required: true, message: "Please enter your password" },
                ]}
              >
                <Input.Password
                  size="large"
                  placeholder="••••••••"
                  prefix={<LockOutlined className="text-slate-400" />}
                  className="!rounded-xl !bg-slate-50 !border-slate-200 !text-slate-900 placeholder:!text-slate-400 focus:shadow-none!"
                />
              </Form.Item>

              <Button
                htmlType="submit"
                size="large"
                className="w-full !h-12 !rounded-xl !border-none !text-white font-semibold
                           !bg-gradient-to-b from-blue-500 to-blue-700
                           shadow-[0_10px_20px_rgba(37,99,235,0.35)]
                           hover:opacity-95 mb-[15px!]"
              >
                Sign In
              </Button>
            </Form>

            <p className="mt-6 text-center text-slate-500">
              Don’t have an account?{" "}
              <Link
                to="/register"
                className="font-semibold mt-6 text-blue-600 hover:text-blue-700"
              >
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}
