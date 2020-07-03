const BACKSTOP_TEST_CSS_OVERRIDE = `html {background-image: none;}`

module.exports = function (page, scenario) {
    // inject arbitrary css to override styles
    page.evaluate(`window._styleData = '${BACKSTOP_TEST_CSS_OVERRIDE}'`)
    page.evaluate(() => {
        const style = document.createElement('style')
        style.type = 'text/css'
        const styleNode = document.createTextNode(window._styleData)
        style.append(styleNode)
        document.head.append(style)
    })

    console.log('BACKSTOP_TEST_CSS_OVERRIDE injected for: ' + scenario.label)
}
