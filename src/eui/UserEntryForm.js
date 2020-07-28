import React from 'react';

import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiFormRow,
  EuiButton,
  EuiFieldText,
} from '@elastic/eui';

export default ({
  formState,
  onFormChange,
  onSubmit
}) => (
  <EuiFlexGroup>
    <EuiFlexItem grow={true}>
      <EuiFormRow label="Username">
        <EuiFieldText
          placeholder="Enter your chess.com username here!"
          value={formState.user}
          onChange={e => onFormChange("user")(e)}
        />
      </EuiFormRow>
    </EuiFlexItem>
    <EuiFlexItem grow={false}>
      <EuiFormRow label="Month">
        <EuiFieldText
          placeholder="MM"
          value={formState.month}
          onChange={e => onFormChange("month")(e)}
        />
      </EuiFormRow>
    </EuiFlexItem>
    <EuiFlexItem grow={false}>
      <EuiFormRow label="Year">
        <EuiFieldText 
          placeholder="YYYY"
          value={formState.year}
          onChange={e => onFormChange("year")(e)}
        />
      </EuiFormRow>
    </EuiFlexItem>
    <EuiFlexItem grow={false}>
      <EuiFormRow hasEmptyLabelSpace>
        <EuiButton onClick={onSubmit}>Submit</EuiButton>
      </EuiFormRow>
    </EuiFlexItem>
  </EuiFlexGroup>
);
