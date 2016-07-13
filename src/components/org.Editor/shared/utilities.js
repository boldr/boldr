// import styles from './styles';

export function getBlockStyle(block) {
  switch (block.getType()) {
    case 'header-two':return 'h2';
    case 'header-three':return 'h3';
    case 'header-four':return 'h4';
    case 'blockquote': return 'h2';
    case 'code-block': return 'h2';
    case 'ordered-list-item': return 'li';
    case 'unordered-list-item': return 'li';
    default: return 'text';
  }
}
