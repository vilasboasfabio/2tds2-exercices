class Category{
    constructor(id,name){
        this.id= id;
        this.name= name;
        this.products= [];
    }
}

class Product{
    constructor(id, name, price, category){
        this.id=id;
        this.name=name;
        this.price=price;
        this.category=category;
    }
}
class CategoryService{
    constructor(){
        this.categories= [];
        this.nextCategoryId= 1;
    }
//CREUD =>
// C => create
    addCategory(name){
        const id= this.nextCategoryId;
        this.nextCategoryId ++;

        const category = new Category(id, name);
        this.categories.push(category);
    }

    //R=> read
    getCategoryCategoryById(id){
        return this.categories.find((category)=> category.id == id );
    }

    //U=> update
    UpdateCategory(id, name){
        const category= this.getCategoryCategoryById(id);
        category.name= name;
    }

    //D=> delet
    deleteCategory(id){
        const category= this.getCategoryCategoryById(id);
        const index= this.categories.indexOf(category);

        this.categories.splice(index, 1);
    }
}



    class ProductService{
        constructor() {
            this.products=[];
            this.nextProductiId= 1;
    }

    addProduct(name, price, category){
        const id= this.nextProductiId;
        this.nextProductiId++;

        const product = new Product(id,name, price, category);
        this.products.push(product);
        category.products.push(product);
    }
    //R=> read
    getProductById(id){
        return this.products.find((product)=> product.id == id );
    }

}
const categoriesList = new CategoryService();
const procutsList= new ProductService();

function createCategory(){
    const categoryName= "Candies";
    const categoryName1= "Shoes";
    const categoryName2= "Book";

    categoriesList.addCategory(categoryName);
    categoriesList.addCategory(categoryName1);
    categoriesList.addCategory(categoryName2);

    //console.log(categorieslist.categories);
    console.log("Categorias criadas!");
}

// C => create
function createProduct(){
    const procutName= "Choco";
    const procutPrice= 0.50;
    const procutCategory =categoriesList.categories[0];
    
    const procutName1= "Sneakers";
    const procutPrice1= 100;
    const procutCategory1 =categoriesList.categories[1];
   
    const procutName2= "Harry Potter";
    const procutPrice2= 50;
    const procutCategory2 =categoriesList.categories[2];

    procutsList.addProduct(procutName,procutPrice,procutCategory);
    procutsList.addProduct(procutName1,procutPrice1,procutCategory1);
    procutsList.addProduct(procutName2,procutPrice2,procutCategory2);

    console.log(procutsList.products);
}

 //R=> read
function findCategory(id){
    const category= categoriesList.getCategoryCategoryById(id);

    console.log(category.name);
}

//U=> update
function editCategory(id,name){
    categoriesList.UpdateCategory(id,name);

    console.log(categoriesList.categories);
}

//D=> delet
function deleteCategory(id){
    categoriesList.deleteCategory(id);

    console.log(categoriesList.categories);
}

function findProductById(id){
    const product= procutsList.getProductById(id);

    console.log(product);
}

