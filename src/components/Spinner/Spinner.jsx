import React from 'react';
import { Spin, Icon } from 'antd';

import './Spinner.scss';

function Spinner() {
  const spinnerIcon = (
    <Icon className="spinner__icon--bright" type="loading" spin />
  );
  return <Spin className="spinner--top-right" indicator={spinnerIcon} />;
}

export default Spinner;
