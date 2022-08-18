"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const contractAddress = {
    'L1-goerli': {
        'Client': '0x09129c81E9F67B1D186719F16f1e2Fd4DC7CC5A4',
        'KYC': '',
        'System': '',
        'Holder': '',
        'Ledger': '',
        'Account': '',
        'Factory': '0x4e5f5b34d8E381da1f121f558Eda0004251ADeCa',
        'Cash': '0x3724D9e0b8b229994811704f1764e90DfF31937C',
        'Bond': '0xA4670cf406e8d43cF52605441e875a7cCe6240C6',
        'Token': '',
        'Oracle': '',
        'Rates': '0x9D90693dc06236d934Dafc8c5D339A3798afabff',
        'PreTrade': '',
        'Trade': '',
        'PostTrade': '',
        'SecuritiesRegistry': '',
        'Security': '0x2118C679fE21f808bB2159793eC7e5c009aB5919',
        'OrderPool': '',
        'PoolFactory': '',
        'Stocks': '',
        'Bonds': '',
        'Liquidity': '0x358643DA31fdE65b15839EeC0C72f3dacD07EBeD',
        'Distribution': '0xa1eFf77E3B8f8FC55675048731d509cacF40F757',
        'BalancerPrimaryIssueManager': '0xFc8E2ca7757BA61dDF6fcb63eD7f33C1a14a2204',
        'BalancerSecondaryIssueManager': '0xC5908dC7FBAe5c89795a2b6125db91a2B63b8cDb',
        'Custody': '0xF6ebB33E758eC36A2D3065F4633131DFF8307A07',
        'CASH': {
            'VCUSD': '0xfbc7fB0615099D91eb6E0C1527141CC6589e9fe7',
            'VCEUR': '0x2BAed66972676641Dd77fbA36dAa4127dB7A0672',
            'VCINR': '0xFb9b475380aFFb10aC823Df42102e199c34b0Ceb'
        },
        'BOND': {
            'VBUSD': '0x0EBe5744F1b72C1875eCA2e02482Fc206De26A35',
            'VBEUR': '0xD3daCD382E2A55F9207855D33f8b184a80f7c634',
            'VBINR': '0xf56ba7bC1749697D959983496669a44b301eFE46'
        },
    },
    'L2-goerli': {
        'Client': '0x52b20fd184398A3B24cD24B5Be7bbdA32B9b304A',
        'KYC': '0x6610e9F8f7f7B85f079d09dCA5D8b335e65b317C',
        'System': '0xFEb48eAc3d1C30EE99164eF7feB79a71A2B9B4FB',
        'Holder': '0xDF71A1e2bA368574Ff62aC07dA05006544AF2120',
        'Ledger': '0xC19536D250293ced7821a13CA0b4D0b766C81b4e',
        'Account': '0x1C5Bdc536D96aa54030428a11E943EF5bbD41C99',
        'Factory': '0x9b842C77E3D6681b4Ee66CebE2d522d35D37510e',
        'Cash': '0xe4929371d7452aeb90F7c092F873d049892eafbA',
        'Bond': '0x30a9b280FB9070f14ee3157c41C68c04236C1858',
        'Token': '0x785AE38047650A9CC298B7ff694Ce29466585F7F',
        'Oracle': '0x643CB95e3D94ace3cbeb5002DBf8C5a1C292fd17',
        'Rates': '0xD292658282828BB845c1c64CA19621a98c622c6a',
        'PreTrade': '0x5d49E52CE8aA2c715E6Fdf8Fd46B43cbfAEd6650',
        'Trade': '0x5E58Cc659d8a8E61450A7363C60a0Bd1d88942c5',
        'PostTrade': '0x3FBdFE4a6Ea67bC45d31F32ABf801766530E2Ff0',
        'SecuritiesRegistry': '0xE6bEb64f49250D7D455D9910224c03faA93f6fEc',
        'Security': '0x4BBfC384503C4A420551Db8E4C56c7BBda85B9EF',
        'OrderPool': '0x8F1531627A7675Ffb04Dc2d4C83D976E22A239D3',
        'PoolFactory': '0x45d6D11B9e888F3735d57eea2d732e9f62DFE3e7',
        'Products': '0xb206a38a8CaCb79d53f3AA1C977E6f75632b50fd',
        'Stocks': '0x344cA252E2fCDDDF7F070Cf50920dB1bAAD0dEc5',
        'Bonds': '0xb3D8BB812cC4F7680995B03dFF7c8A2168DCB9A4',
        'Liquidity': '',
        'Distribution': '0xc5c2Aeb737C016FDB2655Ff7B748667f5ab6A7f1',
        'BalancerManager': '',
        'PrimaryIssuePoolFactory': '',
        'Custody': '',
        'CASH': {
            'VCUSD': '0x7817ee8Ed70aE456d220Ac56c625074799A7fE1d',
            'VCEUR': '0xb0Cda6bee0575152F8E16D2D1842566C74545f42',
            'VCINR': '0x2a970A962D97Cc642a1d064828C7c2496A6D853d'
        },
        'BOND': {
            'VBUSD': '0x0a19EC33Ad167853fdc3F50d6406FB554872A483',
            'VBEUR': '0x79ac6b5049d5538Da09596d90848355D94c72386',
            'VBINR': '0xe52a3147F1bbCe5402F32B0633a1842719b94Cea'
        },
    },
    'mainnet': {
        'Client': '',
        'KYC': '',
        'System': '',
        'Holder': '',
        'Ledger': '',
        'Account': '',
        'Factory': '',
        'Cash': '',
        'Bond': '',
        'Token': '',
        'Oracle': '',
        'Rates': '',
        'PreTrade': '',
        'Trade': '',
        'PostTrade': '',
        'SecuritiesRegistry': '',
        'Security': '',
        'OrderPool': '',
        'PoolFactory': '',
        'Products': '',
        'Stocks': '',
        'Bonds': '',
        'Liquidity': '',
        'Distribution': '',
        'AssetManager': '',
        'Custody': '',
        'CASH': {
            'VCUSD': '',
            'VCEUR': '',
            'VCINR': ''
        },
        'BOND': {
            'VBUSD': '',
            'VBEUR': '',
            'VBINR': ''
        }
    },
    'verifiednetwork': {
        'Client': '',
        'KYC': '',
        'System': '',
        'Holder': '',
        'Ledger': '',
        'Account': '',
        'Factory': '',
        'Cash': '',
        'Bond': '',
        'Token': '',
        'Oracle': '',
        'Rates': '',
        'PreTrade': '',
        'Trade': '',
        'PostTrade': '',
        'SecuritiesRegistry': '',
        'Security': '',
        'OrderPool': '',
        'PoolFactory': '',
        'Products': '',
        'Stocks': '',
        'Bonds': '',
        'Liquidity': '',
        'Distribution': '',
        'AssetManager': '',
        'Custody': '',
        'CASH': {
            'VCUSD': '',
            'VCEUR': '',
            'VCINR': ''
        },
        'BOND': {
            'VBUSD': '',
            'VBEUR': '',
            'VBINR': ''
        }
    }
};
exports.default = contractAddress;
