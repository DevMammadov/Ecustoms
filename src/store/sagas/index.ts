import { REHYDRATE } from 'redux-persist';
import { all, take } from 'redux-saga/effects';
import { cardsSaga } from 'views/cards/sotre/saga';
import { permissionsSaga } from 'views/giving-permissions/store/saga';
import { loginSaga } from 'views/login/store/saga';
import { myInfoSaga } from 'views/myInfo/store/saga';
import { xifDocsSaga } from 'views/xif-docs/store/saga';
import { notifySaga } from 'views/notifications/store/saga';

export default function* rootSaga() {
  yield take(REHYDRATE);
  yield all([cardsSaga(), myInfoSaga(), loginSaga(), permissionsSaga(), xifDocsSaga(), notifySaga()]);
}
