// config.js
module.exports = {
    github: {
        username: 'MhankBarBar', // Your GitHub org/user name. (Required)
        sortBy: 'stars', // stars | updated
        limit: 8, // How many projects to display.
        exclude: {
            forks: true, // Forked projects will not be displayed if set to true.
            projects: ["MhankBarBar","dekompel"] // These projects will not be displayed. example: ['my-project1', 'my-project2']
        }
    },
    social: {
        linkedin: '',
        twitter: 'barMhank',
        facebook: '',
        dribbble: '',
        behance: '',
        medium: '',
        devto: '',
        website: 'https://antei.codes',
        phone: '+6285892766102',
        email: 'mhankbarbar@yes.my'
    },
    skills: [
        'Python', // currently learning
        'JavaScript', // currently learning
        'Node.js', // currently learning
        'Git', // currently learning
    ],
    experiences: [
    ],
    education: [
        /*{ 
            institution: 'BlaBla',
            degree: 'BluBlu',
            from: '2018',
            to: '2021'
        },
        { 
            institution: 'BlaBla',
            degree: 'BluBlu',
            from: '2012',
            to: '2014',
        }*/
    ],
    blog: {
        // Display blog posts from your medium or dev.to account. (Optional)
        /*source: 'dev.to', // medium | dev.to
        username: 'username', // your username (medium|dev.to)
        limit: 2 // How many posts to display. Max is 10.*/
    },
    googleAnalytics: {
        // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
        id: '' // Please remove this and use your own tag id
    },
    hotjar: {
        id: '', //  Please remove this and use your own id
        snippetVersion : 6
    },
    themeConfig: {
        default: 'dark',

        // Hides the switch in the navbar
        // Useful if you want to support a single color mode
        disableSwitch: true,

        // Should we use the prefers-color-scheme media-query,
        // using user system preferences, instead of the hardcoded default
        respectPrefersColorScheme: true,

        // Available themes. To remove any theme, exclude from here.
        themes: [
            'light',
            'dark',
            'cupcake',
            'bumblebee',
            'emerald',
            'corporate',
            'synthwave',
            'retro',
            'cyberpunk',
            'valentine',
            'halloween',
            'garden',
            'forest',
            'aqua',
            'lofi',
            'pastel',
            'fantasy',
            'wireframe',
            'black',
            'luxury',
            'dracula'
        ]
    }
}
