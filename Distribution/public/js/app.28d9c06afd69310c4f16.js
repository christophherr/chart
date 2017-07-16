webpackJsonp(
    [1],
    {
        101: function(t, e, s) {
            function a(t) {
                s(65);
            }
            var i = s(36)(s(62), s(102), a, 'data-v-204ecf87', null);
            t.exports = i.exports;
        },
        102: function(t, e) {
            t.exports = {
                render: function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s('main', [
                        t._m(0),
                        t._v(' '),
                        s('section', { staticClass: 'section' }, [
                            s(
                                'div',
                                { staticClass: 'add-stocks' },
                                [
                                    s('highstock', {
                                        ref: 'highcharts',
                                        attrs: { options: t.options }
                                    })
                                ],
                                1
                            ),
                            t._v(' '),
                            s('div', { staticClass: 'container' }, [
                                s('div', { staticClass: 'columns' }, [
                                    s(
                                        'div',
                                        { staticClass: 'column is-one-third' },
                                        [
                                            s(
                                                'table',
                                                { staticClass: 'table' },
                                                [
                                                    t._m(1),
                                                    t._v(' '),
                                                    s(
                                                        'tbody',
                                                        t._l(t.items, function(
                                                            e
                                                        ) {
                                                            return s(
                                                                'tr',
                                                                { key: e.key },
                                                                [
                                                                    s(
                                                                        'td',
                                                                        {
                                                                            staticClass:
                                                                                'stockname'
                                                                        },
                                                                        [
                                                                            t._v(
                                                                                '\n                  ' +
                                                                                    t._s(
                                                                                        e.Code
                                                                                    ) +
                                                                                    '\n                '
                                                                            )
                                                                        ]
                                                                    ),
                                                                    t._v(' '),
                                                                    s('td', [
                                                                        s(
                                                                            'button',
                                                                            {
                                                                                staticClass:
                                                                                    'button is-danger delete',
                                                                                on: {
                                                                                    click: function(
                                                                                        s
                                                                                    ) {
                                                                                        t.removeStock(
                                                                                            e
                                                                                        );
                                                                                    }
                                                                                }
                                                                            }
                                                                        )
                                                                    ])
                                                                ]
                                                            );
                                                        })
                                                    )
                                                ]
                                            )
                                        ]
                                    ),
                                    t._v(' '),
                                    s('div', { staticClass: 'column' }, [
                                        s(
                                            'form',
                                            {
                                                staticClass: 'form',
                                                on: {
                                                    submit: function(e) {
                                                        e.preventDefault(), t.addStock(
                                                            e
                                                        );
                                                    }
                                                }
                                            },
                                            [
                                                s(
                                                    'div',
                                                    {
                                                        staticClass:
                                                            'field has-addons'
                                                    },
                                                    [
                                                        s(
                                                            'p',
                                                            {
                                                                staticClass:
                                                                    'control'
                                                            },
                                                            [
                                                                s('input', {
                                                                    directives: [
                                                                        {
                                                                            name:
                                                                                'model',
                                                                            rawName:
                                                                                'v-model',
                                                                            value:
                                                                                t.stock,
                                                                            expression:
                                                                                'stock'
                                                                        }
                                                                    ],
                                                                    staticClass:
                                                                        'input',
                                                                    attrs: {
                                                                        placeholder:
                                                                            'Add Stock'
                                                                    },
                                                                    domProps: {
                                                                        value:
                                                                            t.stock
                                                                    },
                                                                    on: {
                                                                        input: function(
                                                                            e
                                                                        ) {
                                                                            e
                                                                                .target
                                                                                .composing ||
                                                                                (t.stock =
                                                                                    e.target.value);
                                                                        }
                                                                    }
                                                                })
                                                            ]
                                                        ),
                                                        t._v(' '),
                                                        t._m(2)
                                                    ]
                                                )
                                            ]
                                        )
                                    ])
                                ])
                            ])
                        ])
                    ]);
                },
                staticRenderFns: [
                    function() {
                        var t = this,
                            e = t.$createElement,
                            s = t._self._c || e;
                        return s('section', { staticClass: 'section' }, [
                            s('div', { staticClass: 'container heading' }, [
                                s('h1', { staticClass: 'title' }, [
                                    t._v('Stockcharts')
                                ]),
                                t._v(' '),
                                s('h2', { staticClass: 'subtitle' }, [
                                    t._v(
                                        'using Vue.js, Firebase, VueFire, Highcharts, Vue-Highcharts, Socket.io, vue-socket.io, Axios and Bulma'
                                    )
                                ])
                            ])
                        ]);
                    },
                    function() {
                        var t = this,
                            e = t.$createElement,
                            s = t._self._c || e;
                        return s('thead', [
                            s('th', [t._v('Stock Symbol')]),
                            t._v(' '),
                            s('th')
                        ]);
                    },
                    function() {
                        var t = this,
                            e = t.$createElement,
                            s = t._self._c || e;
                        return s('p', { staticClass: 'control' }, [
                            s('button', { staticClass: 'button is-success' }, [
                                t._v('Add Stock')
                            ])
                        ]);
                    }
                ]
            };
        },
        103: function(t, e) {
            t.exports = {
                render: function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s('div', { attrs: { id: 'app' } }, [s('Stocks')], 1);
                },
                staticRenderFns: []
            };
        },
        39: function(t, e, s) {
            function a(t) {
                s(66);
            }
            var i = s(36)(s(61), s(103), a, null, null);
            t.exports = i.exports;
        },
        61: function(t, e, s) {
            'use strict';
            Object.defineProperty(e, '__esModule', { value: !0 });
            var a = s(101),
                i = s.n(a);
            e.default = { name: 'app', components: { Stocks: i.a } };
        },
        62: function(t, e, s) {
            'use strict';
            Object.defineProperty(e, '__esModule', { value: !0 });
            var a = s(63),
                i = s(43),
                n = s.n(i);
            e.default = {
                name: 'stocks',
                data: function() {
                    return {
                        stock: '',
                        options: {
                            rangeSelector: { enabled: !1 },
                            yAxis: {
                                labels: {
                                    formatter: function() {
                                        return (
                                            (this.value > 0 ? ' + ' : '') +
                                            this.value +
                                            '%'
                                        );
                                    }
                                },
                                plotLines: [
                                    { value: 0, width: 2, color: 'silver' }
                                ]
                            },
                            plotOptions: {
                                series: {
                                    compare: 'percent',
                                    showInNavigator: !0
                                }
                            },
                            tooltip: {
                                pointFormat:
                                    '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.change}%)<br/>',
                                valueDecimals: 2,
                                split: !0
                            },
                            series: []
                        }
                    };
                },
                firebase: { items: a.a.ref('Stocks') },
                mounted: function() {
                    var t = this;
                    setTimeout(function() {
                        t.createChart();
                    }, 1e3);
                },
                methods: {
                    createChart: function() {
                        var t = this.$refs.highcharts.chart;
                        this.items.forEach(function(e, s) {
                            var a = [];
                            n.a
                                .get(
                                    'https://www.quandl.com/api/v3/datasets/WIKI/' +
                                        e.Code +
                                        '.json?start_date=2016-06-01&api_key=s4HBgzD5m8DQZ2sBKRGw'
                                )
                                .then(function(i) {
                                    (a[s] = {
                                        id: e['.key'].toString(),
                                        name: i.data.dataset.name,
                                        data: i.data.dataset.data
                                    }), t.addSeries(a[s]);
                                });
                        });
                    },
                    addStock: function() {
                        if (this.stock.length > 0) {
                            this.$firebaseRefs.items.push({ Code: this.stock });
                            var t = this.stock;
                            this.addSeries(t), this.$socket.emit('addItem', t);
                        }
                    },
                    addSeries: function(t) {
                        var e = '';
                        this.$firebaseRefs.items
                            .orderByKey()
                            .limitToLast(1)
                            .on('child_added', function(t) {
                                e = t.key;
                            });
                        var s = this.$refs.highcharts.chart;
                        n.a
                            .get(
                                'https://www.quandl.com/api/v3/datasets/WIKI/' +
                                    t +
                                    '.json?start_date=2016-06-01&api_key=s4HBgzD5m8DQZ2sBKRGw'
                            )
                            .then(function(t) {
                                var a = {
                                    id: e,
                                    name: t.data.dataset.name,
                                    data: t.data.dataset.data
                                };
                                s.addSeries(a);
                            }), (this.stock = '');
                    },
                    removeStock: function(t) {
                        var e = t['.key'];
                        this.removeSeries(e), this.$firebaseRefs.items
                            .child(e)
                            .remove(), this.$socket.emit('removeItem', e);
                    },
                    removeSeries: function(t) {
                        var e = this.$refs.highcharts.chart.get(t);
                        null != e && e.remove();
                    }
                },
                sockets: {
                    connect: function() {
                        console.log('socket connected');
                    },
                    disconnect: function() {
                        console.log('socket disconnected');
                    },
                    addItem: function(t) {
                        this.addSeries(t);
                    },
                    removeItem: function(t) {
                        this.removeSeries(t);
                    }
                }
            };
        },
        63: function(t, e, s) {
            'use strict';
            s.d(e, 'a', function() {
                return o;
            });
            var a = s(71),
                i = s.n(a),
                n = i.a.initializeApp({
                    apiKey: 'AIzaSyCZi2cNGBD-YvRjMc7WHnrLpOBfUviwOxM',
                    authDomain: 'fcc-vue-stocks.firebaseapp.com',
                    databaseURL: 'https://fcc-vue-stocks.firebaseio.com',
                    projectId: 'fcc-vue-stocks',
                    storageBucket: 'fcc-vue-stocks.appspot.com',
                    messagingSenderId: '760744722858'
                }),
                o = n.database();
        },
        64: function(t, e, s) {
            'use strict';
            Object.defineProperty(e, '__esModule', { value: !0 });
            var a = s(41),
                i = s(39),
                n = s.n(i),
                o = s(42),
                c = s.n(o),
                r = s(38),
                d = s(37),
                u = s.n(d),
                l = s(40),
                f = s.n(l);
            a.a.use(f.a, 'localhost:3000'), a.a.use(r.a, {
                Highcharts: u.a
            }), a.a.use(c.a), (a.a.config.productionTip = !1);
            new a.a({
                el: '#app',
                template: '<App/>',
                components: { App: n.a }
            });
        },
        65: function(t, e) {},
        66: function(t, e) {}
    },
    [64]
);
