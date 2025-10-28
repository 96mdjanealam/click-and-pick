import Logo from '@/assets/icons/Logo'
import { LoginForm } from '@/components/modules/login-form'
import { Link } from 'react-router'
import login_img from "../assets/images/login_img.jpg"


const Login = () => {
    return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
            <Link to={"/"} className="text-primary-foreground flex items-center justify-center">
              <Logo/>
            </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <img
          src={login_img}
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.5]"
        />
      </div>
    </div>
  )
}

export default Login