"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const contractAddress = {
    5: {
        'Client': '0x3e132ee9fc32428655b2151A4E6C3f2B1FD49923',
        'Factory': '0xFA2ADf68Eb4fc9d4331Df124B5902021A78D2842',
        'Cash': '0x9F6807CeeE8951d46ce33D57eEe3256B523bE56A',
        'Bond': '0xeCd032f9Da2aA83d90D14D4648424422c4515216',
        'Token': '0x8F82bC814C1b205e610d379e983aaDe72Ef6F9E2',
        'Oracle': '0x5b42b50012607Ff072A625835eBB5Fd7D4Af90f9',
        'Rates': '0x165Ca3C823FEf1EC9360b323FE7b0f2C7041cf51',
        'Security': '0x93527FaeCD88c108C3Fb78a1Ca72536eeb1Adbf7',
        'SecuritiesFactory': '0x647a7EA364a31fa18c65f4043CD55718d245D774',
        'Vitta': '0x8aa063d709A7Ec84086A0b5330c75D73af528cD3',
        'Liquidity': '0xce6FD14dD748F5f371BB226a3FdF6fEA3a4C423B',
        'Distribution': '0x22Af8F976f34a5f91A333bcc2bBe82826e517B12',
        'BalancerPrimaryIssueManager': '0x63D95635938857Ad202f0684dfd91dc71C9d111e',
        'BalancerSecondaryIssueManager': '0xe1f45e7104069F998b919C26435c4aaBAeD68fEd',
        'BalancerMarginIssueManager': '0x6Aaee8a95a364e208E6915805537437463EF2Cdd',
        'Custody': '0x60aEDad13a34b1DC45bDeA9eD6a66d639563e917',
        'Compound': '0xf8287e8D37863Db0Cabd25B55f77652d5d6aEb83',
        'CASH': {
            'VCUSD': '0xa6aa25115f23F3ADc4471133bbDC401b613DbF65',
            'VCEUR': '0xEeD0099ad11960f963Bfdf359c79Acb75E27C5d3',
            'VCCHF': '0xdB551DA261786abcF637Cff6c4E64d2CBe5BB3CA',
            'VCINR': '0x255744717B3b01BBF9388FEb7fa829D1A5b44ba8'
        },
        'BOND': {
            'VBUSD': '0x0AD3B8eA3F464d0C6DaafC630f50Fffa0b860E73',
            'VBEUR': '0x388212CE38453dcE7C63f80E27fe2C74F96aaa3a',
            'VCCHF': '0x5050553d73526D252c3465D36768E504BC9276d4',
            'VBINR': '0xC9DC7B9A25e60627881912b19E25856452130BE4'
        },
    },
    'verified': {
        'Client': '',
        'Factory': '',
        'Cash': '',
        'Bond': '',
        'Token': '',
        'Oracle': '',
        'Rates': '',
        'Security': '',
        'SecuritiesFactory': '',
        'Vitta': '',
        'Liquidity': '',
        'Distribution': '',
        'BalancerPrimaryIssueManager': '',
        'BalancerSecondaryIssueManager': '',
        'BalancerMarginIssueManager': '',
        'Custody': '',
        'Compound': '',
        'CASH': {
            'VCUSD': '',
            'VCEUR': '',
            'VCCHF': '',
            'VCINR': ''
        },
        'BOND': {
            'VBUSD': '',
            'VBEUR': '',
            'VCCHF': '',
            'VBINR': ''
        },
    },
    137: {
        'Client': '0x2C5718206b37b8744784ce44f374DE13dd7BC2d1',
        'Factory': '',
        'Cash': '',
        'Bond': '',
        'Token': '',
        'Oracle': '',
        'Rates': '',
        'Security': '0x5b8bc9986A44c1814603Ba7C66C5e2eC332262c5',
        'SecuritiesFactory': '0xF0bbA007515fF51C9310225106512B921de4cdAA',
        'Vitta': '0xAb26871f689241758F42627d812E2A3eda7c630e',
        'Liquidity': '0x2E6F17DF38B4686D17C6ec63eF3Ee8f926b1769a',
        'Distribution': '0x96De7417058Dff11D570011eA100e6F0B6Af98eC',
        'BalancerPrimaryIssueManager': '0x30fE817317Ffc5A45e8cB457fD1AC8ca0CE068D4',
        'BalancerSecondaryIssueManager': '0xb9AD11aC80AD0BE1B83ba6b83E4E27C110c18a33',
        'BalancerMarginIssueManager': '',
        'Custody': '',
        'Compound': '',
        'CASH': {
            'VCUSD': '',
            'VCEUR': '',
            'VCCHF': '',
            'VCINR': ''
        },
        'BOND': {
            'VBUSD': '',
            'VBEUR': '',
            'VCCHF': '',
            'VBINR': ''
        },
    },
    1: {
        'Client': '',
        'Factory': '',
        'Cash': '',
        'Bond': '',
        'Token': '',
        'Oracle': '',
        'Rates': '',
        'Security': '',
        'SecuritiesFactory': '',
        'Vitta': '',
        'Liquidity': '',
        'Distribution': '',
        'BalancerPrimaryIssueManager': '',
        'BalancerSecondaryIssueManager': '',
        'BalancerMarginIssueManager': '',
        'Custody': '',
        'Compound': '',
        'CASH': {
            'VCUSD': '',
            'VCEUR': '',
            'VCCHF': '',
            'VCINR': ''
        },
        'BOND': {
            'VBUSD': '',
            'VBEUR': '',
            'VCCHF': '',
            'VBINR': ''
        },
    },
    42161: {
        'Client': '',
        'Factory': '',
        'Cash': '',
        'Bond': '',
        'Token': '',
        'Oracle': '',
        'Rates': '',
        'Security': '',
        'SecuritiesFactory': '',
        'Vitta': '',
        'Liquidity': '',
        'Distribution': '',
        'BalancerPrimaryIssueManager': '',
        'BalancerSecondaryIssueManager': '',
        'BalancerMarginIssueManager': '',
        'Custody': '',
        'Compound': '',
        'CASH': {
            'VCUSD': '',
            'VCEUR': '',
            'VCCHF': '',
            'VCINR': ''
        },
        'BOND': {
            'VBUSD': '',
            'VBEUR': '',
            'VCCHF': '',
            'VBINR': ''
        },
    },
    10: {
        'Client': '',
        'Factory': '',
        'Cash': '',
        'Bond': '',
        'Token': '',
        'Oracle': '',
        'Rates': '',
        'Security': '',
        'SecuritiesFactory': '',
        'Vitta': '',
        'Liquidity': '',
        'Distribution': '',
        'BalancerPrimaryIssueManager': '',
        'BalancerSecondaryIssueManager': '',
        'BalancerMarginIssueManager': '',
        'Custody': '',
        'Compound': '',
        'CASH': {
            'VCUSD': '',
            'VCEUR': '',
            'VCCHF': '',
            'VCINR': ''
        },
        'BOND': {
            'VBUSD': '',
            'VBEUR': '',
            'VCCHF': '',
            'VBINR': ''
        },
    },
    56: {
        'Client': '',
        'Factory': '',
        'Cash': '',
        'Bond': '',
        'Token': '',
        'Oracle': '',
        'Rates': '',
        'Security': '',
        'SecuritiesFactory': '',
        'Vitta': '',
        'Liquidity': '',
        'Distribution': '',
        'BalancerPrimaryIssueManager': '',
        'BalancerSecondaryIssueManager': '',
        'BalancerMarginIssueManager': '',
        'Custody': '',
        'Compound': '',
        'CASH': {
            'VCUSD': '',
            'VCEUR': '',
            'VCCHF': '',
            'VCINR': ''
        },
        'BOND': {
            'VBUSD': '',
            'VBEUR': '',
            'VCCHF': '',
            'VBINR': ''
        },
    },
    100: {
        'Client': '0xE7422FdB4e9a39489bFe7ef9F1E1b27dC7860195',
        'Factory': '',
        'Cash': '',
        'Bond': '',
        'Token': '',
        'Oracle': '',
        'Rates': '',
        'Security': '0xb1539a85F9252137BE0B2f1169EaE235B6D45142',
        'SecuritiesFactory': '0x04631b0B934c1d35B1f0FDAa1E000AC85c93ec7A',
        'Vitta': '0x1B95D408DE85e07d0De5d5b545202E32a023772E',
        'Liquidity': '0xBD5A0178C276d1553Eb388AdA03F6Cb79Eb6F67D',
        'Distribution': '0x8acBeFF5F1F2e0A4298A6449494C0aA6Dd830d3D',
        'BalancerPrimaryIssueManager': '0x2A46d8Ca28F0b84D58d20b5158C2417E6F9CE76F',
        'BalancerSecondaryIssueManager': '0x2c6F953dfc7b922ef3101c65c62f9349fCd65e1A',
        'BalancerMarginIssueManager': '0x0d062A0064b762ed8AEe7DE9E79b532e6215c77a',
        'Custody': '0x4A59d0A82A9e1196c7789a25b0F302A683b220E7',
        'Compound': '',
        'CASH': {
            'VCUSD': '',
            'VCEUR': '',
            'VCCHF': '',
            'VCINR': ''
        },
        'BOND': {
            'VBUSD': '',
            'VBEUR': '',
            'VCCHF': '',
            'VBINR': ''
        },
    },
    'balancerVault': '0xBA12222222228d8Ba445958a75a0704d566BF2C8'
};
exports.default = contractAddress;
