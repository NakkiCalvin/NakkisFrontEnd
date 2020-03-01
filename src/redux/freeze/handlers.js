const person = sessionStorage.getItem('Account');
const personToSend = sessionStorage.getItem('AccountSend');
const finishStatus = sessionStorage.getItem('FinishStatus');
const accounts = sessionStorage.getItem('AccountArray');
const calculatedResponse = sessionStorage.getItem('CalculatedResponse');
const paymentMethods = sessionStorage.getItem('paymentMethods');
const nextPaymentDate = sessionStorage.getItem('nextDate');
const accountFields = sessionStorage.getItem('accountFields');
const adyenMethods = sessionStorage.getItem('adyenMethods');

const initialState = {
  costumer: true,
  status: false,
  helpView: false,
  successStep: false,
  firstStep: false,
  loadingManageMembership: false,
  loadingVerificationCodeSend: false,
  loadingUpdateCard: false,
  loadingUpdateCardPage: false,
  freezeLoading: false,
  cancelLoading: false,
  secondStep: false,
  thirdStep: false,
  fourthStep: false,
  fifthStep: false,
  warningView: false,
  sixStep: false,
  action: '',
  accountFields: accountFields === null ? null : JSON.parse(accountFields),
  person: person === null ? null : JSON.parse(person),
  personToSend: personToSend === null ? null : JSON.parse(personToSend),
  finishStatus: finishStatus === null ? null : JSON.parse(finishStatus),
  finished: false,
  resultInfo: '',
  accounts: accounts === null ? null : JSON.parse(accounts),
  calculatedResponse: calculatedResponse === null ? null : JSON.parse(calculatedResponse),
  paymentMethods: paymentMethods === null ? null : JSON.parse(paymentMethods),
  nextPaymentDate: nextPaymentDate === null ? null : nextPaymentDate,
  updateAccountError: '',
  adyenMethods: adyenMethods === null ? null : JSON.parse(adyenMethods),
  updateCardResult: '',  
  updateCardError: '',
};

export const updateCardDetailsFailure = (state, action) => {
  return { ...state, updateCardError: action.payload, loadingUpdateCard: false };
};

export const updateCardDetailsSuccess = (state, action) => {
  return { ...state, updateCardResult: action.payload , loadingUpdateCard: false };
};

export const updateCardDetails = (state, action) => {
  return {...state, loadingUpdateCard: true};
};

export const adyenMethodsSuccess = (state, action) => {
  sessionStorage.setItem('adyenMethods', JSON.stringify(action.payload));
  return { ...state, adyenMethods: action.payload, loadingUpdateCardPage: false };
};

export const adyenMethodsFailure = (state, action) => {
  return { ...state, adyenMethods: action.payload, loadingUpdateCardPage: false };
};

export const getNextPaymentDate = (state, action) => {
  sessionStorage.setItem('nextDate', action.payload);
  return { ...state, nextPaymentDate: action.payload };
};

export const finished = state => {
  return { ...state, finished: true };
};

export const helpPage = state => {
  return { ...state, helpView: true };
};

export const firstStep = (state, action) => {
  sessionStorage.setItem('accountFields', JSON.stringify(action.payload));
  return { ...state, accountFields: action.payload, costumer: true, loadingManageMembership: true  };
};

export const payCancelMembership = state => {
  return state;
};

export const cancelMembership = state => {
  return { ...state, cancelLoading: true,  };
};

export const freezeToCalculate = state => {
  return { ...state, freezeLoading: true };
};

export const freezeMembership = state => {
  return state;
};

export const unfreezeMembership = state => {
  return state;
};

export const sendUpdatedFields = (state, action) => {
  return { ...state, calculatedResponse: action.payload, cancelLoading: false, freezeLoading: false, warningView: false };
};

export const sendCostumerError = state => {
  return { ...state, costumer: false, loadingManageMembership: false };
};

export const sendCostumerInfo = (state, action) => {
  return {
    ...state,
    helpView: false,
    firstStep: true,
    resultInfo: action.payload,
    status: true,
    loadingManageMembership: false,
  };
};

export const secondStep = (state) => {
  return {
    ...state,
    secondStep: true,
    loadingVerificationCodeSend: true
  };
};

export const getAccounts = (state, action) => {
  return { ...state, accounts: action.payload, costumer: true, loadingVerificationCodeSend: false };
};

export const thirdStep = (state, action) => {
  sessionStorage.setItem('Account', JSON.stringify(action.payload));
  return { ...state, thirdStep: true, person: action.payload, costumer: true, loadingVerificationCodeSend: false };
};

export const fourthStep = state => {
  return { ...state, fourthStep: true };
};

export const warningView = state => {
  return { ...state, warningView: !state.warningView };
};

export const freezeAccount = state => {
  return { ...state, finishStatus: 'frozen' };
};

export const fifthStep = (state, action) => {
  sessionStorage.setItem('FinishStatus', JSON.stringify(action.payload));
  return { ...state, fifthStep: true, finishStatus: action.payload };
};

export const sixStep = state => {
  return { ...state, sixStep: true };
};

export const cardDetails = state => {
  return { ...state, loadingUpdateCardPage: true};
};

export default initialState;
