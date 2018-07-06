 import {
     mouse,
     select,
     selectAll,
     selection,
     event
 } from 'd3-selection';

 import {
     zoom,
     zoomIdentity
 } from 'd3-zoom';

 import {
     brushSelection,
     brushX,
     brushY
 } from 'd3-brush';

 import {
     json,
     csv,
     tsv
 } from 'd3-fetch';


 import { drag } from 'd3-drag';

 import { easeLinear } from 'd3-ease';
 import { format } from 'd3-format';
 import {
     extent,
     max,
     merge,
     min
 } from 'd3-array';

 import { interpolate } from 'd3-interpolate';

 import { set } from 'd3-collection';

 import { transition } from 'd3-transition';

 import { scaleLinear, scaleTime } from 'd3-scale';

 import { schemeCategory10 } from 'd3-scale-chromatic';


 import { rgb } from 'd3-color';

 import { timeSecond } from 'd3-time';

 import {
     timeFormat,
     timeParse,
     utcFormat,
     utcParse
 } from 'd3-time-format';


 import {
     arc,
     area,
     curveBasis,
     curveBasisClosed,
     curveBasisOpen,
     curveBundle,
     curveCardinal,
     curveCardinalClosed,
     curveCardinalOpen,
     curveLinear,
     curveLinearClosed,
     curveMonotoneX,
     curveStep,
     curveStepAfter,
     curveStepBefore,
     line,
     pie,
 } from 'd3-shape';







 export var d3_min = {
     arc,
     area,
     brushSelection: brushSelection,
     brushX: brushX,
     brushY: brushY,
     csv: csv,
     curveBasis,
     curveBasisClosed,
     curveBasisOpen,
     curveBundle,
     curveCardinal,
     curveCardinalClosed,
     curveCardinalOpen,
     curveLinear,
     curveLinearClosed,
     curveMonotoneX,
     curveStep,
     curveStepAfter,
     curveStepBefore,
     drag: drag,
     easeLinear: easeLinear,
     extent: extent,
     get event() { return event; },
     get format() { return format; },
     get timeFormat() { return timeFormat; },
     get timeParse() { return timeParse; },
     get utcFormat() { return utcFormat; },
     get utcParse() { return utcParse; },
     interpolate: interpolate,
     json: json,
     line,
     max: max,
     merge: merge,
     min: min,
     mouse: mouse,
     pie,
     rgb: rgb,
     scaleLinear: scaleLinear,
     scaleTime: scaleTime,
     schemeCategory10: schemeCategory10,
     select: select,
     selectAll: selectAll,
     selection: selection,
     set: set,
     timeSecond: timeSecond,
     transition: transition,
     tsv: tsv,
     zoom: zoom,
     zoomIdentity: zoomIdentity,

 };
