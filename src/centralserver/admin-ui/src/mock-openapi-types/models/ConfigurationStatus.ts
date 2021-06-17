/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * configuration status
 */
export enum ConfigurationStatus {
    SUCCESS = 'SUCCESS',
    ERROR_CODE_INTERNAL = 'ERROR_CODE_INTERNAL',
    ERROR_CODE_INVALID_SIGNATURE_VALUE = 'ERROR_CODE_INVALID_SIGNATURE_VALUE',
    ERROR_CODE_EXPIRED_CONF = 'ERROR_CODE_EXPIRED_CONF',
    ERROR_CODE_CANNOT_DOWNLOAD_CONF = 'ERROR_CODE_CANNOT_DOWNLOAD_CONF',
    ERROR_CODE_MISSING_PRIVATE_PARAMS = 'ERROR_CODE_MISSING_PRIVATE_PARAMS',
    ERROR_CODE_UNINITIALIZED = 'ERROR_CODE_UNINITIALIZED',
    UNKNOWN = 'UNKNOWN',
}