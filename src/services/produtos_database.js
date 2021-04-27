import Produto from '../model/produto'

export default {
    getProducts(){
        return [
            new Produto({id: 1, name: 'Camisa branca 1', description: '100% Seda\n101% de conforto', image_source: require('../imgs/roupa-branca.jpg'), price: 100.00, off: 10.0, category: 'masc', disponivel: 'Disponível em todos os tamanhos'}),
            new Produto({id: 2, name: 'Camisa branca 2', description: '100% Seda\n101% de conforto', image_source: require('../imgs/roupa-branca-fem.jpg'), price: 120.00, off: 20.0, category: 'fem', disponivel: 'Disponível em todos os tamanhos'}),
            new Produto({id: 3, name: 'Camisa branca 3', description: '100% Seda\n101% de conforto', image_source: require('../imgs/roupa-branca-fem.jpg'), price: 200.00, off: 25.0, category: 'fem', disponivel: 'Disponível em todos os tamanhos'}),
            new Produto({id: 4, name: 'Camisa branca 4', description: '100% Seda\n101% de conforto', image_source: require('../imgs/roupa-branca.jpg'), price: 100.00, off: 0.0, category: 'juv', disponivel: 'Disponível em todos os tamanhos'}),
            new Produto({id: 5, name: 'Camisa branca 5', description: '100% Seda\n101% de conforto', image_source: require('../imgs/roupa-branca-fem.jpg'), price: 300.00, off: 50.0, category: 'fem', disponivel: 'Disponível em todos os tamanhos'}),
        ] //BANCO DE DADOS
    },
    getProductById(id){
        var product_result = null
        this.getProducts().forEach(product => {
            if(product.id == id)
                product_result = product
        });
        return product_result
    },
    getProductsByCategory(category){
        var produtos = []
        this.getProducts().forEach(produto => {
            if(produto.category.toLowerCase() == category.toLowerCase())
                produtos.push(produto)
        })
        return produtos
    },
    getProductsByName(name){
        var produtos = []
        this.getProducts().forEach(produto => {
            if(produto.name.toLowerCase().includes(name.toLowerCase()))
                produtos.push(produto)
        })
        return produtos
    }
}