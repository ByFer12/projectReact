export const moneyFormat=amount=>{
    return amount.toLocaleString('es-GT',{
        style:'currency',
        currency: 'GTQ'
    })
}