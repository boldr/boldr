export function validator(controls) {
  return (propValue, key, componentName, location, propFullName) => {
    const errors = propValue.map(value => (controls.indexOf(value) !== -1));
    if (! errors.every(error => !! error)) {
      return new Error(`Invalid prop ${propFullName} supplied to ${componentName}`);
    }
  };
}

export const BLOCK_TYPES = [
  { label: 'H1', style: 'header-one' },
  { label: 'H2', style: 'header-two' },
  { label: 'H3', style: 'header-three' },
  { label: 'H4', style: 'header-four' },
  { label: 'H5', style: 'header-five' },
  { label: 'H6', style: 'header-six' },
  { label: 'Blockquote', style: 'blockquote' },
  { label: 'UL', style: 'unordered-list-item' },
  { label: 'OL', style: 'ordered-list-item' },
  { label: 'Code Block', style: 'code-block' },
];

export const INLINE_STYLES = [
  { label: 'Bold', style: 'BOLD' },
  { label: 'Italic', style: 'ITALIC' },
  { label: 'Underline', style: 'UNDERLINE' },
  { label: 'Monospace', style: 'CODE' },
  { label: 'Link', style: 'LINK' },
];

export const BLOCK_CONTROLS = BLOCK_TYPES.map(type => type.label);
export const INLINE_CONTROLS = INLINE_STYLES.map(style => style.label);
