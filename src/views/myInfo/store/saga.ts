import myInfoApi from "api/myInfo.api";
import { bindAsyncActions } from "helpers";
import { toast } from "react-toastify";
import { put, takeEvery } from "redux-saga/effects";
import { MyinfoActions } from "./action";

export function* myInfoSaga() {
  yield takeEvery(MyinfoActions.getInfo, bindAsyncActions(MyinfoActions.getInfoAsync)(myInfoApi.getInfo));

  // update users info
  yield takeEvery(MyinfoActions.updateInfo, bindAsyncActions(MyinfoActions.updateInfoAsync)(myInfoApi.updateInfo));

  // get users bank info
  yield takeEvery(MyinfoActions.getBankInfo, bindAsyncActions(MyinfoActions.getBankInfoAsync)(myInfoApi.getBankInfo));

  // update user bank info
  yield takeEvery(
    MyinfoActions.updateBankInfo,
    bindAsyncActions(MyinfoActions.updateBankInfoAsync)(myInfoApi.updateBankInfo)
  );

  // get users customs warehouses info
  yield takeEvery(
    MyinfoActions.getWarehouses,
    bindAsyncActions(MyinfoActions.getWarehousesAsync)(myInfoApi.getCustomsWarehouses)
  );

  // get user contacts
  yield takeEvery(
    MyinfoActions.getUserContacts,
    bindAsyncActions(MyinfoActions.getUserContactsAsync)(myInfoApi.getUserContacts)
  );

  // send user number
  yield takeEvery(
    MyinfoActions.sendUserNumber,
    bindAsyncActions(MyinfoActions.sendUserNumberAsync)(myInfoApi.sendNumber)
  );

  // send user number code
  yield takeEvery(
    MyinfoActions.sendNumberCode,
    bindAsyncActions(MyinfoActions.sendNumberCodeAsync)(myInfoApi.sendNumberCode)
  );

  // send user email
  yield takeEvery(MyinfoActions.sendUserEmail, bindAsyncActions(MyinfoActions.sendUserEmailAsync)(myInfoApi.sendEmail));

  // send user number code
  yield takeEvery(
    MyinfoActions.sendUserEmailCode,
    bindAsyncActions(MyinfoActions.sendUserEmailCodeAsync)(myInfoApi.sendEmailCode)
  );

  // remove user number
  yield takeEvery(
    MyinfoActions.removeNumber,
    bindAsyncActions(MyinfoActions.removeNumberAsync)(myInfoApi.removeNumber)
  );

  // remove user email
  yield takeEvery(MyinfoActions.removeEmail, bindAsyncActions(MyinfoActions.removeEmailAsync)(myInfoApi.removeEmail));

  // toggle user number activity
  yield takeEvery(
    MyinfoActions.toggleNumberActivity,
    bindAsyncActions(MyinfoActions.toggleNumberActivityAsync)(myInfoApi.toggleNumberActivity)
  );

  // toggle user email activity
  yield takeEvery(
    MyinfoActions.toggleEmailActivity,
    bindAsyncActions(MyinfoActions.toggleEmailActivityAsync)(myInfoApi.toggleEmailActivity)
  );

  yield takeEvery(MyinfoActions.updateInfoAsync.success, getInfoFlow);
  yield takeEvery(MyinfoActions.updateInfoAsync.success, updateInfoFlow);
  yield takeEvery(MyinfoActions.updateBankInfoAsync.success, getBankInfoFlow);
  yield takeEvery(MyinfoActions.updateBankInfoAsync.success, bankUpdatedFlow);
  yield takeEvery(MyinfoActions.removeNumberAsync.success, numberRemovedFlow);
  yield takeEvery(MyinfoActions.sendNumberCodeAsync.success, sendNumberFlow);
  yield takeEvery(MyinfoActions.removeEmailAsync.success, emailRemovedFlow);
  yield takeEvery(MyinfoActions.sendUserEmailCodeAsync.success, sendEmailFlow);

  yield takeEvery(
    [
      MyinfoActions.removeNumberAsync.success,
      MyinfoActions.toggleNumberActivityAsync.success,
      MyinfoActions.toggleEmailActivityAsync.success,
      MyinfoActions.sendNumberCodeAsync.success,
      MyinfoActions.sendUserEmailCodeAsync.success,
      MyinfoActions.removeEmailAsync.success,
    ],
    getContactsFlow
  );

  yield takeEvery(
    [MyinfoActions.toggleEmailActivityAsync.success, MyinfoActions.toggleNumberActivityAsync.success],
    changeStatusFlow
  );

  yield takeEvery([MyinfoActions.getInfoAsync.failed, MyinfoActions.updateBankInfoAsync.failed], internetErrorFlow);
  yield takeEvery(MyinfoActions.sendNumberCodeAsync.failed, sendNumberFail);
  yield takeEvery(MyinfoActions.updateInfoAsync.failed, updateInfoFailFlow);
}

function* getInfoFlow() {
  yield put(MyinfoActions.getInfo());
}

function* getContactsFlow() {
  yield put(MyinfoActions.getUserContacts());
}

function* getBankInfoFlow() {
  yield put(MyinfoActions.getBankInfo());
}

const updateInfoFlow = () => {
  toast.success("melumatlariniz yenilendi");
};

const updateInfoFailFlow = ({ payload }: any) => {
  toast.info(payload.response?.data);
};

const bankUpdatedFlow = () => {
  toast.success("Bank məlumatlarınız yeniləndi");
};

const sendNumberFlow = () => {
  toast.success("Nomreniz elave edildi");
};

const sendEmailFlow = () => {
  toast.success("Emailiniz elave edildi");
};

const numberRemovedFlow = () => {
  toast.success("Nomreniz silindi");
};

const emailRemovedFlow = () => {
  toast.success("Email unvaniniz silindi");
};

const changeStatusFlow = () => {
  toast.success("Activlik statusu yenilendi");
};

const sendNumberFail = ({ payload }: any) => {
  if (payload.response.status === 400) {
    toast.error(payload.response.data);
  }
};

function internetErrorFlow(payload: any) {
  toast.error("Bazayla əlaqə alınmadı");
}
