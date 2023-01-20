module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		"plugin:react/recommended",
		"standard-with-typescript",
		"prettier",
		"plugin:@typescript-eslint/eslint-recommended",
	],
	overrides: [],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
		project: ["./tsconfig.json"],
		extraFileExtensions: [".scss", ".html"],
	},
	plugins: ["react"],
	rules: {
		"@typescript-eslint/space-before-function-paren": [
			"error",
			{
				anonymous: "never",
				named: "never",
				asyncArrow: "always",
			},
		],
		"@typescript-eslint/no-unused-vars": "warn",
		"@typescript-eslint/semi": ["error", "always"],
		"@typescript-eslint/quotes": [2, "double"],
		"@typescript-eslint/indent": ["error", "tab"],
		"@typescript-eslint/no-tabs": "off",
		"@typescript-eslint/comma-dangle": [2, "always-multiline"],
		"@typescript-eslint/react-in-jsx-scope": "off",
		"@typescript-eslint/no-non-null-assertion": "off",
		"@typescript-eslint/no-misused-promises": "off",
		"@typescript-eslint/no-floating-promises": "off",
		"@typescript-eslint/restrict-template-expressions": "off",
		"@typescript-eslint/strict-boolean-expressions": "off",
		"@typescript-eslint/no-unnecessary-type-assertion": "off",
		"@typescript-eslint/promise-function-async": "off",
		"@typescript-eslint/triple-slash-reference": "off",
		"react/react-in-jsx-scope": "off",
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
