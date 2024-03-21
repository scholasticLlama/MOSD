import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';

function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState('');

  return (
    <View style={{ marginTop: 34 }}>
      <SearchBar filterText={filterText} onFilterTextChange={setFilterText}/>
      <ProductTable products={products} filterText={filterText}/>
    </View>
  );
}

function ProductRow({ product }) {
  return (
    <View style={{ flexDirection: 'row' }}>
      <Text>{product.name}</Text>
      <Text>{product.price}</Text>
    </View>
  );
}

function ProductTable({ products, filterText }) {
  const rows = [];

  products.forEach((product) => {
    if ( product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1 ) {
      return;
    }
    rows.push(<ProductRow product={product} key={product.name} />);
  });

  return (
    <ScrollView>
      {rows}
    </ScrollView>
  );
}

function SearchBar({ filterText, onFilterTextChange }) {
  return (
    <View>
      <TextInput 
        style={{ borderWidth: 1, borderColor: 'black', paddingHorizontal: 10, marginBottom: 10 }}
        value={filterText} 
        placeholder="Search..." 
        onChangeText={(text) => onFilterTextChange(text)} />
    </View>
  );
}

const PRODUCTS = [
  {category: "Fruits", price: "$1", name: "Apple"},
  {category: "Fruits", price: "$1", name: "Dragonfruit"},
  {category: "Fruits", price: "$2", name: "Passionfruit"},
  {category: "Vegetables", price: "$2", name: "Spinach"},
  {category: "Vegetables", price: "$4", name: "Pumpkin"},
  {category: "Vegetables", price: "$1", name: "Peas"}
];

export default function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}