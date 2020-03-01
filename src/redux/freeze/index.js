import { handleActions, createActions } from 'redux-actions';

import initialState, * as handlers from './handlers';

export const actions = createActions({
  HELP_PAGE: undefined,
  FIRST_STEP: undefined,
  SECOND_STEP: undefined,
  THIRD_STEP: undefined,
  FOURTH_STEP: undefined,
  WARNING_VIEW: undefined,
  FREEZE_ACCOUNT: undefined,
  FIFTH_STEP: undefined,
  SIX_STEP: undefined,
  FINISHED: undefined,
  SEND_COSTUMER_INFO: undefined,
  GET_ACCOUNTS: undefined,
  CANCEL_MEMBERSHIP: undefined,
  SEND_UPDATED_FIELDS: undefined,
  FREEZE_MEMBERSHIP: undefined,
  GET_NEXT_PAYMENT_DATE: undefined,
  SEND_COSTUMER_ERROR: undefined,
  UNFREEZE_MEMBERSHIP: undefined,
  FREEZE_TO_CALCULATE: undefined,
  PAY_CANCEL_MEMBERSHIP: undefined,
  CARD_DETAILS: undefined,
  ADYEN_METHODS_SUCCESS: undefined,
  ADYEN_METHODS_FAILURE: undefined,
  UPDATE_CARD_DETAILS: undefined,
  UPDATE_CARD_DETAILS_SUCCESS: undefined, 
  UPDATE_CARD_DETAILS_FAILURE: undefined,
});

const freezeReducer = handleActions(
  new Map([
    [actions.helpPage, handlers.helpPage],
    [actions.firstStep, handlers.firstStep],
    [actions.secondStep, handlers.secondStep],
    [actions.thirdStep, handlers.thirdStep],
    [actions.fourthStep, handlers.fourthStep],
    [actions.warningView, handlers.warningView],
    [actions.freezeAccount, handlers.freezeAccount],
    [actions.fifthStep, handlers.fifthStep],
    [actions.sixStep, handlers.sixStep],
    [actions.finished, handlers.finished],
    [actions.sendCostumerInfo, handlers.sendCostumerInfo],
    [actions.getAccounts, handlers.getAccounts],
    [actions.cancelMembership, handlers.cancelMembership],
    [actions.sendUpdatedFields, handlers.sendUpdatedFields],
    [actions.freezeMembership, handlers.freezeMembership],
    [actions.getNextPaymentDate, handlers.getNextPaymentDate],
    [actions.sendCostumerError, handlers.sendCostumerError],
    [actions.unfreezeMembership, handlers.unfreezeMembership],
    [actions.freezeToCalculate, handlers.freezeToCalculate],
    [actions.payCancelMembership, handlers.payCancelMembership],
    [actions.cardDetails, handlers.cardDetails],
    [actions.adyenMethodsSuccess, handlers.adyenMethodsSuccess],
    [actions.adyenMethodsFailure, handlers.adyenMethodsFailure],
    [actions.updateCardDetails, handlers.updateCardDetails],
    [actions.updateCardDetailsSuccess, handlers.updateCardDetailsSuccess],
    [actions.updateCardDetailsFailure, handlers.updateCardDetailsFailure],
  ]),
  initialState
);

export default freezeReducer;
