export default class Produto{
    constructor(data){
        this.id = data.id
        this.name = data.name
        this.description = data.description
        this.image_source = data.image_source
        this.price = data.price
        this.off = data.off
        this.category = data.category
        this.disponivel = data.disponivel
    }
    newPrice(){ return (this.price - (this.price / 100 * this.off)) }
}