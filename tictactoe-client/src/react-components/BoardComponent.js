/**
@license
The MIT License (MIT)

Copyright (c) 2016 John Pittman

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

'use strict';

import { createElement } from 'react-lite';

import TileComponent from './TileComponent.js';

export default function BoardComponent(props) {
    let board = props.board || [];
    let numCols = props.numCols || 0;
    let boardWidth = window.innerWidth > window.innerHeight ? window.innerHeight : window.innerWidth;
    let gutter = 5;
    let tileWidth = boardWidth / numCols;

    return (
        createElement('div', {}, board.map(function(item, index) {
            let rowIndex = ~~(index / numCols);
            let colIndex = index % numCols;

            return createElement(TileComponent, {
                key: index,
                selectedIndex: index,
                width: tileWidth,
                height: tileWidth,
                xPos: colIndex * tileWidth,
                yPos: rowIndex * tileWidth,
                mark: item
            });
        }))
    );
}