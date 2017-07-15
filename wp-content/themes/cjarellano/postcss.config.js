module.exports = {
    plugins: [
        require('postcss-import')({
            plugins: [
                require('stylelint')
            ]
        }),
        require('postcss-cssnext')({
            features: {
                rem: false
            }
        })
    ]
}
