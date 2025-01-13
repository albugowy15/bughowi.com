import eslintPluginAstro from 'eslint-plugin-astro';

export default [
	...eslintPluginAstro.configs.recommended,
	{
		ignores: ['.astro', '.git', '.github', '.vercel', '.vscode', 'node_modules', 'public', 'dist'],
	},
];
