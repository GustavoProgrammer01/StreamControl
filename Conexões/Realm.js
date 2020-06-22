import Realm from 'realm';

import ConexõesSchema from './Conexões.js'

export default function getRealm(){
    return Realm.open({
        schema: [ConexõesSchema],   
    });
}