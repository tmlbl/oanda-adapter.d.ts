/// <reference path="typings/oanda.d.ts"/>

import OandaAdapter = require('oanda-adapter');

var OANDA_TOKEN = '2369ff42457dda39160f5a269e2ae8a0-a3381777e7e849507cb9934633d65662';
var OANDA_ACCOUNT = '5353872';
var OANDA_ENV = 'practice';

var config: OandaAdapterConfig = {
    accessToken: OANDA_TOKEN,
    environment: OANDA_ENV
};

var oa = new OandaAdapter(config);

// oa.getInstruments(OANDA_ACCOUNT, (err, ins: FxInstrument[]) => {
//     ins.forEach((i: FxInstrument) => {
//         console.log(i.displayName);
//     });
// });

// oa.getAccount(OANDA_ACCOUNT, (err, acct) => { console.log(acct) });

// oa.getPrice('EUR_USD', (err, price) => { console.log(price) });

// var startTime = Date.now() - 1000 * 60 * 60 * 12 * 6;
// var endTime = Date.now() - 1000 * 60 * 60 * 12 * 5;

// oa.getCandles('EUR_USD', startTime, endTime, 'H1', (err, candles) => {
//     candles.forEach((c: Candle) => {
//         console.log(c.time);
//     });
// });

// var myOrder: Order = {
//     instrument: 'EUR_USD',
//     type: 'market',
//     units: 10,
//     side: 'sell'
// };

// oa.createOrder(OANDA_ACCOUNT, myOrder, (err, res) => {
//     if (err) console.error(err);
//     console.log(res);
// });

// oa.subscribePrice(OANDA_ACCOUNT, 'EUR_USD', (tick) => {
//     console.log(tick.time.getTime());
// });
