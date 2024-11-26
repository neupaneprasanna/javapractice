  //practice set 2
    // Question number 1: Use logical operators to find whether the age of a person lies between 10 and 20.
    // Question no. 2: Demonstrate the use of switch case statement in the javascript. 
    // Question number 3: write a javascript program to determine whether the numher is divisible by 2 and 3.
    // Question number 4: Print"you can drive" and "you can't drive" based on age being greater than 18 using ternary operators.
  
    alert("lets solve the question number 1.")
    console.log("question number 1")
    let age = prompt("enter your age")
    age = Number.parseInt(age);
    if(age>10 && age<20)
    {
      console.log("your age lies between 10 and 20.")
      alert("your age lies between 10 and 20.")
    }
    else
    {
      console.log("your age does't lies between 10 and 20")
      alert("your age does't lies between 10 and 20")
    }
  
  alert("let's solve the question number 2")
  console.log("question number 2")
  let age2 = prompt("what is your age")
age2 = Number.parseInt(age2)

  switch(age2){
    
    case 14:
        console.log("your age is special")
        alert("your age is special")
        break
    case 15:
        console.log("your age is special")
        alert("your age is special")
        break
    case 16:
        console.log("your age is special")
        alert("your age is special")
        break
    case 17:
        console.log("your age is special")
        alert("your age is special")
        break
    case 18:
        console.log("your age is special")
        alert("your age is special")
        break

        default:
            console.log("your age is not special")
            alert("your age is not special");
            break
  }