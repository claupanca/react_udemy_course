import { faker } from "@faker-js/faker";

import List from "./List";
import CompanyItem from "./CompanyItem";
import ProductItem from "./ProductItem";

const PRODUCTS = Array.from({ length: 20 }, () => {
  return {
    productTitle: faker.commerce.product(),
    productPrice: faker.commerce.price(),
    productContent: faker.commerce.productDescription(),
    productId: faker.number.int(),
  };
});

const COMPANIES = Array.from({ length: 20 }, () => {
  return {
    companyName: faker.company.name(),
    companyPhrase: faker.company.catchPhrase(),
  };
});

function App() {
  return (
    <div className="container">
      <h1>Render Props Demo</h1>
      <div className="mainContainer">
        <List
          title={"Products"}
          items={PRODUCTS}
          render={(item) => <ProductItem item={item} key={item.productId} />}
        />
        <List
          title={"Company"}
          items={COMPANIES}
          render={(company) => (
            <CompanyItem company={company} key={company.companyId} />
          )}
        />
      </div>
    </div>
  );
}

export default App;
