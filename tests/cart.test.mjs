import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
// CartSlice contains plain JavaScript. Import via data URL so Node needs no JSX loader.
const source = (await readFile(new URL('../src/CartSlice.jsx', import.meta.url), 'utf8')).replace("'@reduxjs/toolkit'", JSON.stringify(import.meta.resolve('@reduxjs/toolkit')));
const { default: reducer, addItem, increaseQuantity, decreaseQuantity, removeItem, selectTotalAmount, selectTotalQuantity } = await import('data:text/javascript;base64,' + Buffer.from(source).toString('base64'));
const snake = { id: 'snake', name: 'Snake Plant', price: 18 };
const zz = { id: 'zz', name: 'ZZ Plant', price: 22 };
test('cart quantities and totals stay consistent through complete shopping flow', () => {
 let state = reducer(undefined, { type: 'init' });
 state = reducer(state, addItem(snake));
 state = reducer(state, addItem(snake));
 assert.equal(state.items[0].quantity, 1, 'duplicate add does not bypass disabled control');
 state = reducer(state, addItem(zz));
 state = reducer(state, increaseQuantity('snake'));
 assert.equal(selectTotalQuantity({ cart: state }), 3);
 assert.equal(selectTotalAmount({ cart: state }), 58);
 state = reducer(state, decreaseQuantity('snake'));
 assert.equal(selectTotalAmount({ cart: state }), 40);
 state = reducer(state, decreaseQuantity('snake'));
 assert.equal(state.items.length, 1, 'decreasing last unit removes line');
 state = reducer(state, removeItem('zz'));
 assert.equal(selectTotalQuantity({ cart: state }), 0);
 assert.equal(selectTotalAmount({ cart: state }), 0);
 state = reducer(state, addItem(snake));
 assert.equal(state.items[0].quantity, 1, 'deleted plant can be added again');
});
test('stale quantity actions do not create invalid items', () => {
 let state = reducer(undefined, increaseQuantity('missing'));
 state = reducer(state, decreaseQuantity('missing'));
 state = reducer(state, removeItem('missing'));
 assert.deepEqual(state.items, []);
});
