class Client {
  static count = 0;

  constructor(lastName, firstName) {
    this.id = ++Client.count;
    this.lastName = lastName;
    this.firstName = firstName;
    this.cart = [];
  }

  removeProduct(product) {
    const prodCherche =
      this.cart.find((p) => p.product.id === product.id) ?? null;

    if (prodCherche) {
      prodCherche.quantity -= 1;
    }
  }

  addProduct(product) {
    if (!this.cart.find((p) => p.product.id === product.id)) {
      this.cart.push({
        product,
        quantity: 1,
      });
    } else {
      const found = this.cart.find((p) => p.product === product);
      if (found) found.quantity += 1;
    }
  }
  updateStock() {
    for (const { product, quantity } of this.cart) {
      product.stock -= quantity;
    }
  }
  order() {
    let somme = 0;
    for (const orderItem of this.cart) {
      somme += orderItem.product.prix * orderItem.quantity;
    }
    // const laSommeReduce = this.cart.reduce((sum, el) => sum + el.product.prix * el.quantity);
    if (
      confirm(
        `Votre somme totale à régler s'élève à ${
          Math.round(somme * 100) / 100
        } €`
      )
    ) {
      this.updateStock();
      this.cart = [];
      return "Merci pour votre achat !";
    } else return "Il y a eu un problème avec votre paiement...";
  }
}

export default Client;

// const orderItem = {
//   product: product,
//   quatity: quantity
// };
// la meme chose => this.cart.push({ product, quantity })

// const prodFound = this.cart.find(p.product === product)
// if (prodFound) prodFound.quantity += quantity

// la meme chose =>  this.cart.find((p) => p.product === product)?.quantity += quantity

// const prod =  orderItem.product;
// const quat = orderItem.quantity;
// la meme chose => const { product, quantity } = orderItem;
