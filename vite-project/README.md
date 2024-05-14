# Ideas for the app

## Quiz Ideas

-   Quiz #1: Element name and symbol
-   Quiz #2: Element trivia
-   Quiz #3 (hard): Match common molecules to molecular formula (inc. polyatomic ions, etc?)
-   Quiz #4 (very hard): Match picture of biological molecule to name
-   Quiz #5 (extreme): Match amino acid structure to its name
-   extra ideas: spot the imposter element name

## Optional features to try and implement

-   Smooth transitions and animations

## To do list

## Quiz 4 list of molecules

-   Hemoglobin
-   Heme
-   Phosphatidylserine
-   Arachidonic acid
-   Glycerol
-   choline
-   carnitine
-   cholesterol
-   testosterone
-   estradiol (one of the estrogens)
-   NADH
-   flavin
-   Beta-D-Glucose
-   D-Fructose
-   oxaloacetate
-   biotin
-   Ribose
-   Adenine
-   Thymine
-   caffeine

## History of installed packages

"npm install --save bootstrap"
"npm install reactstrap"

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

-   Configure the top-level `parserOptions` property like this:

```js
export default {
    // other rules...
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: ["./tsconfig.json", "./tsconfig.node.json"],
        tsconfigRootDir: __dirname,
    },
};
```

-   Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
-   Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
-   Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
