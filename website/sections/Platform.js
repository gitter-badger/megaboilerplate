import React from 'react';
import cx from 'classnames';
import { find } from 'lodash';

const PLATFORM_SVG = (
  <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 50 50">
    <path d="M 13 0 C 12.448 0 12 0.448 12 1 L 12 2 L 12 4 L 14 4 L 14 2 L 14 1 C 14 0.448 13.552 0 13 0 z M 21 0 C 20.448 0 20 0.448 20 1 L 20 2 L 20 4 L 22 4 L 22 2 L 22 1 C 22 0.448 21.552 0 21 0 z M 29 0 C 28.447 0 28 0.448 28 1 L 28 2 L 28 4 L 30 4 L 30 2 L 30 1 C 30 0.448 29.553 0 29 0 z M 37 0 C 36.447 0 36 0.448 36 1 L 36 2 L 36 4 L 38 4 L 38 2 L 38 1 C 38 0.448 37.553 0 37 0 z M 8.28125 5 C 6.48025 5 5 6.48025 5 8.28125 L 5 41.71875 C 5 43.51975 6.48025 45 8.28125 45 L 41.71875 45 C 43.51975 45 45 43.51975 45 41.71875 L 45 8.28125 C 45 6.48025 43.51975 5 41.71875 5 L 8.28125 5 z M 12 10 C 13.104 10 14 10.896 14 12 C 14 13.104 13.104 14 12 14 C 10.896 14 10 13.104 10 12 C 10 10.896 10.896 10 12 10 z M 1 12 C 0.448 12 0 12.448 0 13 C 0 13.552 0.448 14 1 14 L 2 14 L 4 14 L 4 12 L 2 12 L 1 12 z M 46 12 L 46 14 L 48 14 L 49 14 C 49.553 14 50 13.552 50 13 C 50 12.448 49.553 12 49 12 L 48 12 L 46 12 z M 1 20 C 0.448 20 0 20.448 0 21 C 0 21.552 0.448 22 1 22 L 2 22 L 4 22 L 4 20 L 2 20 L 1 20 z M 46 20 L 46 22 L 48 22 L 49 22 C 49.553 22 50 21.552 50 21 C 50 20.448 49.553 20 49 20 L 48 20 L 46 20 z M 1 28 C 0.448 28 0 28.447 0 29 C 0 29.553 0.448 30 1 30 L 2 30 L 4 30 L 4 28 L 2 28 L 1 28 z M 46 28 L 46 30 L 48 30 L 49 30 C 49.553 30 50 29.553 50 29 C 50 28.447 49.553 28 49 28 L 48 28 L 46 28 z M 1 36 C 0.448 36 0 36.447 0 37 C 0 37.553 0.448 38 1 38 L 2 38 L 4 38 L 4 36 L 2 36 L 1 36 z M 38 36 C 39.104 36 40 36.896 40 38 C 40 39.104 39.104 40 38 40 C 36.896 40 36 39.104 36 38 C 36 36.896 36.896 36 38 36 z M 46 36 L 46 38 L 48 38 L 49 38 C 49.553 38 50 37.553 50 37 C 50 36.447 49.553 36 49 36 L 48 36 L 46 36 z M 12 46 L 12 48 L 12 49 C 12 49.553 12.448 50 13 50 C 13.552 50 14 49.553 14 49 L 14 48 L 14 46 L 12 46 z M 20 46 L 20 48 L 20 49 C 20 49.553 20.448 50 21 50 C 21.552 50 22 49.553 22 49 L 22 48 L 22 46 L 20 46 z M 28 46 L 28 48 L 28 49 C 28 49.553 28.447 50 29 50 C 29.553 50 30 49.553 30 49 L 30 48 L 30 46 L 28 46 z M 36 46 L 36 48 L 36 49 C 36 49.553 36.447 50 37 50 C 37.553 50 38 49.553 38 49 L 38 48 L 38 46 L 36 46 z"></path>
  </svg>
);

class Platform extends React.Component {
  render() {
    const props = this.props;

    const validationError = props.platformValidationError ? (
      <div className="text-danger"><i className="fa fa-warning"></i> {props.platformValidationError}</div>
    ) : null;

    if (props.platformValidationError) {
      if (props.disableAutoScroll) {
        $(this.refs.platform).velocity('scroll', { duration: 0 });
      } else {
        $(this.refs.platform).velocity('scroll');
      }
    }

    return (
      <div ref="platform" className={cx('zoomInBackwards panel', props.platform)}>
        <div className="panel-heading">
          <h6>{PLATFORM_SVG}{props.platform || 'Platform'}</h6>
        </div>
        <div className="panel-body">
          <div className="radio-group">
            <label className="radio-inline">
              <img className="btn-logo" src="/img/svg/node-logo.svg" alt="Node.js"/>
              <input type="radio"
                     id="nodeRadio"
                     name="platformRadios"
                     value="node"
                     onClick={props.handleChange}
                     checked={props.platform === 'node'}/>
              <span>Node.js</span>
            </label>
            <label className="radio-inline">
              <img className="btn-logo" src="/img/svg/html5-logo.svg" alt="HTML5"/>
              <input type="radio"
                     id="staticSiteRadio"
                     name="platformRadios"
                     value="html5"
                     onClick={props.handleChange}
                     checked={props.platform === 'html5'}/>
              <span>Static Site</span>
            </label>
            <label className="radio-inline">
              <img className="btn-logo" src="/img/svg/eslint-logo.svg" alt="JavaScript Library"/>
              <input type="radio"
                     id="jsLibraryRadio"
                     name="platformRadios"
                     value="library"
                     onClick={props.handleChange}
                     checked={props.platform === 'library'}/>
              <span>JS Library</span>
            </label>
          </div>
          {validationError}
        </div>
      </div>
    );
  }

}

export default Platform;
