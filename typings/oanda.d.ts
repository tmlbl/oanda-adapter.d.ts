interface OandaAdapterConfig {
    environment: string; // sandbox, practice, live
    accessToken: string;
    username?: string;
}

interface FxInstrument {
    instrument: string;
    displayName: string;
    pip: number;
    maxTradeUnits: number;
    precision: number;
    maxTrailingStop: number;
    minTrailingStop: number;
    marginRate: number;
    halted: boolean;
}

interface OandaAccount {
    accountId: number;
    accountName: string;
    balance: number;
    unrealizedPl: number;
    realizedPl: number;
    marginUsed: number;
    marginAvail: number;
    openTrades: number;
    openOrders: number;
    marginRate: number;
    accountCurrency: string;
}

interface PriceInfo {
    instrument: string;
    time: string;
    bid: number;
    ask: number;
    status: string;
}

interface Candle {
    time: string;
    openBid: number;
    openAsk: number;
    highBid: number;
    highAsk: number;
    lowBid: number;
    lowAsk: number;
    closeBid: number;
    closeAsk: number;
    volume: number;
    complete: boolean;
}

interface Order {
    instrument: string;
    units: number;
    side: string;
    type: string;
    expiry?: string;
    price?: string;
    lowerBound?: number;
    upperBound?: number;
    stopLoss?: number;
    takeProfit?: number;
    trailingStop?: number;
}

interface Tick {
    instrument: string;
    time: Date;
    bid: number;
    ask: number;
}

declare module 'oanda-adapter' {
    class OandaAdapter {
        constructor(cfg: OandaAdapterConfig);

        getInstruments(acctId: number | string, callback: (err: any, ins: FxInstrument[]) => any);

        getAccount(acctId: number | string, callback: (err: any, acct: OandaAccount) => any);

        getPrice(symbol: string, callback: (err: any, price: PriceInfo) => any);

        subscribePrice(acctId: number | string, instrument: string, listener: (tick: Tick) => any);

        getCandles(symbol: string, start: string | number, end: string | number, granularity: string,
            callback: (err: any, candles: Candle[]) => any);

        createOrder(accountId: number | string, order: Order, callback: (err: any, res: any) => any);
    }
    export = OandaAdapter;
}
