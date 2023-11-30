import { combineReducers } from '@reduxjs/toolkit';
import organizationReducer from 'redux/organization/organization.slice';
import categoryReducer from 'redux/category/category.slice';
import productListReducer from 'redux/productList/productList.slice';
import loginReducer from 'redux/userLogin/userLogin.slice';
import signupReducer from 'redux/userSignup/userSignup.slice';
import ForgotPasswordReducer from 'redux/userForgotPassword/userForgot.slice';
import productReducer from 'redux/product/product.slice';
import userListReducer from 'redux/users/userList.slice';
import adminLoginReducer from 'redux/adminLogin/adminLogin.slice';
import cataloguesettingReducer from 'redux/cataloguesettings/cataloguesettings.slice';
import GroupListReducer from 'redux/adminGroups/groupList.slice';
import productPageListReducer from 'redux/productPageList/productPageList.slice';
import FilterValuesReducer from 'redux/filterValues/filterValues.slice';
import SpecificationList from 'redux/specificationList/specificationList.slice';
import PartDetailsListReducer from 'redux/adminPartDetails/partDetailsList.slice'
import partReducer from 'redux/part/part.slice';
import PartFiltersListReducer from 'redux/adminPartFilters/partFiltersList.slice';
import bulkuploadSlice from 'redux/bulkupload/bulkupload.slice';
import IndependentFilterReducer from 'redux/IndependentFilter/IndependentFilter.slice';
import IndependentFilterLabelReducer from 'redux/IndependentFilter/IndependentFilterLabel.slice';
import adminIndependentFilterReducer from 'redux/adminIndependentFilter/adminIndependentFilter.slice';
import filterStackReducer from 'redux/filterStack/filterStack.slice';

const rootReducer = combineReducers({
    organizationDetail: organizationReducer,
    categories: categoryReducer,
    productList: productListReducer,
    userLogin:loginReducer,
    userSignup:signupReducer,
    userForgotPassword:ForgotPasswordReducer,
    product: productReducer,
    userData: userListReducer,
    adminLogin : adminLoginReducer,
    organizationUpdateStatus : cataloguesettingReducer,
    groupData: GroupListReducer,
    productData: productPageListReducer,
    filterValues: FilterValuesReducer,
    specificationList: SpecificationList,
    partData: PartDetailsListReducer,
    part:partReducer,
    partFilterData: PartFiltersListReducer,
    bulkUploadData:bulkuploadSlice,
    independentFilter:IndependentFilterReducer,
    independentFilterLabel:IndependentFilterLabelReducer,
    adminPartIndependentFilter:adminIndependentFilterReducer,
    filterStack:filterStackReducer
})

export default rootReducer;