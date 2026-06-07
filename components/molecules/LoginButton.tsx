import Link from "next/link";

const LoginButton = () => {
  return (
    <Link href="/login" className="bg-indigo text-white px-5 py-2 rounded-full font-medium hover:bg-indigo-700 transition-colors">
      Masuk
    </Link>
  );
};

export default LoginButton;
