import { Module, customModule } from '@ijstech/components';
import ScomPageText from '@scom/page-text';

@customModule
export default class Main extends Module {
  private pageBlock1: ScomPageText;

  init() {
    super.init();
  }

  render() {
    return <i-vstack width={'100%'} height={'100%'} gap="1rem" margin={{top: '1rem'}}>
      <i-page-text
        id="pageBlock1"
        tag={{
          font: {color: "#000"}
        }}
        value={`## Powering the New Age of CRYPTO-COMMERCE
### Next Generation Blockchain Protocols and Infrastructure To Bring About a New Paradigm of Commerce
Protocols and Infrastructure To Bring About a New Paradigm of Commerce
[Learn More](https://www.ijs.tech/blockchain-protocols-and-infrastructure-to-bring-about-a-new-paradigm-of-commerce/)
`}
      />
    </i-vstack>
  }
}