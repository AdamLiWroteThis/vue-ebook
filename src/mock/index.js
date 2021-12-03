import Mock from "mockjs";
import home from "./bookHome";
import shelf from "./bookShelf";
// import details from "./bookDetails";
import list from "./bookList";
import flatList from "./bookFlatList";

Mock.mock(/\/book\/home/, "get", home);
Mock.mock(/\/book\/shelf/, "get", shelf);
Mock.mock(/\/book\/list/, "get", list);
// Mock.mock(/\/book\/detail/, "get", details);
Mock.mock(/\/book\/flat-list/, "get", flatList);
