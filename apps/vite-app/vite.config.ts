import {defineConfig} from "vite";
import {testPlugin} from "@test/testPlugin";

export default defineConfig({
    plugins: [
        testPlugin()
    ],
});
