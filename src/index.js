import shoppingList from './shopping-list';

const main = function () {
  shoppingList.bindEventListeners();
  shoppingList.render();
};



$(main);

import $ from 'jquery';
import './index.css';