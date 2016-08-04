export const isServer = typeof window === 'undefined';
export function truncateMiddleString(str, length, separator) {
  if (!str) {
    return str;
  }
  if (str && str.length <= length) return str;
  separator = separator || '...';

  const sepLen = separator.length;
  const charsToShow = length - sepLen;
  const frontChars = Math.ceil(charsToShow / 2);
  const backChars = Math.floor(charsToShow / 2);

  return str.substr(0, frontChars) + separator + str.substr(str.length - backChars);
}

export function truncString(str, length, separator) {
  separator = separator || '...';
  return (typeof str === 'string' && str.length > length ? str.substring(0, length) + separator : str);
}

export function fireEvent(node, eventName) {
  let doc = {};
  if (node.ownerDocument) {
    doc = node.ownerDocument;
  } else if (node.nodeType === 9) {
    doc = node;
  }
  if (node.dispatchEvent) {
    let eventClass = '';
    switch (eventName) {
      case 'click':
      case 'mousedown':
      case 'mouseup':
        eventClass = 'MouseEvents';
        break;
      case 'focus':
      case 'change':
      case 'blur':
      case 'select':
        eventClass = 'HTMLEvents';
        break;
      default:
        break;
    }
    const event = doc.createEvent(eventClass);
    event.initEvent(eventName, true, true); // All events created as bubbling and cancelable.

    event.synthetic = true; // allow detection of synthetic events
    // The second parameter says go ahead with the default action
    node.dispatchEvent(event, true);
  } else if (node.fireEvent) {
    // IE-old school style
    const event = doc.createEventObject();
    event.synthetic = true; // allow detection of synthetic events
    node.fireEvent('on' + eventName, event);
  }
}

export function executionEnvironment() {
  const canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

  return {
    canUseDOM: canUseDOM,
    canUseWorkers: typeof Worker !== 'undefined',
    canUseEventListeners:
    canUseDOM && !!(window.addEventListener || window.attachEvent),
    canUseViewport: canUseDOM && !!window.screen
  };
}

export function getWindowHeight() {
  if (!executionEnvironment().canUseDOM) {
    return 0;
  }
  const w = window;
  const d = document;
  const e = d.documentElement;
  const g = d.getElementsByTagName('body')[0];
  return w.innerHeight || e.clientHeight || g.clientHeight;
}

export function getWindowWidth() {
  if (!executionEnvironment().canUseDOM) {
    return 0;
  }
  const w = window;
  const d = document;
  const e = d.documentElement;
  const g = d.getElementsByTagName('body')[0];
  return w.innerWidth || e.clientWidth || g.clientWidth;
}

export function getDeviceType() {
  if (!executionEnvironment().canUseDOM) {
    return 0;
  }
  const w = window || null;
  const d = document;
  const e = d.documentElement;
  const g = d.getElementsByTagName('body')[0];
  const witdh = w.innerWidth || e.clientWidth || g.clientWidth;
  if (witdh < 768) {
    return 'mobile';
  }
  if (witdh >= 768 && w < 992) {
    return 'tablet';
  }
  return 'desktop';
}

export function getScrollTop() {
  return window.pageYOffset || document.documentElement.scrollTop;
}

export function getScreenHeight() {
  return Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  );
}

export function isEmpty(obj) {
  if (obj === null) return true;
  if (obj && obj.length > 0) return false;
  if (obj && obj.length === 0) return true;
  for (const key in obj) {
    if (hasOwnProperty.call(obj, key)) return false;
  }
  return true;
}

export const token = localStorage.getItem('token');
