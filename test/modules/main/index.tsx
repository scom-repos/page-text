import { Module, customModule, Styles } from '@ijstech/components';
import ScomPageText from '@scom/page-text';

Styles.Theme.defaultTheme.action.active = '#ebebeb';
Styles.Theme.defaultTheme.docs.text0 = 'rgba(12, 18, 52, 1.00)';
Styles.Theme.defaultTheme.docs.text1 = 'rgba(136, 153, 168, 1.00)';
Styles.Theme.applyTheme(Styles.Theme.defaultTheme);

@customModule
export default class Main extends Module {
  private pageBlock1: ScomPageText;

  init() {
    super.init();
    const config1 = this.pageBlock1.getConfigurators().find(item => item.target === 'Builders');
    if (config1?.setTag) {
      config1.setTag({
        color: "#FF9933",
        padding: {
          top: 10,
          left: 10,
          bottom: 10,
          right: 10
        },
        textAlign: 'center',
        backgroundColor: '#ebebeb'
      });
    }
  }

  render() {
    return <i-vstack width={'100%'} height={'100%'} gap="1rem" margin={{top: '1rem'}}>
      <i-page-text
        id="pageBlock1"
        value={`## Powering the New Age of CRYPTO-COMMERCE
### Next Generation Blockchain Protocols and Infrastructure To Bring About a New Paradigm of Commerce
Protocols and Infrastructure To Bring About a New Paradigm of Commerce
[Learn More](https://www.ijs.tech/blockchain-protocols-and-infrastructure-to-bring-about-a-new-paradigm-of-commerce/)
`}
      />
    </i-vstack>
  }
}