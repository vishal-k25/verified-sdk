// (c) Kallol Borah, 2021
// Registers and processes KYC of users

const user = require('../index');

const {ethers} = require ("ethers");

let abi = [
    "function setManager(address value, address value)",
    "function getManager(address value)",
    "function setStatus(address value, bool value)",
    "function getStatus(address value)",
    "function setFile(address value, bytes32 value)",
    "function getFile(address value)",
    "function setFATCA(address value, bytes32 value)",
    "function getFATCA(address value)",
    "function setCRS(address value, bytes32 value)",
    "function getCRS(address value)",
    "function setPhotoID(address value, bytes32 value)",
    "function getPhotoID(address value)",
    "function setVideoID(address value, bytes32 value)",
    "function getVideoID(address value)",
    "function setAddress(address value, bytes32 value)",
    "function getAddress(address value)",
    "function setCustody(address value, address value)",
    "function getCustody(address value)",
    "function setAccess(bool value)",
    "function getAccess(address value)"
];

const ClientAddress = '0x3e333E0009768E00C77984133D4f469CEC40407c';//process.env.CLIENT;
const KYCAddress = '0xdB42E18CFd0a40A5CA5dcD3ACd92eF7dbC12053a';//process.env.KYC;

module.exports = {
    // sets kyc for _client with _status
    setKycStatus : async function(client, status){
        try{
            const KYC = new ethers.Contract(KYCAddress, abi, user.wallet);
            await KYC.setStatus(ethers.utils.getAddress(client), ethers.utils.formatBytes32String(status));
        }catch(err){
            console.log(err);
        }
    },

    // gets kyc for _client in callback
    getKycStatus : async function(client){
        try{
            const KYC = new ethers.Contract(KYCAddress, abi, user.wallet);
            await KYC.getStatus(ethers.utils.getAddress(client))
            .then(function(result){
                return result;
            });
        }catch(err){
            console.log(err);
        }
    },

    // updates kyc record for _client
    updateKycRecord : async function(client, file, address, photoId, videoId, fatca, crs){
        try{
            const KYC = new ethers.Contract(KYCAddress, abi, user.wallet);
            await KYC.setFile(ethers.utils.getAddress(client), ethers.utils.formatBytes32String(file));
            await KYC.setAddress(ethers.utils.getAddress(client), ethers.utils.formatBytes32String(address));
            await KYC.setPhotoID(ethers.utils.getAddress(client), ethers.utils.formatBytes32String(photoId));
            await KYC.setVideoID(ethers.utils.getAddress(client), ethers.utils.formatBytes32String(videoId));
            await KYC.setFATCA(ethers.utils.getAddress(client), ethers.utils.formatBytes32String(fatca));
            await KYC.setCRS(ethers.utils.getAddress(client), ethers.utils.formatBytes32String(crs));
        }catch(err){
            console.log(err);
        }
    },

    // sets _custodian for _client
    setCustodian : async function(client, custodian){
        try{
            const Client = new ethers.Contract(ClientAddress, abi, user.wallet);
            await Client.setCustody(ethers.utils.getAddress(client), ethers.utils.getAddress(custodian));
        }catch(err){
            console.log(err);
        }
    },

    // gets custodian for _client in callback
    getCustodian : async function(client){
        try{
            const Client = new ethers.Contract(ClientAddress, abi, user.wallet);
            await Client.getCustody(ethers.utils.getAddress(client))
            .then(function(result){
                return result;
            });
        }catch(err){
            console.log(err);
        }
    },

    // records _login for client
    setAccess : async function(login){
        try{
            const Client = new ethers.Contract(ClientAddress, abi, user.wallet);
            await Client.setAccess(ethers.utils.formatBytes32String(login));
        }catch(err){
            console.log(err);
        }
    },

    // gets login records for _client in callback
    getAccess : async function(client){
        try{
            const Client = new ethers.Contract(ClientAddress, abi, user.wallet);
            await Client.getAccess(ethers.utils.getAddress(client))
            .then(function(result){
                return result;
            });
        }catch(err){
            console.log(err);
        }
    },

    // sets manager in _address by _requestor
    setManager : async function(address, requestor){
        try{
            const Client = new ethers.Contract(ClientAddress, abi, user.wallet);
            if(requestor=="manager")
                await Client.setManager(ethers.utils.getAddress(address), user.wallet.address);
            else if(requestor=="client")
                await Client.setManager(user.wallet.address, ethers.utils.getAddress(address));
        }catch(err){
            console.log(err);
        }
    },

    // gets manager for _client in callback to _requestor
    getManager : async function(client){
        try{
            const Client = new ethers.Contract(ClientAddress, abi, user.wallet);
            await Client.getManager(ethers.utils.getAddress(client))
            .then(function(result){
                return result;
            });
        }catch(err){
            console.log(err);
        }
    }
}

