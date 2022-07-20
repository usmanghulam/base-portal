import * as React from "react";
import { connect } from "react-redux";
import { IReduxToggleMessageAction, toggleMessage } from "./actions";
import { Dispatch, bindActionCreators } from "redux";
import { AppState } from "./rootReducer";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

const StyledMaterialButton  = styled(Button)`
  background-color: ${props => props.theme.colors.secondary};
  color: white;
  &:hover {
    background-color: grey;
    color: #343e3d;
  }
`;

const Toggle: React.FC<ToggleProps> = ({
  messageVisibility,
  toggleMessage
}) => (
  <div>
    <StyledMaterialButton onClick={toggleMessage}>Toggle</StyledMaterialButton>
    {messageVisibility && <p>Toggled content</p>}
  </div>
);

const mapStateToProps = (state: AppState) => ({
  messageVisibility: state.showMessage
});

const mapDispatchToProps = (dispatch: Dispatch<IReduxToggleMessageAction>) =>
  bindActionCreators({ toggleMessage }, dispatch);

type ToggleProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Toggle);
