import {reactRouter} from "@react-router/dev/vite";
import {defineConfig} from "vite";
import {testPlugin} from "@test/testPlugin";

export default defineConfig({
    plugins: [
        reactRouter(),
        testPlugin()
    ],
});
