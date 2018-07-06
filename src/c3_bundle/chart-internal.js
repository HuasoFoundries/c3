import { d3_min } from './d3_provider';

export function ChartInternal(api) {
    var $$ = this;
    $$.d3 = d3_min;
    $$.api = api;
    $$.config = $$.getDefaultConfig();
    $$.data = {};
    $$.cache = {};
    $$.axes = {};
}
