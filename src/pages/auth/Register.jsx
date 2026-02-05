import AuthLayout from "./AuthLayout";
import { Form, Input, Button, message } from "antd";
import { UserOutlined, MailOutlined, LockOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../services/auth.service";
import { authStorage } from "../../services/auth.storage";
import SkilssLogo from "../../assets/5skilsspng.png";

export default function Register() {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const created = await registerUser({
        name: values.name,
        email: values.email,
        password: values.password,
      });
      authStorage.setUser(created);
      navigate("/Login", { replace: true });
    } catch (e) {
      message.error(e.message || "Registration failed");
    }
  };

  return (
    <AuthLayout>
      <div className="mx-auto w-full max-w-[490px]">
        <div className="rounded-2xl bg-white shadow-[0_18px_45px_rgba(15,23,42,0.12)] border border-slate-100 px-10 py-10">
          <div className="mx-auto mb-6 grid h-24 w-24 place-items-center rounded-2xl bg-gradient-to-b from-blue-500 to-blue-700 shadow-md">
            <img src={SkilssLogo} alt="5Skills Logo" />
          </div>

          <h1 className="text-center text-3xl font-semibold text-slate-900">
            Create Account
          </h1>
          <p className="mt-2 text-center text-slate-500">
            Start your English learning journey today
          </p>

          <div className="mt-8">
            <Form layout="vertical" onFinish={onFinish} requiredMark={false}>
              <Form.Item
                name="name"
                label={
                  <span className="text-slate-700 font-medium">Full Name</span>
                }
                rules={[{ required: true, message: "Please enter your name" }]}
              >
                <Input
                  size="large"
                  placeholder="John Doe"
                  prefix={<UserOutlined className="text-slate-400" />}
                  className="!rounded-xl !bg-slate-50 !border-slate-200 !text-slate-900 placeholder:!text-slate-400 focus:!shadow-none"
                />
              </Form.Item>

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
                  className="!rounded-xl !bg-slate-50 !border-slate-200 !text-slate-900 placeholder:!text-slate-400 focus:!shadow-none"
                />
              </Form.Item>

              <Form.Item
                name="password"
                label={
                  <span className="text-slate-700 font-medium">Password</span>
                }
                rules={[
                  { required: true, message: "Please enter your password" },
                  { min: 6, message: "At least 6 characters" },
                ]}
              >
                <Input.Password
                  size="large"
                  placeholder="••••••••"
                  prefix={<LockOutlined className="text-slate-400" />}
                  className="!rounded-xl !bg-slate-50 !border-slate-200 !text-slate-900 placeholder:!text-slate-400 focus:!shadow-none"
                />
              </Form.Item>

              <Form.Item
                name="confirm"
                label={
                  <span className="text-slate-700 font-medium">
                    Confirm Password
                  </span>
                }
                dependencies={["password"]}
                rules={[
                  { required: true, message: "Please confirm your password" },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      const pass = getFieldValue("password");
                      if (!value || value === pass) return Promise.resolve();
                      return Promise.reject(
                        new Error("Passwords do not match"),
                      );
                    },
                  }),
                ]}
              >
                <Input.Password
                  size="large"
                  placeholder="••••••••"
                  prefix={<LockOutlined className="text-slate-400" />}
                  className="!rounded-xl !bg-slate-50 !border-slate-200 !text-slate-900 placeholder:!text-slate-400 focus:!shadow-none"
                />
              </Form.Item>

              <Button
                htmlType="submit"
                size="large"
                className="w-full !h-12 !rounded-xl !border-none !text-white font-semibold
                           !bg-gradient-to-b from-blue-500 to-blue-700
                           shadow-[0_10px_20px_rgba(37,99,235,0.35)]
                           hover:opacity-95"
              >
                Create Account
              </Button>
            </Form>

            <p className="mt-6 text-center text-slate-500">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-semibold text-blue-600 hover:text-blue-700"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}
