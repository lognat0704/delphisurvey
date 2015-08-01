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
                            id: 'axis',
                            symbolName: 'axis',
                            type: 'rect',
                            rect: ['227', '143', '646', '510', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'origPos',
                            type: 'rect',
                            rect: ['-9px', '0px', '236px', '702px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(65,65,65,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'bin',
                            symbolName: 'bin',
                            type: 'rect',
                            rect: ['0px', '502px', '203', '150', 'auto', 'auto']
                        },
                        {
                            id: 'test2',
                            symbolName: 'test2',
                            type: 'rect',
                            rect: ['40px', '240px', '120', '70', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'test1',
                            symbolName: 'test1',
                            type: 'rect',
                            rect: ['40px', '143px', '118', '70', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'go_url',
                            symbolName: 'go_url',
                            type: 'rect',
                            rect: ['878px', '604px', '137', '43', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'reset_btn',
                            symbolName: 'reset_btn',
                            type: 'rect',
                            rect: ['878px', '555px', '137', '43', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '1'
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1025px', '700px', 'auto', 'auto'],
                            overflow: 'hidden',
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
                            type: 'rect',
                            rect: ['0px', '0px', '159px', '70px', 'auto', 'auto'],
                            opacity: '0.49593495934959',
                            id: 'shape1',
                            stroke: [1, 'rgba(0,0,0,1)', 'solid'],
                            cursor: 'pointer',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle6',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['8px', '7px', '4px', '60px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', ''],
                            type: 'text',
                            align: 'left',
                            id: 'Text2',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​Armed violence reduction</p>',
                            rect: ['20px', '7px', '174px', '28px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '118px', '70px']
                        }
                    }
                },
                timeline: {
                    duration: 210,
                    autoPlay: false,
                    data: [
                        [
                            "eid27",
                            "opacity",
                            210,
                            0,
                            "easeInOutQuad",
                            "${shape1}",
                            '0.49593495934959',
                            '0.49593495934959'
                        ],
                        [
                            "eid25",
                            "scaleX",
                            0,
                            100,
                            "easeOutQuad",
                            "${shape1}",
                            '1',
                            '0.95'
                        ],
                        [
                            "eid26",
                            "scaleX",
                            100,
                            110,
                            "easeInOutQuad",
                            "${shape1}",
                            '0.95',
                            '1'
                        ],
                        [
                            "eid28",
                            "scaleY",
                            0,
                            100,
                            "easeOutQuad",
                            "${shape1}",
                            '1',
                            '0.95'
                        ],
                        [
                            "eid29",
                            "scaleY",
                            100,
                            110,
                            "easeInOutQuad",
                            "${shape1}",
                            '0.95',
                            '1'
                        ]
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
                            rect: ['0px', '0px', '137px', '43px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['48px', '11px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
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
            "test2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '160px', '70px', 'auto', 'auto'],
                            opacity: '0.50406504065041',
                            id: 'shape2',
                            stroke: [1, 'rgb(0, 0, 0)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            align: 'left',
                            id: 'Text3',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​Child labour</p>',
                            rect: ['20px', '12px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle7',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['8px', '5px', '4px', '60px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '120px', '70px']
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
                            rect: ['0px', '0px', '137px', '43px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['45', '11px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
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
                            rect: ['0', '0', '1024px', '698px', 'auto', 'auto'],
                            id: '_15y',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/15y.jpg', '0px', '0px']
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
                            opacity: '0.96',
                            id: 'bin',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            rect: ['38px', '11px', '128px', '128px', 'auto', 'auto'],
                            id: 'trash_recyclebin_empty_closed',
                            type: 'image',
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
            "axis": {
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
                            id: 'Rectangle8',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '646px', '510px', 'auto', 'auto'],
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '646px', '510px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("select_15y_edgeActions.js");
})("EDGE-32252697");
