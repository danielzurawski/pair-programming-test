const campaigns = [
    {
        id: 1,
        autoMatch: true,
        name: 'Campaign 1',
        placements: [],
        creatives: [
            {
                id: 1,
                name: 'Video 1',
                isTag: true,
                formatId: 7,
                tag: 'http;//test.video.com/vast'
            },
            {
                id: 2,
                name: 'Banner 1',
                isTag: false,
                formatId: 4,
                creativeUrl: 'http//images.superawesome.tv/ad1'
            }
        ]
    },
    {
        id: 2,
        autoMatch: false,
        name: 'Campaign 2',
        placements: [3, 4, 5, 6, 8],
        creatives: [
            {
                id: 3,
                name: 'Video 1',
                formatId: 7,
                isTag: false,
                creativeUrl: 'http//images.superawesome.tv/video.mp4'
            },
            {
                id: 4,
                name: 'Banner 1',
                formatId: 4,
                isTag: true,
                tag: '<img src="http://ads.superawesome.tv/ads.js?placement=123214" />'
            }
        ]
    }
];

 

const placements = [
    {
        id: 1,
        app : {
            id: 2,
            allowTag: true,
            autoApprove: true
        },
        formatId: 7,
        name: 'Video placement 1'
    },
    {
        id: 2,
        app : {
            id: 2,
            allowTag: true,
            autoApprove: true
        },
        formatId: 3,
        name: 'LBanner placement 1'
    },
    {
        id: 3,
        app : {
            id: 2,
            allowTag: false,
            autoApprove: true
        },
        formatId: 4,
        name: 'Banner placement 1'
    },
    {
        id: 4,
        app : {
            id: 2,
            allowTag: false,
            autoApprove: true
        },
        formatId: 7,
        name: 'Video placement 2'
    },
    {
        id: 5,
        app : {
            id: 2,
            allowTag: true,
            autoApprove: false
        },
        formatId: 4,
        name: 'Banner placement 2'
    },
]

module.exports = {
    placements,
    campaigns
}

