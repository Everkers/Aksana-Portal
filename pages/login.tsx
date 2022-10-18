import { Button } from "@nextui-org/react";
import DiscordLogo from "@public/png/discord.png";
import { signIn } from "next-auth/react";
const LoginPage = () => {
    const handleLogin = async () => {
        await signIn("discord", { callbackUrl: "/" });
    };
    return (
        <div className="min-h-screen bg-background flex items-center justify-center w-full">
            <div className="min-h-[400px] flex flex-col items-center justify-center w-1/3 bg-cardColor rounded-lg shadow-md">
                <div className="items-center flex-col flex mb-4">
                    <img
                        alt={"discord-logo"}
                        src={DiscordLogo.src}
                        className={"w-48"}
                    />
                    <p className="text-center opacity-70 text-md  max-w-sm -mt-2">
                        Welcome to league showcase 👋🏻, currently the only
                        authentication method is discord, get started by
                        connecting your account.
                    </p>
                </div>

                <Button onClick={handleLogin}>Continue with discord</Button>
            </div>
        </div>
    );
};
export default LoginPage;
