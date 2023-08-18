// each category haves a lot of products
// each product haves one categiory

class Category{
    constructor(id, name){
        this.id = id;
        this.name = name;
        this.products = []
    }
}
class Product {
    constructor(id, name, price, category){
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

}
class CategoryService {
    constructor(){
        this.categories =[];
        this.nextCategoryId = 1
    }
    addCategory(name){
        const id = this.nextCategoryId;
        this.nextCategoryId++;

        const category = new Category(id, name);
        this.categories.push(category);
    }

    getCategoryById(id){
        return this.categories.find((category)=> category.id == id );
    }
    updateCategory(id, name){
        const category = this.getCategoryById(id);
        category.name = name;
    }
    deleteCategory(id){
        const category = this.getCategoryById(id);
        const index = this.categories.indexOf(category);

        this.categories.splice(index, 1);
    }
}
class ProductService{
    constructor(){
        this.products = [];
        this.nextProductId = 1;
    }
    addProduct(name, price, category){
        const id = this.nextProductId;
        this.nextCategoryId++;

        const product = new Product(id, name, price, category);

        this.products.push(product);
        category.products.push(product);
    }
    getProductById(id){
        return this.products.find((product) => product.id ==id);
    }
   
}

const categoryList = new CategoryService();
const productsList = new  ProductService();
function createCategory(){
    const categoryName = 'Candies';

    categoryList.addCategory(categoryName)
   // console.log(categoryList.categories)

}
function createProduct(){
    const productName = "Lindt";
    const productPrice = 50;
    const productCategory = categoryList.categories[0];

    productsList.addProduct(productName, productPrice, productCategory )
    // console.log(productsList.products)

}
function findCategory(id){
    const category = categoryList.getCategoryById(id);

    console.log(category.name);
}                   
function editCategory(id, name){
    categoryList.updateCategory(id,name);
    console.log(categoryList.categories);
}                                
function deleteCategory(id){
    categoryList.deleteCategory(id);
    console.log(categoryList.categories);
}