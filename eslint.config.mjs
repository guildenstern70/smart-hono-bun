// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import babelParser from '@babel/eslint-parser';

export default [
    {
        files: ["**/*.ts"],
        plugins: {
            typescript: tseslint,
            eslint
        },
        languageOptions: {
            parser: babelParser
        },
        rules: {
            semi: "error",
            "prefer-const": "error"
        }
    },
    {
        files: ["**/*.tsx"],
        plugins: {
            typescript: tseslint,
            react
        },
        languageOptions: {
            parser: babelParser
        },
        rules: {
            semi: "error",
            "prefer-const": "error"
        }
    }
];

