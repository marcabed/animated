/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-1.7.1.min.js",
            js+"AttrPlugin.min.js",
            js+"BezierPlugin.min.js",
            js+"ColorPropsPlugin.min.js",
            js+"CSSPlugin.min.js",
            js+"CSSRulePlugin.min.js",
            js+"DirectionalRotationPlugin.min.js",
            js+"EaselPlugin.min.js",
            js+"EndArrayPlugin.min.js",
            js+"KineticPlugin.min.js",
            js+"RaphaelPlugin.min.js",
            js+"RoundPropsPlugin.min.js",
            js+"ScrollToPlugin.min.js",
            js+"TextPlugin.min.js",
            js+"jquery.gsap.min.js",
            js+"TimelineLite.min.js",
            js+"TimelineMax.min.js",
            js+"TweenLite.min.js",
            js+"TweenMax.min.js"
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "width",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'sol',
                            type: 'image',
                            rect: ['0', '-540', '1280', '1643', 'auto', 'auto'],
                            opacity: '0.34085083007812',
                            fill: ["rgba(0,0,0,0)",im+"sol.svg",'0px','0px']
                        },
                        {
                            id: 'sky',
                            type: 'image',
                            rect: ['-18', '-810', '1315', '1938', 'auto', 'auto'],
                            opacity: '0.33299179350744',
                            fill: ["rgba(0,0,0,0)",'sky.svg','0px','0px']
                        },
                        {
                            id: 'Sea',
                            symbolName: 'Symbol_1',
                            type: 'rect',
                            rect: ['-58.2%', '8.7%', '2883', '5507', 'auto', 'auto'],
                            transform: [[],[],[],['1','1.07554']]
                        },
                        {
                            id: 'logoapp',
                            type: 'image',
                            rect: ['115', '2442', '483', '177', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"logoapp.svg",'0px','0px']
                        },
                        {
                            id: 'infobg',
                            type: 'image',
                            rect: ['-3', '4398', '1281px', '1122', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"infobg.svg",'0px','0px']
                        },
                        {
                            id: '_11042008-Songkran_Hat_yai_4382',
                            type: 'image',
                            rect: ['856', '4952', '425', '285', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"11042008-Songkran%20Hat%20yai%20438.jpg",'0px','0px']
                        },
                        {
                            id: '_23062014-DSC_52632',
                            type: 'image',
                            rect: ['2', '5238', '425', '283', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"23062014-DSC_5263.jpg",'0px','0px']
                        },
                        {
                            id: '_23062014-DSC_53292',
                            type: 'image',
                            rect: ['429', '5237', '425', '283', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"23062014-DSC_5329.jpg",'0px','0px']
                        },
                        {
                            id: '_21062014-DSC_51762',
                            type: 'image',
                            rect: ['856', '5238', '425', '283', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"21062014-DSC_5176.jpg",'0px','0px']
                        },
                        {
                            id: 'affiche-dc-Bar',
                            type: 'image',
                            rect: ['427', '4120', '421', '616', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"affiche-dc-Bar.jpg",'0px','0px']
                        },
                        {
                            id: 'boue',
                            type: 'image',
                            rect: ['407', '3688', '926', '569', 'auto', 'auto'],
                            opacity: '0.09771728515625',
                            fill: ["rgba(0,0,0,0)",im+"boue.svg",'0px','0px']
                        },
                        {
                            id: 'Street-M-1408',
                            type: 'image',
                            rect: ['849', '4120', '421', '616', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Street-M-1408.jpg",'0px','0px']
                        },
                        {
                            id: 'logoecole',
                            type: 'image',
                            rect: ['160', '2674', '36', '46', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"logoecole.png",'0px','0px']
                        },
                        {
                            id: 'logoexpe3',
                            symbolName: 'logoexpe3',
                            type: 'rect',
                            rect: ['749', '3577', '522', '129', 'auto', 'auto'],
                            transform: [[],[],[],['0.81774','0.81774']]
                        },
                        {
                            id: 'expe3',
                            type: 'image',
                            rect: ['188', '2970', '1545', '1094', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"expe3.svg",'0px','0px']
                        },
                        {
                            id: 'expe',
                            type: 'image',
                            rect: ['0', '1941', '1270', '429', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"expe.svg",'0px','0px']
                        },
                        {
                            id: 'ancrechaine',
                            symbolName: 'ancrechaine',
                            type: 'rect',
                            rect: ['42%', '-2.7%', '235', '1306', 'auto', 'auto'],
                            cursor: 'pointer',
                            filter: [0, 0, 0.91, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'Contest-Ste-A3',
                            type: 'image',
                            rect: ['6', '4120', '421', '616', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Contest-S%C3%A8te-A3.jpg",'0px','0px']
                        },
                        {
                            id: 'video',
                            symbolName: 'video',
                            type: 'rect',
                            rect: ['122', '3409', '640', '360', 'auto', 'auto']
                        },
                        {
                            id: 'ecole',
                            symbolName: 'ecole',
                            type: 'rect',
                            rect: ['-602', '721', '2175', '1480', 'auto', 'auto']
                        },
                        {
                            id: 'bartsl3',
                            type: 'image',
                            rect: ['200', '812', '291', '411', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bartsl.svg",'0px','0px']
                        },
                        {
                            id: 'rond',
                            type: 'image',
                            rect: ['346', '33', '630', '467', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",'rond.svg','0px','0px']
                        },
                        {
                            id: 'Untitled-2',
                            type: 'image',
                            rect: ['327', '-225', '557', '984', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Untitled-2.svg",'0px','0px']
                        },
                        {
                            id: 'logogitlink',
                            symbolName: 'logogitlink',
                            type: 'rect',
                            rect: ['85', '71', '948', '119', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'textetu',
                            symbolName: 'textetu',
                            type: 'rect',
                            rect: ['1219', '1256', '596', '280', 'auto', 'auto'],
                            overflow: 'visible'
                        },
                        {
                            id: 'up-to-numerique2',
                            type: 'image',
                            rect: ['207', '2674', '152', '46', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"up-to-numerique.gif",'0px','0px']
                        },
                        {
                            id: 'ftlogo',
                            type: 'image',
                            rect: ['530', '2668', '42', '58', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"ftlogo.svg",'0px','0px']
                        },
                        {
                            id: 'acquis2',
                            symbolName: 'acquis',
                            type: 'rect',
                            rect: ['636', '3389', '161', '177', 'auto', 'auto'],
                            overflow: 'visible'
                        },
                        {
                            id: 'logodell',
                            type: 'image',
                            rect: ['1103', '2649', '52', '51', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"logodell.svg",'0px','0px']
                        },
                        {
                            id: 'kaliop',
                            type: 'image',
                            rect: ['908', '2726', '171', '52', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"kaliop.svg",'0px','0px']
                        },
                        {
                            id: 'tabmo4',
                            type: 'image',
                            rect: ['891', '2650', '206', '49', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"tabmo.svg",'0px','0px']
                        },
                        {
                            id: 'cgi',
                            type: 'image',
                            rect: ['1104', '2726', '51', '51', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"cgi.svg",'0px','0px']
                        },
                        {
                            id: 'expe14',
                            symbolName: 'expe1',
                            type: 'rect',
                            rect: ['523', '3190', '720', '177', 'auto', 'auto'],
                            overflow: 'visible'
                        },
                        {
                            id: 'expe22',
                            type: 'image',
                            rect: ['90', '2919', '748', '267', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"expe2.svg",'0px','0px']
                        },
                        {
                            id: 'logois2',
                            type: 'image',
                            rect: ['62', '3151', '106', '75', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"logois.svg",'0px','0px']
                        },
                        {
                            id: 'logolagazette2',
                            type: 'image',
                            rect: ['147', '3118', '201', '141', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"logolagazette.svg",'0px','0px']
                        },
                        {
                            id: 'logolemonde2',
                            type: 'image',
                            rect: ['474', '3117', '201', '142', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"logolemonde.svg",'0px','0px']
                        },
                        {
                            id: 'logopolka2',
                            type: 'image',
                            rect: ['364', '3105', '235', '167', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"logopolka.svg",'0px','0px']
                        },
                        {
                            id: 'logolfvd2',
                            type: 'image',
                            rect: ['298', '3129', '168', '119', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"logolfvd.svg",'0px','0px']
                        },
                        {
                            id: 'sailor',
                            type: 'image',
                            rect: ['878', '1570', '309px', '319px', 'auto', 'auto'],
                            opacity: '0.3203125',
                            fill: ["rgba(0,0,0,0)",im+"sailor.svg",'0px','0px']
                        },
                        {
                            id: 'sailorCopy',
                            type: 'image',
                            rect: ['164', '1570', '309px', '319px', 'auto', 'auto'],
                            opacity: '0.3203125',
                            fill: ["rgba(0,0,0,0)",im+"sailor.svg",'0px','0px'],
                            transform: [[],[],[],['-1.00577']]
                        },
                        {
                            id: 'logosimplon',
                            type: 'image',
                            rect: ['374', '2674', '144', '46', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"logosimplon.png",'0px','0px']
                        },
                        {
                            id: 'is2016',
                            type: 'image',
                            rect: ['906', '2903', '281', '418', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"is2016.jpg",'0px','0px']
                        },
                        {
                            id: 'infographie',
                            type: 'image',
                            rect: ['208', '3709', '864', '439', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"infographie.svg",'0px','0px']
                        },
                        {
                            id: '_08062014-DSC_38663',
                            type: 'image',
                            rect: ['2', '4954', '425', '283', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"08062014-DSC_3866.jpg",'0px','0px']
                        },
                        {
                            id: '_08062014-DSC_40642',
                            type: 'image',
                            rect: ['429', '4952', '425', '283', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"08062014-DSC_4064.jpg",'0px','0px']
                        },
                        {
                            id: 'photographie',
                            type: 'image',
                            rect: ['110', '4731', '1020', '259', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"photographie.svg",'0px','0px']
                        },
                        {
                            id: 'shark2',
                            symbolName: 'shark',
                            type: 'rect',
                            rect: ['1302', '1055', '495', '201', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1280', '6250', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 30000,
                    autoPlay: false,
                    labels: {
                        "loop": 0
                    },
                    data: [
                        [
                            "eid480",
                            "scaleY",
                            13500,
                            0,
                            "linear",
                            "${logoexpe3}",
                            '0.81774',
                            '0.81774'
                        ],
                        [
                            "eid484",
                            "top",
                            13500,
                            0,
                            "linear",
                            "${logoexpe3}",
                            '3577px',
                            '3577px'
                        ],
                        [
                            "eid9",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${Sea}",
                            '1.07554',
                            '1.07554'
                        ],
                        [
                            "eid7",
                            "top",
                            0,
                            13500,
                            "linear",
                            "${Sea}",
                            '8.67%',
                            '5.27%'
                        ],
                        [
                            "eid493",
                            "top",
                            13500,
                            500,
                            "linear",
                            "${Sea}",
                            '5.27%',
                            '5.32%'
                        ],
                        [
                            "eid472",
                            "top",
                            14000,
                            11500,
                            "linear",
                            "${Sea}",
                            '5.32%',
                            '4.7%'
                        ],
                        [
                            "eid479",
                            "scaleX",
                            13500,
                            0,
                            "linear",
                            "${logoexpe3}",
                            '0.81774',
                            '0.81774'
                        ],
                        [
                            "eid6",
                            "left",
                            0,
                            25500,
                            "linear",
                            "${Sea}",
                            '-58.17%',
                            '-59.92%'
                        ],
                        [
                            "eid433",
                            "opacity",
                            9965,
                            0,
                            "linear",
                            "${expe}",
                            '1',
                            '1'
                        ],
                        [
                            "eid434",
                            "opacity",
                            20000,
                            0,
                            "linear",
                            "${expe}",
                            '1',
                            '1'
                        ],
                        [
                            "eid483",
                            "left",
                            13500,
                            0,
                            "linear",
                            "${logoexpe3}",
                            '749px',
                            '749px'
                        ],
                            [ "eid26", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${video}', [] ] ],
                            [ "eid398", "trigger", 9000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${textetu}', [9000] ] ],
                            [ "eid429", "trigger", 11139.591946192, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${Sea}', [] ] ]
                    ]
                }
            },
            "ancre": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [7, 303, 228, 262, 'auto', 'auto'],
                            id: 'ancre',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ancre.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 228, 262]
                        }
                    }
                },
                timeline: {
                    duration: 5000,
                    autoPlay: true,
                    data: [
                        [
                            "eid297",
                            "top",
                            0,
                            5000,
                            "linear",
                            "${ancre}",
                            '303px',
                            '1747px'
                        ]
                    ]
                }
            },
            "ecole": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [650, 333, '596px', '842px', 'auto', 'auto'],
                            id: 'uptologo',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uptologo.svg', '0px', '0px']
                        },
                        {
                            rect: [808, 486, 280, 130, 'auto', 'auto'],
                            id: 'grisart2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'grisart.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 2175, 1480]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "ancrechaine": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [103, -729, 29, 1300, 'auto', 'auto'],
                            id: 'chaine2',
                            type: 'image',
                            clip: 'rect(994px 29px 1300px 0px)',
                            fill: ['rgba(0,0,0,0)', 'chaine.svg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: [0, 2, 228, 262, 'auto', 'auto'],
                            id: 'ancre2',
                            symbolName: 'ancre',
                            cursor: 'pointer',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['1', '1.01343', 1], ['50%', '50%']]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 235, 1306]
                        }
                    }
                },
                timeline: {
                    duration: 5000,
                    autoPlay: true,
                    data: [
                        [
                            "eid346",
                            "top",
                            0,
                            5000,
                            "linear",
                            "${chaine2}",
                            '-729px',
                            '501px'
                        ],
                        [
                            "eid331",
                            "clip",
                            0,
                            5000,
                            "linear",
                            "${chaine2}",
                            [994,29,1300,0],
                            [0,29,1300,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ]
                    ]
                }
            },
            "logogitlink": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'github',
                            rect: [0, 13, 0, '106px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'github.svg', '0px', '0px']
                        },
                        {
                            fi: ['0', '-13deg', '1', '1', '0', '0', '0', '0px', 'rgba(0,0,0,0)', '0px', '0px', '0px'],
                            type: 'image',
                            filter: ['0', '-13deg', '1', '1', '0', '0', '0', '0px', 'rgba(0,0,0,0)', '0px', '0px', '0px'],
                            id: 'link',
                            rect: [948, 0, 0, '106px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'link.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 948, 119]
                        }
                    }
                },
                timeline: {
                    duration: 5000,
                    autoPlay: true,
                    data: [
                        [
                            "eid357",
                            "width",
                            0,
                            2500,
                            "easeInOutBounce",
                            "${github}",
                            '0px',
                            '138px'
                        ],
                        [
                            "eid365",
                            "filter.hue-rotate",
                            5000,
                            0,
                            "linear",
                            "${link}",
                            '-13deg',
                            '-13deg'
                        ],
                        [
                            "eid356",
                            "width",
                            0,
                            2500,
                            "easeInOutBounce",
                            "${link}",
                            '0px',
                            '138px'
                        ]
                    ]
                }
            },
            "textetu": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [79, 0, '191px', '41px', 'auto', 'auto'],
                            id: 'annee8',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/annee.svg', '0px', '0px']
                        },
                        {
                            rect: [94, 0, 502, 48, 'auto', 'auto'],
                            id: 'barca2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/barca.svg', '0px', '0px']
                        },
                        {
                            rect: [0, 161, 376, 119, 'auto', 'auto'],
                            id: 'anneeup',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/anneeup.svg', '0px', '0px']
                        },
                        {
                            rect: [104, 190, 396, 61, 'auto', 'auto'],
                            id: 'formup',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/formup.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 596, 280]
                        }
                    }
                },
                timeline: {
                    duration: 9000,
                    autoPlay: true,
                    data: [
                        [
                            "eid391",
                            "top",
                            6000,
                            1228,
                            "linear",
                            "${barca2}",
                            '0px',
                            '-3px'
                        ],
                        [
                            "eid390",
                            "left",
                            6000,
                            1228,
                            "linear",
                            "${barca2}",
                            '94px',
                            '-393px'
                        ],
                        [
                            "eid397",
                            "left",
                            7228,
                            1772,
                            "linear",
                            "${formup}",
                            '104px',
                            '-340px'
                        ],
                        [
                            "eid389",
                            "left",
                            5262,
                            1238,
                            "linear",
                            "${annee8}",
                            '79px',
                            '-526px'
                        ],
                        [
                            "eid395",
                            "left",
                            6500,
                            1500,
                            "linear",
                            "${anneeup}",
                            '0px',
                            '-619px'
                        ]
                    ]
                }
            },
            "Symbol_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [545, 0, '187px', '124px', 'auto', 'auto'],
                            id: 'cloud',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'cloud.svg', '0px', '0px']
                        },
                        {
                            rect: [2091, 189, '268px', '125px', 'auto', 'auto'],
                            id: 'cloud2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'cloud2.svg', '0px', '0px']
                        },
                        {
                            rect: [1878, 47, 199, 365, 'auto', 'auto'],
                            id: 'phare2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'phare.svg', '0px', '0px']
                        },
                        {
                            rect: [550, 360, 1712, 302, 'auto', 'auto'],
                            id: 'sea4',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/sea4.svg', '0px', '0px']
                        },
                        {
                            rect: [1541, 382, 113, 61, 'auto', 'auto'],
                            id: 'boatpdf',
                            transform: [[0, 0, 0], ['18', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/boatpdf.svg', '0px', '0px']
                        },
                        {
                            rect: [592, 391, 1720, 262, 'auto', 'auto'],
                            id: 'sea3',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/sea3.svg', '0px', '0px']
                        },
                        {
                            rect: [1106, 352, 208, 100, 'auto', 'auto'],
                            id: 'boatmail',
                            transform: [[0, 0, 0], ['41', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/boatmail.svg', '0px', '0px']
                        },
                        {
                            rect: [559, 412, 1621, 213, 'auto', 'auto'],
                            id: 'sea2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/sea2.svg', '0px', '0px']
                        },
                        {
                            rect: [0, 402, 2883, 5105, 'auto', 'auto'],
                            id: 'sea1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/sea1.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 2883, 5507]
                        }
                    }
                },
                timeline: {
                    duration: 30000,
                    autoPlay: true,
                    labels: {
                        "tour": 0
                    },
                    data: [
                        [
                            "eid140",
                            "rotateZ",
                            0,
                            4500,
                            "easeInElastic",
                            "${boatpdf}",
                            '18deg',
                            '10deg'
                        ],
                        [
                            "eid141",
                            "rotateZ",
                            4500,
                            25500,
                            "easeOutElastic",
                            "${boatpdf}",
                            '10deg',
                            '16deg'
                        ],
                        [
                            "eid1",
                            "left",
                            0,
                            5000,
                            "linear",
                            "${sea4}",
                            '550px',
                            '630px'
                        ],
                        [
                            "eid75",
                            "left",
                            5000,
                            25000,
                            "linear",
                            "${sea4}",
                            '626px',
                            '553px'
                        ],
                        [
                            "eid317",
                            "rotateZ",
                            0,
                            3000,
                            "linear",
                            "${boatmail}",
                            '3deg',
                            '2deg'
                        ],
                        [
                            "eid318",
                            "rotateZ",
                            3000,
                            2000,
                            "linear",
                            "${boatmail}",
                            '2deg',
                            '3deg'
                        ],
                        [
                            "eid136",
                            "rotateZ",
                            5000,
                            25000,
                            "easeOutElastic",
                            "${boatmail}",
                            '3deg',
                            '6deg'
                        ],
                        [
                            "eid5",
                            "left",
                            0,
                            5000,
                            "linear",
                            "${sea2}",
                            '559px',
                            '642px'
                        ],
                        [
                            "eid67",
                            "left",
                            5000,
                            25000,
                            "linear",
                            "${sea2}",
                            '642px',
                            '481px'
                        ],
                        [
                            "eid374",
                            "left",
                            0,
                            30000,
                            "linear",
                            "${cloud}",
                            '545px',
                            '2077px'
                        ],
                        [
                            "eid379",
                            "left",
                            0,
                            30000,
                            "linear",
                            "${cloud2}",
                            '2091px',
                            '502px'
                        ],
                        [
                            "eid8",
                            "left",
                            0,
                            3000,
                            "linear",
                            "${sea1}",
                            '0px',
                            '-57px'
                        ],
                        [
                            "eid313",
                            "left",
                            3000,
                            2000,
                            "linear",
                            "${sea1}",
                            '-57px',
                            '-81px'
                        ],
                        [
                            "eid65",
                            "left",
                            5000,
                            25000,
                            "linear",
                            "${sea1}",
                            '-81px',
                            '0px'
                        ],
                        [
                            "eid131",
                            "left",
                            0,
                            5000,
                            "easeInElastic",
                            "${boatmail}",
                            '1106px',
                            '1075px'
                        ],
                        [
                            "eid134",
                            "left",
                            5000,
                            25000,
                            "easeOutElastic",
                            "${boatmail}",
                            '1075px',
                            '1106px'
                        ],
                        [
                            "eid414",
                            "left",
                            0,
                            30000,
                            "linear",
                            "${boatpdf}",
                            '1541px',
                            '1792px'
                        ],
                        [
                            "eid416",
                            "top",
                            0,
                            30000,
                            "linear",
                            "${boatpdf}",
                            '382px',
                            '391px'
                        ],
                        [
                            "eid3",
                            "left",
                            0,
                            5000,
                            "linear",
                            "${sea3}",
                            '592px',
                            '489px'
                        ],
                        [
                            "eid69",
                            "left",
                            5000,
                            25000,
                            "linear",
                            "${sea3}",
                            '489px',
                            '592px'
                        ]
                    ]
                }
            },
            "clickme": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'macaron',
                            type: 'image',
                            rect: [699, -33, '152px', '152px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/macaron.svg', '0px', '0px']
                        },
                        {
                            id: 'macaronCopy',
                            type: 'image',
                            rect: [0, -33, '152px', '152px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/macaron.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 851, 152]
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: true,
                    data: [
                        [
                            "eid420",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${macaronCopy}",
                            '-33px',
                            '-25px'
                        ],
                        [
                            "eid423",
                            "top",
                            1000,
                            1000,
                            "linear",
                            "${macaronCopy}",
                            '-25px',
                            '40px'
                        ],
                        [
                            "eid425",
                            "top",
                            2000,
                            1000,
                            "linear",
                            "${macaronCopy}",
                            '40px',
                            '0px'
                        ],
                        [
                            "eid422",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${macaron}",
                            '-33px',
                            '-25px'
                        ],
                        [
                            "eid424",
                            "top",
                            1000,
                            1000,
                            "linear",
                            "${macaron}",
                            '-25px',
                            '40px'
                        ],
                        [
                            "eid426",
                            "top",
                            2000,
                            1000,
                            "linear",
                            "${macaron}",
                            '40px',
                            '0px'
                        ]
                    ]
                }
            },
            "acquis": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, 161, 177, 'auto', 'auto'],
                            id: 'acquis',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/acquis.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'visible',
                            rect: [null, null, 161, 177]
                        }
                    }
                },
                timeline: {
                    duration: 12000,
                    autoPlay: true,
                    data: [
                        [
                            "eid449",
                            "top",
                            10000,
                            2000,
                            "linear",
                            "${acquis}",
                            '0px',
                            '-778px'
                        ],
                        [
                            "eid451",
                            "left",
                            10000,
                            2000,
                            "linear",
                            "${acquis}",
                            '0px',
                            '30px'
                        ],
                        [
                            "eid450",
                            "opacity",
                            10000,
                            2000,
                            "linear",
                            "${acquis}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "expe1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [34, -759, 720, 177, 'auto', 'auto'],
                            id: 'expe13',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/expe1.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'visible',
                            rect: [null, null, 720, 177]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "logo": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'kaliop',
                            type: 'image',
                            rect: [617, 134, 190, 58, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/kaliop.svg', '0px', '0px']
                        },
                        {
                            id: 'logodell',
                            type: 'image',
                            rect: [457, 113, 100, 100, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/logodell.svg', '0px', '0px']
                        },
                        {
                            id: 'tabmo3',
                            type: 'image',
                            rect: [605, '33', 193, 58, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/tabmo.svg', '0px', '0px']
                        },
                        {
                            id: 'cgi',
                            type: 'image',
                            rect: [457, 0, 100, 100, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/cgi.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 350, 213]
                        }
                    }
                },
                timeline: {
                    duration: 10000,
                    autoPlay: true,
                    data: [
                        [
                            "eid459",
                            "left",
                            7500,
                            1000,
                            "linear",
                            "${cgi}",
                            '457px',
                            '0px'
                        ],
                        [
                            "eid461",
                            "left",
                            9000,
                            1000,
                            "linear",
                            "${kaliop}",
                            '617px',
                            '160px'
                        ],
                        [
                            "eid465",
                            "left",
                            8000,
                            1000,
                            "linear",
                            "${tabmo3}",
                            '605px',
                            '148px'
                        ],
                        [
                            "eid462",
                            "left",
                            8500,
                            1000,
                            "linear",
                            "${logodell}",
                            '457px',
                            '0px'
                        ]
                    ]
                }
            },
            "logoexpe3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [354, 39, 168, 52, 'auto', 'auto'],
                            id: 'logoloreal',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/logoloreal.svg', '0px', '0px']
                        },
                        {
                            rect: [146, 43, 161, 43, 'auto', 'auto'],
                            id: 'logoqnb',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/logoqnb.svg', '0px', '0px']
                        },
                        {
                            rect: [0, 0, 99, 129, 'auto', 'auto'],
                            id: 'logoyamaha',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/logoyamaha.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 522, 129]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "logoit": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'logodell',
                            type: 'image',
                            rect: [212, 0, 52, 51, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/logodell.svg', '0px', '0px']
                        },
                        {
                            id: 'kaliop',
                            type: 'image',
                            rect: [17, 77, 171, 52, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/kaliop.svg', '0px', '0px']
                        },
                        {
                            id: 'tabmo4',
                            type: 'image',
                            rect: [0, 1, 206, 49, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/tabmo.svg', '0px', '0px']
                        },
                        {
                            id: 'cgi',
                            type: 'image',
                            rect: [212, 78, 51, 51, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/cgi.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 264, 129]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "video": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, 640, 360, 'auto', 'auto'],
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,0.00)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 640, 360]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "shark": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            fi: ['0', '0deg', '0.64', '1', '0', '0', '0', '3px', 'rgba(0,0,0,0)', '0px', '0px', '0px'],
                            rect: [0, 0, '495px', '201px', 'auto', 'auto'],
                            filter: ['0', '0deg', '0.64', '1', '0', '0', '0', '3px', 'rgba(0,0,0,0)', '0px', '0px', '0px'],
                            id: 'shark',
                            opacity: '0.37',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/shark.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 495, 201]
                        }
                    }
                },
                timeline: {
                    duration: 25500,
                    autoPlay: true,
                    data: [
                        [
                            "eid19",
                            "filter.blur",
                            0,
                            25500,
                            "linear",
                            "${shark}",
                            '3px',
                            '2px'
                        ],
                        [
                            "eid25",
                            "top",
                            0,
                            25500,
                            "linear",
                            "${shark}",
                            '0px',
                            '118px'
                        ],
                        [
                            "eid16",
                            "opacity",
                            0,
                            12125,
                            "linear",
                            "${shark}",
                            '0.37',
                            '0.14209799468517303'
                        ],
                        [
                            "eid15",
                            "opacity",
                            12125,
                            13375,
                            "linear",
                            "${shark}",
                            '0.14209799468517303',
                            '0.5'
                        ],
                        [
                            "eid24",
                            "left",
                            0,
                            25500,
                            "linear",
                            "${shark}",
                            '0px',
                            '-1860px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-19197089");
