import {Styles} from '@ijstech/components';

const Theme = Styles.Theme.ThemeVars as any;

Styles.cssRule('i-section-markdown', {
    $nest: {
        ".markdown-container.invalid": {
            $nest: {
                ".markdown-input input": {
                    border: "2px solid #B2554D"
                }
            }
        }
    }
});
