module.exports = {
    transform: {
        '^.+\\.jsx?$': `<rootDir>/jest.preprocess.js`,
    },
    moduleNameMapper: {
        '.+\\.(css|styl|less|sass|scss|svg)$': `identity-obj-proxy`,
        '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/__mocks__/file-mock.js`,
        'socials.js': `<rootDir>/__mocks__/file-mock.js`,
    },
    testPathIgnorePatterns: [
        `node_modules`,
        `cypress`,
        `\\.cache`,
        `<rootDir>.*/public`,
    ],
    transformIgnorePatterns: [
        `node_modules/(?!(gatsby|react-icons)/)`,
        `cypress`,
    ],
    globals: {
        __PATH_PREFIX__: ``,
    },
    testURL: `http://localhost`,
    verbose: true,
    setupFiles: [`<rootDir>/jest.loadershim.js`],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
}
