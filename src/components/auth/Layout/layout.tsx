export const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="h-screen w-full grid grid-cols-5">
            <div className="bg-[#151515] h-full col-span-2 py-20 px-10">
                {children}
            </div>
            <div className="h-full col-span-3 relative">
                <div className="w-full h-full absolute inset-0 bg-primary bg-opacity-30 z-100"></div>
                <img
                    className="h-full w-full object-cover "
                    src={"https://images8.alphacoders.com/106/1066325.jpg"}
                />
            </div>
        </div>
    );
};

export interface LayoutProps {
    children: JSX.Element;
}
