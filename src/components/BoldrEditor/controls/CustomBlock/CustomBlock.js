import React, { PropTypes } from 'react';

import StyleButton from '../StyleButton/StyleButton';

function CustomBlockControls({ controls, display, onClick, customBlocks, customBlockType }) {
  const buttons = [];

  const getClickHandlerForType = type => () => {
    onClick({
      showCustomBlockInput: true,
      customBlockType: type,
      customBlockData: customBlocks[type].getInitialData(),
    });
  };

  Object.keys(customBlocks).forEach(key => {
    if (customBlocks.hasOwnProperty(key) && controls && controls.indexOf(key) > -1) {
      buttons.push(
        <StyleButton
          key={ `${key}-button` }
          active={ key === customBlockType }
          label={ customBlocks[key].getLabel() }
          icon={ typeof customBlocks[key].getIcon === 'function' ? customBlocks[key].getIcon() : null }
          onToggle={ getClickHandlerForType(key) }
          style={ '' }
        />
      );
    }
  });

  return (
    <div className="DraftJSEditor-controls" style={ { display } }>
      {buttons}
    </div>
  );
}

CustomBlockControls.propTypes = {
  controls: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.arrayOf(React.PropTypes.string),
  ]),
  display: React.PropTypes.oneOf(['block', 'inline']),
  onClick: PropTypes.func,
  customBlocks: PropTypes.object,
  customBlockType: PropTypes.string
};

export default CustomBlockControls;
