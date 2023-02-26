/* tslint:disable */
/* eslint-disable */
/**
 * Pinecone API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: version not set
 * Contact: support@pinecone.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface CollectionMeta
 */
export interface CollectionMeta {
    /**
     * 
     * @type {string}
     * @memberof CollectionMeta
     */
    name?: string;
    /**
     * The size of the collection in bytes.
     * @type {number}
     * @memberof CollectionMeta
     */
    size?: number;
    /**
     * The status of the collection.
     * @type {string}
     * @memberof CollectionMeta
     */
    status?: string;
}

/**
 * Check if a given object implements the CollectionMeta interface.
 */
export function instanceOfCollectionMeta(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CollectionMetaFromJSON(json: any): CollectionMeta {
    return CollectionMetaFromJSONTyped(json, false);
}

export function CollectionMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): CollectionMeta {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'size': !exists(json, 'size') ? undefined : json['size'],
        'status': !exists(json, 'status') ? undefined : json['status'],
    };
}

export function CollectionMetaToJSON(value?: CollectionMeta | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'size': value.size,
        'status': value.status,
    };
}
