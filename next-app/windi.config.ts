import defineConfig from "windicss/helpers"

export default defineConfig({
    extract: {
        include: [
            './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
            './src/components/**/*.{js,ts,jsx,tsx,mdx}',
            './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        ],
        exclude: ['node_modules', '.git', '.next']
    }
})