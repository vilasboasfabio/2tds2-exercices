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
        createProduct();
    }
    getProductById(id){
        return this.products.find((product) => product.id ==id);

    }
   
}

const categoryList = new CategoryService();
const productsList = new  ProductService();
function createCategory(){
    const categoryName = 'Candies';
    const categoryName2 = 'Shoes';
    const categoryName3 = 'Books';

    categoryList.addCategory(categoryName2)
    categoryList.addCategory(categoryName3)
    categoryList.addCategory(categoryName)
   // console.log(categoryList.categories)

}
function createProduct(){
    const productName1 = "Lindt"
    const productPrice1 = 30;
    const productCategory1 = categoryList.categories[1];

    const productName2 = "Sneaker"
    const productPrice2 = 30;
    const productCategory2 = categoryList.categories[2];

    const productName3 = "Red, White and Royal Blue"
    const productPrice3 = 30;
    const productCategory3 = categoryList.categories[3];

    productsList.addProduct(productName1, productPrice1, productCategory1 )
    productsList.addProduct(productName2, productPrice2, productCategory2 )
    productsList.addProduct(productName3, productPrice3, productCategory3 )
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

function findProduct(id){
    const product = productsList.getProductById(id);

    console.log(product);
}