// each category haves a lot of products
// each product haves one categiory

class Category{
    constructor(id, name){
        this.id = id;
        this.name = name;
        thid.products = []
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
}
const categoryList = new CategoryService();
function createCategory(){

}