module.exports = {
    title: 'knowledge base',
    description: 'searching filings of personal research',
    serviceWorker: true,
    base: '/',
    dest: './docs',
    themeConfig: {
        // sidebar: {
        //     '/project_management/': [
        //         ''
        //     ],
        //     '/us_taxation/': [
        //         ''
        //     ],
        //     '/': [
        //         ''
        //     ]
        // }
        sidebar: [
            {
                title: 'knowledge base',
                children: [
                    '/'
                ]
            },
            {
                title: 'project management',
                children: [
                    '/project_management/'
                ]
            },
            {
                title: 'business',
                children: [
                    '/business/founders_agreement.md',
                    '/business/operation_management.md',
                ]
            },
            {
                title: 'us taxes',
                children: [
                    '/us_taxation/',
                    '/us_taxation/individual_taxation.md',
                    '/us_taxation/gross_income_inclusions.md',
                    '/us_taxation/gross_income_exclusions.md',
                ]
            },
            {
                title: 'appendix',
                children: [
                    '/appendix/',
                    '/appendix/sources.md',
                ]
            }
        ]
    }
}