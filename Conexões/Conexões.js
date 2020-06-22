export default class ConexõesSchema {
    static schema = {
        name: "Conexão",
        primaryKey: 'id',
        properties: {
            id: { type: 'int', indexed: true},
            name: 'string',
            rede: 'string',
            ip: 'string'
        }
    }
}