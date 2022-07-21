import * as React from "react";
import { connect } from "react-redux";
import { IReduxToggleMessageAction, toggleMessage } from "../action/actions";
import { Dispatch, bindActionCreators } from "redux";
import { AppState } from "../reducer/rootReducer";
import StyledMaterialButton from "../../styledComponents/button/button";



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
