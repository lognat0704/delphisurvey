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
            js+"jquery-2.0.3.min.js",
            js+"jquery-ui-1.10.4.min.js"
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'bg',
                            symbolName: 'bg',
                            type: 'rect',
                            rect: ['0px', '0px', '1024', '698', 'auto', 'auto']
                        },
                        {
                            id: 'RoundRect2',
                            type: 'rect',
                            rect: ['494px', '97px', '406px', '64px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: '_2Y_btn',
                            symbolName: '_2Y_btn',
                            type: 'rect',
                            rect: ['500px', '110px', '86', '38', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'year',
                            symbolName: 'year',
                            type: 'rect',
                            rect: ['451px', '508px', '183', '155', 'auto', 'auto']
                        },
                        {
                            id: '_15Y_btn',
                            symbolName: '_15Y_btn',
                            type: 'rect',
                            rect: ['597px', '110px', '86', '38', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: '_2_15Y_btn',
                            symbolName: '_2_15Y_btn',
                            type: 'rect',
                            rect: ['697px', '110px', '86', '38', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: '_all_btn',
                            symbolName: '_all_btn',
                            type: 'rect',
                            rect: ['798px', '110px', '86', '38', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'bin',
                            symbolName: 'bin',
                            type: 'rect',
                            rect: ['1px', '551px', '203', '150', 'auto', 'auto'],
                            transform: [[],[],[],['0.67488','0.67488']]
                        },
                        {
                            id: 'test1',
                            symbolName: 'test1',
                            type: 'rect',
                            rect: ['150px', '260px', '118', '70', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'go_url',
                            symbolName: 'go_url',
                            type: 'rect',
                            rect: ['912px', '629px', '137', '43', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'reset_btn',
                            symbolName: 'reset_btn',
                            type: 'rect',
                            rect: ['912px', '580px', '137', '43', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0.88'
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1024px', '700px', 'auto', 'auto'],
                            overflow: 'visible',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "bg": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1024px', '698px', 'auto', 'auto'],
                            id: 'discussion22',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/discussion2.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1024px', '698px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "_all_btn": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-1px', '0px', '86px', '38px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect4',
                            stroke: [1, 'rgb(0, 0, 0)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['30px', '6px', 'auto', 'auto', 'auto', 'auto'],
                            align: 'left',
                            id: 'Text4',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​All</p>',
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '86px', '38px']
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
            "_15Y_btn": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '86px', '38px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect3',
                            stroke: [1, 'rgb(0, 0, 0)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['23px', '6px', 'auto', 'auto', 'auto', 'auto'],
                            align: 'left',
                            id: 'Text3',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​15Y</p>',
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '86px', '38px']
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
            "_2Y_btn": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '84px', '38px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect',
                            stroke: [1, 'rgb(0, 0, 0)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            type: 'text',
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​2Y</p>',
                            rect: ['29px', '6px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'nowrap']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '86px', '38px']
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
            "_2_15Y_btn": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '86px', '38px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect2',
                            stroke: [1, 'rgb(0, 0, 0)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['5px', '6px', 'auto', 'auto', 'auto', 'auto'],
                            align: 'left',
                            id: 'Text2',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​2Y-15Y</p>',
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '86px', '38px']
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
            "bin": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['29px', '0px', '147px', '150px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'bin',
                            opacity: '0.96',
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            type: 'image',
                            id: 'trash_recyclebin_empty_closed',
                            rect: ['38px', '11px', '128px', '128px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/trash_recyclebin_empty_closed.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '203px', '150px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "test1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], ['-18']],
                            rect: ['151px', '31px', '287px', '8px', 'auto', 'auto'],
                            borderRadius: ['0px', '0px', '0px', '0px'],
                            stroke: [1, 'rgb(0, 0, 0)', 'dotted'],
                            id: 'Rectangle',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(78,78,78,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'text2_content',
                            symbolName: 'text2_content',
                            opacity: '1',
                            rect: ['0px', '-82px', '162px', '72px', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'text2_contentCopy',
                            symbolName: 'text2_content',
                            opacity: '0',
                            rect: ['0px', '0px', '162px', '72px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '160px', '70px'],
                            overflow: 'visible'
                        }
                    }
                },
                timeline: {
                    duration: 2250,
                    autoPlay: false,
                    labels: {
                        "2y": 330,
                        "2y-15y": 710,
                        "15y": 1500,
                        "all": 2000
                    },
                    data: [
                        [
                            "eid212",
                            "opacity",
                            540,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid213",
                            "opacity",
                            820,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '1'
                        ],
                        [
                            "eid140",
                            "opacity",
                            1210,
                            0,
                            "easeOutQuad",
                            "${Rectangle}",
                            '1',
                            '0.99'
                        ],
                        [
                            "eid214",
                            "opacity",
                            1500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0.99',
                            '0'
                        ],
                        [
                            "eid209",
                            "opacity",
                            2000,
                            0,
                            "easeOutQuad",
                            "${Rectangle}",
                            '0.08',
                            '0.99'
                        ],
                        [
                            "eid224",
                            "left",
                            0,
                            0,
                            "linear",
                            "${text2_content}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid146",
                            "left",
                            330,
                            0,
                            "easeOutQuad",
                            "${text2_content}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid98",
                            "left",
                            710,
                            500,
                            "easeOutQuad",
                            "${text2_content}",
                            '0px',
                            '422px'
                        ],
                        [
                            "eid158",
                            "left",
                            1500,
                            0,
                            "easeOutQuad",
                            "${text2_content}",
                            '422px',
                            '422px'
                        ],
                        [
                            "eid205",
                            "left",
                            2000,
                            0,
                            "linear",
                            "${text2_content}",
                            '422px',
                            '422px'
                        ],
                        [
                            "eid137",
                            "height",
                            750,
                            460,
                            "easeOutQuad",
                            "${Rectangle}",
                            '6px',
                            '8px'
                        ],
                        [
                            "eid208",
                            "height",
                            2000,
                            0,
                            "linear",
                            "${Rectangle}",
                            '8px',
                            '8px'
                        ],
                        [
                            "eid221",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${text2_contentCopy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid195",
                            "opacity",
                            330,
                            0,
                            "easeOutQuad",
                            "${text2_contentCopy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid194",
                            "opacity",
                            710,
                            0,
                            "easeOutQuad",
                            "${text2_contentCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid217",
                            "opacity",
                            1420,
                            0,
                            "linear",
                            "${text2_contentCopy}",
                            '1',
                            '0.8'
                        ],
                        [
                            "eid227",
                            "opacity",
                            1500,
                            0,
                            "linear",
                            "${text2_contentCopy}",
                            '0.8',
                            '0'
                        ],
                        [
                            "eid218",
                            "opacity",
                            2000,
                            0,
                            "linear",
                            "${text2_contentCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid166",
                            "scaleY",
                            330,
                            110,
                            "easeOutQuad",
                            "${text2_content}",
                            '1',
                            '0.9'
                        ],
                        [
                            "eid167",
                            "scaleY",
                            440,
                            100,
                            "easeOutQuad",
                            "${text2_content}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid90",
                            "scaleY",
                            710,
                            110,
                            "easeOutQuad",
                            "${text2_content}",
                            '1',
                            '0.9'
                        ],
                        [
                            "eid88",
                            "scaleY",
                            820,
                            100,
                            "easeOutQuad",
                            "${text2_content}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid102",
                            "scaleY",
                            1210,
                            110,
                            "easeOutQuad",
                            "${text2_content}",
                            '1',
                            '0.9'
                        ],
                        [
                            "eid103",
                            "scaleY",
                            1320,
                            100,
                            "easeOutQuad",
                            "${text2_content}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid162",
                            "scaleY",
                            1500,
                            110,
                            "easeOutQuad",
                            "${text2_content}",
                            '1',
                            '0.9'
                        ],
                        [
                            "eid163",
                            "scaleY",
                            1610,
                            100,
                            "easeOutQuad",
                            "${text2_content}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid204",
                            "scaleY",
                            2000,
                            0,
                            "easeOutQuad",
                            "${text2_content}",
                            '1',
                            '1'
                        ],
                        [
                            "eid136",
                            "top",
                            750,
                            460,
                            "easeOutQuad",
                            "${Rectangle}",
                            '31px',
                            '-14px'
                        ],
                        [
                            "eid207",
                            "top",
                            2000,
                            0,
                            "linear",
                            "${Rectangle}",
                            '-14px',
                            '-14px'
                        ],
                        [
                            "eid184",
                            "scaleY",
                            710,
                            0,
                            "easeOutQuad",
                            "${text2_contentCopy}",
                            '1',
                            '1'
                        ],
                        [
                            "eid134",
                            "width",
                            750,
                            460,
                            "easeOutQuad",
                            "${Rectangle}",
                            '3px',
                            '287px'
                        ],
                        [
                            "eid211",
                            "width",
                            2000,
                            0,
                            "linear",
                            "${Rectangle}",
                            '287px',
                            '287px'
                        ],
                        [
                            "eid225",
                            "top",
                            0,
                            0,
                            "linear",
                            "${text2_content}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid147",
                            "top",
                            330,
                            0,
                            "easeOutQuad",
                            "${text2_content}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid99",
                            "top",
                            710,
                            500,
                            "easeOutQuad",
                            "${text2_content}",
                            '0px',
                            '-82px'
                        ],
                        [
                            "eid226",
                            "top",
                            1420,
                            0,
                            "linear",
                            "${text2_content}",
                            '-82px',
                            '-82px'
                        ],
                        [
                            "eid170",
                            "top",
                            1500,
                            0,
                            "easeOutQuad",
                            "${text2_content}",
                            '-82px',
                            '-82px'
                        ],
                        [
                            "eid203",
                            "top",
                            2000,
                            0,
                            "linear",
                            "${text2_content}",
                            '-92px',
                            '-82px'
                        ],
                        [
                            "eid164",
                            "scaleX",
                            330,
                            110,
                            "easeOutQuad",
                            "${text2_content}",
                            '1',
                            '0.9'
                        ],
                        [
                            "eid165",
                            "scaleX",
                            440,
                            100,
                            "easeOutQuad",
                            "${text2_content}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid89",
                            "scaleX",
                            710,
                            110,
                            "easeOutQuad",
                            "${text2_content}",
                            '1',
                            '0.9'
                        ],
                        [
                            "eid86",
                            "scaleX",
                            820,
                            100,
                            "easeOutQuad",
                            "${text2_content}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid100",
                            "scaleX",
                            1210,
                            110,
                            "easeOutQuad",
                            "${text2_content}",
                            '1',
                            '0.9'
                        ],
                        [
                            "eid101",
                            "scaleX",
                            1320,
                            100,
                            "easeOutQuad",
                            "${text2_content}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid160",
                            "scaleX",
                            1500,
                            110,
                            "easeOutQuad",
                            "${text2_content}",
                            '1',
                            '0.9'
                        ],
                        [
                            "eid161",
                            "scaleX",
                            1610,
                            100,
                            "easeOutQuad",
                            "${text2_content}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid206",
                            "scaleX",
                            2000,
                            0,
                            "easeOutQuad",
                            "${text2_content}",
                            '1',
                            '1'
                        ],
                        [
                            "eid143",
                            "background-color",
                            750,
                            460,
                            "easeOutQuad",
                            "${Rectangle}",
                            'rgba(255,204,204,1.00)',
                            'rgba(255,118,118,1.00)'
                        ],
                        [
                            "eid210",
                            "background-color",
                            2000,
                            0,
                            "linear",
                            "${Rectangle}",
                            'rgba(255,118,118,1.00)',
                            'rgba(78,78,78,1.00)'
                        ],
                        [
                            "eid173",
                            "scaleX",
                            710,
                            0,
                            "easeOutQuad",
                            "${text2_contentCopy}",
                            '1',
                            '1'
                        ]
                    ]
                }
            },
            "text2_content": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            rect: ['0px', '0px', '160px', '70px', 'auto', 'auto'],
                            opacity: '0.49593495934959',
                            id: 'shape2',
                            stroke: [1, 'rgba(0,0,0,1)', 'solid'],
                            cursor: 'pointer',
                            fill: ['rgba(251,235,235,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle8',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['8px', '6px', '4px', '60px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', ''],
                            type: 'text',
                            align: 'left',
                            id: 'Text2Copy',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​Armed violence reduction</p>',
                            rect: ['20px', '6px', '139px', '28px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '162px', '72px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "reset_btn": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'bg',
                            stroke: [1, 'rgb(0, 0, 0)', 'solid'],
                            rect: ['0px', '0px', '101px', '31px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['26px', '6px', '85px', '16px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', ''],
                            align: 'left',
                            id: 'Text4',
                            text: '<p style=\"margin: 0px;\">​Reset</p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '137px', '43px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "go_url": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'go',
                            stroke: [1, 'rgb(0, 0, 0)', 'solid'],
                            rect: ['0px', '0px', '100px', '31px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['30px', '6px', '77px', '16px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', ''],
                            align: 'left',
                            id: 'Text5',
                            text: '<p style=\"margin: 0px;\">​Enter</p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '137px', '43px']
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
            "year": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['189px', '0px', '227px', '155px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [50, 'px'], 'rgba(126,126,126,1.00)', '900', 'none', '', 'break-word', ''],
                            align: 'right',
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 140px;\">2Y</span></p>',
                            display: 'block',
                            type: 'text'
                        },
                        {
                            rect: ['116px', '0px', '299px', '155px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [72, 'px'], 'rgba(126,126,126,1.00)', '900', 'none', '', 'break-word', ''],
                            align: 'right',
                            id: 'TextCopy',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 140px;\">15Y</span></p>',
                            display: 'none',
                            type: 'text'
                        },
                        {
                            rect: ['36px', '0px', '379px', '155px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [72, 'px'], 'rgba(126,126,126,1.00)', '900', 'none', '', 'break-word', ''],
                            align: 'right',
                            id: 'TextCopy2',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 140px;\">2-15</span></p>',
                            display: 'none',
                            type: 'text'
                        },
                        {
                            rect: ['46px', '0px', '369px', '155px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [72, 'px'], 'rgba(126,126,126,1.00)', '900', 'none', '', 'break-word', ''],
                            align: 'right',
                            id: 'TextCopy3',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 140px;\">ALL</span></p>',
                            display: 'none',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '600px', '300px']
                        }
                    }
                },
                timeline: {
                    duration: 1093,
                    autoPlay: false,
                    labels: {
                        "2y": 0,
                        "15y": 306,
                        "2y-15y": 587,
                        "all": 882
                    },
                    data: [
                        [
                            "eid231",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${TextCopy2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid237",
                            "display",
                            587,
                            0,
                            "easeOutQuad",
                            "${TextCopy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid239",
                            "display",
                            882,
                            0,
                            "easeOutQuad",
                            "${TextCopy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid233",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${Text}",
                            'block',
                            'block'
                        ],
                        [
                            "eid234",
                            "display",
                            306,
                            0,
                            "easeOutQuad",
                            "${Text}",
                            'block',
                            'none'
                        ],
                        [
                            "eid230",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${TextCopy3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid238",
                            "display",
                            882,
                            0,
                            "easeOutQuad",
                            "${TextCopy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid232",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${TextCopy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid235",
                            "display",
                            306,
                            0,
                            "easeOutQuad",
                            "${TextCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid236",
                            "display",
                            587,
                            0,
                            "easeOutQuad",
                            "${TextCopy}",
                            'block',
                            'none'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("datashow_ed2_edgeActions.js");
})("EDGE-623564");
