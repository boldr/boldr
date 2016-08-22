import { Component, createElement } from 'react';

/**
 * Creates a component class that renders the given Material UI component
 * @see https://github.com/erikras/redux-form-material-ui
 * @param MaterialUIComponent The material ui component to render
 * @param mapProps A mapping of props provided by redux-form to the props the Material UI
 * component needs
 */
export default function createFormComponent(MaterialUIComponent, mapProps) {
  class InputComponent extends Component {
    getRenderedComponent() {
      return this.refs.component;
    }

    render() {
      return createElement(MaterialUIComponent, {
        ...mapProps(this.props),
        ref: 'component'
      });
    }
  }
  InputComponent.displayName = `ReduxFormMaterialUI${MaterialUIComponent.name}`;
  return InputComponent;
}
