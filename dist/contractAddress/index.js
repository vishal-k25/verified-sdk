"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const contractAddress = {
    5: {
        'Client': '0x21df984ddECebcAa0a4D161F07272CAE48fBbf43',
        'Factory': '0x5f69cc3859f8F155cE14e6786Daef5d0Dae55E97',
        'Cash': '0xD98197C1f12cB65e50d0Eb4c663B54068a5a7e3a',
        'Bond': '0xEf64122d17cF76555A2e7af429c61616C805FbD5',
        'Token': '0x94fcEDD462ffff861bBdC6AE02cf0751A6D66d86',
        'Oracle': '0x62ed1722Da600f98981B69fE03727768023E0987',
        'Rates': '0x70bA292a33C96B1C2a7c718DEB00f4ef1b91EA7f',
        'Security': '0xFFc712C269b27D816D52ABF6a60D2Dd8aC442579',
        'SecuritiesFactory': '0x92d3dCaDaa95eB02eD54ea9e4c20f9012c7f332C',
        'Vitta': '0x25A8d6fB9eF3c0aD327113f994Ed087dA26f66b3',
        'Liquidity': '0xad3003bafc712aCe31dc401CF4E047CB58C76634',
        'Distribution': '0x67e9391D0b85B4131b03c86924442B9AdD75b8fb',
        'BalancerPrimaryIssueManager': '0x40E3eA91f73305a2AC15e9650F18e258bFa86E58',
        'BalancerSecondaryIssueManager': '0x82Ae1172b31509f8e1B9d59cDd6382DF9E901637',
        'BalancerMarginIssueManager': '0xfdEeDc1Bf32eC331155c15945a9eC9B7704001aE',
        'Custody': '0x60aEDad13a34b1DC45bDeA9eD6a66d639563e917',
        'CASH': {
            'VCUSD': '0xB5fb79a493852f0601f711b58AB10Cca0EC154E1',
            'VCEUR': '0xd4a8560BD75ee2d6cc05fEb40d69b4541110d45F',
            'VCCHF': '0xeCA268DE3d9bb4ca7a805E3C0A3Da2088C49D757',
            'VCINR': '0x976413c64174Ec842AA68875435c56CFC0Ad46cE'
        },
        'BOND': {
            'VBUSD': '0x7A0d162f2c67898C35F98B0A1dC04De30Cc85BC6',
            'VBEUR': '0x4a70A43045976a492CbF242EA51c304c7a34f468',
            'VCCHF': '0x2DCb406a38c6d3D61Af96175142541e4b9943939',
            'VBINR': '0x15fbb33D2A8138CA5c0691fAdD0A27c5e7D697A8'
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
        'Client': '0xd234d2433a877465cbdF6B478bfC027dB7910b0b',
        'Factory': '',
        'Cash': '',
        'Bond': '',
        'Token': '',
        'Oracle': '',
        'Rates': '',
        'Security': '0x808462a488291af25dA19D688d9Fb4EBC87EE65a',
        'SecuritiesFactory': '0x9e3171ed30C27fFE694b5B44E99c1cCEFe4Fb85d',
        'Vitta': '0xAb26871f689241758F42627d812E2A3eda7c630e',
        'Liquidity': '0x93581c9DD7dc73a6C3887F4bd0bA74D175aDbD85',
        'Distribution': '0x2d99a4c42a386408C687A4825D7Ea3ab378994B8',
        'BalancerPrimaryIssueManager': '0x3Af6bae7e4779808B5B6cE03c5095Af00Fd87731',
        'BalancerSecondaryIssueManager': '0x305a09D57Ea30EeF22fBb2B1048f3A09164C9b12',
        'BalancerMarginIssueManager': '0xEf329d1d0E47A0185b32bC62e69ab16a95533D75',
        'Custody': '',
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
        'Client': '0x44d2463791Ef7d13574675733e75f160311970b9',
        'Factory': '0x388d1591A572800C2f9cd0987f8A536F178C9806',
        'Cash': '0x76621e82ff4416897Bb8316853ecBE15E7FB9279',
        'Bond': '0xcc2FCff86F5Fb20207c77C1d83bEA5645172737a',
        'Token': '0x4C5feED47d13a1b4ba7c307975edE38773440C7F',
        'Oracle': '0xE2D404aEC7Dd40219A7Ea19be3Fb797399ebB559',
        'Rates': '0x8DfC45b4b8Ead2a4FEF1710eE80D250F774d8ABe',
        'Security': '0xc090208AF73839e2Ec074Db27294548e7d19d8FA',
        'SecuritiesFactory': '0x00674E4f81C613afd1B832d3839dCEdc4679F50B',
        'Vitta': '0x2F5d5A76C6faf10320fe943307d61d76d75D09fd',
        'Liquidity': '0x8365A76099629CDd6B28c3D85862A220504C0b46',
        'Distribution': '0xe44Dc13cBF4C785843ac7B325DD8F6b01D2961CA',
        'BalancerPrimaryIssueManager': '0x5640812D73f0D3d820832BFb53ed6fC4a9383283',
        'BalancerSecondaryIssueManager': '0x178E33786349cEE3E4dec3c51EF2a1108E8d958e',
        'BalancerMarginIssueManager': '0x6013c4f00Bc8456aD45EF945FEA4DC4ab30026Fc',
        'Custody': '0x4A59d0A82A9e1196c7789a25b0F302A683b220E7',
        'CASH': {
            'VCUSD': '0x3D1775138127098bf97A2574D8a0d3Be909eC49f',
            'VCEUR': '0x896CeEE4d36b24713dDd05f126d59b22A2d252CF',
            'VCCHF': '0x8F6Ffa70612Ef2216669f07C18FABC5209c45423',
            'VCINR': '0xb6FDa76ced0F022BB783B68b2AD6EaA2759799DC'
        },
        'BOND': {
            'VBUSD': '0x2D34b1187742928Fd50c89cC978467cE7691Ce7c',
            'VBEUR': '0x56f9ED9914546DeBBA541FEF303fA39CfcF4b63C',
            'VCCHF': '0x8eE273Ac39C83EF01e3Df73d15B562a9056B03Bd',
            'VBINR': '0xd9b9A355Baf5FC1467118306e1C82732771eD140'
        },
    }
};
exports.default = contractAddress;
