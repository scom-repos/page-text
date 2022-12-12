import {Styles} from '@ijstech/components';

const Theme = Styles.Theme.ThemeVars as any;

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
            width: 'var(--layout-container-width)',
            maxWidth: 'var(--layout-container-max_width)',
            overflow: 'var(--layout-container-overflow)',
            textAlign: ('var(--layout-container-text_align)' as any),
            margin: '0 auto'
        }
    }
});
