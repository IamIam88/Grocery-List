const body = document.querySelector("body")
//create top level headings
const groceryList = document.createElement("div")
body.append(groceryList)
const groceryHeader = document.createElement("h1")
groceryHeader.setAttribute("id", "pantryHeader")
groceryHeader.textContent = "My Very Organized Grocery List"

//pantry
const pantryHeader = document.createElement("h2")
pantryHeader.textContent = "Pantry"
const pantry = document.createElement("div")
pantry.setAttribute("id", "pantry")
pantry.classList.add("parent")
//create children for the pantry


//create and append pantry image
const imgOne = document.createElement("img")
imgOne.setAttribute("src", "https://media.istockphoto.com/id/1212928413/photo/shelf-in-the-kitchen-with-various-cereals-and-seeds-peas-split-sunflower-and-pumpkin-seeds.webp?b=1&s=170667a&w=0&k=20&c=I0lFQGUsIhKJiMi5HucrAZ12cGLJ515_JnZ5FGnJW4k=" )
imgOne.setAttribute("alt", "a picture of a pantry")
pantry.append(imgOne)
imgOne.style.width = "150px"



//create and append pantrychildOne div
const childOne = document.createElement("div")
childOne.classList.add("child")
//creat grandchildren (h1, ul, lis)
const childOneHeader = document.createElement("h3")
childOneHeader.textContent = "Beans"
const childOneUl = document.createElement("ul")
const aLiOne = document.createElement("li")
aLiOne.textContent = "Black"
const aLiTwo = document.createElement("li")
aLiTwo.textContent = "Kidney"
const aLiThree = document.createElement("li")
aLiThree.textContent = "Chickpea"
childOneUl.append(aLiOne, aLiTwo, aLiThree)
childOne.append(childOneHeader, childOneUl)
pantry.append(imgOne, childOne)



//create and append pantrychildTwo div
const childTwo = document.createElement("div")
childTwo.classList.add("child")
//creat grandchildren (h1, ul, li)
const childTwoHeader = document.createElement("h3")
childTwoHeader.textContent = "Rice"
const childTwoUl = document.createElement("ul")
const bLiOne = document.createElement("li")
bLiOne.textContent = "Brown"
const bLiTwo = document.createElement("li")
bLiTwo.textContent = "Wild"
const bLiThree = document.createElement("li")
bLiThree.textContent = "Jasmine"
//append list items to unordered list
childTwoUl.append(bLiOne, bLiTwo, bLiThree)
//append heading and list to child
childTwo.append(childTwoHeader, childTwoUl)
//append child to parent
pantry.append(childTwo)


//create and append pantryChildThree div
const childThree = document.createElement("div")
childThree.classList.add("child")
//creat grandchildren (h1, ul, li)
const childThreeHeader = document.createElement("h3")
childThreeHeader.textContent = "Seasonings"
const childThreeUl = document.createElement("ul")
const cLiOne = document.createElement("li")
cLiOne.textContent = "Salt"
const cLiTwo = document.createElement("li")
cLiTwo.textContent = "Pepper"
const cLiThree = document.createElement("li")
cLiThree.textContent = "Garlic Powder"
//append list items to unordered list
childThreeUl.append(cLiOne, cLiTwo, cLiThree)
//append heading and list to child
childThree.append(childThreeHeader, childThreeUl)
//append child to parent
pantry.append(childThree)


//fridge
const fridgeHeader = document.createElement("h2")
fridgeHeader.textContent = "Refrigerator"
const fridge = document.createElement("div")
fridge.setAttribute("id", "fridge")
fridge.classList.add("parent")
//create children for the fridge


//create and append image
const imgTwo = document.createElement("img")
imgTwo.setAttribute("src", "https://images.unsplash.com/photo-1606859191214-25806e8e2423?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVmcmlnZXJhdG9yfGVufDB8fDB8fHww" )
imgTwo.setAttribute("alt", "a picture of refrigerator")
fridge.append(imgTwo)
imgTwo.style.width = "150px"



//create and append ChildOne div
const fridgeChildOne = document.createElement("div")
fridgeChildOne.classList.add("child")
//create grandchildren (h1, ol, lis)
const fridgeChildOneHeader = document.createElement("h3")
fridgeChildOneHeader.textContent = "Protein"
const fridgeChildOneUl = document.createElement("ol")
const dLiOne = document.createElement("li")
dLiOne.textContent = "Tofu"
const dLiTwo = document.createElement("li")
dLiTwo.textContent = "Seitan"
const dLiThree = document.createElement("li")
dLiThree.textContent = "Avocados"
fridgeChildOneUl.append(dLiOne, dLiTwo, dLiThree)
fridgeChildOne.append(fridgeChildOneHeader, fridgeChildOneUl)
fridge.append(imgTwo, fridgeChildOne)



//create and append childTwo div
const fridgeChildTwo = document.createElement("div")
fridgeChildTwo.classList.add("child")
//creat grandchildren (h1, ol, li)
const fridgeChildTwoHeader = document.createElement("h3")
fridgeChildTwoHeader.textContent = "Fruits"
const fridgeChildTwoUl = document.createElement("ol")
const eLiOne = document.createElement("li")
eLiOne.textContent = "Strawberries"
const eLiTwo = document.createElement("li")
eLiTwo.textContent = "Blueberries"
const eLiThree = document.createElement("li")
eLiThree.textContent = "Rasberries"
const eLiFour = document.createElement("li")
eLiFour.textContent = "Grapes"
fridgeChildTwoUl.append(eLiOne, eLiTwo, eLiThree, eLiFour)
fridgeChildTwo.append(fridgeChildTwoHeader, fridgeChildTwoUl)
fridge.append(fridgeChildTwo)


//create and append childThree div
const fridgeChildThree = document.createElement("div")
fridgeChildThree.classList.add("child")
//creat grandchildren (h1, ol, li)
const fridgeChildThreeHeader = document.createElement("h3")
fridgeChildThreeHeader.textContent = "Vegetables"
const fridgeChildThreeUl = document.createElement("ol")
const fLiOne = document.createElement("li")
fLiOne.textContent = "Broccoli"
const fLiTwo = document.createElement("li")
fLiTwo.textContent = "Kale"
const fLiThree = document.createElement("li")
fLiThree.textContent = "Carrots"
fridgeChildThreeUl.append(fLiOne, fLiTwo, fLiThree)
fridgeChildThree.append(fridgeChildThreeHeader, fridgeChildThreeUl)
fridge.append(fridgeChildThree)



body.append(groceryList)
groceryList.append(groceryHeader, pantryHeader, pantry, fridgeHeader, fridge)


//styling grocery list
groceryHeader.style.color = "rgb(15, 176, 201)"
groceryHeader.style.backgroundColor = "blanchedalmond"

body.style.textAlign = "center"
body.style.border = "1px solid"
body.style.padding = "20px"

pantryHeader.style.textAlign = "left"
pantryHeader.style.backgroundColor = "gainsboro";
pantry.style.backgroundColor = "blanchedalmond";
pantry.style.padding = "10px"
fridgeHeader.style.textAlign = "left"
fridgeHeader.style.backgroundColor = "gainsboro";
fridge.style.backgroundColor = "blanchedalmond";
fridge.style.padding = "10px"