import { createTheme } from "@nextui-org/react";
import config from "tailwind.config";
export const theme = createTheme({
    type: "dark",
    theme: {
        colors: {
            background: config.theme.extend.colors.background,
            primary: config.theme.extend.colors.primary,
            primaryBorder: config.theme.extend.colors.primary,
        },
        space: {},
        fonts: {},
    },
});
