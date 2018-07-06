import babel from 'rollup-plugin-babel';
import pkg from './package.json'
import alias from 'rollup-plugin-alias';


let banner = `/* @license C3.js v${pkg.version} | (c) C3 Team and other contributors | http://c3js.org/ */`;

let aliases = {
    'd3-array': 'node_modules/d3-array/index.js',
    'd3-axis': 'node_modules/d3-axis/index.js',
    'd3-brush': 'node_modules/d3-brush/index.js',
    'd3-chord': 'node_modules/d3-chord/index.js',
    'd3-collection': 'node_modules/d3-collection/index.js',
    'd3-color': 'node_modules/d3-color/index.js',
    'd3-contour': 'node_modules/d3-contour/index.js',
    'd3-dispatch': 'node_modules/d3-dispatch/index.js',
    'd3-drag': 'node_modules/d3-drag/index.js',
    'd3-dsv': 'node_modules/d3-dsv/index.js',
    'd3-ease': 'node_modules/d3-ease/index.js',
    'd3-fetch': 'node_modules/d3-fetch/index.js',
    'd3-force': 'node_modules/d3-force/index.js',
    'd3-format': 'node_modules/d3-format/index.js',
    'd3-geo': 'node_modules/d3-geo/index.js',
    'd3-hierarchy': 'node_modules/d3-hierarchy/index.js',
    'd3-interpolate': 'node_modules/d3-interpolate/index.js',
    'd3-path': 'node_modules/d3-path/index.js',
    'd3-polygon': 'node_modules/d3-polygon/index.js',
    'd3-quadtree': 'node_modules/d3-quadtree/index.js',
    'd3-random': 'node_modules/d3-random/index.js',
    'd3-scale': 'node_modules/d3-scale/index.js',
    'd3-scale-chromatic': 'node_modules/d3-scale-chromatic/index.js',
    'd3-selection': 'node_modules/d3-selection/index.js',
    'd3-shape': 'node_modules/d3-shape/index.js',
    'd3-time': 'node_modules/d3-time/index.js',
    'd3-time-format': 'node_modules/d3-time-format/index.js',
    'd3-timer': 'node_modules/d3-timer/index.js',
    'd3-transition': 'node_modules/d3-transition/index.js',
    'd3-voronoi': 'node_modules/d3-voronoi/index.js',
    'd3-zoom': 'node_modules/d3-zoom/index.js',
};


let output = [{
    file: 'c3.js',
    name: 'c3',
    format: 'umd',
    banner: banner
}, {
    file: "c3.es6.js",
    format: "es",
    banner: banner
}];

if (process.env.BUNDLE) {
    aliases['./chart-internal'] = 'src/c3_bundle/chart-internal.js';
    output = [{
        file: 'c3.bundle.js',
        name: 'c3',
        format: 'umd',
        banner: banner,

    }, {
        file: "c3.bundle.es6.js",
        format: "es",
        banner: banner,
    }];
}




let plugins = [alias(aliases), babel({
    presets: [
        ['es2015', {
            modules: false
        }]
    ],
    plugins: [
        'external-helpers'
    ]
})];

export default {
    input: 'src/index.js',
    output: output,
    plugins: plugins
};
