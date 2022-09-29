module.exports = [
    {
        "type": "RECEIVE_AND_DELIVER",
        "subAccount": "1",
        "settlementDate": "2022-06-13",
        "sma": 0,
        "requirementReallocationAmount": 0,
        "dayTradeBuyingPowerEffect": 0,
        "netAmount": 632.33,
        "transactionDate": "2022-06-13T07:39:28+0000",
        "transactionSubType": "PM",
        "transactionId": 43242677450,
        "cashBalanceEffectFlag": true,
        "description": "Cash Alternatives Purchase",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0,
            "otherCharges": 0,
            "commission": 0,
            "optRegFee": 0,
            "secFee": 0
        },
        "transactionItem": {
            "amount": 632.33,
            "price": 0,
            "instrument": {
                "symbol": "MMDA1",
                "cusip": "9ZZZFD104"
            }
        }
    },
    {
        "type": "JOURNAL",
        "subAccount": "2",
        "settlementDate": "2022-06-13",
        "sma": -632.33,
        "requirementReallocationAmount": 0,
        "dayTradeBuyingPowerEffect": 0,
        "netAmount": -632.33,
        "transactionDate": "2022-06-13T07:37:03+0000",
        "transactionSubType": "PM",
        "transactionId": 43242677438,
        "cashBalanceEffectFlag": true,
        "description": "Cash Alternatives Purchase",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0,
            "otherCharges": 0,
            "commission": 0,
            "optRegFee": 0,
            "secFee": 0
        },
        "transactionItem": {
            "amount": 632.33,
            "price": 1
        }
    },
    {
        "type": "RECEIVE_AND_DELIVER",
        "subAccount": "2",
        "settlementDate": "2022-06-13",
        "sma": 0,
        "requirementReallocationAmount": 0,
        "dayTradeBuyingPowerEffect": 0,
        "netAmount": 0,
        "transactionDate": "2022-06-13T06:38:07+0000",
        "transactionSubType": "OX",
        "transactionId": 43241503934,
        "cashBalanceEffectFlag": true,
        "description": "Removal of Option due to expiration -2.0 NKE 100 (WEEKLY) 10 Jun 2022 95.0 PUT",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0,
            "otherCharges": 0,
            "commission": 0,
            "optRegFee": 0,
            "secFee": 0
        },
        "transactionItem": {
            "amount": 2,
            "price": 0,
            "instrument": {
                "symbol": "NKE_061022P95",
                "cusip": "0NKE..RA20095000"
            }
        }
    },
    {
        "type": "TRADE",
        "subAccount": "2",
        "settlementDate": "2022-06-13",
        "orderId": "8714219301",
        "netAmount": 632.33,
        "transactionDate": "2022-06-10T13:35:47+0000",
        "orderDate": "2022-06-10T13:35:47+0000",
        "transactionSubType": "SL",
        "transactionId": 43218285087,
        "cashBalanceEffectFlag": true,
        "description": "SELL TRADE",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0.02,
            "otherCharges": 0,
            "commission": 0.65,
            "optRegFee": 0.01,
            "secFee": 0.01
        },
        "transactionItem": {
            "accountId": 233616124,
            "amount": 1,
            "price": 6.33,
            "cost": 633,
            "instruction": "SELL",
            "positionEffect": "CLOSING",
            "instrument": {
                "symbol": "NVDA_070122P165",
                "underlyingSymbol": "NVDA",
                "optionExpirationDate": "2022-07-01T05:00:00+0000",
                "putCall": "PUT",
                "cusip": "0NVDA.S120165000",
                "description": "NVDA Jul 1 2022 165.0 Put",
                "assetType": "OPTION"
            }
        }
    },
    {
        "type": "RECEIVE_AND_DELIVER",
        "subAccount": "1",
        "settlementDate": "2022-06-07",
        "netAmount": 0,
        "transactionDate": "2022-06-07T05:00:01+0000",
        "transactionSubType": "RM",
        "transactionId": 43122978117,
        "cashBalanceEffectFlag": true,
        "description": "CASH ALTERNATIVES REDEMPTION",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0,
            "otherCharges": 0,
            "commission": 0,
            "optRegFee": 0,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "amount": 365.66,
            "cost": 0,
            "instrument": {
                "symbol": "MMDA1",
                "cusip": "9ZZZFD104",
                "assetType": "CASH_EQUIVALENT",
                "type": "MONEY_MARKET"
            }
        }
    },
    {
        "type": "JOURNAL",
        "subAccount": "2",
        "settlementDate": "2022-06-07",
        "netAmount": 365.66,
        "transactionDate": "2022-06-07T05:00:01+0000",
        "transactionSubType": "RM",
        "transactionId": 43122978114,
        "cashBalanceEffectFlag": true,
        "description": "CASH ALTERNATIVES REDEMPTION",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0,
            "otherCharges": 0,
            "commission": 0,
            "optRegFee": 0,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "cost": 0
        }
    },
    {
        "type": "TRADE",
        "subAccount": "2",
        "settlementDate": "2022-06-07",
        "orderId": "8680791798",
        "netAmount": -365.66,
        "transactionDate": "2022-06-06T16:20:16+0000",
        "orderDate": "2022-06-06T16:20:16+0000",
        "transactionSubType": "BY",
        "transactionId": 43107428913,
        "cashBalanceEffectFlag": true,
        "description": "BUY TRADE",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0.01,
            "otherCharges": 0,
            "commission": 0.65,
            "optRegFee": 0.01,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "amount": 1,
            "price": 3.65,
            "cost": -365,
            "instruction": "BUY",
            "positionEffect": "OPENING",
            "instrument": {
                "symbol": "NVDA_070122P165",
                "underlyingSymbol": "NVDA",
                "optionExpirationDate": "2022-07-01T05:00:00+0000",
                "putCall": "PUT",
                "cusip": "0NVDA.S120165000",
                "description": "NVDA Jul 1 2022 165.0 Put",
                "assetType": "OPTION"
            }
        }
    },
    {
        "type": "RECEIVE_AND_DELIVER",
        "subAccount": "1",
        "settlementDate": "2022-06-01",
        "netAmount": 0,
        "transactionDate": "2022-06-01T07:11:48+0000",
        "transactionSubType": "PM",
        "transactionId": 43001376208,
        "cashBalanceEffectFlag": true,
        "description": "CASH ALTERNATIVES PURCHASE",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0,
            "otherCharges": 0,
            "commission": 0,
            "optRegFee": 0,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "amount": 248,
            "cost": 0,
            "instrument": {
                "symbol": "MMDA1",
                "cusip": "9ZZZFD104",
                "assetType": "CASH_EQUIVALENT",
                "type": "MONEY_MARKET"
            }
        }
    },
    {
        "type": "JOURNAL",
        "subAccount": "2",
        "settlementDate": "2022-06-01",
        "netAmount": -248,
        "transactionDate": "2022-06-01T07:11:00+0000",
        "transactionSubType": "PM",
        "transactionId": 43001376181,
        "cashBalanceEffectFlag": true,
        "description": "CASH ALTERNATIVES PURCHASE",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0,
            "otherCharges": 0,
            "commission": 0,
            "optRegFee": 0,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "cost": 0
        }
    },
    {
        "type": "RECEIVE_AND_DELIVER",
        "subAccount": "1",
        "settlementDate": "2022-05-31",
        "netAmount": 0,
        "transactionDate": "2022-06-01T02:39:32+0000",
        "transactionSubType": "MI",
        "transactionId": 42977599758,
        "cashBalanceEffectFlag": true,
        "description": "CASH ALTERNATIVES INTEREST",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0,
            "otherCharges": 0,
            "commission": 0,
            "optRegFee": 0,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "amount": 0.03,
            "cost": 0,
            "instrument": {
                "symbol": "MMDA1",
                "cusip": "9ZZZFD104",
                "assetType": "CASH_EQUIVALENT",
                "type": "MONEY_MARKET"
            }
        }
    },
    {
        "type": "TRADE",
        "subAccount": "2",
        "settlementDate": "2022-06-01",
        "orderId": "8640311211",
        "netAmount": 319.33,
        "transactionDate": "2022-05-31T16:04:00+0000",
        "orderDate": "2022-05-31T16:03:45+0000",
        "transactionSubType": "SL",
        "transactionId": 42965058483,
        "cashBalanceEffectFlag": true,
        "description": "SELL TRADE",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0.02,
            "otherCharges": 0,
            "commission": 0.65,
            "optRegFee": 0.01,
            "secFee": 0.01
        },
        "transactionItem": {
            "accountId": 233616124,
            "amount": 1,
            "price": 3.2,
            "cost": 320,
            "instruction": "SELL",
            "positionEffect": "CLOSING",
            "instrument": {
                "symbol": "FB_062422P180",
                "underlyingSymbol": "FB",
                "optionExpirationDate": "2022-06-24T05:00:00+0000",
                "putCall": "PUT",
                "cusip": "0FB...RO20180000",
                "description": "FB Jun 24 2022 180.0 Put",
                "assetType": "OPTION"
            }
        }
    },
    {
        "type": "TRADE",
        "subAccount": "2",
        "settlementDate": "2022-06-01",
        "orderId": "8637383532",
        "netAmount": -455.66,
        "transactionDate": "2022-05-31T14:09:10+0000",
        "orderDate": "2022-05-31T14:09:10+0000",
        "transactionSubType": "BY",
        "transactionId": 42962700287,
        "cashBalanceEffectFlag": true,
        "description": "BUY TRADE",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0.01,
            "otherCharges": 0,
            "commission": 0.65,
            "optRegFee": 0.01,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "amount": 1,
            "price": 4.55,
            "cost": -455,
            "instruction": "BUY",
            "positionEffect": "OPENING",
            "instrument": {
                "symbol": "FB_062422P180",
                "underlyingSymbol": "FB",
                "optionExpirationDate": "2022-06-24T05:00:00+0000",
                "putCall": "PUT",
                "cusip": "0FB...RO20180000",
                "description": "FB Jun 24 2022 180.0 Put",
                "assetType": "OPTION"
            }
        }
    },
    {
        "type": "TRADE",
        "subAccount": "2",
        "settlementDate": "2022-06-01",
        "orderId": "8635651908",
        "netAmount": 384.33,
        "transactionDate": "2022-05-31T13:35:05+0000",
        "orderDate": "2022-05-31T13:35:05+0000",
        "transactionSubType": "SL",
        "transactionId": 42961224171,
        "cashBalanceEffectFlag": true,
        "description": "SELL TRADE",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0.02,
            "otherCharges": 0,
            "commission": 0.65,
            "optRegFee": 0.01,
            "secFee": 0.01
        },
        "transactionItem": {
            "accountId": 233616124,
            "amount": 1,
            "price": 3.85,
            "cost": 385,
            "instruction": "SELL",
            "positionEffect": "CLOSING",
            "instrument": {
                "symbol": "NFLX_062422C215",
                "underlyingSymbol": "NFLX",
                "optionExpirationDate": "2022-06-24T05:00:00+0000",
                "putCall": "CALL",
                "cusip": "0NFLX.FO20215000",
                "description": "NFLX Jun 24 2022 215.0 Call",
                "assetType": "OPTION"
            }
        }
    },
    {
        "type": "RECEIVE_AND_DELIVER",
        "subAccount": "1",
        "settlementDate": "2022-05-31",
        "netAmount": 0,
        "transactionDate": "2022-05-31T05:00:01+0000",
        "transactionSubType": "RM",
        "transactionId": 42953605466,
        "cashBalanceEffectFlag": true,
        "description": "CASH ALTERNATIVES REDEMPTION",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0,
            "otherCharges": 0,
            "commission": 0,
            "optRegFee": 0,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "amount": 194.32,
            "cost": 0,
            "instrument": {
                "symbol": "MMDA1",
                "cusip": "9ZZZFD104",
                "assetType": "CASH_EQUIVALENT",
                "type": "MONEY_MARKET"
            }
        }
    },
    {
        "type": "JOURNAL",
        "subAccount": "2",
        "settlementDate": "2022-05-31",
        "netAmount": 194.32,
        "transactionDate": "2022-05-31T05:00:01+0000",
        "transactionSubType": "RM",
        "transactionId": 42953605461,
        "cashBalanceEffectFlag": true,
        "description": "CASH ALTERNATIVES REDEMPTION",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0,
            "otherCharges": 0,
            "commission": 0,
            "optRegFee": 0,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "cost": 0
        }
    },
    {
        "type": "TRADE",
        "subAccount": "2",
        "settlementDate": "2022-05-31",
        "orderId": "8628339485",
        "netAmount": 162.34,
        "transactionDate": "2022-05-27T19:58:40+0000",
        "orderDate": "2022-05-27T19:58:40+0000",
        "transactionSubType": "SL",
        "transactionId": 42939015022,
        "cashBalanceEffectFlag": true,
        "description": "SELL TRADE",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0.01,
            "otherCharges": 0,
            "commission": 0.65,
            "optRegFee": 0.01,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "amount": 1,
            "price": 1.63,
            "cost": 163,
            "instruction": "SELL",
            "positionEffect": "CLOSING",
            "instrument": {
                "symbol": "GS_070122P280",
                "underlyingSymbol": "GS",
                "optionExpirationDate": "2022-07-01T05:00:00+0000",
                "putCall": "PUT",
                "cusip": "0GS...S120280000",
                "description": "GS Jul 1 2022 280.0 Put",
                "assetType": "OPTION"
            }
        }
    },
    {
        "type": "TRADE",
        "subAccount": "2",
        "settlementDate": "2022-05-31",
        "orderId": "8626838984",
        "netAmount": -356.66,
        "transactionDate": "2022-05-27T19:08:20+0000",
        "orderDate": "2022-05-27T19:08:19+0000",
        "transactionSubType": "BY",
        "transactionId": 42937939349,
        "cashBalanceEffectFlag": true,
        "description": "BUY TRADE",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0.01,
            "otherCharges": 0,
            "commission": 0.65,
            "optRegFee": 0.01,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "amount": 1,
            "price": 3.56,
            "cost": -356,
            "instruction": "BUY",
            "positionEffect": "OPENING",
            "instrument": {
                "symbol": "NFLX_062422C215",
                "underlyingSymbol": "NFLX",
                "optionExpirationDate": "2022-06-24T05:00:00+0000",
                "putCall": "CALL",
                "cusip": "0NFLX.FO20215000",
                "description": "NFLX Jun 24 2022 215.0 Call",
                "assetType": "OPTION"
            }
        }
    },
    {
        "type": "RECEIVE_AND_DELIVER",
        "subAccount": "1",
        "settlementDate": "2022-05-25",
        "netAmount": 0,
        "transactionDate": "2022-05-25T05:00:01+0000",
        "transactionSubType": "PM",
        "transactionId": 42870142536,
        "cashBalanceEffectFlag": true,
        "description": "CASH ALTERNATIVES PURCHASE",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0,
            "otherCharges": 0,
            "commission": 0,
            "optRegFee": 0,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "amount": 376.66,
            "cost": 0,
            "instrument": {
                "symbol": "MMDA1",
                "cusip": "9ZZZFD104",
                "assetType": "CASH_EQUIVALENT",
                "type": "MONEY_MARKET"
            }
        }
    },
    {
        "type": "JOURNAL",
        "subAccount": "2",
        "settlementDate": "2022-05-25",
        "netAmount": -376.66,
        "transactionDate": "2022-05-25T05:00:01+0000",
        "transactionSubType": "PM",
        "transactionId": 42870142530,
        "cashBalanceEffectFlag": true,
        "description": "CASH ALTERNATIVES PURCHASE",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0,
            "otherCharges": 0,
            "commission": 0,
            "optRegFee": 0,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "cost": 0
        }
    },
    {
        "type": "TRADE",
        "subAccount": "2",
        "settlementDate": "2022-05-25",
        "orderId": "8593120645",
        "netAmount": -577.66,
        "transactionDate": "2022-05-24T14:58:00+0000",
        "orderDate": "2022-05-24T14:58:00+0000",
        "transactionSubType": "BY",
        "transactionId": 42859496281,
        "cashBalanceEffectFlag": true,
        "description": "BUY TRADE",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0.01,
            "otherCharges": 0,
            "commission": 0.65,
            "optRegFee": 0.01,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "amount": 1,
            "price": 5.77,
            "cost": -577,
            "instruction": "BUY",
            "positionEffect": "OPENING",
            "instrument": {
                "symbol": "GS_070122P280",
                "underlyingSymbol": "GS",
                "optionExpirationDate": "2022-07-01T05:00:00+0000",
                "putCall": "PUT",
                "cusip": "0GS...S120280000",
                "description": "GS Jul 1 2022 280.0 Put",
                "assetType": "OPTION"
            }
        }
    },
    {
        "type": "TRADE",
        "subAccount": "2",
        "settlementDate": "2022-05-25",
        "orderId": "8590541893",
        "netAmount": 954.32,
        "transactionDate": "2022-05-24T13:33:02+0000",
        "orderDate": "2022-05-24T13:33:02+0000",
        "transactionSubType": "SL",
        "transactionId": 42856845147,
        "cashBalanceEffectFlag": true,
        "description": "SELL TRADE",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0.03,
            "otherCharges": 0,
            "commission": 0.65,
            "optRegFee": 0.01,
            "secFee": 0.02
        },
        "transactionItem": {
            "accountId": 233616124,
            "amount": 1,
            "price": 9.55,
            "cost": 955,
            "instruction": "SELL",
            "positionEffect": "CLOSING",
            "instrument": {
                "symbol": "FB_061022P185",
                "underlyingSymbol": "FB",
                "optionExpirationDate": "2022-06-10T05:00:00+0000",
                "putCall": "PUT",
                "cusip": "0FB...RA20185000",
                "description": "FB Jun 10 2022 185.0 Put",
                "assetType": "OPTION"
            }
        }
    },
    {
        "type": "RECEIVE_AND_DELIVER",
        "subAccount": "1",
        "settlementDate": "2022-05-24",
        "netAmount": 0,
        "transactionDate": "2022-05-24T05:00:01+0000",
        "transactionSubType": "RM",
        "transactionId": 42845281535,
        "cashBalanceEffectFlag": true,
        "description": "CASH ALTERNATIVES REDEMPTION",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0,
            "otherCharges": 0,
            "commission": 0,
            "optRegFee": 0,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "amount": 740.98,
            "cost": 0,
            "instrument": {
                "symbol": "MMDA1",
                "cusip": "9ZZZFD104",
                "assetType": "CASH_EQUIVALENT",
                "type": "MONEY_MARKET"
            }
        }
    },
    {
        "type": "JOURNAL",
        "subAccount": "2",
        "settlementDate": "2022-05-24",
        "netAmount": 740.98,
        "transactionDate": "2022-05-24T05:00:01+0000",
        "transactionSubType": "RM",
        "transactionId": 42845281488,
        "cashBalanceEffectFlag": true,
        "description": "CASH ALTERNATIVES REDEMPTION",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0,
            "otherCharges": 0,
            "commission": 0,
            "optRegFee": 0,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "cost": 0
        }
    },
    {
        "type": "TRADE",
        "subAccount": "2",
        "settlementDate": "2022-05-24",
        "orderId": "8581356720",
        "netAmount": -515.66,
        "transactionDate": "2022-05-23T13:44:11+0000",
        "orderDate": "2022-05-23T13:44:11+0000",
        "transactionSubType": "BY",
        "transactionId": 42834103852,
        "cashBalanceEffectFlag": true,
        "description": "BUY TRADE",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0.01,
            "otherCharges": 0,
            "commission": 0.65,
            "optRegFee": 0.01,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "amount": 1,
            "price": 5.15,
            "cost": -515,
            "instruction": "BUY",
            "positionEffect": "OPENING",
            "instrument": {
                "symbol": "FB_061022P185",
                "underlyingSymbol": "FB",
                "optionExpirationDate": "2022-06-10T05:00:00+0000",
                "putCall": "PUT",
                "cusip": "0FB...RA20185000",
                "description": "FB Jun 10 2022 185.0 Put",
                "assetType": "OPTION"
            }
        }
    },
    {
        "type": "TRADE",
        "subAccount": "2",
        "settlementDate": "2022-05-24",
        "orderId": "8581356280",
        "netAmount": -225.32,
        "transactionDate": "2022-05-23T13:41:09+0000",
        "orderDate": "2022-05-23T13:41:09+0000",
        "transactionSubType": "BY",
        "transactionId": 42833945554,
        "cashBalanceEffectFlag": true,
        "description": "BUY TRADE",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0.02,
            "otherCharges": 0,
            "commission": 1.3,
            "optRegFee": 0.02,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "amount": 2,
            "price": 1.12,
            "cost": -224,
            "instruction": "BUY",
            "positionEffect": "OPENING",
            "instrument": {
                "symbol": "NKE_061022P95",
                "underlyingSymbol": "NKE",
                "optionExpirationDate": "2022-06-10T05:00:00+0000",
                "putCall": "PUT",
                "cusip": "0NKE..RA20095000",
                "description": "NKE Jun 10 2022 95.0 Put",
                "assetType": "OPTION"
            }
        }
    },
    {
        "type": "RECEIVE_AND_DELIVER",
        "subAccount": "1",
        "settlementDate": "2022-05-23",
        "netAmount": 0,
        "transactionDate": "2022-05-23T05:00:01+0000",
        "transactionSubType": "PM",
        "transactionId": 42829773077,
        "cashBalanceEffectFlag": true,
        "description": "CASH ALTERNATIVES PURCHASE",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0,
            "otherCharges": 0,
            "commission": 0,
            "optRegFee": 0,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "amount": 664.32,
            "cost": 0,
            "instrument": {
                "symbol": "MMDA1",
                "cusip": "9ZZZFD104",
                "assetType": "CASH_EQUIVALENT",
                "type": "MONEY_MARKET"
            }
        }
    },
    {
        "type": "JOURNAL",
        "subAccount": "2",
        "settlementDate": "2022-05-23",
        "netAmount": -664.32,
        "transactionDate": "2022-05-23T05:00:01+0000",
        "transactionSubType": "PM",
        "transactionId": 42829773075,
        "cashBalanceEffectFlag": true,
        "description": "CASH ALTERNATIVES PURCHASE",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0,
            "otherCharges": 0,
            "commission": 0,
            "optRegFee": 0,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "cost": 0
        }
    },
    {
        "type": "TRADE",
        "subAccount": "2",
        "settlementDate": "2022-05-23",
        "orderId": "8420622577",
        "netAmount": 664.32,
        "transactionDate": "2022-05-20T17:19:24+0000",
        "orderDate": "2022-05-20T17:19:23+0000",
        "transactionSubType": "SL",
        "transactionId": 42811583281,
        "cashBalanceEffectFlag": true,
        "description": "SELL TRADE",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0.03,
            "otherCharges": 0,
            "commission": 0.65,
            "optRegFee": 0.01,
            "secFee": 0.02
        },
        "transactionItem": {
            "accountId": 233616124,
            "amount": 1,
            "price": 6.65,
            "cost": 665,
            "instruction": "SELL",
            "positionEffect": "CLOSING",
            "instrument": {
                "symbol": "BRKB_061722P295",
                "underlyingSymbol": "BRKB",
                "optionExpirationDate": "2022-06-17T05:00:00+0000",
                "putCall": "PUT",
                "cusip": "0BRKB.RH20295000",
                "description": "BRKB Jun 17 2022 295.0 Put",
                "assetType": "OPTION"
            }
        }
    },
    {
        "type": "RECEIVE_AND_DELIVER",
        "subAccount": "1",
        "settlementDate": "2022-05-20",
        "netAmount": 0,
        "transactionDate": "2022-05-20T05:00:01+0000",
        "transactionSubType": "RM",
        "transactionId": 42792503102,
        "cashBalanceEffectFlag": true,
        "description": "CASH ALTERNATIVES REDEMPTION",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0,
            "otherCharges": 0,
            "commission": 0,
            "optRegFee": 0,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "amount": 610.66,
            "cost": 0,
            "instrument": {
                "symbol": "MMDA1",
                "cusip": "9ZZZFD104",
                "assetType": "CASH_EQUIVALENT",
                "type": "MONEY_MARKET"
            }
        }
    },
    {
        "type": "JOURNAL",
        "subAccount": "2",
        "settlementDate": "2022-05-20",
        "netAmount": 610.66,
        "transactionDate": "2022-05-20T05:00:01+0000",
        "transactionSubType": "RM",
        "transactionId": 42792503095,
        "cashBalanceEffectFlag": true,
        "description": "CASH ALTERNATIVES REDEMPTION",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0,
            "otherCharges": 0,
            "commission": 0,
            "optRegFee": 0,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "cost": 0
        }
    },
    {
        "type": "TRADE",
        "subAccount": "2",
        "settlementDate": "2022-05-20",
        "orderId": "8408043489",
        "netAmount": -610.66,
        "transactionDate": "2022-05-19T15:22:47+0000",
        "orderDate": "2022-05-19T15:22:47+0000",
        "transactionSubType": "BY",
        "transactionId": 42782210395,
        "cashBalanceEffectFlag": true,
        "description": "BUY TRADE",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0.01,
            "otherCharges": 0,
            "commission": 0.65,
            "optRegFee": 0.01,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "amount": 1,
            "price": 6.1,
            "cost": -610,
            "instruction": "BUY",
            "positionEffect": "OPENING",
            "instrument": {
                "symbol": "BRKB_061722P295",
                "underlyingSymbol": "BRKB",
                "optionExpirationDate": "2022-06-17T05:00:00+0000",
                "putCall": "PUT",
                "cusip": "0BRKB.RH20295000",
                "description": "BRKB Jun 17 2022 295.0 Put",
                "assetType": "OPTION"
            }
        }
    },
    {
        "type": "RECEIVE_AND_DELIVER",
        "subAccount": "1",
        "settlementDate": "2022-05-19",
        "netAmount": 0,
        "transactionDate": "2022-05-19T05:00:01+0000",
        "transactionSubType": "PM",
        "transactionId": 42766264883,
        "cashBalanceEffectFlag": true,
        "description": "CASH ALTERNATIVES PURCHASE",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0,
            "otherCharges": 0,
            "commission": 0,
            "optRegFee": 0,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "amount": 499.33,
            "cost": 0,
            "instrument": {
                "symbol": "MMDA1",
                "cusip": "9ZZZFD104",
                "assetType": "CASH_EQUIVALENT",
                "type": "MONEY_MARKET"
            }
        }
    },
    {
        "type": "JOURNAL",
        "subAccount": "2",
        "settlementDate": "2022-05-19",
        "netAmount": -499.33,
        "transactionDate": "2022-05-19T05:00:01+0000",
        "transactionSubType": "PM",
        "transactionId": 42766264879,
        "cashBalanceEffectFlag": true,
        "description": "CASH ALTERNATIVES PURCHASE",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0,
            "otherCharges": 0,
            "commission": 0,
            "optRegFee": 0,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "cost": 0
        }
    },
    {
        "type": "TRADE",
        "subAccount": "2",
        "settlementDate": "2022-05-19",
        "orderId": "8402006030",
        "netAmount": 499.33,
        "transactionDate": "2022-05-18T19:46:44+0000",
        "orderDate": "2022-05-18T19:46:44+0000",
        "transactionSubType": "SL",
        "transactionId": 42761055739,
        "cashBalanceEffectFlag": true,
        "description": "SELL TRADE",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0.02,
            "otherCharges": 0,
            "commission": 0.65,
            "optRegFee": 0.01,
            "secFee": 0.01
        },
        "transactionItem": {
            "accountId": 233616124,
            "amount": 1,
            "price": 5,
            "cost": 500,
            "instruction": "SELL",
            "positionEffect": "CLOSING",
            "instrument": {
                "symbol": "FB_060322P185",
                "underlyingSymbol": "FB",
                "optionExpirationDate": "2022-06-03T05:00:00+0000",
                "putCall": "PUT",
                "cusip": "0FB...R320185000",
                "description": "FB Jun 3 2022 185.0 Put",
                "assetType": "OPTION"
            }
        }
    },
    {
        "type": "RECEIVE_AND_DELIVER",
        "subAccount": "1",
        "settlementDate": "2022-05-17",
        "netAmount": 0,
        "transactionDate": "2022-05-17T05:00:01+0000",
        "transactionSubType": "RM",
        "transactionId": 42713738858,
        "cashBalanceEffectFlag": true,
        "description": "CASH ALTERNATIVES REDEMPTION",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0,
            "otherCharges": 0,
            "commission": 0,
            "optRegFee": 0,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "amount": 335.66,
            "cost": 0,
            "instrument": {
                "symbol": "MMDA1",
                "cusip": "9ZZZFD104",
                "assetType": "CASH_EQUIVALENT",
                "type": "MONEY_MARKET"
            }
        }
    },
    {
        "type": "JOURNAL",
        "subAccount": "2",
        "settlementDate": "2022-05-17",
        "netAmount": 335.66,
        "transactionDate": "2022-05-17T05:00:01+0000",
        "transactionSubType": "RM",
        "transactionId": 42713738855,
        "cashBalanceEffectFlag": true,
        "description": "CASH ALTERNATIVES REDEMPTION",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0,
            "otherCharges": 0,
            "commission": 0,
            "optRegFee": 0,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "cost": 0
        }
    },
    {
        "type": "TRADE",
        "subAccount": "2",
        "settlementDate": "2022-05-17",
        "orderId": "8381295414",
        "netAmount": -335.66,
        "transactionDate": "2022-05-16T19:20:19+0000",
        "orderDate": "2022-05-16T19:20:19+0000",
        "transactionSubType": "BY",
        "transactionId": 42708280417,
        "cashBalanceEffectFlag": true,
        "description": "BUY TRADE",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0.01,
            "otherCharges": 0,
            "commission": 0.65,
            "optRegFee": 0.01,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "amount": 1,
            "price": 3.35,
            "cost": -335,
            "instruction": "BUY",
            "positionEffect": "OPENING",
            "instrument": {
                "symbol": "FB_060322P185",
                "underlyingSymbol": "FB",
                "optionExpirationDate": "2022-06-03T05:00:00+0000",
                "putCall": "PUT",
                "cusip": "0FB...R320185000",
                "description": "FB Jun 3 2022 185.0 Put",
                "assetType": "OPTION"
            }
        }
    },
    {
        "type": "RECEIVE_AND_DELIVER",
        "subAccount": "1",
        "settlementDate": "2022-05-13",
        "netAmount": 0,
        "transactionDate": "2022-05-13T05:00:01+0000",
        "transactionSubType": "PM",
        "transactionId": 42652796567,
        "cashBalanceEffectFlag": true,
        "description": "CASH ALTERNATIVES PURCHASE",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0,
            "otherCharges": 0,
            "commission": 0,
            "optRegFee": 0,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "amount": 1413.36,
            "cost": 0,
            "instrument": {
                "symbol": "MMDA1",
                "cusip": "9ZZZFD104",
                "assetType": "CASH_EQUIVALENT",
                "type": "MONEY_MARKET"
            }
        }
    },
    {
        "type": "JOURNAL",
        "subAccount": "2",
        "settlementDate": "2022-05-13",
        "netAmount": -1413.36,
        "transactionDate": "2022-05-13T05:00:01+0000",
        "transactionSubType": "PM",
        "transactionId": 42652796551,
        "cashBalanceEffectFlag": true,
        "description": "CASH ALTERNATIVES PURCHASE",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0,
            "otherCharges": 0,
            "commission": 0,
            "optRegFee": 0,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "cost": 0
        }
    },
    {
        "type": "TRADE",
        "subAccount": "2",
        "settlementDate": "2022-05-13",
        "orderId": "8335280413",
        "netAmount": 649.34,
        "transactionDate": "2022-05-12T16:30:55+0000",
        "orderDate": "2022-05-12T16:30:55+0000",
        "transactionSubType": "SL",
        "transactionId": 42641297980,
        "cashBalanceEffectFlag": true,
        "description": "SELL TRADE",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0.01,
            "otherCharges": 0,
            "commission": 0.65,
            "optRegFee": 0.01,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "amount": 1,
            "price": 6.5,
            "cost": 650,
            "instruction": "SELL",
            "positionEffect": "CLOSING",
            "instrument": {
                "symbol": "FB_052722P185",
                "underlyingSymbol": "FB",
                "optionExpirationDate": "2022-05-27T05:00:00+0000",
                "putCall": "PUT",
                "cusip": "0FB...QR20185000",
                "description": "FB May 27 2022 185.0 Put",
                "assetType": "OPTION"
            }
        }
    },
    {
        "type": "TRADE",
        "subAccount": "2",
        "settlementDate": "2022-05-13",
        "orderId": "8334599271",
        "netAmount": -590.66,
        "transactionDate": "2022-05-12T15:38:14+0000",
        "orderDate": "2022-05-12T15:38:10+0000",
        "transactionSubType": "BY",
        "transactionId": 42640252892,
        "cashBalanceEffectFlag": true,
        "description": "BUY TRADE",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0.01,
            "otherCharges": 0,
            "commission": 0.65,
            "optRegFee": 0.01,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "amount": 1,
            "price": 5.9,
            "cost": -590,
            "instruction": "BUY",
            "positionEffect": "OPENING",
            "instrument": {
                "symbol": "FB_052722P185",
                "underlyingSymbol": "FB",
                "optionExpirationDate": "2022-05-27T05:00:00+0000",
                "putCall": "PUT",
                "cusip": "0FB...QR20185000",
                "description": "FB May 27 2022 185.0 Put",
                "assetType": "OPTION"
            }
        }
    },
    {
        "type": "TRADE",
        "subAccount": "2",
        "settlementDate": "2022-05-13",
        "orderId": "8334599110",
        "netAmount": 534.34,
        "transactionDate": "2022-05-12T15:36:09+0000",
        "orderDate": "2022-05-12T15:36:09+0000",
        "transactionSubType": "SL",
        "transactionId": 42640209109,
        "cashBalanceEffectFlag": true,
        "description": "SELL TRADE",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0.01,
            "otherCharges": 0,
            "commission": 0.65,
            "optRegFee": 0.01,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "amount": 1,
            "price": 5.35,
            "cost": 535,
            "instruction": "SELL",
            "positionEffect": "CLOSING",
            "instrument": {
                "symbol": "GS_060322P280",
                "underlyingSymbol": "GS",
                "optionExpirationDate": "2022-06-03T05:00:00+0000",
                "putCall": "PUT",
                "cusip": "0GS...R320280000",
                "description": "GS Jun 3 2022 280.0 Put",
                "assetType": "OPTION"
            }
        }
    },
    {
        "type": "TRADE",
        "subAccount": "2",
        "settlementDate": "2022-05-13",
        "orderId": "8334599101",
        "netAmount": 820.34,
        "transactionDate": "2022-05-12T15:35:55+0000",
        "orderDate": "2022-05-12T15:35:55+0000",
        "transactionSubType": "SL",
        "transactionId": 42640201174,
        "cashBalanceEffectFlag": true,
        "description": "SELL TRADE",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0.01,
            "otherCharges": 0,
            "commission": 0.65,
            "optRegFee": 0.01,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "amount": 1,
            "price": 8.21,
            "cost": 821,
            "instruction": "SELL",
            "positionEffect": "CLOSING",
            "instrument": {
                "symbol": "MSFT_052722P255",
                "underlyingSymbol": "MSFT",
                "optionExpirationDate": "2022-05-27T05:00:00+0000",
                "putCall": "PUT",
                "cusip": "0MSFT.QR20255000",
                "description": "MSFT May 27 2022 255.0 Put",
                "assetType": "OPTION"
            }
        }
    },
    {
        "type": "RECEIVE_AND_DELIVER",
        "subAccount": "1",
        "settlementDate": "2022-05-12",
        "netAmount": 0,
        "transactionDate": "2022-05-12T05:00:01+0000",
        "transactionSubType": "RM",
        "transactionId": 42619297669,
        "cashBalanceEffectFlag": true,
        "description": "CASH ALTERNATIVES REDEMPTION",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0,
            "otherCharges": 0,
            "commission": 0,
            "optRegFee": 0,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "amount": 1090.32,
            "cost": 0,
            "instrument": {
                "symbol": "MMDA1",
                "cusip": "9ZZZFD104",
                "assetType": "CASH_EQUIVALENT",
                "type": "MONEY_MARKET"
            }
        }
    },
    {
        "type": "JOURNAL",
        "subAccount": "2",
        "settlementDate": "2022-05-12",
        "netAmount": 1090.32,
        "transactionDate": "2022-05-12T05:00:01+0000",
        "transactionSubType": "RM",
        "transactionId": 42619297664,
        "cashBalanceEffectFlag": true,
        "description": "CASH ALTERNATIVES REDEMPTION",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0,
            "otherCharges": 0,
            "commission": 0,
            "optRegFee": 0,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "cost": 0
        }
    },
    {
        "type": "TRADE",
        "subAccount": "2",
        "settlementDate": "2022-05-12",
        "orderId": "8325412389",
        "netAmount": -645.66,
        "transactionDate": "2022-05-11T17:21:04+0000",
        "orderDate": "2022-05-11T17:21:04+0000",
        "transactionSubType": "BY",
        "transactionId": 42609253103,
        "cashBalanceEffectFlag": true,
        "description": "BUY TRADE",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0.01,
            "otherCharges": 0,
            "commission": 0.65,
            "optRegFee": 0.01,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "amount": 1,
            "price": 6.45,
            "cost": -645,
            "instruction": "BUY",
            "positionEffect": "OPENING",
            "instrument": {
                "symbol": "MSFT_052722P255",
                "underlyingSymbol": "MSFT",
                "optionExpirationDate": "2022-05-27T05:00:00+0000",
                "putCall": "PUT",
                "cusip": "0MSFT.QR20255000",
                "description": "MSFT May 27 2022 255.0 Put",
                "assetType": "OPTION"
            }
        }
    },
    {
        "type": "TRADE",
        "subAccount": "2",
        "settlementDate": "2022-05-12",
        "orderId": "8325412080",
        "netAmount": -444.66,
        "transactionDate": "2022-05-11T17:14:52+0000",
        "orderDate": "2022-05-11T17:14:52+0000",
        "transactionSubType": "BY",
        "transactionId": 42609136313,
        "cashBalanceEffectFlag": true,
        "description": "BUY TRADE",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0.01,
            "otherCharges": 0,
            "commission": 0.65,
            "optRegFee": 0.01,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "amount": 1,
            "price": 4.44,
            "cost": -444,
            "instruction": "BUY",
            "positionEffect": "OPENING",
            "instrument": {
                "symbol": "GS_060322P280",
                "underlyingSymbol": "GS",
                "optionExpirationDate": "2022-06-03T05:00:00+0000",
                "putCall": "PUT",
                "cusip": "0GS...R320280000",
                "description": "GS Jun 3 2022 280.0 Put",
                "assetType": "OPTION"
            }
        }
    },
    {
        "type": "RECEIVE_AND_DELIVER",
        "subAccount": "1",
        "settlementDate": "2022-04-29",
        "netAmount": 0,
        "transactionDate": "2022-04-30T02:41:02+0000",
        "transactionSubType": "MI",
        "transactionId": 42353496983,
        "cashBalanceEffectFlag": true,
        "description": "CASH ALTERNATIVES INTEREST",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0,
            "otherCharges": 0,
            "commission": 0,
            "optRegFee": 0,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "amount": 0.02,
            "cost": 0,
            "instrument": {
                "symbol": "MMDA1",
                "cusip": "9ZZZFD104",
                "assetType": "CASH_EQUIVALENT",
                "type": "MONEY_MARKET"
            }
        }
    },
    {
        "type": "RECEIVE_AND_DELIVER",
        "subAccount": "1",
        "settlementDate": "2022-04-12",
        "netAmount": 0,
        "transactionDate": "2022-04-12T05:00:01+0000",
        "transactionSubType": "PM",
        "transactionId": 42001023920,
        "cashBalanceEffectFlag": true,
        "description": "CASH ALTERNATIVES PURCHASE",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0,
            "otherCharges": 0,
            "commission": 0,
            "optRegFee": 0,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "amount": 936.34,
            "cost": 0,
            "instrument": {
                "symbol": "MMDA1",
                "cusip": "9ZZZFD104",
                "assetType": "CASH_EQUIVALENT",
                "type": "MONEY_MARKET"
            }
        }
    },
    {
        "type": "JOURNAL",
        "subAccount": "2",
        "settlementDate": "2022-04-12",
        "netAmount": -936.34,
        "transactionDate": "2022-04-12T05:00:01+0000",
        "transactionSubType": "PM",
        "transactionId": 42001023916,
        "cashBalanceEffectFlag": true,
        "description": "CASH ALTERNATIVES PURCHASE",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0,
            "otherCharges": 0,
            "commission": 0,
            "optRegFee": 0,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "cost": 0
        }
    },
    {
        "type": "TRADE",
        "subAccount": "2",
        "settlementDate": "2022-04-12",
        "orderId": "8118775402",
        "netAmount": 936.34,
        "transactionDate": "2022-04-11T14:51:46+0000",
        "orderDate": "2022-04-11T14:51:46+0000",
        "transactionSubType": "SL",
        "transactionId": 41990565409,
        "cashBalanceEffectFlag": true,
        "description": "SELL TRADE",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0.01,
            "otherCharges": 0,
            "commission": 0.65,
            "optRegFee": 0.01,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "amount": 1,
            "price": 9.37,
            "cost": 937,
            "instruction": "SELL",
            "positionEffect": "CLOSING",
            "instrument": {
                "symbol": "COIN_042222P155",
                "underlyingSymbol": "COIN",
                "optionExpirationDate": "2022-04-22T05:00:00+0000",
                "putCall": "PUT",
                "cusip": "0COIN.PM20155000",
                "description": "COIN Apr 22 2022 155.0 Put",
                "assetType": "OPTION"
            }
        }
    },
    {
        "type": "RECEIVE_AND_DELIVER",
        "subAccount": "1",
        "settlementDate": "2022-03-31",
        "netAmount": 0,
        "transactionDate": "2022-04-01T02:45:35+0000",
        "transactionSubType": "MI",
        "transactionId": 41759905447,
        "cashBalanceEffectFlag": true,
        "description": "CASH ALTERNATIVES INTEREST",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0,
            "otherCharges": 0,
            "commission": 0,
            "optRegFee": 0,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "amount": 0.02,
            "cost": 0,
            "instrument": {
                "symbol": "MMDA1",
                "cusip": "9ZZZFD104",
                "assetType": "CASH_EQUIVALENT",
                "type": "MONEY_MARKET"
            }
        }
    },
    {
        "type": "RECEIVE_AND_DELIVER",
        "subAccount": "1",
        "settlementDate": "2022-03-22",
        "netAmount": 0,
        "transactionDate": "2022-03-22T05:00:01+0000",
        "transactionSubType": "RM",
        "transactionId": 41475866512,
        "cashBalanceEffectFlag": true,
        "description": "CASH ALTERNATIVES REDEMPTION",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0,
            "otherCharges": 0,
            "commission": 0,
            "optRegFee": 0,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "amount": 19,
            "cost": 0,
            "instrument": {
                "symbol": "MMDA1",
                "cusip": "9ZZZFD104",
                "assetType": "CASH_EQUIVALENT",
                "type": "MONEY_MARKET"
            }
        }
    },
    {
        "type": "JOURNAL",
        "subAccount": "2",
        "settlementDate": "2022-03-22",
        "netAmount": 19,
        "transactionDate": "2022-03-22T05:00:01+0000",
        "transactionSubType": "RM",
        "transactionId": 41475866509,
        "cashBalanceEffectFlag": true,
        "description": "CASH ALTERNATIVES REDEMPTION",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0,
            "otherCharges": 0,
            "commission": 0,
            "optRegFee": 0,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "cost": 0
        }
    },
    {
        "type": "TRADE",
        "subAccount": "2",
        "settlementDate": "2022-03-22",
        "orderId": "7904224336",
        "netAmount": -710.66,
        "transactionDate": "2022-03-21T14:10:52+0000",
        "orderDate": "2022-03-21T14:10:51+0000",
        "transactionSubType": "BY",
        "transactionId": 41464278958,
        "cashBalanceEffectFlag": true,
        "description": "BUY TRADE",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0.01,
            "otherCharges": 0,
            "commission": 0.65,
            "optRegFee": 0.01,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "amount": 1,
            "price": 7.1,
            "cost": -710,
            "instruction": "BUY",
            "positionEffect": "OPENING",
            "instrument": {
                "symbol": "COIN_042222P155",
                "underlyingSymbol": "COIN",
                "optionExpirationDate": "2022-04-22T05:00:00+0000",
                "putCall": "PUT",
                "cusip": "0COIN.PM20155000",
                "description": "COIN Apr 22 2022 155.0 Put",
                "assetType": "OPTION"
            }
        }
    },
    {
        "type": "RECEIVE_AND_DELIVER",
        "subAccount": "1",
        "settlementDate": "2022-03-21",
        "netAmount": 0,
        "transactionDate": "2022-03-21T05:00:01+0000",
        "transactionSubType": "RM",
        "transactionId": 41458367587,
        "cashBalanceEffectFlag": true,
        "description": "CASH ALTERNATIVES REDEMPTION",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0,
            "otherCharges": 0,
            "commission": 0,
            "optRegFee": 0,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "amount": 677.22,
            "cost": 0,
            "instrument": {
                "symbol": "MMDA1",
                "cusip": "9ZZZFD104",
                "assetType": "CASH_EQUIVALENT",
                "type": "MONEY_MARKET"
            }
        }
    },
    {
        "type": "JOURNAL",
        "subAccount": "2",
        "settlementDate": "2022-03-21",
        "netAmount": 677.22,
        "transactionDate": "2022-03-21T05:00:01+0000",
        "transactionSubType": "RM",
        "transactionId": 41458367586,
        "cashBalanceEffectFlag": true,
        "description": "CASH ALTERNATIVES REDEMPTION",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0,
            "otherCharges": 0,
            "commission": 0,
            "optRegFee": 0,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "cost": 0
        }
    },
    {
        "type": "TRADE",
        "subAccount": "2",
        "settlementDate": "2022-03-22",
        "orderId": "7899508527",
        "netAmount": 691.66,
        "transactionDate": "2022-03-18T19:31:45+0000",
        "orderDate": "2022-03-18T19:31:45+0000",
        "transactionSubType": "SL",
        "transactionId": 41442749490,
        "cashBalanceEffectFlag": true,
        "description": "SELL TRADE",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0,
            "otherCharges": 0,
            "commission": 0,
            "optRegFee": 0,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "amount": 2,
            "price": 345.83,
            "cost": 691.66,
            "instruction": "SELL",
            "instrument": {
                "symbol": "GS",
                "cusip": "38141G104",
                "assetType": "EQUITY"
            }
        }
    },
    {
        "type": "TRADE",
        "subAccount": "2",
        "settlementDate": "2022-03-21",
        "orderId": "7885155120",
        "netAmount": -677.22,
        "transactionDate": "2022-03-17T15:09:07+0000",
        "orderDate": "2022-03-17T15:09:07+0000",
        "transactionSubType": "BY",
        "transactionId": 41411981356,
        "cashBalanceEffectFlag": true,
        "description": "BUY TRADE",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0,
            "otherCharges": 0,
            "commission": 0,
            "optRegFee": 0,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "amount": 2,
            "price": 338.61,
            "cost": -677.22,
            "instruction": "BUY",
            "instrument": {
                "symbol": "GS",
                "cusip": "38141G104",
                "assetType": "EQUITY"
            }
        }
    },
    {
        "type": "RECEIVE_AND_DELIVER",
        "subAccount": "1",
        "settlementDate": "2022-03-17",
        "netAmount": 0,
        "transactionDate": "2022-03-17T05:00:01+0000",
        "transactionSubType": "PM",
        "transactionId": 41396061292,
        "cashBalanceEffectFlag": true,
        "description": "CASH ALTERNATIVES PURCHASE",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0,
            "otherCharges": 0,
            "commission": 0,
            "optRegFee": 0,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "amount": 8.14,
            "cost": 0,
            "instrument": {
                "symbol": "MMDA1",
                "cusip": "9ZZZFD104",
                "assetType": "CASH_EQUIVALENT",
                "type": "MONEY_MARKET"
            }
        }
    },
    {
        "type": "JOURNAL",
        "subAccount": "2",
        "settlementDate": "2022-03-17",
        "netAmount": -8.14,
        "transactionDate": "2022-03-17T05:00:01+0000",
        "transactionSubType": "PM",
        "transactionId": 41396061280,
        "cashBalanceEffectFlag": true,
        "description": "CASH ALTERNATIVES PURCHASE",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0,
            "otherCharges": 0,
            "commission": 0,
            "optRegFee": 0,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "cost": 0
        }
    },
    {
        "type": "TRADE",
        "subAccount": "2",
        "settlementDate": "2022-03-17",
        "orderId": "7868751834",
        "netAmount": 659.98,
        "transactionDate": "2022-03-15T19:33:50+0000",
        "orderDate": "2022-03-15T19:33:50+0000",
        "transactionSubType": "SL",
        "transactionId": 41362061079,
        "cashBalanceEffectFlag": true,
        "description": "SELL TRADE",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0,
            "otherCharges": 0,
            "commission": 0,
            "optRegFee": 0,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "amount": 2,
            "price": 329.9901,
            "cost": 659.98,
            "instruction": "SELL",
            "instrument": {
                "symbol": "HD",
                "cusip": "437076102",
                "assetType": "EQUITY"
            }
        }
    },
    {
        "type": "TRADE",
        "subAccount": "2",
        "settlementDate": "2022-03-17",
        "orderId": "7865132283",
        "netAmount": -651.84,
        "transactionDate": "2022-03-15T15:41:25+0000",
        "orderDate": "2022-03-15T15:41:25+0000",
        "transactionSubType": "BY",
        "transactionId": 41357013600,
        "cashBalanceEffectFlag": true,
        "description": "BUY TRADE",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0,
            "otherCharges": 0,
            "commission": 0,
            "optRegFee": 0,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "amount": 2,
            "price": 325.92,
            "cost": -651.84,
            "instruction": "BUY",
            "instrument": {
                "symbol": "HD",
                "cusip": "437076102",
                "assetType": "EQUITY"
            }
        }
    },
    {
        "type": "RECEIVE_AND_DELIVER",
        "subAccount": "1",
        "settlementDate": "2022-03-09",
        "netAmount": 0,
        "transactionDate": "2022-03-09T06:26:42+0000",
        "transactionSubType": "PM",
        "transactionId": 41219609569,
        "cashBalanceEffectFlag": true,
        "description": "CASH ALTERNATIVES PURCHASE",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0,
            "otherCharges": 0,
            "commission": 0,
            "optRegFee": 0,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "amount": 1377.8,
            "cost": 0,
            "instrument": {
                "symbol": "MMDA1",
                "cusip": "9ZZZFD104",
                "assetType": "CASH_EQUIVALENT",
                "type": "MONEY_MARKET"
            }
        }
    },
    {
        "type": "JOURNAL",
        "subAccount": "2",
        "settlementDate": "2022-03-09",
        "netAmount": -1377.8,
        "transactionDate": "2022-03-09T06:22:01+0000",
        "transactionSubType": "PM",
        "transactionId": 41219609561,
        "cashBalanceEffectFlag": true,
        "description": "CASH ALTERNATIVES PURCHASE",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0,
            "otherCharges": 0,
            "commission": 0,
            "optRegFee": 0,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "cost": 0
        }
    },
    {
        "type": "TRADE",
        "subAccount": "2",
        "settlementDate": "2022-03-09",
        "orderId": "7812714425",
        "netAmount": 714.34,
        "transactionDate": "2022-03-08T16:20:12+0000",
        "orderDate": "2022-03-08T16:20:12+0000",
        "transactionSubType": "SL",
        "transactionId": 41206910254,
        "cashBalanceEffectFlag": true,
        "description": "SELL TRADE",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0.01,
            "otherCharges": 0,
            "commission": 0.65,
            "optRegFee": 0.01,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "amount": 1,
            "price": 7.15,
            "cost": 715,
            "instruction": "SELL",
            "positionEffect": "CLOSING",
            "instrument": {
                "symbol": "AAPL_040122P160",
                "underlyingSymbol": "AAPL",
                "optionExpirationDate": "2022-04-01T05:00:00+0000",
                "putCall": "PUT",
                "cusip": "0AAPL.P120160000",
                "description": "AAPL Apr 1 2022 160.0 Put",
                "assetType": "OPTION"
            }
        }
    },
    {
        "type": "RECEIVE_AND_DELIVER",
        "subAccount": "1",
        "settlementDate": "2022-03-08",
        "netAmount": 0,
        "transactionDate": "2022-03-08T06:00:01+0000",
        "transactionSubType": "RM",
        "transactionId": 41187446719,
        "cashBalanceEffectFlag": true,
        "description": "CASH ALTERNATIVES REDEMPTION",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0,
            "otherCharges": 0,
            "commission": 0,
            "optRegFee": 0,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "amount": 625.66,
            "cost": 0,
            "instrument": {
                "symbol": "MMDA1",
                "cusip": "9ZZZFD104",
                "assetType": "CASH_EQUIVALENT",
                "type": "MONEY_MARKET"
            }
        }
    },
    {
        "type": "JOURNAL",
        "subAccount": "2",
        "settlementDate": "2022-03-08",
        "netAmount": 625.66,
        "transactionDate": "2022-03-08T06:00:01+0000",
        "transactionSubType": "RM",
        "transactionId": 41187446712,
        "cashBalanceEffectFlag": true,
        "description": "CASH ALTERNATIVES REDEMPTION",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0,
            "otherCharges": 0,
            "commission": 0,
            "optRegFee": 0,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "cost": 0
        }
    },
    {
        "type": "TRADE",
        "subAccount": "2",
        "settlementDate": "2022-03-09",
        "orderId": "7806667120",
        "netAmount": 375.96,
        "transactionDate": "2022-03-07T20:52:11+0000",
        "orderDate": "2022-03-07T20:51:55+0000",
        "transactionSubType": "SL",
        "transactionId": 41181949924,
        "cashBalanceEffectFlag": true,
        "description": "SELL TRADE",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0,
            "otherCharges": 0,
            "commission": 0,
            "optRegFee": 0,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "amount": 2,
            "price": 187.98,
            "cost": 375.96,
            "instruction": "SELL",
            "instrument": {
                "symbol": "FB",
                "cusip": "30303M102",
                "assetType": "EQUITY"
            }
        }
    },
    {
        "type": "TRADE",
        "subAccount": "2",
        "settlementDate": "2022-03-08",
        "orderId": "7805638675",
        "netAmount": -625.66,
        "transactionDate": "2022-03-07T20:16:12+0000",
        "orderDate": "2022-03-07T20:16:12+0000",
        "transactionSubType": "BY",
        "transactionId": 41180988252,
        "cashBalanceEffectFlag": true,
        "description": "BUY TRADE",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0.01,
            "otherCharges": 0,
            "commission": 0.65,
            "optRegFee": 0.01,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "amount": 1,
            "price": 6.25,
            "cost": -625,
            "instruction": "BUY",
            "positionEffect": "OPENING",
            "instrument": {
                "symbol": "AAPL_040122P160",
                "underlyingSymbol": "AAPL",
                "optionExpirationDate": "2022-04-01T05:00:00+0000",
                "putCall": "PUT",
                "cusip": "0AAPL.P120160000",
                "description": "AAPL Apr 1 2022 160.0 Put",
                "assetType": "OPTION"
            }
        }
    },
    {
        "type": "TRADE",
        "subAccount": "2",
        "settlementDate": "2022-03-09",
        "orderId": "7805637493",
        "netAmount": 287.5,
        "transactionDate": "2022-03-07T20:09:18+0000",
        "orderDate": "2022-03-07T20:09:18+0000",
        "transactionSubType": "SL",
        "transactionId": 41180806025,
        "cashBalanceEffectFlag": true,
        "description": "SELL TRADE",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0,
            "otherCharges": 0,
            "commission": 0,
            "optRegFee": 0,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "amount": 25,
            "price": 11.5001,
            "cost": 287.5,
            "instruction": "SELL",
            "instrument": {
                "symbol": "HOOD",
                "cusip": "770700102",
                "assetType": "EQUITY"
            }
        }
    },
    {
        "type": "RECEIVE_AND_DELIVER",
        "subAccount": "1",
        "settlementDate": "2022-02-28",
        "netAmount": 0,
        "transactionDate": "2022-03-01T03:47:49+0000",
        "transactionSubType": "MI",
        "transactionId": 41004921498,
        "cashBalanceEffectFlag": true,
        "description": "CASH ALTERNATIVES INTEREST",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0,
            "otherCharges": 0,
            "commission": 0,
            "optRegFee": 0,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "amount": 0.01,
            "cost": 0,
            "instrument": {
                "symbol": "MMDA1",
                "cusip": "9ZZZFD104",
                "assetType": "CASH_EQUIVALENT",
                "type": "MONEY_MARKET"
            }
        }
    },
    {
        "type": "RECEIVE_AND_DELIVER",
        "subAccount": "1",
        "settlementDate": "2022-02-24",
        "netAmount": 0,
        "transactionDate": "2022-02-24T06:00:01+0000",
        "transactionSubType": "PM",
        "transactionId": 40908919612,
        "cashBalanceEffectFlag": true,
        "description": "CASH ALTERNATIVES PURCHASE",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0,
            "otherCharges": 0,
            "commission": 0,
            "optRegFee": 0,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "amount": 201.48,
            "cost": 0,
            "instrument": {
                "symbol": "MMDA1",
                "cusip": "9ZZZFD104",
                "assetType": "CASH_EQUIVALENT",
                "type": "MONEY_MARKET"
            }
        }
    },
    {
        "type": "JOURNAL",
        "subAccount": "2",
        "settlementDate": "2022-02-24",
        "netAmount": -201.48,
        "transactionDate": "2022-02-24T06:00:01+0000",
        "transactionSubType": "PM",
        "transactionId": 40908919604,
        "cashBalanceEffectFlag": true,
        "description": "CASH ALTERNATIVES PURCHASE",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0,
            "otherCharges": 0,
            "commission": 0,
            "optRegFee": 0,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "cost": 0
        }
    },
    {
        "type": "TRADE",
        "subAccount": "2",
        "settlementDate": "2022-02-24",
        "orderId": "7686424382",
        "netAmount": 201.48,
        "transactionDate": "2022-02-22T16:46:34+0000",
        "orderDate": "2022-02-22T16:46:29+0000",
        "transactionSubType": "SL",
        "transactionId": 40872515431,
        "cashBalanceEffectFlag": true,
        "description": "SELL TRADE",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0,
            "otherCharges": 0,
            "commission": 0,
            "optRegFee": 0,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "amount": 1,
            "price": 201.48,
            "cost": 201.48,
            "instruction": "SELL",
            "instrument": {
                "symbol": "BA",
                "cusip": "097023105",
                "assetType": "EQUITY"
            }
        }
    },
    {
        "type": "RECEIVE_AND_DELIVER",
        "subAccount": "1",
        "settlementDate": "2022-02-22",
        "netAmount": 0,
        "transactionDate": "2022-02-22T06:00:01+0000",
        "transactionSubType": "PM",
        "transactionId": 40864591008,
        "cashBalanceEffectFlag": true,
        "description": "CASH ALTERNATIVES PURCHASE",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0,
            "otherCharges": 0,
            "commission": 0,
            "optRegFee": 0,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "amount": 150.34,
            "cost": 0,
            "instrument": {
                "symbol": "MMDA1",
                "cusip": "9ZZZFD104",
                "assetType": "CASH_EQUIVALENT",
                "type": "MONEY_MARKET"
            }
        }
    },
    {
        "type": "JOURNAL",
        "subAccount": "2",
        "settlementDate": "2022-02-22",
        "netAmount": -150.34,
        "transactionDate": "2022-02-22T06:00:01+0000",
        "transactionSubType": "PM",
        "transactionId": 40864591004,
        "cashBalanceEffectFlag": true,
        "description": "CASH ALTERNATIVES PURCHASE",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0,
            "otherCharges": 0,
            "commission": 0,
            "optRegFee": 0,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "cost": 0
        }
    },
    {
        "type": "TRADE",
        "subAccount": "2",
        "settlementDate": "2022-02-22",
        "orderId": "7679919733",
        "netAmount": 150.34,
        "transactionDate": "2022-02-18T20:34:29+0000",
        "orderDate": "2022-02-18T20:34:29+0000",
        "transactionSubType": "SL",
        "transactionId": 40849296822,
        "cashBalanceEffectFlag": true,
        "description": "SELL TRADE",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0.01,
            "otherCharges": 0,
            "commission": 0.65,
            "optRegFee": 0.01,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "amount": 1,
            "price": 1.51,
            "cost": 151,
            "instruction": "SELL",
            "positionEffect": "CLOSING",
            "instrument": {
                "symbol": "NIO_030422P23",
                "underlyingSymbol": "NIO",
                "optionExpirationDate": "2022-03-04T06:00:00+0000",
                "putCall": "PUT",
                "cusip": "0NIO..O420023000",
                "description": "NIO Mar 4 2022 23.0 Put",
                "assetType": "OPTION"
            }
        }
    },
    {
        "type": "RECEIVE_AND_DELIVER",
        "subAccount": "1",
        "settlementDate": "2022-02-11",
        "netAmount": 0,
        "transactionDate": "2022-02-11T06:07:41+0000",
        "transactionSubType": "RM",
        "transactionId": 40704076900,
        "cashBalanceEffectFlag": true,
        "description": "CASH ALTERNATIVES REDEMPTION",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0,
            "otherCharges": 0,
            "commission": 0,
            "optRegFee": 0,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "amount": 215.23,
            "cost": 0,
            "instrument": {
                "symbol": "MMDA1",
                "cusip": "9ZZZFD104",
                "assetType": "CASH_EQUIVALENT",
                "type": "MONEY_MARKET"
            }
        }
    },
    {
        "type": "JOURNAL",
        "subAccount": "2",
        "settlementDate": "2022-02-11",
        "netAmount": 215.23,
        "transactionDate": "2022-02-11T06:07:16+0000",
        "transactionSubType": "RM",
        "transactionId": 40704076895,
        "cashBalanceEffectFlag": true,
        "description": "CASH ALTERNATIVES REDEMPTION",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0,
            "otherCharges": 0,
            "commission": 0,
            "optRegFee": 0,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "cost": 0
        }
    },
    {
        "type": "TRADE",
        "subAccount": "2",
        "settlementDate": "2022-02-11",
        "orderId": "7609769534",
        "netAmount": -215.23,
        "transactionDate": "2022-02-09T16:25:12+0000",
        "orderDate": "2022-02-09T16:25:12+0000",
        "transactionSubType": "BY",
        "transactionId": 40651623333,
        "cashBalanceEffectFlag": true,
        "description": "BUY TRADE",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0,
            "otherCharges": 0,
            "commission": 0,
            "optRegFee": 0,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "amount": 1,
            "price": 215.2299,
            "cost": -215.23,
            "instruction": "BUY",
            "instrument": {
                "symbol": "BA",
                "cusip": "097023105",
                "assetType": "EQUITY"
            }
        }
    },
    {
        "type": "RECEIVE_AND_DELIVER",
        "subAccount": "1",
        "settlementDate": "2022-02-09",
        "netAmount": 0,
        "transactionDate": "2022-02-09T06:00:01+0000",
        "transactionSubType": "RM",
        "transactionId": 40636070250,
        "cashBalanceEffectFlag": true,
        "description": "CASH ALTERNATIVES REDEMPTION",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0,
            "otherCharges": 0,
            "commission": 0,
            "optRegFee": 0,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "amount": 454.04,
            "cost": 0,
            "instrument": {
                "symbol": "MMDA1",
                "cusip": "9ZZZFD104",
                "assetType": "CASH_EQUIVALENT",
                "type": "MONEY_MARKET"
            }
        }
    },
    {
        "type": "JOURNAL",
        "subAccount": "2",
        "settlementDate": "2022-02-09",
        "netAmount": 454.04,
        "transactionDate": "2022-02-09T06:00:01+0000",
        "transactionSubType": "RM",
        "transactionId": 40636070245,
        "cashBalanceEffectFlag": true,
        "description": "CASH ALTERNATIVES REDEMPTION",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0,
            "otherCharges": 0,
            "commission": 0,
            "optRegFee": 0,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "cost": 0
        }
    },
    {
        "type": "RECEIVE_AND_DELIVER",
        "subAccount": "1",
        "settlementDate": "2022-02-08",
        "netAmount": 0,
        "transactionDate": "2022-02-08T06:00:01+0000",
        "transactionSubType": "RM",
        "transactionId": 40611113566,
        "cashBalanceEffectFlag": true,
        "description": "CASH ALTERNATIVES REDEMPTION",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0,
            "otherCharges": 0,
            "commission": 0,
            "optRegFee": 0,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "amount": 157.66,
            "cost": 0,
            "instrument": {
                "symbol": "MMDA1",
                "cusip": "9ZZZFD104",
                "assetType": "CASH_EQUIVALENT",
                "type": "MONEY_MARKET"
            }
        }
    },
    {
        "type": "JOURNAL",
        "subAccount": "2",
        "settlementDate": "2022-02-08",
        "netAmount": 157.66,
        "transactionDate": "2022-02-08T06:00:01+0000",
        "transactionSubType": "RM",
        "transactionId": 40611113565,
        "cashBalanceEffectFlag": true,
        "description": "CASH ALTERNATIVES REDEMPTION",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0,
            "otherCharges": 0,
            "commission": 0,
            "optRegFee": 0,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "cost": 0
        }
    },
    {
        "type": "TRADE",
        "subAccount": "2",
        "settlementDate": "2022-02-09",
        "orderId": "7595428862",
        "netAmount": -454.04,
        "transactionDate": "2022-02-07T20:37:45+0000",
        "orderDate": "2022-02-07T20:37:11+0000",
        "transactionSubType": "BY",
        "transactionId": 40605687692,
        "cashBalanceEffectFlag": true,
        "description": "BUY TRADE",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0,
            "otherCharges": 0,
            "commission": 0,
            "optRegFee": 0,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "amount": 2,
            "price": 227.02,
            "cost": -454.04,
            "instruction": "BUY",
            "instrument": {
                "symbol": "FB",
                "cusip": "30303M102",
                "assetType": "EQUITY"
            }
        }
    },
    {
        "type": "TRADE",
        "subAccount": "2",
        "settlementDate": "2022-02-08",
        "orderId": "7595428722",
        "netAmount": -157.66,
        "transactionDate": "2022-02-07T20:34:18+0000",
        "orderDate": "2022-02-07T20:34:17+0000",
        "transactionSubType": "BY",
        "transactionId": 40605618970,
        "cashBalanceEffectFlag": true,
        "description": "BUY TRADE",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0.01,
            "otherCharges": 0,
            "commission": 0.65,
            "optRegFee": 0.01,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "amount": 1,
            "price": 1.57,
            "cost": -157,
            "instruction": "BUY",
            "positionEffect": "OPENING",
            "instrument": {
                "symbol": "NIO_030422P23",
                "underlyingSymbol": "NIO",
                "optionExpirationDate": "2022-03-04T06:00:00+0000",
                "putCall": "PUT",
                "cusip": "0NIO..O420023000",
                "description": "NIO Mar 4 2022 23.0 Put",
                "assetType": "OPTION"
            }
        }
    },
    {
        "type": "RECEIVE_AND_DELIVER",
        "subAccount": "1",
        "settlementDate": "2022-02-03",
        "netAmount": 0,
        "transactionDate": "2022-02-03T06:00:01+0000",
        "transactionSubType": "RM",
        "transactionId": 40519190610,
        "cashBalanceEffectFlag": true,
        "description": "CASH ALTERNATIVES REDEMPTION",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0,
            "otherCharges": 0,
            "commission": 0,
            "optRegFee": 0,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "amount": 361.7,
            "cost": 0,
            "instrument": {
                "symbol": "MMDA1",
                "cusip": "9ZZZFD104",
                "assetType": "CASH_EQUIVALENT",
                "type": "MONEY_MARKET"
            }
        }
    },
    {
        "type": "JOURNAL",
        "subAccount": "2",
        "settlementDate": "2022-02-03",
        "netAmount": 361.7,
        "transactionDate": "2022-02-03T06:00:01+0000",
        "transactionSubType": "RM",
        "transactionId": 40519190235,
        "cashBalanceEffectFlag": true,
        "description": "CASH ALTERNATIVES REDEMPTION",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0,
            "otherCharges": 0,
            "commission": 0,
            "optRegFee": 0,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "cost": 0
        }
    },
    {
        "type": "TRADE",
        "subAccount": "2",
        "settlementDate": "2022-02-03",
        "orderId": "7150834729",
        "netAmount": -361.7,
        "transactionDate": "2022-02-01T18:37:56+0000",
        "orderDate": "2022-02-01T18:37:56+0000",
        "transactionSubType": "BY",
        "transactionId": 40478999649,
        "cashBalanceEffectFlag": true,
        "description": "BUY TRADE",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0,
            "otherCharges": 0,
            "commission": 0,
            "optRegFee": 0,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "amount": 25,
            "price": 14.4681,
            "cost": -361.7,
            "instruction": "BUY",
            "instrument": {
                "symbol": "HOOD",
                "cusip": "770700102",
                "assetType": "EQUITY"
            }
        }
    },
    {
        "type": "RECEIVE_AND_DELIVER",
        "subAccount": "1",
        "settlementDate": "2022-01-31",
        "netAmount": 0,
        "transactionDate": "2022-02-01T03:40:50+0000",
        "transactionSubType": "MI",
        "transactionId": 40432553508,
        "cashBalanceEffectFlag": true,
        "description": "CASH ALTERNATIVES INTEREST",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0,
            "otherCharges": 0,
            "commission": 0,
            "optRegFee": 0,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "amount": 0.02,
            "cost": 0,
            "instrument": {
                "symbol": "MMDA1",
                "cusip": "9ZZZFD104",
                "assetType": "CASH_EQUIVALENT",
                "type": "MONEY_MARKET"
            }
        }
    },
    {
        "type": "RECEIVE_AND_DELIVER",
        "subAccount": "1",
        "settlementDate": "2021-12-31",
        "netAmount": 0,
        "transactionDate": "2022-01-01T04:00:30+0000",
        "transactionSubType": "MI",
        "transactionId": 39813126771,
        "cashBalanceEffectFlag": true,
        "description": "CASH ALTERNATIVES INTEREST",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0,
            "otherCharges": 0,
            "commission": 0,
            "optRegFee": 0,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "amount": 0.02,
            "cost": 0,
            "instrument": {
                "symbol": "MMDA1",
                "cusip": "9ZZZFD104",
                "assetType": "CASH_EQUIVALENT",
                "type": "MONEY_MARKET"
            }
        }
    },
    {
        "type": "RECEIVE_AND_DELIVER",
        "subAccount": "1",
        "settlementDate": "2021-11-30",
        "netAmount": 0,
        "transactionDate": "2021-12-01T03:37:39+0000",
        "transactionSubType": "MI",
        "transactionId": 39030329004,
        "cashBalanceEffectFlag": true,
        "description": "CASH ALTERNATIVES INTEREST",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0,
            "otherCharges": 0,
            "commission": 0,
            "optRegFee": 0,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "amount": 0.02,
            "cost": 0,
            "instrument": {
                "symbol": "MMDA1",
                "cusip": "9ZZZFD104",
                "assetType": "CASH_EQUIVALENT",
                "type": "MONEY_MARKET"
            }
        }
    },
    {
        "type": "RECEIVE_AND_DELIVER",
        "subAccount": "1",
        "settlementDate": "2021-10-29",
        "netAmount": 0,
        "transactionDate": "2021-10-29T17:28:53+0000",
        "transactionSubType": "MI",
        "transactionId": 38354048109,
        "cashBalanceEffectFlag": true,
        "description": "CASH ALTERNATIVES INTEREST",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0,
            "otherCharges": 0,
            "commission": 0,
            "optRegFee": 0,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "amount": 0.02,
            "cost": 0,
            "instrument": {
                "symbol": "MMDA1",
                "cusip": "9ZZZFD104",
                "assetType": "CASH_EQUIVALENT",
                "type": "MONEY_MARKET"
            }
        }
    },
    {
        "type": "RECEIVE_AND_DELIVER",
        "subAccount": "2",
        "settlementDate": "2021-10-18",
        "netAmount": 0,
        "transactionDate": "2021-10-18T05:00:01+0000",
        "transactionSubType": "OX",
        "transactionId": 38075266815,
        "cashBalanceEffectFlag": true,
        "description": "REMOVAL OF OPTION DUE TO EXPIRATION",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0,
            "otherCharges": 0,
            "commission": 0,
            "optRegFee": 0,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "amount": 1,
            "cost": 0,
            "instrument": {
                "optionExpirationDate": "2021-10-15T05:00:00+0000",
                "cusip": "0BA...VF10197500",
                "assetType": "OPTION"
            }
        }
    },
    {
        "type": "RECEIVE_AND_DELIVER",
        "subAccount": "1",
        "settlementDate": "2021-09-30",
        "netAmount": 0,
        "transactionDate": "2021-10-01T02:44:06+0000",
        "transactionSubType": "MI",
        "transactionId": 37738988736,
        "cashBalanceEffectFlag": true,
        "description": "CASH ALTERNATIVES INTEREST",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0,
            "otherCharges": 0,
            "commission": 0,
            "optRegFee": 0,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "amount": 0.02,
            "cost": 0,
            "instrument": {
                "symbol": "MMDA1",
                "cusip": "9ZZZFD104",
                "assetType": "CASH_EQUIVALENT",
                "type": "MONEY_MARKET"
            }
        }
    },
    {
        "type": "RECEIVE_AND_DELIVER",
        "subAccount": "1",
        "settlementDate": "2021-09-22",
        "netAmount": 0,
        "transactionDate": "2021-09-22T05:00:01+0000",
        "transactionSubType": "PM",
        "transactionId": 37508342146,
        "cashBalanceEffectFlag": true,
        "description": "CASH ALTERNATIVES PURCHASE",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0,
            "otherCharges": 0,
            "commission": 0,
            "optRegFee": 0,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "amount": 538.09,
            "cost": 0,
            "instrument": {
                "symbol": "MMDA1",
                "cusip": "9ZZZFD104",
                "assetType": "CASH_EQUIVALENT",
                "type": "MONEY_MARKET"
            }
        }
    },
    {
        "type": "JOURNAL",
        "subAccount": "2",
        "settlementDate": "2021-09-22",
        "netAmount": -538.09,
        "transactionDate": "2021-09-22T05:00:01+0000",
        "transactionSubType": "PM",
        "transactionId": 37508342134,
        "cashBalanceEffectFlag": true,
        "description": "CASH ALTERNATIVES PURCHASE",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0,
            "otherCharges": 0,
            "commission": 0,
            "optRegFee": 0,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "cost": 0
        }
    },
    {
        "type": "RECEIVE_AND_DELIVER",
        "subAccount": "1",
        "settlementDate": "2021-09-21",
        "netAmount": 0,
        "transactionDate": "2021-09-21T05:00:01+0000",
        "transactionSubType": "RM",
        "transactionId": 37482096052,
        "cashBalanceEffectFlag": true,
        "description": "CASH ALTERNATIVES REDEMPTION",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0,
            "otherCharges": 0,
            "commission": 0,
            "optRegFee": 0,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "amount": 471.66,
            "cost": 0,
            "instrument": {
                "symbol": "MMDA1",
                "cusip": "9ZZZFD104",
                "assetType": "CASH_EQUIVALENT",
                "type": "MONEY_MARKET"
            }
        }
    },
    {
        "type": "JOURNAL",
        "subAccount": "2",
        "settlementDate": "2021-09-21",
        "netAmount": 471.66,
        "transactionDate": "2021-09-21T05:00:01+0000",
        "transactionSubType": "RM",
        "transactionId": 37482096045,
        "cashBalanceEffectFlag": true,
        "description": "CASH ALTERNATIVES REDEMPTION",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0,
            "otherCharges": 0,
            "commission": 0,
            "optRegFee": 0,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "cost": 0
        }
    },
    {
        "type": "TRADE",
        "subAccount": "2",
        "settlementDate": "2021-09-21",
        "orderId": "4416089460",
        "netAmount": -471.66,
        "transactionDate": "2021-09-20T18:54:51+0000",
        "orderDate": "2021-09-20T18:54:51+0000",
        "transactionSubType": "BY",
        "transactionId": 37475510713,
        "cashBalanceEffectFlag": true,
        "description": "BUY TRADE",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0.01,
            "otherCharges": 0,
            "commission": 0.65,
            "optRegFee": 0.01,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "amount": 1,
            "price": 4.71,
            "cost": -471,
            "instruction": "BUY",
            "positionEffect": "OPENING",
            "instrument": {
                "symbol": "BA_101521P197.5",
                "underlyingSymbol": "BA",
                "optionExpirationDate": "2021-10-15T05:00:00+0000",
                "putCall": "PUT",
                "cusip": "0BA...VF10197500",
                "description": "BA Oct 15 2021 197.5 Put",
                "assetType": "OPTION"
            }
        }
    },
    {
        "type": "TRADE",
        "subAccount": "2",
        "settlementDate": "2021-09-22",
        "orderId": "4415329590",
        "netAmount": 196.29,
        "transactionDate": "2021-09-20T18:06:50+0000",
        "orderDate": "2021-09-20T18:06:50+0000",
        "transactionSubType": "SL",
        "transactionId": 37474440357,
        "cashBalanceEffectFlag": true,
        "description": "SELL TRADE",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0,
            "otherCharges": 0,
            "commission": 0,
            "optRegFee": 0,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "amount": 9,
            "price": 21.8101,
            "cost": 196.29,
            "instruction": "SELL",
            "instrument": {
                "symbol": "X",
                "cusip": "912909108",
                "assetType": "EQUITY"
            }
        }
    },
    {
        "type": "TRADE",
        "subAccount": "2",
        "settlementDate": "2021-09-22",
        "orderId": "4415329583",
        "netAmount": 133.65,
        "transactionDate": "2021-09-20T18:06:42+0000",
        "orderDate": "2021-09-20T18:06:42+0000",
        "transactionSubType": "SL",
        "transactionId": 37474437371,
        "cashBalanceEffectFlag": true,
        "description": "SELL TRADE",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0,
            "otherCharges": 0,
            "commission": 0,
            "optRegFee": 0,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "amount": 16,
            "price": 8.353,
            "cost": 133.65,
            "instruction": "SELL",
            "instrument": {
                "symbol": "IQ",
                "cusip": "46267X108",
                "assetType": "EQUITY"
            }
        }
    },
    {
        "type": "TRADE",
        "subAccount": "2",
        "settlementDate": "2021-09-22",
        "orderId": "4415329575",
        "netAmount": 208.15,
        "transactionDate": "2021-09-20T18:06:28+0000",
        "orderDate": "2021-09-20T18:06:28+0000",
        "transactionSubType": "SL",
        "transactionId": 37474435196,
        "cashBalanceEffectFlag": true,
        "description": "SELL TRADE",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0,
            "otherCharges": 0,
            "commission": 0,
            "optRegFee": 0,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "amount": 1,
            "price": 208.1501,
            "cost": 208.15,
            "instruction": "SELL",
            "instrument": {
                "symbol": "BA",
                "cusip": "097023105",
                "assetType": "EQUITY"
            }
        }
    },
    {
        "type": "RECEIVE_AND_DELIVER",
        "subAccount": "1",
        "settlementDate": "2021-09-09",
        "netAmount": 0,
        "transactionDate": "2021-09-09T05:00:01+0000",
        "transactionSubType": "PM",
        "transactionId": 37263693578,
        "cashBalanceEffectFlag": true,
        "description": "CASH ALTERNATIVES PURCHASE",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0,
            "otherCharges": 0,
            "commission": 0,
            "optRegFee": 0,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "amount": 0.09,
            "cost": 0,
            "instrument": {
                "symbol": "MMDA1",
                "cusip": "9ZZZFD104",
                "assetType": "CASH_EQUIVALENT",
                "type": "MONEY_MARKET"
            }
        }
    },
    {
        "type": "DIVIDEND_OR_INTEREST",
        "subAccount": "2",
        "settlementDate": "2021-09-09",
        "netAmount": 0.09,
        "transactionDate": "2021-09-09T05:00:01+0000",
        "transactionSubType": "QF",
        "transactionId": 37261979831,
        "cashBalanceEffectFlag": true,
        "description": "QUALIFIED DIVIDEND",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0,
            "otherCharges": 0,
            "commission": 0,
            "optRegFee": 0,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "cost": 0,
            "instrument": {
                "symbol": "X",
                "cusip": "912909108",
                "assetType": "EQUITY"
            }
        }
    },
    {
        "type": "JOURNAL",
        "subAccount": "2",
        "settlementDate": "2021-09-09",
        "netAmount": -0.09,
        "transactionDate": "2021-09-09T05:00:01+0000",
        "transactionSubType": "PM",
        "transactionId": 37263693281,
        "cashBalanceEffectFlag": true,
        "description": "CASH ALTERNATIVES PURCHASE",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0,
            "otherCharges": 0,
            "commission": 0,
            "optRegFee": 0,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "cost": 0
        }
    },
    {
        "type": "RECEIVE_AND_DELIVER",
        "subAccount": "1",
        "settlementDate": "2021-08-31",
        "netAmount": 0,
        "transactionDate": "2021-09-01T02:35:18+0000",
        "transactionSubType": "MI",
        "transactionId": 37088393826,
        "cashBalanceEffectFlag": true,
        "description": "CASH ALTERNATIVES INTEREST",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0,
            "otherCharges": 0,
            "commission": 0,
            "optRegFee": 0,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "amount": 0.02,
            "cost": 0,
            "instrument": {
                "symbol": "MMDA1",
                "cusip": "9ZZZFD104",
                "assetType": "CASH_EQUIVALENT",
                "type": "MONEY_MARKET"
            }
        }
    },
    {
        "type": "RECEIVE_AND_DELIVER",
        "subAccount": "1",
        "settlementDate": "2021-07-30",
        "netAmount": 0,
        "transactionDate": "2021-07-31T03:53:15+0000",
        "transactionSubType": "MI",
        "transactionId": 36490874780,
        "cashBalanceEffectFlag": true,
        "description": "CASH ALTERNATIVES INTEREST",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0,
            "otherCharges": 0,
            "commission": 0,
            "optRegFee": 0,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "amount": 0.02,
            "cost": 0,
            "instrument": {
                "symbol": "MMDA1",
                "cusip": "9ZZZFD104",
                "assetType": "CASH_EQUIVALENT",
                "type": "MONEY_MARKET"
            }
        }
    },
    {
        "type": "RECEIVE_AND_DELIVER",
        "subAccount": "1",
        "settlementDate": "2021-06-30",
        "netAmount": 0,
        "transactionDate": "2021-07-01T02:57:36+0000",
        "transactionSubType": "MI",
        "transactionId": 35863773082,
        "cashBalanceEffectFlag": true,
        "description": "CASH ALTERNATIVES INTEREST",
        "fees": {
            "rFee": 0,
            "additionalFee": 0,
            "cdscFee": 0,
            "regFee": 0,
            "otherCharges": 0,
            "commission": 0,
            "optRegFee": 0,
            "secFee": 0
        },
        "transactionItem": {
            "accountId": 233616124,
            "amount": 0.02,
            "cost": 0,
            "instrument": {
                "symbol": "MMDA1",
                "cusip": "9ZZZFD104",
                "assetType": "CASH_EQUIVALENT",
                "type": "MONEY_MARKET"
            }
        }
    }
]