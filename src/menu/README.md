const menuItemElements = document.getElementsByClassName("menu-item");
const menuItems = [];
for(var item of menuItemElements) menuItems.push({
  name: item.getElementsByTagName("h5")[0].textContent,
  price: item.getElementsByClassName("menu-price")[0]?.textContent,
  description: item.getElementsByTagName("p")[0]?.textContent
});
JSON.stringify(menuItems);
