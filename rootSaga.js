import { all } from '@redux-saga/core/effects';
import { fetchOrganizationWatch } from 'redux/organization/organization.saga';
import { fetchInitialCategoryWatch } from 'redux/category/category.saga';
import { fetchAllCategoryWatch } from 'redux/category/category.saga';
import { fetchProductListWatch, fetchProductListByFiltersWatch, fetchProductListBySearchWatch } from 'redux/productList/productList.saga';
import { fetchUserDetailWatch } from 'redux/userLogin/userLogin.saga';
import { postUserDetailWatch, fetchCountriesWatch, fetchIntrestedAsWatch } from 'redux/userSignup/userSignup.saga';
import { postEmailVerificationWatch } from 'redux/emailSendVerification/emailSendVerification.saga';
import { postEmailVerifyWatch } from 'redux/emailSendVerification/emailVerify.saga';
import { postForgotPasswordWatch } from 'redux/userForgotPassword/userForgot.saga';
import {
    fetchProductDetailsWatch,
    fetchProductMakeWatch,
    fetchProductSpecificationWatch
} from 'redux/product/product.saga';
import { fetchUserListWatch, fetchAddUserWatch, fetchUpdateUserWatch, fetchDeleteUserWatch } from 'redux/users/userList.saga';
import {
    fetchAdminDetailWatch,
    adminForgotpasswordWatch,
    fetchUserCountriesWatch,
    adminResetPasswordWatch
} from 'redux/adminLogin/adminLogin.saga';
import {
    fetchAddGroupWatch,
    fetchUpdateGroupWatch,
    fetchDeleteGroupWatch,
    fetchGroupListWatch,
    fetchAddFilterLabelWatch,
    fetchUpdateFilterLabelWatch,
    fetchDeleteFilterLabelWatch,

} from 'redux/adminGroups/groupList.saga';
import {
    fetchSpecificationListWatch,
    fetchAddSpecificationWatch,
    fetchUpdateSpecificationWatch,
    fetchDeleteSpecificationWatch
} from 'redux/specificationList/specificationList.saga';
import { fetchPostOrganizationWatch, fetchGetFilterLabelWatch } from 'redux/cataloguesettings/cataloguesettings.saga';
import { fetchProductPageListWatch, fetchUpdateProductWatch } from 'redux/productPageList/productPageList.saga';
import { fetchAddFilterValuesWatch, fetchUpdateFilterValuesWatch, fetchDeleteFilterValuesWatch } from 'redux/filterValues/filterValues.saga';
import { fetchAddPartWatch, fetchUpdatePartWatch, fetchDeletePartWatch, fetchPartListWatch } from 'redux/adminPartDetails/partDetailsList.saga';
import { fetchPartWatch } from 'redux/part/part.saga';
import { fetchPartFilterListWatch } from 'redux/adminPartFilters/partFiltersList.saga';
import { fetchPartTemplateWatch, fetchBulkUploadWatch } from 'redux/bulkupload/bulkupload.saga';
import { fetchAddIndependentFilterWatch, fetchUpdateIndependentFilterWatch, fetchDeleteIndependentFilterWatch } from 'redux/IndependentFilter/IndependentFilter.saga';
import { fetchAddIndependentFilterLabelWatch, fetchUpdateIndependentFilterLabelWatch, fetchDeleteIndependentFilterLabelWatch } from 'redux/IndependentFilter/IndependentFilterLabel.saga';
import { fetchIndependentPartFilterListWatch } from 'redux/adminIndependentFilter/adminIndependentFilter.saga';
import { updatefilterStackWatch, updateDraggablefilterStackWatch } from 'redux/filterStack/filterStack.saga';

export default function* rootSaga() {
    yield all([
        fetchOrganizationWatch(),
        fetchInitialCategoryWatch(),
        fetchAllCategoryWatch(),
        fetchProductListWatch(),
        fetchProductListByFiltersWatch(),
        fetchProductListBySearchWatch(),
        fetchUserDetailWatch(),
        postUserDetailWatch(),
        postEmailVerificationWatch(),
        postEmailVerifyWatch(),
        fetchCountriesWatch(),
        fetchIntrestedAsWatch(),
        postForgotPasswordWatch(),
        fetchProductDetailsWatch(),
        fetchProductMakeWatch(),
        fetchProductSpecificationWatch(),
        fetchAddUserWatch(),
        fetchUpdateUserWatch(),
        fetchDeleteUserWatch(),
        fetchUserListWatch(),
        fetchAdminDetailWatch(),
        adminForgotpasswordWatch(),
        fetchUserCountriesWatch(),
        adminResetPasswordWatch(),
        fetchPostOrganizationWatch(),
        fetchAddGroupWatch(),
        fetchUpdateGroupWatch(),
        fetchDeleteGroupWatch(),
        fetchGroupListWatch(),
        fetchGetFilterLabelWatch(),
        fetchAddFilterLabelWatch(),
        fetchUpdateFilterLabelWatch(),
        fetchDeleteFilterLabelWatch(),
        fetchProductPageListWatch(),
        fetchUpdateProductWatch(),
        fetchSpecificationListWatch(),
        fetchAddFilterValuesWatch(),
        fetchUpdateFilterValuesWatch(),
        fetchDeleteFilterValuesWatch(),
        fetchAddPartWatch(),
        fetchUpdatePartWatch(),
        fetchDeletePartWatch(),
        fetchPartListWatch(),
        fetchAddSpecificationWatch(),
        fetchUpdateSpecificationWatch(),
        fetchDeleteSpecificationWatch(),
        fetchPartWatch(),
        fetchPartFilterListWatch(),
        fetchPartTemplateWatch(),
        fetchBulkUploadWatch(),
        fetchAddIndependentFilterWatch(),
        fetchUpdateIndependentFilterWatch(),
        fetchDeleteIndependentFilterWatch(),
        fetchAddIndependentFilterLabelWatch(),
        fetchUpdateIndependentFilterLabelWatch(),
        fetchDeleteIndependentFilterLabelWatch(),
        fetchIndependentPartFilterListWatch(),
        updatefilterStackWatch(),
        updateDraggablefilterStackWatch()
    ]);
}