export * from './flow-ux.js';

import {SpectreWalletDesktop} from './spectre-wallet-desktop.js';
import {SpectreWalletMobile, isMobile, dontInitiatedComponent} from './spectre-wallet-mobile.js';

if(isMobile)
	document.body.classList.add('is-mobile');
export {isMobile}

export const SpectreWallet = isMobile ? SpectreWalletMobile : SpectreWalletDesktop;

if(!dontInitiatedComponent)
	SpectreWallet.define("spectre-wallet");
