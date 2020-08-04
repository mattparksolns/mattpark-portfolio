module.exports = {
    transform: {
        '^.+\\.jsx?$': `<rootDir>/jest.preprocess.js`,
    },
    moduleNameMapper: {
        '.+\\.(css|styl|less|sass|scss|svg)$': `identity-obj-proxy`,
        '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/__mocks__/file-mock.js`,
        'socials.js': `<rootDir>/__mocks__/file-mock.js`,
        '^@static(.*)$': `<rootDir>/static/$1`,
        '^@components(.*)$': `<rootDir>/src/components/$1`,
        '^@store(.*)$': `<rootDir>/src/store/$1`,
        '^@themes(.*)$': `<rootDir>/src/themes/$1`,
        '^@page-components(.*)$': `<rootDir>/src/page-components/$1`,
    },
    testPathIgnorePatterns: [`node_modules`, `cypress`, `\\.cache`, `<rootDir>.*/public`],
    transformIgnorePatterns: [`node_modules/(?!(gatsby|react-icons)/)`, `cypress`],
    globals: {
        __PATH_PREFIX__: ``,
    },
    testURL: `http://localhost`,
    verbose: true,
    setupFiles: [`<rootDir>/jest.loadershim.js`],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
}
