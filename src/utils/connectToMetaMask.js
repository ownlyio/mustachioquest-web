const connectToMetaMask = async () => {
    let address = false;

    if (window.ethereum) {
        await window.ethereum.request({method: "eth_requestAccounts"}).then(async (accounts) => {
            // Get network ID
            let n = parseInt(window.ethereum.chainId);

            if(n !== 56) {
            // if(n !== 97) {
                await switchNetwork();
            }

            address = accounts[0];

            window.ethereum.on('accountsChanged', function (accounts) {
                window.location.reload();
            });
        }).catch((err) => console.log(err))
    }

    return address;
};

const switchNetwork = async () => {
    try {
        console.log("switch");
        await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: "0x38"}],
            // params: [{ chainId: "0x61"}],
        });
        console.log("You have switched to the right network")
    } catch (switchError) {
        // The network has not been added to MetaMask
        if (switchError.code === 4902) {
            await addNetwork();
        }
    }
};

const addNetwork = async () => {
    try {
        await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [
                {
                    chainId: '0x38',
                    chainName:'BNB Chain',
                    rpcUrls:['https://bsc-dataseed.binance.org/'],
                    blockExplorerUrls:['https://bscscan.com/'],
                    nativeCurrency: {
                        symbol:'BNB',
                        decimals: 18
                    }
                    // chainId: '0x61',
                    // chainName:'BNB Chain Testnet',
                    // rpcUrls:['https://data-seed-prebsc-1-s1.binance.org:8545/'],
                    // blockExplorerUrls:['https://testnet.bscscan.com/'],
                    // nativeCurrency: {
                    //     symbol:'BNB',
                    //     decimals: 18
                    // }
                }
            ]
        });
    } catch (err) {
        console.log(err);
    }
};

export default connectToMetaMask