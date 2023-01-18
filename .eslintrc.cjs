module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ["plugin:react/recommended", "standard-with-typescript", "prettier"],
	overrides: [],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["react"],
	rules: {
		"n/no-callback-literal": "off",
		"no-unused-vars": [
			"error",
			{ vars: "all", args: "after-used", ignoreRestSiblings: false },
		],
		"space-before-function-paren": [
			"error",
			{
				anonymous: "never",
				named: "never",
				asyncArrow: "always",
			},
		],
		"@typescript-eslint/space-before-function-paren": [
			"error",
			{
				anonymous: "never",
				named: "never",
				asyncArrow: "always",
			},
		],
		"@typescript-eslint/no-unused-vars": "warn",
		semi: ["error", "always"],
		"@typescript-eslint/semi": ["error", "always"],
		quotes: [2, "double"],
		"@typescript-eslint/quotes": [2, "double"],
		indent: ["error", "tab"],
		"@typescript-eslint/indent": ["error", "tab"],
		"no-tabs": "off",
		"@typescript-eslint/no-tabs": "off",
		"comma-dangle": [2, "always-multiline"],
		"@typescript-eslint/comma-dangle": [2, "always-multiline"],
		camelcase: "warn",
		"react/react-in-jsx-scope": "off",
		"@typescript-eslint/react-in-jsx-scope": "off",
		"react/jsx-filename-extension": [
			1,
			{ extensions: [".js", ".jsx", ".ts", "tsx"] },
		],
		"@typescript-eslint/no-non-null-assertion": "off",
		"no-extra-boolean-cast": "off",
		"@typescript-eslint/no-misused-promises": "off",
		"@typescript-eslint/no-floating-promises": "off",
		"@typescript-eslint/restrict-template-expressions": "off",
		"@typescript-eslint/strict-boolean-expressions": "off",
		"@typescript-eslint/no-unnecessary-type-assertion": "off",
		"@typescript-eslint/promise-function-async": "off",
		"import/order": [
			"error",
			{
				groups: ["builtin", "external", "internal"],
				pathGroups: [
					{
						pattern: "react",
						group: "external",
						position: "before",
					},
				],
				pathGroupsExcludedImportTypes: ["react"],
				"newlines-between": "always",
				alphabetize: {
					order: "asc",
					caseInsensitive: true,
				},
			},
		],
	},
};
