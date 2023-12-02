import createSagaMiddleware, { END } from '@redux-saga/core';
import { configureStore, MiddlewareArray } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';
import { initialOrganizationState } from 'redux/organization/organization.slice';
import { initialCategoryState } from 'redux/category/category.slice';
import { initialProductListState } from 'redux/productList/productList.slice';
import { initialUserLoginState } from 'redux/userLogin/userLogin.slice';
import { initialUserSignupState } from 'redux/userSignup/userSignup.slice';
import { initialUserForgotPasswordState } from 'redux/userForgotPassword/userForgot.slice';
import { initialUserListState } from 'redux/users/userList.slice';
import { initialAdminLoginState } from 'redux/adminLogin/adminLogin.slice';
import { initialCatalogueSettingState } from 'redux/cataloguesettings/cataloguesettings.slice';
import { initialGroupListState } from 'redux/adminGroups/groupList.slice';
import { initialProductPageListState } from 'redux/productPageList/productPageList.slice';
import { initialPartListState } from 'redux/adminPartDetails/partDetailsList.slice'
import { initialPartState } from 'redux/part/part.slice';
import { initialPartFitlerState } from 'redux/adminPartFilters/partFiltersList.slice';
import { initialIndependentFilterState } from 'redux/IndependentFilter/IndependentFilter.slice';
import { initialIndependentFilterLabelState } from 'redux/IndependentFilter/IndependentFilterLabel.slice';
import { initialfilterStackState } from 'redux/filterStack/filterStack.slice';

const initialState = {
  organizationDetail: initialOrganizationState,
  categories: initialCategoryState,
  productList: initialProductListState,
  userLogin: initialUserLoginState,
  userSignup: initialUserSignupState,
  userForgotPassword:initialUserForgotPasswordState,
  userData: initialUserListState,
  adminLogin : initialAdminLoginState,
  organizationUpdateStatus: initialCatalogueSettingState,
  groupData:initialGroupListState,
  productData: initialProductPageListState,
  partData: initialPartListState,
  part:initialPartState,
  partFilterData: initialPartFitlerState,
  independentFilter:initialIndependentFilterState,
  independentFilterLabel:initialIndependentFilterLabelState,
  filterStack:initialfilterStackState
};

let store;

export default function configureAppStore() {
  const sagaMiddleware = createSagaMiddleware();

  store = configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
    middleware: new MiddlewareArray().concat(sagaMiddleware),
    devTools: !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
  });

  sagaMiddleware.run(rootSaga);
  store.close = () => store.dispatch(END);
  return store;
}

export { store };
