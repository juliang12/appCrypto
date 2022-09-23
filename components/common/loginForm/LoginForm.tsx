import styles from "../../../styles/index";
import Logo from "../../../assets/icons/ethereumLogo.png";
import Image from "next/image";

const LoginForm = () => {
  return (
    <div className={styles.container}>
      <h1 className="font-bold font-poppins uppercase text-white text-center pt-10">
        Please connect your wallet
      </h1>
      <div className={styles.exchangeBoxWrapper}>
        <div className="p-1 bg-gradient-to-tr from-pink-600 to-blue-600 rounded">
          <div className="bg-zinc-900 p-1">
            <div className="pink_gradient" />
            <div className="m-5 p-10 border-1 border-pink-600">
              <Image src={Logo} width={250} height={400} />
            </div>
          </div>
          <div className="blue_gradient" />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
