import {Styles} from '@ijstech/components';

const Theme = Styles.Theme.ThemeVars;

console.log('Markdown Theme layout', Theme);

// const containerWidth = Theme.layout?.container?.width || '500px';
// const containerMaxWidth = Theme.layout?.container?.maxWidth || '500px';
// const containerOverflow = Theme.layout?.container?.overflow || 'auto';
// const containerTextAlign = Theme.layout?.container?.textAlign || 'left';


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
        },
        'i-panel.container': {
            width: Theme.layout.container.width,
            maxWidth: Theme.layout.container.maxWidth,
            overflow: Theme.layout.container.overflow,
            textAlign: (Theme.layout.container.textAlign as any),
            margin: '0 auto'
        }
    }
});
