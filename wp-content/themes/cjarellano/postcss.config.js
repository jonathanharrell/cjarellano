module.exports = {
    plugins: [
        require('postcss-import')(),
        require('postcss-cssnext')({
            browsers: [
                '> 1%',
                'last 2 versions',
                'Firefox ESR',
                'Opera 12.1',
                'iOS 9'
            ],
            features: {
                rem: {html: false}
            }
        })
    ]
}
