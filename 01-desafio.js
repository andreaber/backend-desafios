class ProductManager {
  #products
  #error
  
  constructor() {
    this.#products = []
    this.#error = undefined
  }
  
  addProduct = (title, description, price, thumbnail, code, stock) => {
    if (!this.#validateFields(title, description, price, thumbnail, code, stock) || !this.#validateCode(code)) {
      console.log(this.#error);
      return;
    }
    
    const newProduct = {
      id: this.#generateId(),
      title,
      description,
      price,
      thumbnail,
      code,
      stock
    }
    
    this.#products.push(newProduct);
  }

  
  getProducts = () => this.#products
  
  getProductById = (id) => {
    const product = this.#products.find(item => item.id === id)
    if (!product) {
      console.log('Producto no encontrado')
      return
    }
    
    return product
  }
  
  #generateId = () => this.#products.length + 1
  
  #validateFields = (title, description, price, thumbnail, code, stock) => {
    if (!title || !description || !price || !thumbnail || !code || !stock) {
      this.#error = `[${title}]: Todos los campos son obligatorios`
      return false
    }
    
    return true
  }
  
  #validateCode = (code) => {
    const found = this.#products.find(item => item.code === code)
    if (found) {
      this.#error = `[${found.title}]: El código del producto ya existe`
      return false
    }
    
    return true
  }
}


const productManager = new ProductManager()
productManager.addProduct(
  "producto A",
  "A es un producto prueba",
  200,
  "https://blog.back4app.com/wp-content/uploads/2021/08/image-94.png",
  "abc120",
  25
)
productManager.addProduct(
  "producto B",
  "B es un producto prueba",
  500,
  "https://blog.back4app.com/wp-content/uploads/2021/08/image-94.png",
  "abc121",
  40
)
productManager.addProduct(
  "producto C",
  "C es un producto prueba",
  300,
  "https://blog.back4app.com/wp-content/uploads/2021/08/image-94.png",
  "abc122",
) // error!! Faltan datos
productManager.addProduct(
  "producto D",
  "D es un producto prueba",
  "https://blog.back4app.com/wp-content/uploads/2021/08/image-94.png",
  "abc123",
  65
) // error!! Faltan datos
productManager.addProduct(
  "producto E",
  "E es un producto prueba",
  800,
  "https://blog.back4app.com/wp-content/uploads/2021/08/image-94.png",
  "abc121",
  51
) // error!! Código repetido
console.log(productManager.getProducts());
console.log(productManager.getProductById(2))
console.log(productManager.getProductById(1))
console.log(productManager.getProductById(7))
console.log('Fin del código')