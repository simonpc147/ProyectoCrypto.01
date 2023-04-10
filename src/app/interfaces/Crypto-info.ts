export interface Crypto {
    filter(arg0: (service: { name: string; symbol: string; }) => boolean): Crypto[];
    categories:                       string[];
    id:                               string;
    symbol:                           string;
    name:                             string;
    image:                            string;
    current_price:                    number;
    market_cap:                       number;
    market_cap_rank:                  number;
    fully_diluted_valuation:          number | null;
    total_volume:                     number;
    high_24h:                         number;
    low_24h:                          number;
    price_change_24h:                 number;
    price_change_percentage_24h:      number;
    market_cap_change_24h:            number;
    market_cap_change_percentage_24h: number;
    circulating_supply:               number;
    total_supply:                     number | null;
    max_supply:                       number | null;
    ath:                              number;
    ath_change_percentage:            number;
    ath_date:                         Date;
    atl:                              number;
    atl_change_percentage:            number;
    atl_date:                         Date;
    roi:                              Roi | null;
    last_updated:                     Date;
    market_data:                     MarketData;
}

export interface Roi {
    times:      number;
    currency:   Currency;
    percentage: number;
}

export enum Currency {
    Btc = "btc",
    Eth = "eth",
    Usd = "usd",
}

export interface MarketData {
    current_price:                                current_price;
    total_value_locked:                           null;
    mcap_to_tvl_ratio:                            null;
    fdv_to_tvl_ratio:                             null;
    roi:                                          null;
    ath:                                          { [key: string]: number };
    ath_change_percentage:                        { [key: string]: number };
    ath_date:                                     { [key: string]: Date };
    atl:                                          { [key: string]: number };
    atl_change_percentage:                        { [key: string]: number };
    atl_date:                                     { [key: string]: Date };
    market_cap:                                   { [key: string]: number };
    market_cap_rank:                              number;
    fully_diluted_valuation:                      { [key: string]: number };
    total_volume:                                 { [key: string]: number };
    high_24h:                                     { [key: string]: number };
    low_24h:                                      { [key: string]: number };
    price_change_24h:                             number;
    price_change_percentage_24h:                  number;
    price_change_percentage_7d:                   number;
    price_change_percentage_14d:                  number;
    price_change_percentage_30d:                  number;
    price_change_percentage_60d:                  number;
    price_change_percentage_200d:                 number;
    price_change_percentage_1y:                   number;
    market_cap_change_24h:                        number;
    market_cap_change_percentage_24h:             number;
    price_change_24h_in_currency:                 { [key: string]: number };
    price_change_percentage_1h_in_currency:       { [key: string]: number };
    price_change_percentage_24h_in_currency:      { [key: string]: number };
    price_change_percentage_7d_in_currency:       { [key: string]: number };
    price_change_percentage_14d_in_currency:      { [key: string]: number };
    price_change_percentage_30d_in_currency:      { [key: string]: number };
    price_change_percentage_60d_in_currency:      { [key: string]: number };
    price_change_percentage_200d_in_currency:     { [key: string]: number };
    price_change_percentage_1y_in_currency:       { [key: string]: number };
    market_cap_change_24h_in_currency:            { [key: string]: number };
    market_cap_change_percentage_24h_in_currency: { [key: string]: number };
    total_supply:                                 number;
    max_supply:                                   number;
    circulating_supply:                           number;
    last_updated:                                 Date;
}

export interface current_price {
    "aed": 103717,
    "ars": 5997856,
    "aud": 42640,
    "bch": 226.457,
    "bdt": 2993009,
    "bhd": 10660.34,
    "bmd": 28242,
    "bnb": 90.494,
    "brl": 143611,
    "btc": 1,
    "cad": 38241,
    "chf": 25712,
    "clp": 23180722,
    "cny": 194333,
    "czk": 608428,
    "dkk": 194064,
    "dot": 4604,
    "eos": 23608,
    "eth": 15.257027,
    "eur": 26045,
    "gbp": 22850,
    "hkd": 221695,
    "huf": 9785205,
    "idr": 421834634,
    "ils": 102526,
    "inr": 2316225,
    "jpy": 3770115,
    "krw": 37356245,
    "kwd": 8669.27,
    "lkr": 9041092,
    "ltc": 312.385,
    "mmk": 59377145,
    "mxn": 516127,
    "myr": 124560,
    "ngn": 13000465,
    "nok": 297752,
    "nzd": 45569,
    "php": 1545974,
    "pkr": 7945284,
    "pln": 122121,
    "rub": 2306211,
    "sar": 105960,
    "sek": 297719,
    "sgd": 37652,
    "thb": 971258,
    "try": 544363,
    "twd": 861406,
    "uah": 1039478,
    "usd": 28242,
    "vef": 2827.83,
    "vnd": 662195400,
    "xag": 1138.83,
    "xau": 14.2,
    "xdr": 20978,
    "xlm": 274870,
    "xrp": 56221,
    "yfi": 3.32888,
    "zar": 522838,
    "bits": 999987,
    "link": 3936,
    "sats": 99998678,
}