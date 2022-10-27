import {Styles} from '@ijstech/components';

const Theme = Styles.Theme.ThemeVars as any;

Styles.cssRule('#pnlMarkdown', {
    $nest: {
        ".markdown-container.invalid": {
            $nest: {
                ".markdown-input input": {
                    border: "2px solid #B2554D"
                }
            }
        },
        "textarea": {
            border: 'none',
            outline: 'none'
        }
    }
});
